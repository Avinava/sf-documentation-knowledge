---
title: "Endorse Insurance Policy Action"
domain: insurance-developer-guide
topic: endorse-insurance-policy-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.582Z
estimatedTokens: 195
keywords: [Endorse, Insurance, Policy, Action, user, inputs, represent, REST, HTTP, Outputs]
---

# Endorse Insurance Policy Action

> Endorse an insurance policy by using a set of user inputs that represent policy
        details.

# Endorse Insurance Policy Action

Endorse an insurance policy by using a set of user inputs that represent policy details.

This action is available in API version 63.0 and later.

## Supported REST HTTP Methods

**URI**

/services/data/v66.0/actions/standard/endorseInsurancePolicy

**Formats**

JSON

**HTTP Methods**

POST

**Authentication**

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| endorsePolicyIAInputRep | TypeApex classDescriptionAn Apex ConnectApi.EndorsePolicyIAInputRep record that contains the details of the policy to be endorsed. |

## Outputs

| Output | Details |
| --- | --- |
| endorsedPolicyId | TypeStringDescriptionThe ID of the endorsed insurance policy. |

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
           "EndorsePolicyIAInputRep": {
               "contextId": "5dbc40312f69b2d8cb4e7042a700d06f32fc5b9df7de3eabc94aa19a66ed77b3",
               "policyId": "0YTxx00000001IfGAI",
               "effectiveDate" : "2024-06-06",
               "insurancePolicy": {
                   "policyName": "Endorsed Test Auto Ins policy",
                   "policyNumber": "PLC5678987"
               },
               "transactionRecord": {
                   "name": "Endorsed Policy Transaction"
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
    "actionName": "endorseInsurancePolicy",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "endorsedPolicyId": "0YTSG000000PgVV4A0"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
