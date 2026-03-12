---
title: "Filter Details About an Order"
domain: api-placeorder
topic: filter-details-about-an-order
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.109Z
estimatedTokens: 126
keywords: [Filter, Order, Here’s, resource, query, products, certain, start, date]
---

# Filter Details About an Order

> Here’s an example of a GET request using the Order resource to query details for order products with a certain start date
      for a given order.

# Filter Details About an Order

Here’s an example of a GET request using the [Order](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_standalone.htm "Use this resource to add one or more new order products and custom object records to an existing order or to retrieve data for a specific order.") resource to query details for order products with a certain start date for a given order.

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
/services/data/v30.0/commerce/sale/order/801D0000000FzsM?order.orderItems.effectivedate=2013-08-05
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
      "totalSize" : 1,
      "done" : true,
      "records" : [ {
        "attributes" : {
          "type" : "OrderItem",
          "url" : "/services/data/v30.0/sobjects/OrderItem/802D0000000CKIHIA4"
        },
        "Id" : "802D0000000CKIHIA4"
      }]
    },
    "Custom_Objects__r" : null
  } ]
}
```

## Related Topics

- Order (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_standalone.htm)
