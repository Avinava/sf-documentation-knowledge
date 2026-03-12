---
title: "Add Order Products to an Existing Order"
domain: api-placeorder
topic: add-order-products-to-an-existing-order
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.076Z
estimatedTokens: 121
keywords: [Add, Order, Products, Here’s, PATCH, resource]
---

# Add Order Products to an Existing Order

> Here’s an example of a PATCH request using the Order resource to add order products to an existing order.

# Add Order Products to an Existing Order

Here’s an example of a PATCH request using the [Order](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_standalone.htm "Use this resource to add one or more new order products and custom object records to an existing order or to retrieve data for a specific order.") resource to add order products to an existing order.

Example usage

```

```

Example request body

```

```

Example JSON response body

```

```

## Code Examples

```
/services/data/v30.0/commerce/sale/order/801D0000000Frh8
```

```
{
    "order": [
        {
            "attributes": {
                "type": "Order"
            },
            "Id":"801D0000000Frh8",
            "OrderItems": {
                "records": [
                    {
                        "attributes": {
                            "type": "OrderItem"
                        },
                        "PricebookEntryId": "01uD0000001cCd1",
                        "quantity": "1",
                        "UnitPrice": "100",
                        "orderId": "801D0000000Frh8"
                    },
                    {
                        "attributes": {
                            "type": "OrderItem"
                        },
                        "PricebookEntryId": "01uD0000001cCd1",
                        "quantity": "2",
                        "UnitPrice": "200",
                        "orderId": "801D0000000Frh8"
                    }
                ]
            }
        }
    ]
}
```

```
{
  "totalSize" : 1,
  "done" : true,
  "records" : [ {
    "attributes" : {
      "type" : "Order"
    },
    "OrderItems" : {
      "totalSize" : 2,
      "done" : true,
      "records" : [ {
        "attributes" : {
          "type" : "OrderItem",
          "url" : "/services/data/v30.0/sobjects/OrderItem/802D0000000CJtMIAW"
        },
        "Id" : "802D0000000CJtMIAW"
      }, {
        "attributes" : {
          "type" : "OrderItem",
          "url" : "/services/data/v30.0/sobjects/OrderItem/802D0000000CJtNIAW"
        },
        "Id" : "802D0000000CJtNIAW"
      } ]
    }
  } ]
}
```

## Related Topics

- Order (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_standalone.htm)
