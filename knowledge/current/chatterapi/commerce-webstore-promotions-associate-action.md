---
title: "Commerce Webstore Promotions, Associate Action"
domain: chatterapi
topic: commerce-webstore-promotions-associate-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.530Z
estimatedTokens: 507
keywords: [Commerce, Webstore, Promotions, Associate, Action, associated, price, adjustments, cart, items, highest, priority, eligible, processed]
---

# Commerce Webstore Promotions, Associate Action

> Gets the associated promotions and price adjustments for a cart and its
      items. Only the 50 highest priority eligible promotions are processed.

# Commerce Webstore Promotions, Associate Action

Gets the associated promotions and price adjustments for a cart and its items. Only the 50 highest priority eligible promotions are processed.

Resource

```

```

Available version

53.0–55.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 56.0 and later, use [Commerce Webstore Promotions, Evaluate Action](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.").

HTTP methods

POST

Request body for POST

Root XML tag

<salesTransaction>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| couponCodes | List<String> | List of coupon codes applied to the transaction. You can apply a maximum of two coupons. | Optional | 54.0 |
| effective​AccountId | String | ID of the account for which the request is made. | Required | 53.0 |
| sales​Transaction | Map<String, Object> | Map of a cart and its items. The fields shown in the example are required to process promotions. Additional fields are allowed but ignored.NoteIn error messages, the TotalPriceAfterAllAdjustments field is referred to as TotalPrice. | Required | 53.0 |

Response body for POST

[Promotion Association Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_association_collection.htm "Collection of promotion associations.")

## Code Examples

```
/commerce/webstores/webstoreId/promotions/actions/associate
```

```
{
   "effectiveAccountId":"001RM000004ywq7YAA",
   "couponCodes": ["CODEA", "CODEB"],
   "salesTransaction":{
      "attributes":{
         "type":"WebCart"
      },
      "Id":"0a6RM00000009XAYAY",
      "CurrencyIsoCode":"USD",
      "TotalAmount":1479.00,
      "CartItems":{
         "records":[
            {
               "attributes":{
                  "type":"CartItem"
               },
               "Id":"0a9RM0000004OseYAE",
               "Product2Id":"01tRM000000QVWKYA4",
               "Quantity":15,
               "TotalPriceAfterAllAdjustments":660.00
            },
            {
               "attributes":{
                  "type":"CartItem"
               },
               "Id":"0a9RM0000004OsfYAE",
               "Product2Id":"01tRM000000QVW7YAO",
               "Quantity":5,
               "TotalPriceAfterAllAdjustments":202.50
            },
            {
               "attributes":{
                  "type":"CartItem"
               },
               "Id":"0a9RM0000004OsgYAE",
               "Product2Id":"01tRM000000QVWFYA4",
               "Quantity":6,
               "TotalPriceAfterAllAdjustments":594.00
            }
         ]
      }
   }
}
```

## Related Topics

- Commerce Webstore Promotions, Evaluate Action (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm)
- Promotion Association Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_association_collection.htm)
