---
title: "Field Service Data Objects"
domain: field-service
topic: field-service-data-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:12.272Z
keywords: [Field, Service, Data, Objects, See]
---

# Field Service Data Objects

# Field Service Data Objects

Field Service is based on a suite of standard and custom Salesforce objects that relate to each other in different ways. These objects also serve as the foundation of the Field Service managed package and mobile app.

The following object relationship diagrams and reference information are your field service object dictionary. Use them to guide your implementation decisions. You can create, retrieve, update, or delete field service records and objects, through our SOAP and REST APIs. You can query these objects using SOQL (Salesforce Object Query Language).

-   **[Field Service Core Data Model](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_soap_core.htm)**  
    Use Field Service’s core objects to complete essential field service tasks such as managing work orders, defining your service territories, and tracking your workforce.
-   **[Field Service Inventory Management Data Model](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_soap_inventory.htm)**  
    Use Field Service’s inventory objects to track the storage, request, consumption, return, and retirement of items in your inventory.
-   **[Field Service Preventive Maintenance Data Model](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_soap_maintenance.htm)**  
    Manage periodic maintenance with the help of maintenance plans, which define the maintenance schedule for specific assets. Maintenance plans typically reflect the terms in a customer’s service contract or entitlements.
-   **[Field Service Product Service Campaign Data Model](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_soap_product_service_campaign.htm)**  
    Use product service campaign to record the actions to address situations such as product recalls, manual firmware upgrades, safety or compliance audits, or end-of-life communications. Assets affected are associated with a campaign using product service campaign items. Campaign and campaign items can then be associated with work orders and return orders as needed to complete the work.
-   **[Field Service Warranty Management Data Model](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_soap_warranty.htm)**  
    Use warranty items to record details of the labor, parts, and expenses, along with any exchange options, that are provided to rectify issues with products sold or installed. Create standard warranties for products and product families and, for products you install, record details of additional or extended warranties along with exclusions and void terms.
-   **[Field Service Pricing Data Model](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_soap_pricing.htm)**  
    Link work orders to products or assets in your org to track product pricing and work being performed on your customers’ installed products.
-   **[Field Service Object References](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_object_references.htm)**  
    Object reference for standard and custom Salesforce objects used in Field Service.

#### See Also

-   [Salesforce SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm "Salesforce SOAP API Developer Guide - HTML (New Window)")
    
-   [Salesforce REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_what_is_rest_api.htm "Salesforce REST API Developer Guide - HTML (New Window)")
    
-   [Salesforce SOQL and SOSL Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm "Salesforce SOQL and SOSL Reference - HTML (New Window)")