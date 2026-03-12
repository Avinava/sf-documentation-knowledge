---
title: "Claim Coverage Update Input"
domain: insurance-developer-guide
topic: claim-coverage-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.003Z
estimatedTokens: 156
keywords: [Claim, Coverage, Input, representation, updating]
---

# Claim Coverage Update Input

> Input representation for updating a claim coverage.

# Claim Coverage Update Input

Input representation for updating a claim coverage.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Fields | Object | Additional standard or custom fields to update the record. | Optional | 65.0 |
| expense​ReserveAmount | Double | Amount that's reserved to cover potential expenses while handling the claim, such as administrative or legal costs. | Optional | 65.0 |
| lossReserve​Amount | Double | Amount that's reserved to cover a potential payment for a loss. | Optional | 65.0 |

## Code Examples

```
{
  "expenseReserveAmount": 500.00,
  "lossReserveAmount": 2000.00,
  "additionalFields": {
    "Status": "Pending Review"
  }
}
```
