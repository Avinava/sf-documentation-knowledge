---
title: "Policy Limits (POST)"
domain: insurance-developer-guide
topic: policy-limits-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.124Z
estimatedTokens: 275
keywords: [Policy, Limits, POST, insurance, limit, records, defined, product, attributes, coverages]
---

# Policy Limits (POST)

> Create insurance policy limit records for the specified policy based on its defined
  product attributes and coverages.

# Policy Limits (POST)

Create insurance policy limit records for the specified policy based on its defined product attributes and coverages.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Path parameter for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| policyId | String | ID of the insurance policy for which the insurance policy limit records must be created. | Required | 65.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeScopes | String[] | Attribute scopes for which the policy limit records must be created. Valid values are Policy, PolicyCoverage, Claim, ClaimCoverage. | Optional | 65.0 |

Response body for POST

[Generate Policy Limits Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_create_policy_limits.htm "Output representation for the created insurance policy limit records.")

## Code Examples

```
/connect/insurance/policies/policyId/generate-limits
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/policies/0YTx0000000001qEAA/generate-limits
```

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

## Related Topics

- Generate Policy Limits Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_create_policy_limits.htm)
