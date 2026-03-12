---
title: "Calculate Adjustments Input"
domain: insurance-developer-guide
topic: calculate-adjustments-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.662Z
estimatedTokens: 131
keywords: [Calculate, Adjustments, Input, representation, calculating, claim, loss, item]
---

# Calculate Adjustments Input

> Input representation for calculating adjustments for the claim loss item.

# Calculate Adjustments Input

Input representation for calculating adjustments for the claim loss item.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| benefitName | String | Name of the specific benefit or sub-coverage that's associated with the coverage, as defined in the product attribute mapping. | Optional | 66.0 |
| claimedAmount | Double | Amount requested by the claimant when submitting the loss. | Required | 65.0 |

## Code Examples

```
{
  "benefitName": "Car Rental",
  "claimedAmount": 1500
}
```
