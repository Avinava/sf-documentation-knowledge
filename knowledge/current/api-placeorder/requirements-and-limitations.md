---
title: "Requirements and Limitations"
domain: api-placeorder
topic: requirements-and-limitations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.119Z
estimatedTokens: 451
keywords: [Requirements, Limitations, access, Salesforce, Place, Order, REST, API, establish, secure, OAuth, session]
---

# Requirements and Limitations

> To access the Salesforce Place Order REST API, you must establish a secure OAuth session ID.

# Requirements and Limitations

To access the Salesforce Place Order REST API, you must establish a secure OAuth session ID.

Consider these limitations and general limits when using the Salesforce Place Order REST API.

Limits and Limitations

-   2000 records per request or the API maximum limit for your organization—whichever is lower.
-   Responses and requests are in JSON.

    When using Salesforce Place Order REST API resources that require a request or response body, use Content-Type: application/json.

-   Each call can only affect one top-level entity.

    For orders under a contract, you need one call for each new or existing contract you’re adding orders, order products, or custom objects to. For orders not under a contract, you need one call for each new or existing order you’re adding order products or custom objects to.

-   In each resource, you can create custom objects at a depth of one level below the top-level entity.
    -   /services/data/latest API version/commerce/sale supports custom object records on contracts and orders.
    -   /services/data/latest API version/commerce/sale/order supports custom object records on orders and order products.
-   Custom objects are not supported as children of other custom objects.
-   To filter GET results, query parameters must be a fully qualified field name. The parent entity must be lower-cased (such as order), and the field must match the defined relationship name (such as orders.StatusCode).

    For example, to get a list of all orders with a draft status under a given contract, you must use contract.orders.StatusCode='Draft'.

-   When you create a new order, the Status Code must be Draft and the Status must be any value that corresponds to a Status Code of Draft.
-   You can’t update existing records.
