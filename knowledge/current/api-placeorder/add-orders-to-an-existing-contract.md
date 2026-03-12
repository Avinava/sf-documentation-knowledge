---
title: "Add Orders to an Existing Contract"
domain: api-placeorder
topic: add-orders-to-an-existing-contract
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.104Z
estimatedTokens: 142
keywords: [Add, Orders, Contract, Here’s, PATCH, Contract-based, resource, new, order, products]
---

# Add Orders to an Existing Contract

> Here’s an example of a PATCH request using the Contract-based Orders resource to add new orders and order products to an existing
      contract.

# Add Orders to an Existing Contract

Here’s an example of a PATCH request using the [Contract-based Orders](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_contractOrder.htm "With this resource, you can add one or more new orders to an existing contract, as well as order products and custom object records for each order, or you can retrieve data for a specific contract.") resource to add new orders and order products to an existing contract.

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
/services/data/v30.0/commerce/sale/800D0000000PFL8IAO
```

```
{
   "contract": [
      {
      "attributes": {
         "type": "Contract"
            },
      "Id" : "800D0000000PFL8IAO", 
      "Orders": {
         "records": [
            {
            "attributes": {
               "type": "Order"
                  },
            "EffectiveDate": "2013-08-11",
            "Status": "Draft",
            "billingCity": "SFO-Inside-OrderEntity-1",
            "contractId": "800D0000000PFL8IAO",
            "pricebook2Id": "01sD0000000G2JbIAK",
            "OrderItems": {
               "records": [
                  {
                  "attributes": {
                     "type": "OrderItem"
                        },
                  "PricebookEntryId": "01uD0000001c5tjIAA",
                  "quantity": "12",
                  "UnitPrice": "10"
                     },
                  {
                  "attributes": {
                     "type": "OrderItem"
                        },
                  "PricebookEntryId": "01uD0000001cAkMIAU",
                  "quantity": "2",
                  "UnitPrice": "20"
                     }
                  ]
               }
            },
            {
            "attributes": {
               "type": "Order"
                   },
            "EffectiveDate": "2013-10-11",
            "Status": "Draft",
            "billingCity": "SFO-Inside-OrderEntity-1",
            "contractId": "800D0000000PFL8IAO",
            "pricebook2Id": "01sD0000000G2JbIAK",
            "OrderItems": {
               "records": [
                  {
                     "attributes": {
                        "type": "OrderItem"
                           },
                     "PricebookEntryId": "01uD0000001cAkRIAU",
                     "quantity": "11",
                     "UnitPrice": "10"
                        },
                     {
                     "attributes": {
                        "type": "OrderItem"
                        },
                     "PricebookEntryId": "01uD0000001cAkWIAU",
                     "quantity": "2",
                     "UnitPrice": "20"
                        },
                     {
                     "attributes": {
                        "type": "OrderItem"
                           },
                     "PricebookEntryId": "01uD0000001cAkgIAE",
                     "quantity": "14",
                     "UnitPrice": "10"
                        }
                    ]
                }
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
      "type" : "Contract"
    },
    "Orders" : {
      "totalSize" : 2,
      "done" : true,
      "records" : [ {
        "attributes" : {
          "type" : "Order",
          "url" : "/services/data/v29.0/sobjects/Order/801D0000000G0xsIAC"
        },
        "Id" : "801D0000000G0xsIAC",
        "OrderItems" : {
          "totalSize" : 2,
          "done" : true,
          "records" : [ {
            "attributes" : {
              "type" : "OrderItem",
              "url" : "/services/data/v29.0/sobjects/OrderItem/802D0000000CKoPIAW"
            },
            "Id" : "802D0000000CKoPIAW"
          }, {
            "attributes" : {
              "type" : "OrderItem",
              "url" : "/services/data/v29.0/sobjects/OrderItem/802D0000000CKoQIAW"
            },
            "Id" : "802D0000000CKoQIAW"
          } ]
        }
      }, {
        "attributes" : {
          "type" : "Order",
          "url" : "/services/data/v29.0/sobjects/Order/801D0000000G0xtIAC"
        },
        "Id" : "801D0000000G0xtIAC",
        "OrderItems" : {
          "totalSize" : 3,
          "done" : true,
          "records" : [ {
            "attributes" : {
              "type" : "OrderItem",
              "url" : "/services/data/v29.0/sobjects/OrderItem/802D0000000CKoRIAW"
            },
            "Id" : "802D0000000CKoRIAW"
          }, {
            "attributes" : {
              "type" : "OrderItem",
              "url" : "/services/data/v29.0/sobjects/OrderItem/802D0000000CKoSIAW"
            },
            "Id" : "802D0000000CKoSIAW"
          }, {
            "attributes" : {
              "type" : "OrderItem",
              "url" : "/services/data/v29.0/sobjects/OrderItem/802D0000000CKoTIAW"
            },
            "Id" : "802D0000000CKoTIAW"
          } ]
        }
      } ]
    }
  } ]
}
```

## Related Topics

- Contract-based Orders (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_contractOrder.htm)
