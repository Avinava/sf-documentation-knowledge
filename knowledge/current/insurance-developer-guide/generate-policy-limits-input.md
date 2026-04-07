---
title: "Generate Policy Limits Input"
domain: insurance-developer-guide
topic: generate-policy-limits-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:50.805Z
estimatedTokens: 106
keywords: [Generate, Policy, Limits, creating, insurance, limit, records]
---

> Input representation for creating insurance policy limit records.

# Generate Policy Limits Input

Input representation for creating insurance policy limit records.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeScopes | String[] | Attribute scopes for which the policy limit records must be created. Valid values are Policy, PolicyCoverage, Claim, ClaimCoverage. | Optional | 65.0 |

## Code Examples

```
{
  "attributeScopes": {
    "list": [
        "Policy",
        "PolicyCoverage"
    ]
  }
}
```
