---
title: "Custom Objects for Retail Execution and Trade Promotion Management"
domain: retail-api
topic: custom-objects-for-retail-execution-and-trade-promotion-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:37.462Z
estimatedTokens: 2916
keywords: [Custom, Objects, Retail, Execution, Trade, Promotion, Management, consumer, goods, data, model, supports, TPM]
---

# Custom Objects for Retail Execution and Trade Promotion Management

> The consumer goods data model provides objects and fields that supports both RE and
  TPM.

# Custom Objects for Retail Execution and Trade Promotion Management

The consumer goods data model provides objects and fields that supports both RE and TPM.

-   **[cgcloud\_\_Account\_Condition\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_condition__c.htm)**
    Contains the details of the relationship between customer and the customer conditions. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Extension\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_extension__c.htm)**
    This object records account roles and further product-related attributes. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Manager\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_manager__c.htm)**
    This object stores the details of users who manage specific accounts in a particular function (ManagementType). This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Relationship\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_relationship__c.htm)**
    This object represents the relationship between two customer accounts. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Set\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_set__c.htm)**
    Represents the object for the creation of Customer Sets. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Set\_Account\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_set_account__c.htm)**
    Junction object between Customer and Customer Set. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Set\_Manager\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_set_manager__c.htm)**
    Custom object to store the relation between Customer Set and User. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_template__c.htm)**
    Stores the details of the account template object that's to be used for accounts. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Trade\_Org\_Hierarchy\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_trade_org_hierarchy__c.htm)**
    This object represents the details of the account hierarchy. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Org\_Unit\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_org_unit__c.htm)**
    Contains the details of the relationship between customer and the org unit. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Batch\_Run\_Status\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__batch_run_status__c.htm)**
    Keeps track of batch processes. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Batch\_Run\_Status\_Detail\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__batch_run_status_detail__c.htm)**
    Collects further batch monitoring details. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_CGCPS\_Service\_Settings\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__cgcps_service_settings__c.htm)**
    Use this custom setting to either enable or disable CGCPS service data mocking. With this setting, you can develop non-CGCPS service-enabled orgs. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Condition\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__condition_template__c.htm)**
    Stores the details of the condition template object. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Custom\_Permission\_User\_Role\_Mapping\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__custom_permission_user_role_mapping__c.htm)**
    This object assigns (Mapping) mobility user roles to permission sets. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Flatten\_Account\_Hierarchy\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__flatten_account_hierarchy__c.htm)**
    This object stores node hierarchy information for the Customer Segmentation functionality. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Product\_Assortment\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__product_assortment_template__c.htm)**
    Template for product assortments. Controls the behavior of the instances of this template. For example, if a business partner is to be specified (AccountMultiplicity). This table is dependent on the sales organization. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Product\_Category\_Share\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__product_category_share__c.htm)**
    This business class contains the product categories or brands that a user manages. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Product\_Hierarchy\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__product_hierarchy__c.htm)**
    Relation from a product (Child\_Product) to its parent. This relation is time-framed. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Product\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__product_template__c.htm)**
    Stores the details of the product template object that's used for products. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion__c.htm)**
    Promotion is an activity of a user that includes the definition of prices for a time segment. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Attachment\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_attachment__c.htm)**
    You can add pictures as attachments to a promotion. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Attachment\_Link\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_attachment_link__c.htm)**
    Relationship between promotion and promotion attachment. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_template__c.htm)**
    Template to create promotions. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Template\_Hierarchy\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_template_hierarchy__c.htm)**
    Object that helps create promotion hierarchies. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Template\_Tactic\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_template_tactic_template__c.htm)**
    Junction Object between Promotion Templates and Tactic Templates. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Sales\_Organization\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__sales_organization__c.htm)**
    This object stores the details of the Sales Organization. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Sales\_Organization\_User\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__sales_organization_user__c.htm)**
    This object stores the details of the relationship between a sales organization and a user. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Segmentation\_Rule\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__segmentation_rule__c.htm)**
    This object stores the details of the segmentation rule. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Segmentation\_Rule\_Def\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__segmentation_rule_def__c.htm)**
    Contains the available queries and its attributes to create segmentation rules. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Segmentation\_Rule\_Def\_Column\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__segmentation_rule_def_column__c.htm)**
    This object defines the query attributes of the Segmentation Rule Definition. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Segmentation\_Rule\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__segmentation_rule_template__c.htm)**
    This object contains information that configures the behavior for the associated segmentation rules. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_System\_Setting\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__system_setting__c.htm)**
    Custom setting that stores all system setting attributes as a key-value pair. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Trigger\_Setting\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__trigger_setting__c.htm)**
    Custom Setting, helper object that enables clients to disable certain triggers that are part of the managed package. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Tactic\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tactic__c.htm)**
    Configures the relation between a Promotion and a Tactic. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Tactic\_Product\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tactic_product__c.htm)**
    Junction object between Tactic and Product. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Tactic\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tactic_template__c.htm)**
    Template that controls the behavior of a tactic. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Transaction\_Log\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__transaction_log__c.htm)**
    This object contains all transaction log messages that are related to CG. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Update\_Activation\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__update_activation__c.htm)**
    This custom setting defines the sales org-specific update activation record to make sure that maintenance is only possible by using the Update Activation page. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_User\_Setting\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__user_setting__c.htm)**
    Object that's created to store user settings. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Validation\_Rules\_Setting\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__validation_rules_setting__c.htm)**
    Custom setting that manages various validation rules, such as granting bypass access. This object is available in API version 54.0 and later.

## Related Topics

- cgcloud__Account_Condition__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_condition__c.htm)
- cgcloud__Account_Extension__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_extension__c.htm)
- cgcloud__Account_Manager__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_manager__c.htm)
- cgcloud__Account_Relationship__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_relationship__c.htm)
- cgcloud__Account_Set__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_set__c.htm)
- cgcloud__Account_Set_Account__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_set_account__c.htm)
- cgcloud__Account_Set_Manager__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_set_manager__c.htm)
- cgcloud__Account_Template__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_template__c.htm)
- cgcloud__Account_Trade_Org_Hierarchy__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_trade_org_hierarchy__c.htm)
- cgcloud__Account_Org_Unit__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_org_unit__c.htm)
