---
title: "Eligible Promotions Response"
domain: revenue-cloud
topic: eligible-promotions-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.434Z
estimatedTokens: 93
keywords: [Eligible, Promotions, Output, representation]
---

# Eligible Promotions Response

> Output representation of the details of the eligible promotions.

# Eligible Promotions Response

Output representation of the details of the eligible promotions.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| eligiblePromotions | Promotion Details Response | List of eligible promotions for the specified line items. | Big, 66.0 | 66.0 |

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

- Promotion Details Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_promotion_details.htm)
