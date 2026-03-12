---
title: "Endorse Multi-Root Insurance Policy Action"
domain: insurance-developer-guide
topic: endorse-multi-root-insurance-policy-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.589Z
estimatedTokens: 288
keywords: [Endorse, Multi-Root, Insurance, Policy, Action, endorsement, apply, updates, changes, associated, child, policies, REST, HTTP, Inputs]
---

# Endorse Multi-Root Insurance Policy Action

> Create an endorsement for an existing multi-root insurance policy to
            apply updates or changes to the policy and its associated child
        policies.

# Endorse Multi-Root Insurance Policy Action

Create an endorsement for an existing multi-root insurance policy to apply updates or changes to the policy and its associated child policies.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/endorseMultiRootInsPolicy

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| endorseMultiRootPolicyInputRep | TypeApex-definedDescriptionRequired. An Apex ConnectApi.EndorseMultiRootPolicyInputRep record that contains the details of the policy to be endorsed. |

## Outputs

| Output | Details |
| --- | --- |
| jobIdentifier | TypestringDescriptionA unique system-generated ID for the job that processes the endorsement of the multi-root insurance policy. |

## Example

POST

This sample request is for the Endorse Multi-Root Insurance Policy action.

```

```

This is a sample code to call the Endorse Multi-Root Insurance Policy action from Apex.

```

```

This sample response is for the Endorse Multi-Root Insurance Policy action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "endorseMultiRootPolicyInputRep": {
        "contextId": "5dbc40312f69b2d8cb4e7042a700d06f32fc5b9df7de3eabc94aa19a66ed77b3",
        "policyId": "0YTxx00000001IfGAI",
        "effectiveDate": "2024-06-06",
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
public with sharing class MultiRootPolicyEndorsementInvocable {
    
    /**
     * Execute Multi-Root Policy Endorsement with parameters map
     * Usage: MultiRootPolicyEndorsementInvocable.executeMultiRootEndorsement(paramsMap);
     * 
     * @param params Map of parameters:
     *   - contextId (String, REQUIRED)
     *   - policyId (String, REQUIRED)
     *   - effectiveDate (String, REQUIRED)
     *   - policyName (String, optional)
     *   - policyNumber (String, optional)
     *   - transactionName (String, optional)
     *   - additionalFields (Map<String, Map<String, String>>, optional)
     */
    public static void executeMultiRootEndorsement(Map<String, Object> params) {
        // Extract and validate contextId (REQUIRED)
        String contextId = (String) params.get('contextId');
        if (String.isBlank(contextId)) {
            System.debug('ERROR: contextId is required');
            return;
        }
        
        // Extract and validate policyId (REQUIRED)
        String policyId = (String) params.get('policyId');
        if (String.isBlank(policyId)) {
            System.debug('ERROR: policyId is required');
            return;
        }
        
        
        // Extract and validate effectiveDate (REQUIRED)
        String effectiveDate = (String) params.get('effectiveDate');
        if (String.isBlank(effectiveDate)) {
            System.debug('ERROR: effectiveDate is required');
            return;
        }
        
        // Multi-Root Endorse Policy IA - Create the standard Invocable Action
        Invocable.Action action = Invocable.Action.createStandardAction('endorseMultiRootInsPolicy');
        
        // Instantiate the IA input object for Multi-Root Policy Endorsement
        // IMPORTANT: Use EndorseMultiRootPolicyInputRep, NOT EndorsePolicyIAInputRep
        ConnectApi.EndorseMultiRootPolicyInputRep policyInput = 
            new ConnectApi.EndorseMultiRootPolicyInputRep();
        
        // Set context ID (REQUIRED)
        policyInput.contextId = contextId;

        // Set policy ID (REQUIRED)
        policyInput.policyId = policyId;
        
        // Set effectiveDate (REQUIRED)
        policyInput.effectiveDate = effectiveDate;
        
        // Extract optional parameters
        String policyName = (String) params.get('policyName');
        String policyNumber = (String) params.get('policyNumber');
        String transactionName = (String) params.get('transactionName');
        Map<String, Map<String, String>> additionalFields = 
            (Map<String, Map<String, String>>) params.get('additionalFields');
        
        // Populate Insurance Policy details (using IA classes) - all optional
        if (!String.isBlank(policyName) || !String.isBlank(policyNumber)) {
            
            ConnectApi.InsPolicyIAInputRep insurancePolicy = 
                new ConnectApi.InsPolicyIAInputRep();
            
            if (!String.isBlank(policyName)) {
                insurancePolicy.policyName = policyName;
            }
            if (!String.isBlank(policyNumber)) {
                insurancePolicy.policyNumber = policyNumber;
            }
            policyInput.insurancePolicy = insurancePolicy;
        }
        
        // Populate Transaction record (using IA transaction representation) - optional
        if (!String.isBlank(transactionName)) {
            ConnectApi.InsPolicyTrxnIAInputRep transactionRecord = 
                new ConnectApi.InsPolicyTrxnIAInputRep();
            transactionRecord.name = transactionName;
            policyInput.transactionRecord = transactionRecord;
        }
        
        // Populate additional input for multi-root policies - optional
        if (additionalFields != null && !additionalFields.isEmpty()) {
            List<ConnectApi.InsPolicyAddlInputIARep> additionalInputList = new List<ConnectApi.InsPolicyAddlInputIARep>();
            
            for (String instanceKey : additionalFields.keySet()) {
                ConnectApi.InsPolicyAddlInputIARep additionalInput = 
                    new ConnectApi.InsPolicyAddlInputIARep();
                
                // Set instance key (e.g., "AutoSilver", "familyHealth")
                additionalInput.instanceKey = instanceKey;
                
                // Build additional fields list for this instance
                Map<String, String> fieldsMap = additionalFields.get(instanceKey);
                if (fieldsMap != null && !fieldsMap.isEmpty()) {
                    List<ConnectApi.AdditionalFieldIARep> fieldsList = new List<ConnectApi.AdditionalFieldIARep>();
                    
                    for (String fieldKey : fieldsMap.keySet()) {
                        ConnectApi.AdditionalFieldIARep field = new ConnectApi.AdditionalFieldIARep();
                        field.key = fieldKey;
                        field.value = fieldsMap.get(fieldKey);
                        fieldsList.add(field);
                    }
                    
                    additionalInput.additionalFieldsList = fieldsList;
                }
                
                additionalInputList.add(additionalInput);
            }
            
            policyInput.additionalInput = additionalInputList;
        }
        
        // Set invocation parameters
        // IMPORTANT: Parameter name is endorseMultiRootPolicyInputRep (camelCase)
        action.setInvocationParameter('endorseMultiRootPolicyInputRep', policyInput);
        
        System.debug('Starting Multi-Root Policy Endorsement Invocable Action (endorseMultiRootInsPolicy)...');
        System.debug('Context ID: ' + contextId);
        if (!String.isBlank(policyName)) {
            System.debug('Policy Name: ' + policyName);
        }
        
        try {
            // Invoke the action
            List<Invocable.Action.Result> results = action.invoke();
            
            System.debug('Multi-Root Policy Endorsement IA result = ' + results);
            
            // Process results
            for (Invocable.Action.Result result : results) {
                if (result.isSuccess()) {
                    System.debug('SUCCESS: Multi-Root Policy Endorsement completed successfully!');
                    Object outputValue = result.getOutputParameters().get('jobIdentifier');
                    if (outputValue != null) {
                        System.debug('Job Identifier: ' + outputValue);
                    } else {
                        System.debug('Multi-Root Policy Endorsement job started - result: ' + result.getOutputParameters());
                    }
                } else {
                    System.debug('ERROR: Multi-Root Policy Endorsement failed');
                    System.debug('Error Details: ' + result.getErrors());
                }
            }
            
        } catch (Exception e) {
            System.debug('EXCEPTION in Multi-Root Policy Endorsement Invocable Action: ' + e.getMessage());
            System.debug('Stack Trace: ' + e.getStackTraceString());
        }
    }
}

/*
 * USAGE EXAMPLE:
 * Copy and paste this code into Developer Console Execute Anonymous Window
 */
Map<String, Object> params = new Map<String, Object>();
params.put('contextId', '0000000i18tq18g002917629276616310d09368a7cb24db687f6fd95af4b9954');
params.put('policyId', '0YTSM0000001MzN4AU');
params.put('policyName', 'James Multi-Root Policy Apex IA');
params.put('effectiveDate', '2026-08-01');
params.put('transactionName', 'Endorsement Second');


// Build additional fields configuration
Map<String, Map<String, String>> additionalFields = new Map<String, Map<String, String>>();

// Configuration for AutoSilver instance
Map<String, String> autoFields = new Map<String, String>();
autoFields.put('PolicyName', 'James Auto Policy IA Apex');
autoFields.put('Name', 'James Auto Policy');
additionalFields.put('AutoSilver', autoFields);

// Configuration for FamilyHealth instance
Map<String, String> healthFields = new Map<String, String>();
healthFields.put('PolicyName', 'James Medical Policy IA Apex');
healthFields.put('Name', 'James Medical Policy');
healthFields.put('Email__c', 'medical@james.co');
additionalFields.put('familyHealth', healthFields);

params.put('additionalFields', additionalFields);

MultiRootPolicyEndorsementInvocable.executeMultiRootEndorsement(params);
```

```
[
  {
    "actionName": "endorseMultiRootInsPolicy",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "jobIdentifier": "750x00000000001AAA"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
