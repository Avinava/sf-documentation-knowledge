---
title: "Promotion Cart Delivery Group Input"
domain: chatterapi
topic: promotion-cart-delivery-group-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.566Z
estimatedTokens: 368
keywords: [Promotion, Cart, Delivery, Group, Input, IDs]
---

# Promotion Cart Delivery Group Input

> IDs of the cart delivery group and its delivery
    method.

# Promotion Cart Delivery Group Input

IDs of the cart delivery group and its delivery method.

Root XML tag

<cartDeliveryGroup>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartDelivery​GroupId | String | ID of the cart delivery group. | Required | 57.0 |
| cartDelivery​GroupMethods | Cart Delivery Group Method Input[] | Collection of cart delivery group methods. | Optional | 60.0 |
| deliveryMethodId | String | ID of the order delivery method. | Required | 57.0 |

#### See Also

-   [Promotion Evaluation Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_evaluation_input.htm "Find promotions that the customer is eligible for and compute their discounts.")

-   [Commerce Webstore Promotions, Evaluate Action](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Code Examples

```
{
  "cartDeliveryGroupId" : "001xx000003GZ6NAAW",
  "deliveryMethodId": "001xx000003GZ6NAAW"
}
```

## Related Topics

- Cart
                        Delivery Group Method
                      Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_cart_delivery_group_method_input.htm)
- Promotion Evaluation Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_evaluation_input.htm)
- Commerce Webstore Promotions, Evaluate Action (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm)
