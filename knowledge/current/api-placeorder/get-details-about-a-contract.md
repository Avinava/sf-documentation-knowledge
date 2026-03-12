---
title: "Get Details About a Contract"
domain: api-placeorder
topic: get-details-about-a-contract
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.111Z
estimatedTokens: 147
keywords: [Contract, Here’s, Contract-based, Orders, resource, query, child, order, products, custom, objects]
---

# Get Details About a Contract

> Here’s an example of a GET request using the Contract-based Orders resource to query details about a contract and its child orders, order
        products, and custom objects.

# Get Details About a Contract

Here’s an example of a GET request using the [Contract-based Orders](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_contractOrder.htm "With this resource, you can add one or more new orders to an existing contract, as well as order products and custom object records for each order, or you can retrieve data for a specific contract.") resource to query details about a contract and its child orders, order products, and custom objects.

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
/services/data/v30.0/commerce/sale/800D0000000PFHp
```

```
{
  "totalSize" : 1,
  "done" : true,
  "records" : [ {
    "attributes" : {
      "type" : "Contract",
      "url" : "/services/data/v30.0/sobjects/Contract/800D0000000PFHpIAO"
    },
    "Id" : "800D0000000PFHpIAO",
    "Orders" : {
      "totalSize" : 4,
      "done" : true,
      "records" : [ {
        "attributes" : {
          "type" : "Order",
          "url" : "/services/data/v30.0/sobjects/Order/801D0000000FqzsIAC"
        },
        "Id" : "801D0000000FqzsIAC",
        "OrderItems" : {
          "totalSize" : 3,
          "done" : true,
          "records" : [ {
            "attributes" : {
              "type" : "OrderItem",
              "url" : "/services/data/v30.0/sobjects/OrderItem/802D0000000CJX0IAO"
            },
            "Id" : "802D0000000CJX0IAO"
          }, {
            "attributes" : {
              "type" : "OrderItem",
              "url" : "/services/data/v30.0/sobjects/OrderItem/802D0000000CJYDIA4"
            },
            "Id" : "802D0000000CJYDIA4"
          }, {
            "attributes" : {
              "type" : "OrderItem",
              "url" : "/services/data/v30.0/sobjects/OrderItem/802D0000000CKFCIA4"
            },
            "Id" : "802D0000000CKFCIA4"
          } ]
        },
        "Custom_Objects__r" : null
      }, {
        "attributes" : {
          "type" : "Order",
          "url" : "/services/data/v30.0/sobjects/Order/801D0000000FpNEIA0"
        },
        "Id" : "801D0000000FpNEIA0",
        "OrderItems" : {
          "totalSize" : 3,
          "done" : true,
          "records" : [ {
            "attributes" : {
              "type" : "OrderItem",
              "url" : "/services/data/v30.0/sobjects/OrderItem/802D0000000CIWBIA4"
            },
            "Id" : "802D0000000CIWBIA4"
          }, {
            "attributes" : {
              "type" : "OrderItem",
              "url" : "/services/data/v30.0/sobjects/OrderItem/802D0000000CIWCIA4"
            },
            "Id" : "802D0000000CIWCIA4"
          }, {
            "attributes" : {
              "type" : "OrderItem",
              "url" : "/services/data/v30.0/sobjects/OrderItem/802D0000000CIWDIA4"
            },
            "Id" : "802D0000000CIWDIA4"
          } ]
        },
        "Custom_Objects__r" : null
      }, {
        "attributes" : {
          "type" : "Order",
          "url" : "/services/data/v30.0/sobjects/Order/801D0000000FqztIAC"
        },
        "Id" : "801D0000000FqztIAC",
        "OrderItems" : null,
        "Custom_Objects__r" : null
      }, {
        "attributes" : {
          "type" : "Order",
          "url" : "/services/data/v30.0/sobjects/Order/801D0000000FpkNIAS"
        },
        "Id" : "801D0000000FpkNIAS",
        "OrderItems" : null,
        "Custom_Objects__r" : null
      } ]
    },
    "Test_Contract1__r" : null
  } ]
}
```

## Related Topics

- Contract-based Orders (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_contractOrder.htm)
