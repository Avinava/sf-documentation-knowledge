---
title: "Standard Objects for Retail Execution"
domain: retail-api
topic: standard-objects-for-retail-execution
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:40.674Z
estimatedTokens: 2437
keywords: [Standard, Objects, Retail, Execution, consumer, goods, data, model, support]
---

# Standard Objects for Retail Execution

> The consumer goods data model provides objects and fields to  support retail
  execution.

# Standard Objects for Retail Execution

The consumer goods data model provides objects and fields to support retail execution.

-   **[Account](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_account.htm)**
    Standard and custom fields extend the standard Account object for use in Consumer Goods Cloud to represent an individual account, which is an company or person involved with your business, such as customers, competitors, and partners. This object is available in API version 55.0 and later.
-   **[Asset](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_asset.htm)**
    Standard and custom fields extend the standard Asset object in Consumer Goods Cloud to represent an item of commercial value, such as a product sold by your company or a competitor, that a customer has purchased. This object is available in API version 55.0 and later.
-   **[AssessmentIndicatorDefinition](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmentindicatordefinition.htm)**
    Define parameters that act as markers of compliance for retail tasks to compare target and actual values. This object is available in API version 47.0 and later.
-   **[AssessmentIndDefinedValue](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmentinddefinedvalue.htm)**
    Stores the list of acceptable values which are defined as part of assessment indicator definition for a single and multi select question. This object is available in API version 49.0 and later.
-   **[AssessmentIndValue](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmentindvalue.htm)**
    Stores the list of target or captured values which are defined as part of assessment indicator definition for a single and multi select question. This object is available in API version 49.0 and later.
-   **[AssessmentTask](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmenttask.htm)**
    Perform activities such as planogram check, inventory check, promotion check, in-store survey, or custom task in stores to capture information. This object is available in API version 47.0 and later.
-   **[AssessmentTaskContentDocument](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmenttaskcontentdocument.htm)**
    Associate content documents to visits, tasks, promotions, or planograms. This object is available in API version 47.0 and later.
-   **[AssessmentTaskDefinition](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmenttaskdefinition.htm)**
    Associate an assessment task with an assessment indicator definition. This object is available in API version 48.0 and later.
-   **[AssessmentTaskIndDefinition](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmenttaskinddefinition.htm)**
    Associate an assessment indicator definition with an assessment task definition.This object is available in API version 48.0 and later.
-   **[AssessmentTaskOrder](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmenttaskorder.htm)**
    Define an order activity that the sales rep can perform during a visit to the stores. This object is available in API version 47.0 and later.
-   **[Assortment](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assortment.htm)**
    Represents a list of products that are eligible for sale in a store. This object is available in API version 47.0 and later.
-   **[AssortmentProduct](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assortment_product.htm)**
    Associate products to an assortment. This object is available in API version 47.0 and later.
-   **[DeliveryTask](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_deliverytask.htm)**
    Represents information about shipments and orders to be delivered to a store in a visit. This object is available in API version 50.0 and later.
-   **[InStoreLocation](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_instore_location.htm)**
    Create locations within a retail store’s layout such as aisles, shelves, or backrooms. This object is available in API version 47.0 and later.
-   **[Operatinghours](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_operatinghours.htm)**
    Standard and custom fields extend the standard Operating hours object in Consumer Goods Cloud to represent the hours in which a service territory, service resource, or account is available for work. This object is available in API version 55.0 and later.
-   **[OtherComponentTask](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_othercomponenttask.htm)**
    Represents the details of a component task performed in a visit. A component task allows customers to launch components from the task framework. This object is available in API version 50.0 and later.
-   **[Product2](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_product2_custom_objects.htm)**
    Represents a product that your company sells. Custom fields extend the standard Product object for use in Consumer Goods Cloud. This object is available in API version 55.0 and later.
-   **[Promotion](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_promotions.htm)**
    Create promotional activities that are either part of a campaign or isolated targeted promotions to run at retail stores. This object is available in API version 47.0 and later.
-   **[PromotionChannel](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_promotion_channel.htm)**
    Associate a promotion with a store, store group, or an account. This object is available in API version 47.0 and later.
-   **[PromotionProduct](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_promotion_product.htm)**
    Associate a promotion with a product. This object is available in API version 47.0 and later.
-   **[PromotionProductCategory](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_promotion_productcategory.htm)**
    Associate a promotional activity with a product category. This object is available in API version 47.0 and later.
-   **[RetailLocationGroup](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_retaillocationgroup.htm)**
    Group retail stores based on shared features, such as size, location, part of a retail chain. This object is available in API version 47.0 and later.
-   **[RetailStore](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_retailstore.htm)**
    Create records for physical retail stores associated to business accounts. This object is available in API version 47.0 and later.
-   **[RetailStoreGroupAssignment](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_retailstoregroupassignment.htm)**
    Represents a junction between a retail store and a retail store group. This object is available in API version 52.0 and later.
-   **[RetailStoreKpi](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_retailstorekpi.htm)**
    Map store groups to assessment indicator definition, products, and in-store location categories and define targets. Targets are the expected compliance values for each assessment indicator definition, which is a parameter based on which markers of compliance are decided for a task. This object is available in API version 47.0 and later.
-   **[RetailVisitKpi](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_retailvisitkpi.htm)**
    Capture the actual information during a visit against the defined assessment indicator definition and target values. This object is available in API version 47.0 and later.
-   **[StoreActionPlanTemplate](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_storeactionplantemplate.htm)**
    Associate an action plan template with a store. This object is available in API version 48.0 and later.
-   **[StoreAssortment](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_store_assortment.htm)**
    Associate an assortment to either a store, a store group, or an account. This object is available in API version 47.0 and later.
-   **[StoreProduct](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_storeproduct.htm)**
    Associate a product to a retail store or to a specific in-store location. This object is available in API version 47.0 and later.
-   **[Task](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_task_cg.htm)**
    Standard and custom fields extend the standard Task object in Consumer Goods Cloud to represent business activities, which are Task and Event records, such as making a phone call. The object is available in API version 55.0 and later.
-   **[User](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_user.htm)**
    Standard and custom fields extend the standard User object for use in Consumer Goods Cloud to represent a user in your company. This object is available in API version 55.0 and later.
-   **[VehicleUserAssignment](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_vehicleuserassignment.htm)**
    Represents the assignment of a vehicle to a driver. Vehicle is a moving location. This object is available in API version 51.0 and later.
-   **[Visit](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_visits.htm)**
    Track information related to a field rep’s visit to a retail store where they perform retail activities. This object is available in API version 47.0 and later.
-   **[Visitor](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_retail_visitor.htm)**
    Represents the sales reps performing visits. This object is available in API version 49.0 and later.
-   **[VisitedParty](atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_retail_visitedparty.htm)**
    Represents the contact person at the account that’s being visited. This object is available in API version 49.0 and later.

## Related Topics

- Account (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_account.htm)
- Asset (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_asset.htm)
- AssessmentIndicatorDefinition (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmentindicatordefinition.htm)
- AssessmentIndDefinedValue (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmentinddefinedvalue.htm)
- AssessmentIndValue (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmentindvalue.htm)
- AssessmentTask (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmenttask.htm)
- AssessmentTaskContentDocument (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmenttaskcontentdocument.htm)
- AssessmentTaskDefinition (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmenttaskdefinition.htm)
- AssessmentTaskIndDefinition (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmenttaskinddefinition.htm)
- AssessmentTaskOrder (atlas.en-us.retail_api.meta/retail_api/sforce_api_objects_assessmenttaskorder.htm)
