---
title: "Process Policy Limits Input"
domain: insurance-developer-guide
topic: process-policy-limits-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:51.306Z
estimatedTokens: 155
keywords: [Process, Policy, Limits, processing, claim, loss, item]
---

> Input representation for processing policy limits for a claim loss item.

# Process Policy Limits Input

Input representation for processing policy limits for a claim loss item.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adjusted​Amount | Double | Amount after adjustments are made based on the current standings of the policy limits. | Optional | 65.0 |
| benefitName | String | Name of the specific benefit or sub-coverage that the loss item applies to. | Optional | 65.0 |
| limitUnit​Count | Integer | Unit count that the payment detail represents.Default value is 1. | Optional | 65.0 |

## Code Examples

```
{
  "adjustedAmount": 1250.00,
  "benefitName": "Collision Coverage",
  "limitUnitCount": 1
}
```
