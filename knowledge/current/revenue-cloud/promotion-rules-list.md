---
title: "Promotion Rules List"
domain: revenue-cloud
topic: promotion-rules-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.810Z
estimatedTokens: 141
keywords: [Promotion, Rules, Output, representation, eligible]
---

# Promotion Rules List

> Output representation of the details of the rules of an eligible promotion.

# Promotion Rules List

Output representation of the details of the rules of an eligible promotion.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| ruleName | String | Rule name in the promotion which is eligible for rewards. | Big, 66.0 | 66.0 |
| rulePriority | Integer | Rule priority in the promotion which is eligible for rewards. | Big, 66.0 | 66.0 |
| ruleRewards | Promotion Reward Details[] | Rewards associated with the eligible rule. | Big, 66.0 | 66.0 |

## Code Examples

```
{
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
  ]
}
```

## Related Topics

- Promotion Reward Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_promotion_reward_details.htm)
