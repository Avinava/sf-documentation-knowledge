---
title: "Renew Insurance Policy Action"
domain: insurance-developer-guide
topic: renew-insurance-policy-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.705Z
estimatedTokens: 190
keywords: [Renew, Insurance, Policy, Action, user, inputs, represent, REST, HTTP, Outputs]
---

# Renew Insurance Policy Action

> Renew an insurance policy by using a set of user inputs that represent policy
    details.

# Renew Insurance Policy Action

Renew an insurance policy by using a set of user inputs that represent policy details.

This action is available in API version 63.0 and later.

## Supported REST HTTP Methods

**URI**

/services/data/v66.0/actions/standard/renewInsurancePolicy

**Formats**

JSON

**HTTP Methods**

POST

**Authentication**

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| renewPolicyIAInputRep | TypeApex classDescriptionAn Apex ConnectApi.RenewPolicyIAInputRep record that contains the details of the policy to be renewed. |

## Outputs

| Output | Details |
| --- | --- |
| renewedPolicyId | TypeStringDescriptionThe ID of the renewed policy. |

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
      "RenewPolicyIAInputRep": {
        "contextId": "d767b27ec095f9f95c5a34299e3bd6f507df23e8d0692dfed17f98dcb5b661b6",
        "policyId": "0YTxx00000001ovGAA",
        "insurancePolicy": {
          "policyName": "Renewed_Auto_Policy_00002",
          "policyNumber": "Renewed Auto Policy 00002",
          "effectiveFromDate": "2025-01-01",
          "effectiveToDate": "2025-12-31"
        },
        "transactionRecord": {
          "name": "Renew Transaction"
        },
        "additionalInput": [
          {
            "instanceKey": "AutoBundle2",
            "additionalFieldsList": [
              {
                "key": "AssetDescription__c",
                "value": "Test_AssetDescription__c"
              },
              {
                "key": "SourceSystem",
                "value": "Test_SourceSystem"
              }
            ]
          },
          {
            "instanceKey": "AutoDriver",
            "additionalFieldsList": [
              {
                "key": "ParticipantName",
                "value": "Test_ParticipantName"
              },
              {
                "key": "Participant_Hometown__c",
                "value": "Test_Participant_Hometown__c"
              }
            ]
          },
          {
            "instanceKey": "AutoRoot",
            "additionalFieldsList": [
              {
                "key": "Primary_Policy_Holder__c",
                "value": "Test_Primary_Policy_Holder__c"
              },
              {
                "key": "PolicyDescription",
                "value": "Test_PolicyDescription"
              }
            ]
          },
          {
            "instanceKey": "AutoBundle2_AutoComp1",
            "additionalFieldsList": [
              {
                "key": "Coverage_Description__c",
                "value": "Test_Coverage_Description__c"
              },
              {
                "key": "Description",
                "value": "Test_Description"
              }
            ]
          }
        ]
      }
    }
  ]
}
```

```
[
  {
    "actionName": "renewInsurancePolicy",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "renewedPolicyId": "0YTSG000000PgX74AK"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
