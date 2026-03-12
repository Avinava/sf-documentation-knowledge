---
title: "Intelligent Sales"
domain: life-sciences-dev-guide
topic: intelligent-sales
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:43.024Z
estimatedTokens: 1446
keywords: [Intelligent, Sales, Help, team, plan, execute, visits, manage, inventory]
---

# Intelligent Sales

> Help your sales team plan and execute sales visits and manage field inventory with
  Intelligent Sales.

# Intelligent Sales

Help your sales team plan and execute sales visits and manage field inventory with Intelligent Sales.

| Available in: Enterprise and Unlimited Editions |
| --- |


![A screenshot of the Intelligent Sales data model.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fintelligent_sales_ERD.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/intelligent-sales.html "HTML (New Window)").

-   **[ActionPlanTemplateItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_actionplantemplateitem.htm)**
    Represents the instance of an item on an action plan template version. This object is available in API version 44.0 and later.
-   **[actionplantemplate](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_actionplantemplate.htm)**
    Defines a template for different assessment tasks in a visit. This object is available in API version 49.0 and later.
-   **[Address](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_address.htm)**
    Represents a mailing, billing, or home address.
-   **[AssessmentTask](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_assessmenttask.htm)**
    Perform activities such as patient registration or order authorization to capture information.
-   **[Pricebook2](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_pricebook2.htm)**
    Represents a price book that contains the list of products that your org sells.
-   **[Product2](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_product2.htm)**
    Represents a product that your org sells.
-   **[Pricebookentry](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_pricebookentry.htm)**
    Represents a product entry (an association between a price book and product) in a price book.
-   **[ProductAvailabilityProjection](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productavailabilityprojection.htm)**
    Represents the projected product quantity available at an inventory location at various points in time. Records for this object are automatically created by Intelligent Sales. This object is available in API version 55.0 and later.
-   **[ProductFulfillmentLocation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_productfulfillmentlocation.htm)**
    Associates a business account and a product inventory with the responsible field rep. This object is available in API version 49.0 and later.
-   **[ProductItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_productitem.htm)**
    Represents the stock of a particular product at a particular location in field service, such as all bolts stored in your main warehouse.
-   **[ProductRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_sforce_api_objects_productrequest.htm)**
    Represents a device request made as part of a care program.
-   **[ProductRequestLineItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_sforce_api_objects_productrequestlineitem.htm)**
    A junction object between ProductRequest and ProductTransfer This object is available in API version 50.0 and later.
-   **[productrequired](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_productrequired.htm)**
    Represents a product that is needed to complete a visit.
-   **[producttransfer](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_producttransfer.htm)**
    Represents the transfer of inventory between locations in field service.
-   **[RecordAction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_recordaction.htm)**
    Represents a relationship between a record and an action, such as a flow. Create a RecordAction for every action that you want to associate with a particular record. Available in API version 42.0 and later.
-   **[SerializedProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_sforce_api_objects_serializedproduct.htm)**
    Records serial numbers for each individual product in an inventory. This object is available in API version 50.0 and later.
-   **[Visit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_visit.htm)**
    Track information related to a field rep’s visit to a health care provider.
-   **[VisitedParty](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_visitedparty.htm)**
    Represents the contact person at the account that’s being visited. This object is available in API version 49.0 and later.
-   **[Visitor](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_visitor.htm)**
    Represents the sales reps performing visits.

#### See Also

-   [https://help.salesforce.com/s/articleView?id=ind.admin\_intelligent\_sales.htm&type=5](https://help.salesforce.com/s/articleView?id=ind.admin_intelligent_sales.htm&type=5&language=en_US "https://help.salesforce.com/s/articleView?id=ind.admin_intelligent_sales.htm&type=5 - HTML (New Window)")

-   [https://help.salesforce.com/s/articleView?id=ind.admin\_intelligent\_sales\_data\_model.htm&type=5](https://help.salesforce.com/s/articleView?id=ind.admin_intelligent_sales_data_model.htm&type=5&language=en_US "https://help.salesforce.com/s/articleView?id=ind.admin_intelligent_sales_data_model.htm&type=5 - HTML (New Window)")

## Related Topics

- ActionPlanTemplateItem (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_actionplantemplateitem.htm)
- actionplantemplate (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_actionplantemplate.htm)
- Address (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_address.htm)
- AssessmentTask (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_assessmenttask.htm)
- Pricebook2 (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_pricebook2.htm)
- Product2 (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_product2.htm)
- Pricebookentry (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_pricebookentry.htm)
- ProductAvailabilityProjection (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productavailabilityprojection.htm)
- ProductFulfillmentLocation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_productfulfillmentlocation.htm)
- ProductItem (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hc_productitem.htm)
