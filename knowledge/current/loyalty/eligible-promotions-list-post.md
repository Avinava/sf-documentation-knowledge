---
title: "Eligible Promotions List (POST)"
domain: loyalty
topic: eligible-promotions-list-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.071Z
estimatedTokens: 682
keywords: [Eligible, Promotions, POST, their, associated, rewards, cart, line, items, Special, Access, Rules]
---

# Eligible Promotions List (POST)

> Get eligible promotions and their associated rewards for a cart and its line
    items.

# Eligible Promotions List (POST)

Get eligible promotions and their associated rewards for a cart and its line items.

## Special Access Rules

You must have the Context Definitions and Context Rule Library settings enabled in your Salesforce org.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

Root XML tag

CartInputMapRepresentation

JSON examples

Here’s an example of the details of a customer’s cart whose eligible promotions are to be fetched:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Provide contactId to retrieve campaigns related to a Person Account.

```

```

Here’s an example of the details of a loyalty program member’s cart whose eligible loyalty program promotions are to be fetched:

```

```

Here’s an example to fetch eligible loyalty program promotions for accounts:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cart | Map<String, Object> | Fields configured in the Cart and CartLine nodes of the CartDetailGetEligiblePromotion context service definition in your org. These fields represent the details of a cart and its line items whose eligible promotions are to be fetched.To get eligible promotions associated with a loyalty program member’s cart, the required parameters are:membershipNumber or loyaltyProgramMemberIdcurrencyISOCodeFor other eligible promotions, the required parameters are:contactId, contactLastName, or contactEmailcurrencyISOCodeAlong with the required parameters, provide specific details of a cart, such as the total transaction amount, and the cart line item details, such as the line item quantity and amount, the product ID or name, the product catalog ID or name, the product code, and the product stock keeping unit. | Required | 60.0 |
| contextInstanceId | String | ID of the context instance. | Optional | 65.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ruleLibraryApiName | String | API Name of an active Rule Library with the usage type as Global Promotion Management. This parameter allows the API to check the eligibility of the cart against the Promotions associated with the specified Rule Library.This parameter is required if there are multiple active rule libraries configured with the Usage Type as Global Promotion Management. | Optional | 59.0 |

Response body for POST

[Eligible Promotions List](atlas.en-us.loyalty.meta/loyalty/connect_responses_eligible_promotions_list.htm "Output representation of a list of eligible promotions.")

## Code Examples

```apex
/global-promotions-management/eligible-promotions
```

```apex
https://yourInstance.salesforce.com/services/data/v66.0/global-promotions-management/eligible-promotions
```

```
{
    "cart": {
        "cartDetails": [
            {
                "activityStartDate": "2023-06-14T12:45:19Z",
                "contactId/loyaltyProgramMemberId/accountId": "003xx000004WjzAAAS",
                "transactionAmount": 499,
                "currencyISOCode": "USD",
                "engagementChannelId": "0eFxx0000000008EAA",
                "sourceLocationId/sourceLocation": "0YQxx0000000001GAA",
                "cartLineDetails": [
                    {
                        "cartLineProduct": "Burger",
                        "cartLineProductCode": "testProductCode",
                        "cartLineProductStockKeepingUnit": "testSKU",
                        "cartLineProductCatalog" : "Food",
                        "cartLineItemQuantity": 1,
                        "cartLineItemAmount": 100,
                        "cartLineProductCategory":"test"
                    }
                ]
            }
        ]
    }
}
```

```
{
   "cart":{
      "cartDetails":[
         {
            "activityStartDate":"2023-06-14T12:45:19Z",
            "contactId/loyaltyProgramMemberId/accountId": "003xx000004WjzAAAS"
            "currencyISOCode":"INR",
            "transactionAmount":499,
            "membershipNumber":"Member-005",
            "cartLineDetails":[
               {
                  "cartLineProductId":"01txx0000006iTsAAI",
                  "cartLineProductCode": "AnyProductCode",
                  "cartLineProductStockKeepingUnit": "AnySKU",
                  "cartLineItemQuantity":2,
                  "cartLineItemAmount":99,
                  "cartLineProductCatalogId:"0ZSSB0000002d8X4AQ"
               },
               {
                  "cartLineProduct":"Coke",
                  "cartLineProductCode": "AnyProductCode",
                  "cartLineProductStockKeepingUnit": "AnySKU",
                  "cartLineItemQuantity":10,
                  "cartLineItemAmount":400,
                  "cartLineProductCatalog:"Beverages"
               }
            ]
         }
      ]
   }
}
```

```
{
    "cart": {
      "cartDetails": [
        {
          "activityStartDate": "2024-10-16T22:45:19Z",
          "accountId": "001xx000003H3NnAAK",
          "transactionAmount": 40,
          "currencyISOCode": "USD",
          "cartLineDetails": [
            {
              "cartLineProductCatalog": "Beverages",
              "cartLineProductCategory": "Coffee Creations",
              "cartLineProduct": "Caramel Latte",
              "cartLineItemQuantity": 5
            }
          ]
        }
      ]
    }
  }
```

## Related Topics

- Eligible Promotions List (atlas.en-us.loyalty.meta/loyalty/connect_responses_eligible_promotions_list.htm)
