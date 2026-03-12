---
title: "Get Details About an Order"
domain: api-placeorder
topic: get-details-about-an-order
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.113Z
estimatedTokens: 126
keywords: [Order, Here’s, resource, query, products, custom, records]
---

# Get Details About an Order

> Here’s an example of a GET request using the Order resource to query details about an order and its order
products and custom object records.

# Get Details About an Order

Here’s an example of a GET request using the [Order](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_standalone.htm "Use this resource to add one or more new order products and custom object records to an existing order or to retrieve data for a specific order.") resource to query details about an order and its order products and custom object records.

Example usage

```

```

Example request body

None

Example JSON response body

```

```

## Code Examples

```
/services/data/v30.0/commerce/sale/order/801D0000000FzsM
```

```
{
  "totalSize" : 1,
  "done" : true,
  "records" : [ {
    "attributes" : {
      "type" : "Order",
      "url" : "/services/data/v30.0/sobjects/Order/801D0000000FzsMIAS"
    },
    "Id" : "801D0000000FzsMIAS",
    "OrderItems" : {
      "totalSize" : 2,
      "done" : true,
      "records" : [ {
        "attributes" : {
          "type" : "OrderItem",
          "url" : "/services/data/v30.0/sobjects/OrderItem/802D0000000CKIHIA4"
        },
        "Id" : "802D0000000CKIHIA4"
      }, {
        "attributes" : {
          "type" : "OrderItem",
          "url" : "/services/data/v30.0/sobjects/OrderItem/802D0000000CKIGIA4"
        },
        "Id" : "802D0000000CKIGIA4"
      } ]
    },
    "Custom_Objects__r" : null
  } ]
}
```

## Related Topics

- Order (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_standalone.htm)
