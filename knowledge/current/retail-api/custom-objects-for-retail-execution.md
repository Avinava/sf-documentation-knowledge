---
title: "Custom Objects for Retail Execution"
domain: retail-api
topic: custom-objects-for-retail-execution
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:37.456Z
estimatedTokens: 8392
keywords: [Custom, Objects, Retail, Execution, consumer, goods, data, model, support]
---

# Custom Objects for Retail Execution

> The consumer goods data model provides objects and fields to support Retail Execution
  (RE).

# Custom Objects for Retail Execution

The consumer goods data model provides objects and fields to support Retail Execution (RE).

To learn about the custom objects that are common between Retail Execution and Trade Promotion Management, refer to [Custom Objects for Retail Execution and Trade Promotion Management](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_236_tpm_custom_objects.htm "The consumer goods data model provides objects and fields that supports both RE and TPM.")

-   **[cgcloud\_\_Account\_Receivable\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_receivable__c.htm)**
    Holds the customer related information regarding invoices to be paid and debit and credit notes. This object is available in API version 55.0 and later.
-   **[cgcloud\_\_Account\_Sales\_Data\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_sales_data__c.htm)**
    Contains the information of the sales of a customer for two consecutive years. Access of the object provided to the System Admin. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Specific\_Product\_Condition\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_specific_product_condition__c.htm)**
    Holds the relation between a customer and the condition template. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Task\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_task__c.htm)**
    This object represents the details of the customer task (customer issue). This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Task\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_task_template__c.htm)**
    Represents the details of the customer task template to be used for customer tasks. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Account\_Visit\_Setting\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_visit_setting__c.htm)**
    This object stores the settings for the calls of a user based on a customer. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Asset\_Audit\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__asset_audit__c.htm)**
    Represents the details of an asset survey. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Asset\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__asset_template__c.htm)**
    An asset is a physical element that has a certain value which a manufacturer can place at a customer's location (retailer, bar, hotel, shop, and so on), and it can be associated to a POS (such as a shelf, cooler, fridge, and more). This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Approval\_Code\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__approval_code__c.htm)**
    Represents the attributes for approval code of users. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Batch\_Last\_Successful\_Run\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__batch_last_successful_run__c.htm)**
    Keeps track of the last successful runs. This object is available in API version 55.0 and later.
-   **[cgcloud\_\_Batch\_Process\_Configuration\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__batch_process_configuration__c.htm)**
    Custom setting that captures the configuration of the batch process. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Color\_Schema\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__color_schema__c.htm)**
    Defines various Sales Organization-dependent property-based color schemes for the Trade Calendar. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_BO\_API\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__bo_api__c.htm)**
    This table stores the header record of Business Object APIs. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_BO\_API\_Entity\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__bo_api_entity__c.htm)**
    This table stores the entity definitions of Business Object APIs. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_BO\_API\_Output\_Entity\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__bo_api_output_entity__c.htm)**
    This table stores the output entities of the Business Object API. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_BO\_API\_Step\_Input\_Structure\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__bo_api_step_input_structure__c.htm)**
    This table stores the input structure configuration that the business object API workflow step expects. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_BO\_API\_Transaction\_Log\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__bo_api_transaction_log__c.htm)**
    This object stores information about Business Object API Transaction Log, which is a collection of one or more promotions that should be created or updated under the same name via the Promotion BO Creation API. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_BO\_API\_Workflow\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__bo_api_workflow__c.htm)**
    This table stores the workflows that are defined for the Business Object. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_BO\_API\_Workflow\_Entity\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__bo_api_workflow_entity__c.htm)**
    This object stores the entities that Business Object API Workflows use. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_BO\_API\_Workflow\_Step\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__bo_api_workflow_step__c.htm)**
    This table stores the definitions of the workflow step. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_BO\_API\_Workflow\_Workflow\_Step\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__bo_api_workflow_workflow_step__c.htm)**
    This table stores the junction object to identify the workflow steps that apply for each workflow. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Consider\_Default\_SalesOrg\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__consider_default_salesorg__c.htm)**
    Use this object to assign Global Sales Org. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_CP\_Calculation\_Schema\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__cp_calculation_schema__c.htm)**
    The calculation schema object is used for complex pricing. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_CP\_Calculation\_Schema\_Determination\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__cp_calculation_schema_determination__c.htm)**
    The calculation schema determination object is used to determine the rule based on order template pricing type and customer pricing type. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_CP\_Calculation\_Schema\_Step\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__cp_calculation_schema_step__c.htm)**
    This object stores the details of the relationship between calculation schema and pricing condition template that's used for the calculation steps that belong to a calculation schema. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_CP\_Key\_Attribute\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__cp_key_attribute__c.htm)**
    The key attribute object is used to determine the complex pricing condition. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_CP\_Key\_Type\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__cp_key_type__c.htm)**
    The key type object is used in the complex pricing search strategy. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_CP\_Pricing\_Condition\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__cp_pricing_condition__c.htm)**
    This object holds the details of the pricing condition object that the Penny Perfect Pricing functionality uses. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_CP\_Pricing\_Condition\_Scale\_Stage\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__cp_pricing_condition_scale_stage__c.htm)**
    Staging table for condition scales that complex pricing uses. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_CP\_Pricing\_Condition\_Stage\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__cp_pricing_condition_stage__c.htm)**
    Staging table for conditions that complex pricing uses. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_CP\_Pricing\_Condition\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__cp_pricing_condition_template__c.htm)**
    The pricing condition template object is used to define what is to be calculated in a step of a calculation schema. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_CP\_Search\_Strategy\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__cp_search_strategy__c.htm)**
    The search strategy object is used to search for complex pricing conditions. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_CP\_Search\_Strategy\_Step\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__cp_search_strategy_step__c.htm)**
    This object stores the details of the relationship between search strategy and key type, which is used to search for complex pricing strategy steps. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Data\_Type\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__data_type__c.htm)**
    Stores the flexible data type. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Data\_Type\_Option\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__data_type_option__c.htm)**
    Stores the item (picklist item) of a flexible data type. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Field\_Sales\_Activity\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__field_sales_activity__c.htm)**
    Stores the details of the field sales activity object. Field Sales Activity (FSA) covers a set of job definition lists. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Flatten\_Org\_Unit\_Hierarchy\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__flatten_org_unit_hierarchy__c.htm)**
    This object stores node org unit hierarchy information for the Customer Segmentation functionality. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Historic\_Product\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__historic_product__c.htm)**
    Junction object between the Customer (Account) and Product (Product\_\_c) objects. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Inventory\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__inventory__c.htm)**
    Stores the details of the inventory object. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Inventory\_Control\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__inventory_control_template__c.htm)**
    Stores the details of the inventory control template that's to be used for inventories. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Inventory\_Transaction\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__inventory_transaction__c.htm)**
    Captures Inventory Transaction records. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Inventory\_Transaction\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__inventory_transaction_template__c.htm)**
    Stores the details of the inventory control template that's to be used for inventory control transactions. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Job\_Definition\_List\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__job_definition_list__c.htm)**
    Stores the set of questions or surveys that are to be carried out in the respective call and contains further relevant configurations. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Job\_Definition\_List\_Account\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__job_definition_list_account__c.htm)**
    Stores the details of the relationship between job definition list and customer. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Job\_Definition\_List\_Account\_Set\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__job_definition_list_account_set__c.htm)**
    Junction object between Job Definition List and Customer Set. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Job\_Definition\_List\_Product\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__job_definition_list_product__c.htm)**
    Stores the details of the relationship between the Job Definition List and Product related lists. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Job\_Definition\_List\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__job_definition_list_template__c.htm)**
    Template that controls the behavior of Job definition lists. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Job\_Definition\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__job_definition_template__c.htm)**
    Stores the definition of the questions or product surveys that are available in the system. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Job\_DL\_Job\_Definition\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__job_dl_job_definition_template__c.htm)**
    This object stores the questions or surveys that are used in the job definition list. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Job\_DL\_Template\_Def\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__job_dl_template_def_template__c.htm)**
    Stores the list of job definition templates in the Job definition list template. When creating a job definition list based on this template, the assigned job definition templates are used to preset job definitions. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Job\_List\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__job_list__c.htm)**
    Stores the job lists that are generated from non-standard job definition lists. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Job\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__job_template__c.htm)**
    Stores whether a job is to be considered as either a task, a question, a product related question (survey), or any other object related job like capturing orders. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Listing\_Classification\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__listing_classification__c.htm)**
    Holds the information about the listing modules and the product category for a customer. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Listing\_Module\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__listing_module__c.htm)**
    This object stores information about listing modules for a product assortment. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Mobile\_Link\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__mobile_link__c.htm)**
    Deep Link Object. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Order\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__order__c.htm)**
    Stores the header details of the order entry. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Order\_Item\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__order_item__c.htm)**
    Stores the details of the order item object. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Order\_Item\_Inventory\_Transaction\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__order_item_inventory_transaction__c.htm)**
    Holds the association details for the order item template, the inventory control template, and the inventory transaction template. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Order\_Item\_Order\_Template\_Association\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__order_item_order_template_association__c.htm)**
    Holds the association of order item templates with order template. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Order\_Item\_Rule\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__order_item_rule__c.htm)**
    Defines the rules handled by the pricing engine during the complex pricing calculation. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Order\_Item\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__order_item_template__c.htm)**
    This template controls the behavior of an Order Item Template. For example, OrderEntry is an important template, which allows a sales document to behave like an order entry. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Order\_Payment\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__order_payment__c.htm)**
    Holds the attributes of the Order Payment object. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Order\_Payment\_Inventory\_Transaction\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__order_payment_inventory_transaction__c.htm)**
    Holds the association details for the order payment template, the inventory template, and the inventory transaction template. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Order\_Payment\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__order_payment_template__c.htm)**
    Holds the attributes of the order payment template. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Order\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__order_template__c.htm)**
    Template that controls the behavior of a sales document. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Order\_Template\_Order\_Payment\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__order_template_order_payment_template__c.htm)**
    Holds the association details for the order template and the order payment template. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Order\_Template\_Product\_Selector\_Group\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__order_template_product_selector_group__c.htm)**
    Stores the relation between Order Template and Product selection. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Org\_Unit\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__org_unit__c.htm)**
    Stores the details of the Organization unit object that defines a manufacturer's organizational structure. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Org\_Unit\_Hierarchy\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__org_unit_hierarchy__c.htm)**
    Stores the details of the relationship between two org units. It's typically used for the sales org unit hierarchy. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Org\_Unit\_User\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__org_unit_user__c.htm)**
    Stores the details of the relationship between the organization unit and the user. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Organization\_Setting\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__organization_setting__c.htm)**
    This object enables or disables the role hierarchy in a call module. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Package\_Setting\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__package_setting__c.htm)**
    This is a custom setting that helps you manage dynamic namespaces. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Picklist\_Toggle\_Addon\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__picklist_toggle_addon__c.htm)**
    This is a non-data object. It's purely used to define different picklists, which are retail mobile only or that don't have any real corresponding field in the RCG back end. These picklists are then mapped with the Picklist-Toggle-Mapping concepts in Sync Package. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_POS\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__pos__c.htm)**
    Stores the details of the POS object. A Point of Sale (POS) stores the information about a place in the customer's premises at which goods are sold to consumers. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_POS\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__pos_template__c.htm)**
    Stores the details of the POS template object that's to be used for POS (Point of Sale). This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Product\_Condition\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__product_condition__c.htm)**
    This object uses product-specific conditions. For example, specifying product prices that are relevant for simple order value calculation. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Product\_Listing\_Module\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__product_listing_module__c.htm)**
    Add products to Product Assortment with listing modules. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Product\_Assortment\_Order\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__product_assortment_order_template__c.htm)**
    Stores the details of the relationship between product assortment and order template. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Product\_Assortment\_Store\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__product_assortment_store__c.htm)**
    The object holds the customers (stores) for which the Product assortment (authorization list) is valid. The store assignment is taken from the trade org hierarchy by the batch process that represents the listing finding. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Hurdle\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_hurdle__c.htm)**
    This object stores the restriction that must be satisfied to apply the rewards. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Hurdle\_Expression\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_hurdle_expression__c.htm)**
    New object that stores the information about an expression. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Reward\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_reward__c.htm)**
    This object stores the details of rewards that are assigned to a reward group. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Reward\_Group\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_reward_group__c.htm)**
    This object holds the details of the reward group that's assigned to a promotion. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Reward\_Product\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_reward_product__c.htm)**
    This object stores the details of the product that's assigned to a promotion reward. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Sales\_Folder\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_sales_folder__c.htm)**
    Junction object between Promotion and Sales folder. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Promotion\_Store\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__promotion_store__c.htm)**
    This object holds the relation for the customer promotion hierarchy. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Sales\_Folder\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__sales_folder__c.htm)**
    This object contains the attributes that are associated with the Sales Folder. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Sales\_Folder\_Sell\_Sheet\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__sales_folder_sell_sheet__c.htm)**
    This object stores the details of the relationship between the sales folder and sell sheet. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Sales\_Folder\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__sales_folder_template__c.htm)**
    This object contains the attributes that are associated with the Sales Folder Template. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Sell\_Sheet\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__sell_sheet__c.htm)**
    This object contains the attributes that are associated with the sell sheet to be used on the Sales folder. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Signature\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__signature__c.htm)**
    This object stores the attributes for signatures. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Signature\_Attribute\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__signature_attribute__c.htm)**
    Entity that stores the attributes and values for signatures. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Signature\_Flow\_Step\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__signature_flow_step__c.htm)**
    This object stores the details of the signature flow steps that are used in a signature template. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Signature\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__signature_template__c.htm)**
    Stores the details of the signature template object that's used for signature flow steps. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Substitution\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__substitution__c.htm)**
    The use case stores the details of the substitute object that specifies the basis of a substitution depending on a substitution period and user. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_System\_Number\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__system_number__c.htm)**
    This object specifies the number definition that's used for number generation on CAS OnPremise Mobility. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_System\_Number\_Last\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__system_number_last__c.htm)**
    Last used number of a specific number type and device. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_System\_Number\_Segment\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__system_number_segment__c.htm)**
    Segment of the number definition. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Trip\_List\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__trip_list__c.htm)**
    Use Trip List to plan visits based on a predefined sequence of customers. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Trip\_List\_Account\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__trip_list_account__c.htm)**
    The object stores the association between a trip list and a customer. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Unit\_of\_Measure\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__unit_of_measure__c.htm)**
    Stores the details of the units of measure (logistic unit) of a product. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_User\_Accountable\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__user_accountable__c.htm)**
    Represents a Sales Rep or Supervisor or other Retail Execution user who is accountable for a Retail Execution business process. This object is available in API version 55.0 and later.
-   **[cgcloud\_\_User\_Document\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__user_document__c.htm)**
    Stores the details of the daily report object. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_User\_Document\_Activity\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__user_document_activity__c.htm)**
    Stores the details of the relationship between the daily report and user activity. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_User\_Document\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__user_document_template__c.htm)**
    Stores the details of the daily report template, which is to be used for daily reports. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_User\_Document\_Template\_Activity\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__user_document_template_activity__c.htm)**
    Stores the details of the relationship between the daily report template and user activity. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Visit\_Job\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__visit_job__c.htm)**
    This object contains answered questions and product surveys (jobs). This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Visit\_Template\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__visit_template__c.htm)**
    Template that describes the basic call behavior. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Warehouse\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__warehouse__c.htm)**
    Stores the details of the warehouse object. An organizational segmentation for the purpose of maintaining materials that are stored in different places. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Warehouse\_Product\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__warehouse_product__c.htm)**
    Stores the relationship between a warehouse and a product. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Warehouse\_User\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__warehouse_user__c.htm)**
    Stores the details of the relationship between a warehouse and a user. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Workflow\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__workflow__c.htm)**
    Stores the attributes of the workflow. This object is available in API version 54.0 and later.
-   **[cgcloud\_\_Workflow\_State\_Transition\_\_c](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__workflow_state_transition__c.htm)**
    Stores the details of the workflow state transition. This object is available in API version 54.0 and later.

## Related Topics

- Custom Objects for Retail Execution and Trade Promotion Management (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_236_tpm_custom_objects.htm)
- cgcloud__Account_Receivable__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_receivable__c.htm)
- cgcloud__Account_Sales_Data__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_sales_data__c.htm)
- cgcloud__Account_Specific_Product_Condition__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_specific_product_condition__c.htm)
- cgcloud__Account_Task__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_task__c.htm)
- cgcloud__Account_Task_Template__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_task_template__c.htm)
- cgcloud__Account_Visit_Setting__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__account_visit_setting__c.htm)
- cgcloud__Asset_Audit__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__asset_audit__c.htm)
- cgcloud__Asset_Template__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__asset_template__c.htm)
- cgcloud__Approval_Code__c (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_cgcloud__approval_code__c.htm)
