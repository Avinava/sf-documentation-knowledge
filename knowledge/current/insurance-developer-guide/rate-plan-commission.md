---
title: "Rate Plan Commission"
domain: insurance-developer-guide
topic: rate-plan-commission
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.755Z
estimatedTokens: 344
keywords: [Rate, Plan, Commission, Output, representation]
---

# Rate Plan Commission

> Output representation details of the rate plan commission.

# Rate Plan Commission

Output representation details of the rate plan commission.

JSON example

This example shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| amountEndRange | Double | End range of amount for graded percent of premium. | Small, 63.0 | 63.0 |
| amountStartRange | Double | Start range of amount for graded percent of premium. | Small, 63.0 | 63.0 |
| fee | Double | Commission fee when flat fee or capitated fee is selected. | Small, 63.0 | 63.0 |
| feePercent | Double | Percentage of fee earned as commission when flat percentage of fee is selected. | Small, 63.0 | 63.0 |
| id | String | ID of the rate plan commission. | Small, 63.0 | 63.0 |
| numberEndRange | Integer | End range of the grade volume, which represents the employee count. | Small, 63.0 | 63.0 |
| numberStartRange | Integer | Start range of the grade volume, which represents the employee count. | Small, 63.0 | 63.0 |
| premiumPercent | Double | Percentage of premium earned as commission when graded percent of premium or flat percent of premium is selected. | Small, 63.0 | 63.0 |
| type | String | Type of commission structure. Valid values are:Flat Percent of PremiumFlat FeeGraded Percent of PremiumGraded VolumeCapitated FeeFlat percent of Fee | Small, 63.0 | 63.0 |

## Code Examples

```
[
  {
    "id": "rpc111",
    "premiumPercent": null,
    "type": "GradedPercent",
    "amountStartRange": 0,
    "amountEndRange": 1000
  },
  {
    "id": "rpc112",
    "premiumPercent": null,
    "type": "GradedPercent",
    "amountStartRange": 1001,
    "amountEndRange": 10000
  },
]
```
