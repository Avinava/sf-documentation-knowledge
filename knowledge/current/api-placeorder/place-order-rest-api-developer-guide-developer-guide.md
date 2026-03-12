---
title: "Place Order REST API Developer Guide Developer
  Guide"
domain: api-placeorder
topic: place-order-rest-api-developer-guide-developer-guide
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.116Z
estimatedTokens: 556
keywords: [Place, Order, REST, API, Developer, Access, organization's, contract, data, programmatically, Salesforce]
---

# Place Order REST API Developer Guide Developer
  Guide

> Access your organization's order and contract data programmatically with the Salesforce
  Place Order REST API.

# Place Order REST API Developer Guide Developer Guide

Access your organization's order and contract data programmatically with the Salesforce Place Order REST API.

The Salesforce Place Order REST API is a composite API that gives programmatic access to contract, order, and order product data, as well as child custom object data of contracts and orders in Salesforce. With this composite API, you can create contract, order, order product, and custom object records in a single call. Any organization that has orders and API enabled can use the Place Order REST API.

Use the Place Order REST API, a REST-based composite application programming interface, to:

-   Add orders to a new or existing contract, and add order products to those orders.
-   Add order products to a new or existing order.
-   Add custom objects to a new or existing contract or order.
-   Retrieve order records under a given contract, plus those orders’ custom objects and order products.
-   Retrieve order product records under a given order, plus custom object records under the order and its order products.
-   Retrieve a filtered list of orders under a given contract or order products under a given order.

-   **[Requirements and Limitations](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_limits_limitations.htm)**

-   **[Authorization Through External Client Apps or Connected Apps and OAuth 2.0](atlas.en-us.api_placeorder.meta/api_placeorder/intro_oauth_and_connected_apps.htm)**
    For a client application to access REST API resources, it must be authorized as a safe visitor. To implement this authorization, use either an external client app or a connected app and an OAuth 2.0 authorization flow.
-   **[Understanding Place Order REST API Resources](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_understanding.htm)**
    Integrate your order creation system with Salesforce by using the Place Order REST API.
-   **[Salesforce Place Order REST API Resource Reference](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_resource_reference.htm)**
    Each Salesforce Place Order REST API resource is a URI used with an HTTP method (such as GET).

## Related Topics

- Requirements and Limitations (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_limits_limitations.htm)
- Authorization Through External Client Apps or Connected Apps and OAuth 2.0 (atlas.en-us.api_placeorder.meta/api_placeorder/intro_oauth_and_connected_apps.htm)
- Understanding Place Order REST API Resources (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_understanding.htm)
- Salesforce Place Order REST API Resource Reference (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_resource_reference.htm)
