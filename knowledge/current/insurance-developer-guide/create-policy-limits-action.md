---
title: "Create Policy Limits Action"
domain: insurance-developer-guide
topic: create-policy-limits-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.555Z
estimatedTokens: 218
keywords: [Policy, Limits, Action, insurance, limit, records, coverage, root, attributes, REST, HTTP, Inputs, Outputs]
---

# Create Policy Limits Action

> Create insurance policy limit records for policy coverage and root
  attributes.

# Create Policy Limits Action

Create insurance policy limit records for policy coverage and root attributes.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createPolicyLimits

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| createPolicyLimitsInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.CreatePolicyLimitsInputRep record that contains the details to create the policy limits. |

## Outputs

| Output | Details |
| --- | --- |
| createPolicyLimitsOutputRep | TypeApex-definedDescriptionAn Apex ConnectApi.CreatePolicyLimitsOutputRep record that contains the IDs for the insurance policy limit records that are created. |

## Example

Sample Request

```

```

Sample Response

```

```

## Code Examples

```
{
  "inputs": [
    {
      "createPolicyLimitsInputRep": {
        "attributeScopes": [
          "Policy",
          "PolicyCoverage"
        ],
        "policyId": "0YTx0000000001qEAA"
      }
    }
  ]
}
```

```
[
  {
    "actionName": "createPolicyLimits",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "createPolicyLimitsOutputRep": {
        "policyLimitIds": [
          "1plS70000004q2kIAA"
        ]
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```

## Related Topics

- ConnectApi.CreatePolicyLimitsInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_create_policy_limits_input_re.htm)
