---
title: "Use Case: Fund Amount"
domain: cgcloud-rtr-dev-guide
topic: use-case-fund-amount
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.465Z
estimatedTokens: 659
keywords: [Case, Fund, Amount, stores, Salesforce, show, particular, category, brand, fetch, database, custom, data, sources, Prerequisites]
---

# Use Case: Fund Amount

> The Fund object stores the fund amount in Salesforce. To show a fund amount for a
    particular category or brand, fetch it from the Salesforce database by using custom data
    sources.

# Use Case: Fund Amount

The Fund object stores the fund amount in Salesforce. To show a fund amount for a particular category or brand, fetch it from the Salesforce database by using custom data sources.

## Prerequisites

1.  Create a KPI definition for the fund amount. For this KPI definition, ensure that the object scope is Account and it has the writeback feature enabled.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cgcloud_rtr_dev_guide)

    #### Note

    This KPI definition only provides a name for the external KPI. The Apex class defines how to input values in this KPI.

2.  Enter the name of the datasource table as Account Measure.
3.  Add the KPI to the Reporting KPI set that's used in the report.

## Report Configuration

Apart from defining RTRSalesforceMonthlyMeasures as an additional datasource in the report configuration, ensure that you add the newly created KPI to the list of measures.

```

```

## Apex Classes

The custom data sources are related to two base Apex classes. You can use both classes only for code-routing and not to perform any actual logic, queries, or calculations; this is because all reports share these classes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cgcloud_rtr_dev_guide)

#### Note

In RTR, integration users run both the Apex classes, not the user who opens the report. As a result, integration users must have access permissions to the used Apex classes.

-   **[TPM\_RTRReportingWrapper\_AMS (Base Class)](atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_class_tpm_rtrreportingwrapper_ams.htm)**
    TPM\_RTRReportingWrapper\_AMS is a base Apex class that receives the payload that's constructed by filter selection in the report. The payload contains the KPIs that are defined in the report, the customer, dates, and other important attributes. It then deserializes the payload into an object that can be used in all other related classes.
-   **[TPM\_RTRSalesforceMonthlyMeasures\_AMS (Base Class)](atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_class_rtrsalesforcemonthlymeasures_ams.htm)**
    TPM\_RTRSalesforceMonthlyMeasures\_AMS is one of the base classes that's used for code-routing and is required to retrieve the information by a Salesforce REST endpoint (/services/apexrest/RTRSalesforceMonthlyMeasures).
-   **[TPM\_RTRFunds\_AMS (The Logic Class)](atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_class_rtrfunds_ams.htm)**
    Use RTRSalesforceMonthlyMeasures as the datasource to execute the base classes by every report.

## Code Examples

```
{
"label": "Fund Amount",
"name": "myFndAmount"
},
```

## Related Topics

- TPM_RTRReportingWrapper_AMS (Base Class) (atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_class_tpm_rtrreportingwrapper_ams.htm)
- TPM_RTRSalesforceMonthlyMeasures_AMS (Base Class) (atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_class_rtrsalesforcemonthlymeasures_ams.htm)
- TPM_RTRFunds_AMS (The Logic Class) (atlas.en-us.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/tpm_rtr_class_rtrfunds_ams.htm)
