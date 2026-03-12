---
title: "Promotion Reward Details"
domain: revenue-cloud
topic: promotion-reward-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.265Z
estimatedTokens: 141
keywords: [Promotion, Reward, Details, Output, representation, details, rewards, eligible, promotion, rule.]
---

# Promotion Reward Details

> Output representation of the details of the rewards of an eligible promotion
    rule.

# Promotion Reward Details

Output representation of the details of the rewards of an eligible promotion rule.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| rewardDetails | Map<String, Object> | Details of the reward offered by the promotion rule. | Big, 66.0 | 66.0 |
| rewardType | String | Reward type of the promotion. Valid values are:AssignBadgeAssignGameCreditFixedPointsCreditMultiplierPointsGiveFreeProductIssueVoucherProvideDiscount | Big, 66.0 | 66.0 |

## Code Examples

```
{
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
```
