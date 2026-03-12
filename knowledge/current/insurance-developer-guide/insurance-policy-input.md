---
title: "Insurance Policy Input"
domain: insurance-developer-guide
topic: insurance-policy-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.862Z
estimatedTokens: 245
keywords: [Insurance, Policy, Input, representation]
---

# Insurance Policy Input

> Input representation of insurance policy details.

# Insurance Policy Input

Input representation of insurance policy details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveFromDate | String | Date that the policy is effective from.This property isn't applicable to the policy endorsement and reinstatement APIs. | Optional | 63.0 |
| effectiveToDate | String | Expiration date of the policy.This property isn't applicable to the policy endorsement and reinstatement APIs. | Optional | 63.0 |
| policyName | String | Name of the insurance policy. | Optional | 63.0 |
| policyNumber | String | Number of the policy. | Optional | 63.0 |
| referencePolicy​Number | String | Reference number that's used to link policies across terms.If not specified, policies are linked by the insurance policy ID.This property is applicable to the Issue Policy API and supports both single-root and multi-root policies. | Optional | 65.0 |

## Code Examples

```
insurancePolicy": {
  "policyName": "Mr. Bret Lees Policy",
  "policyNumber": "Policy-Bret-OneYear",
  "effectiveFromDate": "2024-01-01",
  "effectiveToDate": "2024-10-31",
  "referencePolicyNumber": "00AXSYH567INS"
}
```
