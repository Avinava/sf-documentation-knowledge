---
title: "Cancel Insurance Policy Action"
domain: insurance-developer-guide
topic: cancel-insurance-policy-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.498Z
estimatedTokens: 213
keywords: [Cancel, Insurance, Policy, Action, user, inputs, represent, REST, HTTP, Outputs]
---

# Cancel Insurance Policy Action

> Cancel an insurance policy by using a set of user inputs that represent policy
    details.

# Cancel Insurance Policy Action

Cancel an insurance policy by using a set of user inputs that represent policy details.

This action is available in API version 63.0 and later.

## Supported REST HTTP Methods

**URI**

/services/data/v66.0/actions/standard/cancelInsurancePolicy

**Formats**

JSON

**HTTP Methods**

POST

**Authentication**

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| cancelPolicyIAInputRep | TypeApex classDescriptionAn Apex ConnectApi.CancelPolicyIAInputRep record that contains details of the policy to be canceled. |

## Outputs

| Output | Details |
| --- | --- |
| cancelPolicyIAOutputRep | TypeApex classDescriptionAn Apex ConnectApi.CancelPolicyIAOutputRep record that contains the details of the policy that was canceled. |

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
           "CancelPolicyIAInputRep": {
               "policyId": "0YTxx00000001H3GAI",
               "effectiveDate": "2024-09-08",              
               "transactionRecord":{                            
                   "name": "Cancel Transaction"
               }
           }
       }
   ]
}
```

```
{
  "actionName": "cancelInsurancePolicy",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": {
    "CancelPolicyIAOutputRep": {
      "impactedPolicyVersions": [
        "0YTSG000000PgSH4A0"
      ],
      "refund": {
        "premium": "133.4",
        "tax": "21.3",
        "fee": "32.3"
      },
      "sortOrder": -1,
      "version": 1
    }
  }
}
```
