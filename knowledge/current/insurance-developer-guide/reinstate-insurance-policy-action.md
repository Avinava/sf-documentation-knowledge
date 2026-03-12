---
title: "Reinstate Insurance Policy Action"
domain: insurance-developer-guide
topic: reinstate-insurance-policy-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.696Z
estimatedTokens: 230
keywords: [Reinstate, Insurance, Policy, Action, previously, canceled, REST, HTTP, Inputs, Outputs]
---

# Reinstate Insurance Policy Action

> Reinstate a previously canceled insurance policy.

# Reinstate Insurance Policy Action

Reinstate a previously canceled insurance policy.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/reinstateInsurancePolicy

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| reinstatePolicy​InputRep | TypeApex classDescriptionRequired.An Apex ConnectApi__ReinstatePolicyInputRep record that contains the policy details to reinstate the insurance policy. |

## Outputs

| Output | Details |
| --- | --- |
| reinstatedPolicyId | TypestringDescriptionID of the reinstated insurance policy. |

## Example

POST

This is a sample request to call this invocable action.

```

```

This is a sample request to call this invocable action from Apex code.

```

```

This is a sample response when you call this action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "ReinstatePolicyInputRep": {
        "policyId": "0YTxx0000004CdeFGH",
        "effectiveDate": "2024-12-30",
        "insurancePolicy": {
          "policyName": "Auto Insurance",
          "policyNumber": "PLC5678987",
          "effectiveFromDate": "2024-01-01",
          "effectiveToDate": "2024-12-31",
          "referencePolicyNumber": "PLC56011213"
        },
        "transactionRecord": {
          "name": "Cancel Policy Transaction"
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

```apex
// Create the standard Invocable Action for policy reinstatement
Invocable.Action action = Invocable.Action.createStandardAction('reinstateInsurancePolicy');

// Instantiate the input object for the policy reinstatement
ConnectApi.ReinstatePolicyInputRep policyInput = new ConnectApi.ReinstatePolicyInputRep();

// Required: Set the Policy ID of the policy to be reinstated
policyInput.policyId = '0YTxx00000000PpGAI';

// Optional: Populate Insurance Policy details
ConnectApi.InsPolicyIAInputRep insurancePolicy = new ConnectApi.InsPolicyIAInputRep();
insurancePolicy.policyName = 'Health Insurance Policy Reinstated';
insurancePolicy.policyNumber = 'HIPE12';

// Assign the insurance policy input to the main input object
policyInput.insurancePolicy = insurancePolicy;

// Optional: Add additional input fields (custom fields, etc.)
List<ConnectApi.AdditionalFieldIARep> additionalFields = new List<ConnectApi.AdditionalFieldIARep>();

ConnectApi.AdditionalFieldIARep additionalFieldElement = new ConnectApi.AdditionalFieldIARep();
additionalFieldElement.key = 'Currency__c';
additionalFieldElement.value = '6700';

additionalFields.add(additionalFieldElement);

// Create a wrapper for the additional input fields per policy instance

List<ConnectApi.InsPolicyAddlInputIARep> addlInputIARep = new List<ConnectApi.InsPolicyAddlInputIARep>();

ConnectApi.InsPolicyAddlInputIARep addlInputIARepElement = new ConnectApi.InsPolicyAddlInputIARep();
addlInputIARepElement.instanceKey = 'AutoSilver'; // Logical key representing the policy instance
addlInputIARepElement.additionalFieldsList = additionalFields;

addlInputIARep.add(addlInputIARepElement);

// Assign additional input to the main input object
policyInput.additionalInput = addlInputIARep;

// Optional: Populate Transaction record information
ConnectApi.InsPolicyTrxnIAInputRep transactionRecord = new ConnectApi.InsPolicyTrxnIAInputRep();
transactionRecord.name = 'Apex IA Transaction'; // A label for the transaction
policyInput.transactionRecord = transactionRecord;


action.setInvocationParameter('ReinstatePolicyInputRep', policyInput);
List<Invocable.Action.Result> results = action.invoke();

System.debug('Reinstate Invocable Action result = ' + results);
```

```
[
  {
    "actionName": "reinstateInsurancePolicy",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "reinstatedPolicyId": "15Uxx0000004CUWEA2"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```

## Related Topics

- ConnectApi__ReinstatePolicyInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_reinstate_policy_i_a_input_re.htm)
