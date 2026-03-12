---
title: "Policy Limit Tracking Details"
domain: insurance-developer-guide
topic: policy-limit-tracking-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.496Z
estimatedTokens: 377
keywords: [Policy, Limit, Tracking, Output, representation, insurance]
---

# Policy Limit Tracking Details

> Output representation for the insurance policy limit tracking details.

# Policy Limit Tracking Details

Output representation for the insurance policy limit tracking details.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| benefitName | String | Name of the benefit that's associated with the policy limit tracking. | Big, 65.0 | 65.0 |
| calcInitial​Amount | Double | Calculated amount that's used as the base value for tracking the policy attribute consumption. | Big, 65.0 | 65.0 |
| calcInitial​Value | Integer | Count that's used as the base for tracking the policy attribute consumption. | Big, 65.0 | 65.0 |
| category | String | Category of the associated attribute. | Big, 65.0 | 65.0 |
| policyLimit​Id | String | ID of the insurance policy limit record. | Big, 65.0 | 65.0 |
| postedAmount | Double | Amount that's requested by the claimant when submitting the loss. | Big, 65.0 | 65.0 |
| postedValue | Integer | Count that's populated when submitting the loss. | Big, 65.0 | 65.0 |
| remaining​Amount | Double | Remaining amount to carry forward for the next loss processing. | Big, 65.0 | 65.0 |
| remaining​Value | Integer | Remaining value to carry forward for the next loss processing. | Big, 65.0 | 65.0 |
| scope | String | Scope for tracking the associated attribute. | Big, 65.0 | 65.0 |
| totalUsed​Amount | Double | Total amount that's used till date. | Big, 65.0 | 65.0 |
| totalUsed​Value | Integer | Total value that's used till date. | Big, 65.0 | 65.0 |

## Code Examples

```
"insPolicyLimitTrackings": [
  {
    "policyLimitId": "0plxx0000000ABCDEF",
    "category": "Deductible",
    "scope": "PerMember",
    "postedAmount": 750.00,
    "postedValue": null,
    "calcInitialAmount": 500.00,
    "calcInitialValue": null,
    "remainingAmount": 750.00,
    "remainingValue": null,
    "totalUsedAmount": 1250.00,
    "totalUsedValue": null
  }
]
```
