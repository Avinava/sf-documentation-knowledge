---
title: "Recalculate Adjustments Input"
domain: insurance-developer-guide
topic: recalculate-adjustments-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.996Z
estimatedTokens: 122
keywords: [Recalculate, Adjustments, Input, representation, recalculating, payment]
---

# Recalculate Adjustments Input

> Input representation for recalculating the adjustments for existing payment details.

# Recalculate Adjustments Input

Input representation for recalculating the adjustments for existing payment details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimedAmount | Double | Amount requested by the claimant when submitting the loss. | Optional | 66.0 |
| paymentDetailId | String | ID of the claim coverage payment detail for recalculating adjustments. | Optional | 66.0 |

## Code Examples

```
{
  "claimedAmount": 1200.00,
  "paymentDetailId": "0l2xx0000000001CAA"
}
```
