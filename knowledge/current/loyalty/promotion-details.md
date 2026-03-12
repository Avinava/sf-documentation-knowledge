---
title: "Promotion Details"
domain: loyalty
topic: promotion-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.579Z
estimatedTokens: 483
keywords: [Promotion, Output, representation, eligible]
---

# Promotion Details

> Output representation of the details of an eligible promotion.

# Promotion Details

Output representation of the details of an eligible promotion.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additionalPromotionFields | Map<String, Object> | Values of the promotion fields that are mapped in the context definition. | Big, 60.0 | 60.0 |
| couponDetails | Promotion Coupon Availability | Provides the details of the coupon eligible for the recommended promotion or specifies the reason why there isn’t an eligible coupon for the promotion. | Big, 60.0 | 60.0 |
| currency​IsoCode | String | Three-letter ISO 4217 code of the active monetary currency associated with the promotion. | Small, 60.0 | 60.0 |
| description | String | The description of the promotion. | Big, 60.0 | 60.0 |
| display​Name | String | Name of the eligible promotion. | Small, 60.0 | 60.0 |
| end​DateTime | String | End date and time of the promotion. | Big, 60.0 | 60.0 |
| is​Automatic | Boolean | Indicates whether the promotion is automatically applied for eligible carts (true) or not (false). The default value is false. | Small, 63.0 | 63.0 |
| priorityNumber | Integer | Number that determines the priority of the promotion in a list of eligible promotions.Multiple promotions can have the same priority number. | Small, 60.0 | 60.0 |
| promotion​Code | String | Code of the eligible promotion. | Small, 60.0 | 60.0 |
| promotionEligibleRules | Promotion Rules List[] | List of promotion rules that are eligible for the customer's cart. | Big, 60.0 | 60.0 |
| promotionId | String | ID of the eligible promotion. | Big, 60.0 | 60.0 |
| promotionLimits | Promotion Limit[] | List of the promotion's cart level and cart item level limits. | Big, 60.0 | 60.0 |
| start​Date​Time | String | Start date and time of the promotion. | Big, 60.0 | 60.0 |
| terms​And​Condition | String | Terms and condition of the promotion. | Big, 60.0 | 60.0 |

## Related Topics

- Promotion Coupon Availability (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotioncouponavailability.htm)
- Promotion Rules List (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_rules_list.htm)
- Promotion Limit (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_limit.htm)
