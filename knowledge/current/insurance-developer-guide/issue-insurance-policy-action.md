---
title: "Issue Insurance Policy Action"
domain: insurance-developer-guide
topic: issue-insurance-policy-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.657Z
estimatedTokens: 188
keywords: [Issue, Insurance, Policy, Action, user, inputs, represent, REST, HTTP, Outputs, Usage]
---

# Issue Insurance Policy Action

> Issue an insurance policy by using a set of user inputs that represent policy
        details.

# Issue Insurance Policy Action

Issue an insurance policy by using a set of user inputs that represent policy details.

This action is available in API version 63.0 and later.

## Supported REST HTTP Methods

**URI**

/services/data/v66.0/actions/standard/issueInsurancePolicy

**Formats**

JSON

**HTTP Methods**

POST

**Authentication**

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| issuePolicyIAInputRep | TypeApex classDescriptionAn Apex ConnectApi.IssuePolicyIAInputRep record that contains the details of the policy to be issued. |

## Outputs

| Output | Details |
| --- | --- |
| issuedPolicyId | TypeStringDescriptionThe ID of the issued policy. |

## Usage

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
           "IssuePolicyIAInputRep": {
               "contextId": "c98a08a0a9725b7a7d42c35d02e49d80c77a5aae4ea687b0bf09a7997d2af3d3",
               "insurancePolicy": {
                   "policyName": "Test Auto Ins policy Via REST",
                   "policyNumber": "PLC5678987",
                   "effectiveFromDate" : "2024-01-01",
                   "effectiveToDate" : "2024-12-31",
                   "standardFee": "1011"
               },
               "transactionRecord": {
                   "name": "Sold Policy Transaction"
               },
               "additionalInput": [
                   {
                       "instanceKey": "AutoBundle2",
                       "additionalFieldsList": [
                           {
                               "key":"AssetDescription__c",
                               "value": "Test_AssetDescription__c"
                           },
                           {
                               "key":"SourceSystem",
                               "value": "Test_SourceSystem"
                           }
                       ]
                   },
                   {
                       "instanceKey": "AutoDriver",
                       "additionalFieldsList":[
                           {
                               "key": "ParticipantName",
                               "value": "Test_ParticipantName"
                           },
                           {
                               "key":"Participant_Hometown__c",
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
                               "key":"PolicyDescription",
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
    "actionName": "issueInsurancePolicy",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "issuedPolicyId": "0YTSG000000PgSH4A0"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
