---
title: "Verify Policy Coverage Input"
domain: insurance-developer-guide
topic: verify-policy-coverage-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.014Z
estimatedTokens: 126
keywords: [Verify, Policy, Coverage, Input, representation, coverage's, applicability, loss, date, under, insurance]
---

# Verify Policy Coverage Input

> Input representation of a policy coverage's applicability for a specified loss date under an insurance policy.

# Verify Policy Coverage Input

Input representation of a policy coverage's applicability for a specified loss date under an insurance policy.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| insuredAsset​Or​ParticipantId | String | ID of the insured asset or participant that's related to the policy coverage. | Required | 65.0 |
| lossDate | String | Date on which the incident occurred. | Required | 65.0 |

## Code Examples

```
{
  "lossDate": "2025-09-13",
  "insuredAssetOrParticipantId": "0kaxx000000001dEAA"
}
```
