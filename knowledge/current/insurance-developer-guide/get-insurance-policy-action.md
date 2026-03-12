---
title: "Get Insurance Policy Action"
domain: insurance-developer-guide
topic: get-insurance-policy-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.630Z
estimatedTokens: 165
keywords: [Insurance, Policy, Action, REST, HTTP, Inputs, Outputs]
---

# Get Insurance Policy Action

> Get the details of an insurance policy.

# Get Insurance Policy Action

Get the details of an insurance policy.

This action is available in API version 63.0 and later.

## Supported REST HTTP Methods

**URI**

/services/data/v66.0/actions/standard/getInsurancePolicy

**Formats**

JSON

**HTTP Methods**

POST

**Authentication**

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| insurancePolicyId | TypeStringDescriptionThe ID of the insurance policy to be retrieved. |

## Outputs

| Output | Details |
| --- | --- |
| contextId | TypeStringDescriptionThe context ID of the retrieved insurance policy. |

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
           "policyId": "0YTxx00000001H3GAI"
       }
   ]
}
```

```
[
  {
    "actionName": "getInsurancePolicy",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "contextId": "0000000i18tq18g00291753332964253e35d47202c0c428785435cdfa2f44ae8"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
