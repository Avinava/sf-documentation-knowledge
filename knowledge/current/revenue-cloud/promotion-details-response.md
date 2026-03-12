---
title: "Promotion Details Response"
domain: revenue-cloud
topic: promotion-details-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.798Z
estimatedTokens: 502
keywords: [Promotion, Output, representation, eligible, includes, any, coupons, eligibility, rules, terms, conditions]
---

# Promotion Details Response

> Output representation of the eligible promotion and its details. This representation
    includes details of any coupons, eligibility rules, and terms and conditions.

# Promotion Details Response

Output representation of the eligible promotion and its details. This representation includes details of any coupons, eligibility rules, and terms and conditions.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​PromotionFields | Map<String, Object> | Values of the additional promotion fields that are mapped in the context definition. | Big, 66.0 | 66.0 |
| couponDetails | Promotion Coupon Availability[] | Specifies the details of the coupon eligible for the promotion or specifies the reason why there isn’t an eligible coupon for the promotion. | Big, 66.0 | 66.0 |
| currencyIso​Code | String | Three-letter ISO 4217 code of the monetary currency associated with the promotion. | Big, 66.0 | 66.0 |
| description | String | Description of the promotion. | Big, 66.0 | 66.0 |
| displayName | String | Display name of the eligible promotion. | Big, 66.0 | 66.0 |
| endDateTime | String | End date and time of the promotion in the ISO 8601 date format. | Big, 60.0 | 66.0 |
| isAutomatic | Boolean | Indicates whether the promotion is automatically applied for eligible carts (true) or not (false). | Big, 66.0 | 66.0 |
| priorityNumber | Integer | Priority number of the eligible promotion for promotion ordering. | Big, 66.0 | 66.0 |
| promotionCode | String | Code of the eligible promotion. | Big, 66.0 | 66.0 |
| promotionEligible​Rules | Promotion Rules List[] | List of promotion rules that are eligible for the customer's cart. | Big, 66.0 | 66.0 |
| promotionId | String | ID of the eligible promotion. | Big, 66.0 | 66.0 |
| promotion​Limits | Promotion Limit[] | List of the promotion's cart level and cart item level limits. | Big, 66.0 | 66.0 |
| startDate​Time | String | Start date and time of the promotion in the ISO 8601 date format. | Big, 66.0 | 66.0 |
| termsAnd​Condition | String | Terms and conditions of the promotion. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "eligiblePromotions": [
    {
      "additionalPromotionFields": {},
      "couponDetails": {
        "coupon": {
          "couponCode": "COUPON_002",
          "endDateTime": null,
          "startDateTime": "2025-10-08T19:00:00.000Z",
          "status": "Active"
        },
        "couponAvailabilityMessage": null
      },
      "currencyIsoCode": "USD",
      "description": "15% on Accessories",
      "displayName": "Comms Manual Promotion 15% on Accessories",
      "endDateTime": null,
      "isAutomatic": false,
      "priorityNumber": null,
      "promotionCode": null,
      "promotionEligibleRules": [
        {
          "ruleName": "CommsAutoPromotionRule",
          "rulePriority": 1,
          "ruleRewards": [
            {
              "rewardDetails": {
                "discountLevel": "Line",
                "discountType": "PercentageOff",
                "discountValue": "10.0",
                "discountAppliedAt": "LineItem",
                "discountCategory": "Accessories"
              },
              "rewardType": "ProvideDiscount"
            }
          ]
        }
      ],
      "promotionId": "0c8DX00000001UeYAI",
      "promotionLimits": [],
      "startDateTime": "2025-07-01T17:02:00.000Z",
      "termsAndCondition": "&lt;p&gt;test&lt;/p&gt;"
    },
    {
      "additionalPromotionFields": {},
      "couponDetails": {
        "coupon": {
          "couponCode": "COUPON_001",
          "endDateTime": null,
          "startDateTime": null,
          "status": "Active"
        },
        "couponAvailabilityMessage": null
      },
      "currencyIsoCode": "USD",
      "description": "Promo_Printer_Child",
      "displayName": "Promo_Printer_Child",
      "endDateTime": null,
      "isAutomatic": false,
      "priorityNumber": null,
      "promotionCode": null,
      "promotionEligibleRules": [
        {
          "ruleName": "Rule001",
          "rulePriority": 1,
          "ruleRewards": [
            {
              "rewardDetails": {
                "discountLevel": "Line",
                "discountProduct": "Printer Paper",
                "discountType": "AmountOff",
                "discountValue": "2.0",
                "discountAppliedAt": "LineItem"
              },
              "rewardType": "ProvideDiscount"
            }
          ]
        }
      ],
      "promotionId": "0c8DX00000001h5YAA",
      "promotionLimits": [],
      "startDateTime": "2025-11-03T12:44:00.000Z",
      "termsAndCondition": "&lt;p&gt;Promo_Printer_Child&lt;/p&gt;"
    }
  ]
}
```

## Related Topics

- Promotion Coupon Availability (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_promotion_coupon_availability.htm)
- Promotion Rules List (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_promotion_rules_list.htm)
- Promotion Limit (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_promotion_limit.htm)
