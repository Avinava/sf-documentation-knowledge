---
title: "Get Started with Consumer Goods Cloud"
domain: retail-api
topic: get-started-with-consumer-goods-cloud
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:37.197Z
estimatedTokens: 2085
keywords: [Started, Consumer, Goods, Cloud, Streamline, customer, relationships, grow, business, initiate, intelligent, sales, Salesforce, product, collaborate]
---

# Get Started with Consumer Goods Cloud

> Streamline customer relationships, grow your business, and initiate intelligent sales
        with Salesforce Consumer Goods Cloud product. It allows you to collaborate with your
        customers and deliver on your brand promises.

# Get Started with Consumer Goods Cloud

Streamline customer relationships, grow your business, and initiate intelligent sales with Salesforce Consumer Goods Cloud product. It allows you to collaborate with your customers and deliver on your brand promises.

Consumer Goods includes the following:

-   Retail Execution - Plan store visits for your field representatives and analyze your business's health across stores through the web portal. Use the Salesforce Retail Execution mobile app to stay organized while the fields representatives perform visit activities.
    -   Sync Management - Use the Sync Management app to configure how data is synced between Salesforce and mobile devices.
    -   Direct Store Delivery (DSD): Create routes and tours to define a list of stops for the driver to deliver the goods.
-   Trade Promotion Management - Plan, create, and run promotional activities, and track them for better performance. You can go to [Integration Service APIs guide](https://developer.salesforce.com/docs/industries/rcgps-integration-service/references/rcgintsrvc-apis?meta=Summary) to learn more about how the Integration APIs are used to integrate data from external systems to the Retail and Consumer Goods (RCG) Trade Promotion Management.
-   Real Time Reporting (RTR): Provides real-time reports that can be exported and customized using Apex classes. For more information, go to [Consumer Goods Cloud Real Time Reporting Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.cgcloud_rtr_dev_guide.meta/cgcloud_rtr_dev_guide/rtr_integration_api_introduction.htm).

## Retail Execution

With Retail Execution, a sales manager can plan store visits for field representatives and analyze the business’s health across stores. As a field representative on a visit, you can track inventory, take orders, and capture visit details using the Retail Execution mobile app. This app can be customized using Modeler to meet the business requirements. For more information on the Modeler, see [Visual Studio Code based Modeler for Consumer Goods Cloud](https://help.salesforce.com/s/articleView?language=en_US&id=sf.modeler_vscode_getting_started_parent.htm&type=5).Use the following resources to get started with Retail Execution:

-   Use [Retail Execution Custom Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_236_custom_objects.htm) to store information related to customers, transactions, relationships between objects, and other workflows across Retail Execution such as details of an asset survey.
-   Use [Consumer Goods Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_retail_overview.htm) to store information related to entities that support Retail Execution such as Account, Asset, OperatingHours, Product, User, Visitor, and RetailStore.
-   Use [Visit Recommendation Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/industries_einstein_visit_recommendation_api_overview.htm), [Associated Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_associated_objects_list_einstein.htm), and [Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/einstein_visit_recommendation_actions_parent.htm) to store information about visit recommendation requests and visit recommendations.
-   Use [Visit Activity Recommendation Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/industries_einstein_visit_activity_recommendation_api_overview.htm) and [Associated Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_associated_objects_list_einstein_task.htm) to store information about visit task recommendation requests and visit task recommendations.

Sync Management

Sync Management is part of Retail Execution and it ensures that the information available in web portal and mobile application is the same. When business data and business workflow-specific data are modified on Salesforce, the system identifies the difference and applies the changes to mobile devices during a sync process. When a sync process begins, the Sync Management app verifies the mobile app updates, Runtime Artifacts (RTAs), and metadata, and then downloads the changes to mobile devices.

Use the following resources to get started with Sync Management:

-   Use [Sync Management Custom Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_retail_custom_objects_overview.htm) to store information related to synchronization settings, object relationships, performance, and history.

Direct Store Delivery

Direct Store Delivery (DSD) is a supply chain model where a manufacturer sells goods directly to retailers. You can process orders, payments, deliveries, and returns by using DSD.

Use the following custom objects to store information related to routes, tour, vehicle, and warehouse:

-   [cgcloud\_\_Route\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__route__c.htm)
-   [cgcloud\_\_Route\_Template\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__route_template__c.htm)
-   [cgcloud\_\_Tour\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tour__c.htm)
-   [cgcloud\_\_Tour\_Check\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tour_check__c.htm)
-   [cgcloud\_\_Tour\_Object\_Reference\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tour_object_reference__c.htm)
-   [cgcloud\_\_Tour\_Template\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tour_template__c.htm)
-   [cgcloud\_\_Tour\_Template\_Object\_Reference\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tour_template_object_reference__c.htm)
-   [cgcloud\_\_Tour\_Template\_Tour\_Check\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tour_template_tour_check__c.htm)
-   [cgcloud\_\_Tour\_Tour\_Check\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__tour_tour_check__c.htm)
-   [cgcloud\_\_Vehicle\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__vehicle__c.htm)
-   [cgcloud\_\_Vehicle\_Warehouse\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__vehicle_warehouse__c.htm)
-   [cgcloud\_\_Route\_Account\_\_c](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_cgcloud__route_account__c.htm)

## Trade Promotion Management

Trade Promotion Management (TPM) helps you oversee the promotions that you run for your retailers, from planning to completion, to ensure that each promotion achieves its objectives. Use TPM to streamline your team’s efforts, overcome the complexities of running several promotions concurrently, and unlock maximum results. Use the following resources to get started with Trade Promotion Management:

-   Use [Trade Promotion Management Custom Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/sforce_api_objects_236_common_custom_objects.htm) to store information related to promotions, payments, and reports.
-   Use [Trade Promotion Management Service APIs](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/cgcloud_tpm_service_introduction.htm) to manage products, promotions, and reports.
-   Use Trade Promotion Management Apex Classes such as [TPM\_ProductFilter Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.retail_api.meta/retail_api/TPM_ProductFilter.htm) to gain programmatic access to your data.
