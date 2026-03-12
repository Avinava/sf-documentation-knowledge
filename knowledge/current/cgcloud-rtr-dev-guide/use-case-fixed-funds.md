---
title: "Use Case: Fixed Funds"
domain: cgcloud-rtr-dev-guide
topic: use-case-fixed-funds
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.461Z
estimatedTokens: 1367
keywords: [Case, Fixed, Funds, custom, datasource, include, fund, KPI, Real, Time, Report, RTR, result, aggregated, category]
---

# Use Case: Fixed Funds

> In this use case, the custom datasource is used to include a fixed fund KPI in Real
    Time Report (RTR). As a result, the fixed funds are aggregated on both category and brand
    levels. One visualization option is this report, in which a brand value is only available for
    one brand. However, this value is not summed up to the category level. For the calculation of
    category levels, the data that's stored on Salesforce and Processing Services is
    used.

# Use Case: Fixed Funds

In this use case, the custom datasource is used to include a fixed fund KPI in Real Time Report (RTR). As a result, the fixed funds are aggregated on both category and brand levels. One visualization option is this report, in which a brand value is only available for one brand. However, this value is not summed up to the category level. For the calculation of category levels, the data that's stored on Salesforce and Processing Services is used.

## Prerequisites

1.  Create a KPI definition for the fund amount. For this KPI definition, ensure that the object scope is Account and it has the writeback feature enabled.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cgcloud_rtr_dev_guide)

    #### Note

    This KPI definition only provides a name for the external KPI. The Apex class defines how to enter values in this KPI.

2.  Enter the name of the datasource table as Account Measure.
3.  Add the KPI to the Reporting KPI set that's used in the report.

1.  Create new KPI definitions for each use case, such as Fixed RDF Brand. Ensure that the object scope of these KPI definitions is Account.
2.  Enter the name of the datasource table as Account Measure.
3.  Define these KPI definitions in the report configuration
4.  Create a custom metadata type, TPM\_RTRRouting\_\_mdt, which is linked to the KPI definition, sales organization, fund template, and KPI levels.

    | Field API Name | Type | Description |
    | --- | --- | --- |
    | Fund_Template__c | Text | Determines the KPI to which the fixed funds are to be attributed. For example, All Transaction Row Records, in which the target fund has the RDF Brand Fund that belongs to the Fixed RDF KPI. |
    | KPI_Definition__c | Text | Name of the Fixed Funds KPI (such as FXDR and FTDR) that determines the data which should be returned from the logic in the Apex class. |
    | KPI_Level__c | Text | Fixed funds can be stored on different levels (currently, category and brand). This is needed to determine the method that should be run. (category and brand use different logic.) |
    | Sales_Org__c | Text | Sales organization to which the record belongs. |

5.  On the cgcloud\_\_Fund\_Transaction\_Row\_\_c object, add a new field.

    | Field API Name | Type | Description | Formula |
    | --- | --- | --- | --- |
    | TPM_RTRAmount__c | Formula (Double) | Fixed Funds for Brands are calculated based on the value of the Amount field on the transaction record. Depending on the transaction type (withdraw or deposit), the sum of the aggregated amounts either increases (deposit) or decreases (withdraw).The formula field turns the amounts of records with transaction type = deposit to negative values. Instead of aggregating the amount field, you can aggregate the TPM_RTR_Amount__c field. | IF(ISPICKVAL( cgcloud__Transaction_Type__c , 'Withdraw'), cgcloud__Amount__c * (-1), cgcloud__Amount__c ) |

6.  On the cgcloud\_\_Fund\_Transaction\_Header\_\_c object, add a new field.

    | Field API Name | Type | Description |
    | --- | --- | --- |
    | TPM_Product__c | Lookup(Product) | Used to link products to the Multi-Fund Transaction object. |

7.  On the cgcloud\_\_Fund\_Template\_\_c object, add a new field.

    | Field API Name | Type | Description |
    | --- | --- | --- |
    | TPM_RTRRoutingFundType__c | Picklist | Used to filter fund template records. The picklist values of this field are fund template record names. |

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cgcloud_rtr_dev_guide)

    #### Note

    Ensure that you create new fund templates for each case, such as RDF Brand Fund. Maintain the newly created TPM\_RTRRoutingFundType\_\_c field on the fund template.


## Apex Classes

Custom data sources are related to two base Apex classes. Because all reports share these classes, you can use both classes only for code-routing, not to perform any actual logic, queries, or calculations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cgcloud_rtr_dev_guide)

#### Note

In RTR, the integration user runs both Apex classes, not the user who opens the report. As a result, the integration user must have access permissions for the used Apex classes.

-   **[TPM\_RTRReportingWrapper\_AMS (Base Class)](atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_class_tpm_rtrreportingwrapper2_ams.htm)**
    TPM\_RTRReportingWrapper\_AMS is a base class that contains the structures to load the input. This class contains the list of KPIs and filter criteria that you chose in the report—selected time frame or the list of customers and products. Depending on various use cases, the payload method can contain different attributes.
-   **[TPM\_RTRSalesforceMonthlyMeasures\_AMS (Base Class)](atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_class_rtrsalesforcemonthlymeasures2_ams.htm)**
    TPM\_RTRSalesforceMonthlyMeasures\_AMS is the second base class that's used for code-routing and is required to retrieve the information by a Salesforce REST endpoint (/services/apexrest/RTRSalesforceMonthlyMeasures).
-   **[TPM\_RTRFixedFunds\_AMS (The Logic Class)](atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_class_tpm_rtrfixedfunds2_ams.htm)**
    The actual logic is defined in this class. The benefit of routing to a separate third class is that the code runs only when needed.

## Related Topics

- TPM_RTRReportingWrapper_AMS (Base Class) (atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_class_tpm_rtrreportingwrapper2_ams.htm)
- TPM_RTRSalesforceMonthlyMeasures_AMS (Base Class) (atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_class_rtrsalesforcemonthlymeasures2_ams.htm)
- TPM_RTRFixedFunds_AMS (The Logic Class) (atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_class_tpm_rtrfixedfunds2_ams.htm)
