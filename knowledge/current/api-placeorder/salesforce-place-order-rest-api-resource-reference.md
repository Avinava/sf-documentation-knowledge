---
title: "Salesforce Place Order REST API Resource Reference"
domain: api-placeorder
topic: salesforce-place-order-rest-api-resource-reference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.132Z
estimatedTokens: 242
keywords: [Salesforce, Place, Order, REST, API, Resource, URI, HTTP]
---

# Salesforce Place Order REST API Resource Reference

> Each Salesforce Place Order REST API resource is a URI used with an HTTP method (such
    as GET).

# Salesforce Place Order REST API Resource Reference

Each Salesforce Place Order REST API resource is a URI used with an HTTP method (such as GET).

Resources for the Salesforce Place Order REST API are:

| Resource | Supported HTTP Method | Description |
| --- | --- | --- |
| /services/data/latest API version/commerce/sale | POST | Add new orders, order products, and custom objects to a new contract. |
| /services/data/latest API version/commerce/sale/contract ID | PATCH, GET | Add new orders, order products, and custom objects to an existing contract. Retrieve a contract’s child orders, order products, and custom objects. |
| /services/data/latest API version/commerce/sale/order | POST | Add new order products and custom objects to a new order. |
| /services/data/latest API version/commerce/sale/order/order ID | PATCH, GET | Add new order products and custom objects to an existing order. Retrieve an order’s child order products and custom objects. |

## Related Topics

- POST (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_contractOrder_post.htm)
- PATCH, GET (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_contractOrder.htm)
- POST (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_standalone_post.htm)
- PATCH, GET (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_standalone.htm)
