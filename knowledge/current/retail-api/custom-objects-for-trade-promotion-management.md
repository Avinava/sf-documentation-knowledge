---
title: "Custom Objects for Trade Promotion Management"
domain: retail-api
topic: custom-objects-for-trade-promotion-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.442Z
estimatedTokens: 3790
keywords: [Custom, Objects, Trade, Promotion, Management, Consumer, Goods, Cloud, data, model, support, TPM]
---

# Custom Objects for Trade Promotion Management

> The Consumer Goods Cloud data model provides objects and fields to support Trade
  Promotion Management (TPM).

# Custom Objects for Trade Promotion Management

The Consumer Goods Cloud data model provides objects and fields to support Trade Promotion Management (TPM).

To learn about the custom objects that are common between Retail Execution and Trade Promotion Management, refer to [Custom Objects for Retail Execution and Trade Promotion Management](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_236_tpm_custom_objects.htm "The consumer goods data model provides objects and fields that supports both RE and TPM.")

-   **[cgcloud\_\_Account\_Sub\_Account\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_sub_account__c.htm)**
    Defines the account to sub-account relationship. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Plan\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_plan__c.htm)**
    Contains the details of the account data for one planning account, one business year and one or multiple categories. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Plan\_Category\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_plan_category__c.htm)**
    Categories of the account plan including the manual inputs. Categories can be assigned to an account plan. A category can only be assigned to one account/business year combination. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Plan\_User\_Filter\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_plan_user_filter__c.htm)**
    Contains the filter selections of a user for a planning account. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Product\_Profile\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_product_profile__c.htm)**
    This object stores statistical profiles that indicate the distribution of weekly data between a customer and category. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Auto\_Number\_Sequence\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__auto_number_sequence__c.htm)**
    Stores information about the numbered index of the next transaction log record. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Business\_Year\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__business_year__c.htm)**
    This object stores the attributes of the Business Year. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Condition\_Search\_Group\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__condition_search_group__c.htm)**
    Holds the attributes of Condition Search Group. This object is available in API version 55.0 and later.
-   **[cgcloud\_\_Condition\_Search\_Rule\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__condition_search_rule__c.htm)**
    Holds the attributes of Condition Search Rule. This object is available in API version 55.0 and later.
-   **[cgcloud\_\_Custom\_Period\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__custom_period__c.htm)**
    This object stores the attributes of the custom period. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Custom\_Calendar\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__custom_calendar__c.htm)**
    This object stores the attributes of the custom calendar. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Fund\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__fund__c.htm)**
    A fund is the amount of money that's given to an employee for a special reason during a specific business period. This money is used to pay special activities such as promotion campaigns. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Fund\_Product\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__fund_product__c.htm)**
    A Fund object can be linked to multiple brands or categories based on the fund template settings. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Fund\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__fund_template__c.htm)**
    Template for the creation of a Fund. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Fund\_Transaction\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__fund_transaction__c.htm)**
    Holds the fund transaction details. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Fund\_Transaction\_Header\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__fund_transaction_header__c.htm)**
    Fund Transaction Header object facilitates the creation of multiple fund transactions in either a multiple source or target fund business scenario. This object dictates key fields such as the fund transaction template. The source or target funds for the fund transaction records to be created are based on transaction types such as Transfer, drawback, and more. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Fund\_Transaction\_Row\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__fund_transaction_row__c.htm)**
    Transaction rows for the funds. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Fund\_Transaction\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__fund_transaction_template__c.htm)**
    Template for the creation of a transaction for the Fund. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_KPI\_Definition\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__kpi_definition__c.htm)**
    Contains the description of a single measure. The fields of the table can be derived from the current KPI\_Set .json file. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_KPI\_Map\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__kpi_map__c.htm)**
    Holds the information about the KPI Map configuration. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_KPI\_Set\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__kpi_set__c.htm)**
    This table contains information about KPI Set Configuration. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_KPI\_Set\_KPI\_Definition\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__kpi_set_kpi_definition__c.htm)**
    Junction object between KPI Definition and KPI Definition Set. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Payment\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__payment_template__c.htm)**
    Stores the details of the payment template that's to be used for payments. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Payment\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__payment__c.htm)**
    This object stores the value that retailers expect as compensation for running promotions, which are executed by using tactics. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Payment\_External\_Reference\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__payment_external_reference__c.htm)**
    This object contains the hyperlinks that are related to a payment record. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Payment\_Tactic\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__payment_tactic__c.htm)**
    This object represents the relationship between Fund and Payment Tactic junction objects. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Payment\_Tactic\_Fund\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__payment_tactic_fund__c.htm)**
    This object stores the relationship between the Fund and Payment Tactic junction objects. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Payment\_Tactic\_Product\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__payment_tactic_product__c.htm)**
    This object contains payment tactic products and assigned values at the LDP level or at the level that the project defines as payment product level. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Payment\_Tactic\_Product\_Manual\_Input\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__payment_tactic_product_manual_input__c.htm)**
    Stores manual inputs for payment tactic-specific manual inputs. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Product\_Part\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__product_part__c.htm)**
    Stores the details of the relationship between two products. Describes which and how many products (ChildPKey) are assembled into a parent product (ParentPKey). In comparison to a product assortment, the result is a real product. This relation is only used as information; it can't be used to define a set of products to be used in other applications. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Product\_Assortment\_Product\_Share\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__product_assortment_product_share__c.htm)**
    This object stores the details of categories that are assigned to a Product assortment. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Calculation\_Server\_Offset\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_calculation_server_offset__c.htm)**
    Stores the time range during which the server (Offplatform) calculates a Promotion. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Product\_Share\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_product_share__c.htm)**
    This object holds the details of categories that are assigned to a promotion. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Push\_Status\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_push_status__c.htm)**
    Contains for each push process an entry that contains the status and statistics for the push. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Rate\_Based\_Funding\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__rate_based_funding__c.htm)**
    This object stores general information along with metadata that's associated with the RBF Template from which it was created. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_RBF\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__rbf_template__c.htm)**
    Creation template for Rate-based Funding (RBF) records. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_RBF\_Category\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__rbf_category__c.htm)**
    Junction object between Rate Based Funding and Product for driving RBF and Product association. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_RBF\_Product\_Manual\_Input\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__rbf_product_manual_input__c.htm)**
    This object represents the junction between Rate-based Funding and Product. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_RTR\_Report\_Configuration\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__rtr_report_configuration__c.htm)**
    This object contains Real Time Report (RTR) Configurations. One record defines the data that's to be loaded for a report and what or how it gets shown in a declarative manner. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Smart\_UI\_Lightning\_Settings\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__smart_ui_lightning_settings__c.htm)**
    Internal Object contains Smart UI configurations. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Tactic\_Fund\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tactic_fund__c.htm)**
    This object stores the relationship between the Fund and Payment Tactic junction objects. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Tactic\_Condition\_Creation\_Definition\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tactic_condition_creation_definition__c.htm)**
    Holds the details of tactic condition creation definition. This object is available in API version 55.0 and later.
-   **[cgcloud\_\_Tactic\_Product\_Condition\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tactic_product_condition__c.htm)**
    Use this object to store the internal conditions that are generated out of promotions. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Tactic\_Template\_Cond\_Creation\_Def\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tactic_template_cond_creation_def__c.htm)**
    Contains the configuration of condition creation definitions that will be generated for the related tactic. This object is available in API version 55.0 and later.
-   **[cgcloud\_\_Tactic\_Template\_Fund\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tactic_template_fund_template__c.htm)**
    Junction object between tactic template and fund template. This object defines the valid fund types for the given tactic template. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_UI\_Contract\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__ui_contract__c.htm)**
    This object contains the contract information for templates that are used in the smart UI. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_User\_View\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__user_view__c.htm)**
    This object is a User and View relation junction object. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_View\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__view__c.htm)**
    This object stores the filter criteria for the trade calendar. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Week\_Day\_Share\_Profile\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__week_day_share_profile__c.htm)**
    Contains statistical profiles of the distribution of weekly data among different days of a week. This object is available in API version 54.0 and later.

## Related Topics

- Custom Objects for Retail Execution and Trade Promotion Management (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_236_tpm_custom_objects.htm)
- cgcloud__Account_Sub_Account__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_sub_account__c.htm)
- cgcloud__Account_Plan__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_plan__c.htm)
- cgcloud__Account_Plan_Category__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_plan_category__c.htm)
- cgcloud__Account_Plan_User_Filter__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_plan_user_filter__c.htm)
- cgcloud__Account_Product_Profile__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_product_profile__c.htm)
- cgcloud__Auto_Number_Sequence__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__auto_number_sequence__c.htm)
- cgcloud__Business_Year__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__business_year__c.htm)
- cgcloud__Condition_Search_Group__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__condition_search_group__c.htm)
- cgcloud__Condition_Search_Rule__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__condition_search_rule__c.htm)
