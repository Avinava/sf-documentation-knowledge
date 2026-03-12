---
title: "Add an Order to an Existing Account"
domain: api-placeorder
topic: add-an-order-to-an-existing-account
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.123Z
estimatedTokens: 113
keywords: [Add, Order, Account, Here’s, POST, resource, products]
---

# Add an Order to an Existing Account

> Here’s an example of a POST request using the Create Order resource to create an order with order products for an existing
      account.

# Add an Order to an Existing Account

Here’s an example of a POST request using the [Create Order](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_standalone_post.htm "With this resource, you can create a new order with order products and custom objects.") resource to create an order with order products for an existing account.

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
/services/data/v30.0/commerce/sale/order
```

```
{
   "order": [
   {
      "attributes": {
      "type": "Order"
      },
      "EffectiveDate": "2013-07-11",
      "Status": "Draft",
      "billingCity": "SFO-Inside-OrderEntity-1",
      "accountId": "001D000000JRDAv",
      "Pricebook2Id": "01sD0000000G2NjIAK",
      "OrderItems": {
         "records": [
            {
            "attributes": {
               "type": "OrderItem"
            },
            "PricebookEntryId": "01uD0000001c5toIAA",
            "quantity": "1",
            "UnitPrice": "15.99"
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
      "type" : "Order",
      "url" : "/services/data/v30.0/sobjects/Order/801D0000000G0ySIAS"
    },
    "Id" : "801D0000000G0ySIAS",
    "OrderItems" : {
      "totalSize" : 1,
      "done" : true,
      "records" : [ {
        "attributes" : {
          "type" : "OrderItem",
          "url" : "/services/data/v30.0/sobjects/OrderItem/802D0000000CKp8IAG"
        },
        "Id" : "802D0000000CKp8IAG"
      } ]
    }
  } ]
}
```

## Related Topics

- Create Order (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_standalone_post.htm)
