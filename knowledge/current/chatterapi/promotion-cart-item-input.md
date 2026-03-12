---
title: "Promotion Cart Item Input"
domain: chatterapi
topic: promotion-cart-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.582Z
estimatedTokens: 710
keywords: [Promotion, Cart, Item, Input, evaluation]
---

# Promotion Cart Item Input

> Item in a cart during promotion evaluation.

# Promotion Cart Item Input

Item in a cart during promotion evaluation.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartDelivery​GroupId | String | ID of the cart delivery group. | Required when evaluating shipping promotions | 57.0 |
| cartId | String | ID of the cart. | Optional | 56.0 |
| id | String | ID of the cart item. Must be unique across all items in the cart. | Required | 56.0 |
| itemDescription | String | Description of the cart item. | Optional | 56.0 |
| itemName | String | Name of the cart item. | Optional | 56.0 |
| listPrice | String | List price of the cart item. | Optional | 56.0 |
| product2Id | String | Product ID of the cart item. | Required if sku isn’t specified | 56.0 |
| quantity | String | Number of items in the cart. | Required | 56.0 |
| salesPrice | String | Sales price of the cart item. This is the price per quantity and the value used to compute the discount. If salesPrice and totalLineBaseAmount are specified, totalLineBaseAmount is used. | Required if totalLineBaseAmount isn’t specified | 56.0 |
| sku | String | Stock keeping unit (SKU) of the cart item. | Required if product2Id isn’t specified | 56.0 |
| totalLine​BaseAmount | String | Total amount for the cart item, equal to sales price multiplied by quantity. This value is used to compute the discount. If salesPrice and totalLineBaseAmount are specified, totalLineBaseAmount is used. | Required if salesPrice isn’t specified | 56.0 |
| totalList​BaseAmount | String | Total amount for the cart item based on list price and quantity. | Optional | 56.0 |
| type | String | Type of item in a cart. Values are:DeliveryChargeProduct | Required when evaluating shipping promotions | 56.0 |

#### See Also

-   [Promotion Cart Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_cart_input.htm "Cart during promotion evaluation.")

-   [Promotion Evaluation Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_evaluation_input.htm "Find promotions that the customer is eligible for and compute their discounts.")

-   [Commerce Webstore Promotions, Evaluate Action](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Code Examples

```
"cartItems": [
            {
                "id": "id1",
                "type": "Product",
                "sku": "Tee Size L",
                "quantity": 2,
                "listPrice": 100,
                "salesPrice": 100
            },
            {
                "id": "id2",
                "type": "Product",
                "sku": "Shorts Size L",
                "quantity": 2,
                "listPrice": 25,
                "salesPrice": 25
            },
            {
                "id": "id3",
                "type": "Product",
                "sku": "Shoe Size 9",
                "quantity": 2,
                "listPrice": 25,
                "salesPrice": 25
            }
        ]
```

## Related Topics

- Promotion Cart Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_cart_input.htm)
- Promotion Evaluation Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_evaluation_input.htm)
- Commerce Webstore Promotions, Evaluate Action (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm)
