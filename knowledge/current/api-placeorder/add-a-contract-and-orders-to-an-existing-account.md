---
title: "Add a Contract and Orders to an Existing
Account"
domain: api-placeorder
topic: add-a-contract-and-orders-to-an-existing-account
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.127Z
estimatedTokens: 145
keywords: [Add, Contract, Orders, Account, Here’s, POST, Contract-based, resource, contract—with, child, order, products, custom, objects—to]
---

# Add a Contract and Orders to an Existing
Account

> Here’s an example of a POST request using the Create Contract-based Orders resource to create a contract—with child orders,
            order products, and custom objects—to an existing account.

# Add a Contract and Orders to an Existing Account

Here’s an example of a POST request using the [Create Contract-based Orders](atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_contractOrder_post.htm "With this resource, you can create a new contract with orders and order products, as well as custom object records on the contract or order level.") resource to create a contract—with child orders, order products, and custom objects—to an existing account.

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
/services/data/v30.0/commerce/sale
```

```
{
    "contract": [
        {
            "attributes": {
                "type": "Contract"
            },
            "AccountId": "001D000000JRDAv",
            "StartDate": "2013-08-01",
            "Status": "Draft",
            "ContractTerm": "1",
            "Test_Contract1__r": {
                "records": [
                    {
                        "attributes": {
                            "type": "Test_Contract1__c"
                        },
                        "Name": "Contract Custom Object"
                    }
                ]
            },
            "Orders": {
                "records": [
                    {
                        "attributes": {
                            "type": "Order"
                        },
                        "EffectiveDate": "2013-08-11",
                        "Status": "Draft",
                        "billingCity": "SFO-Inside-OrderEntity-1",
                        "Pricebook2Id": "01sD0000000G2NjIAK",
                        "OrderItems": {
                            "records": [
                                {
                                    "attributes": {
                                        "type": "OrderItem"
                                    },
                                    "PricebookEntryId": "01uD0000001c5toIAA",
                                    "quantity": "1",
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
      "type" : "Contract",
      "url" : "/services/data/v30.0/sobjects/Contract/800D0000000PIcMIAW"
    },
    "Id" : "800D0000000PIcMIAW",
    "Orders" : {
      "totalSize" : 1,
      "done" : true,
      "records" : [ {
        "attributes" : {
          "type" : "Order",
          "url" : "/services/data/v30.0/sobjects/Order/801D0000000G0ylIAC"
        },
        "Id" : "801D0000000G0ylIAC",
        "OrderItems" : {
          "totalSize" : 1,
          "done" : true,
          "records" : [ {
            "attributes" : {
              "type" : "OrderItem",
              "url" : "/services/data/v30.0/sobjects/OrderItem/802D0000000CKoyIAG"
            },
            "Id" : "802D0000000CKoyIAG"
          } ]
        }
      } ]
    },
    "Test_Contract1__r" : {
      "totalSize" : 1,
      "done" : true,
      "records" : [ {
        "attributes" : {
          "type" : "Test_Contract1__c",
          "url" : "/services/data/v30.0/sobjects/Test_Contract1__c/a02D0000006YYKZIA4"
        },
        "Id" : "a02D0000006YYKZIA4"
      } ]
    }
  } ]
}
```

## Related Topics

- Create Contract-based Orders (atlas.en-us.api_placeorder.meta/api_placeorder/sforce_placeorder_rest_api_contractOrder_post.htm)
