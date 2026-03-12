---
title: "Issue Multi-Root Insurance Policy Action"
domain: insurance-developer-guide
topic: issue-multi-root-insurance-policy-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.662Z
estimatedTokens: 289
keywords: [Issue, Multi-Root, Insurance, Policy, Action, new, along, associated, child, policies, asynchronously, REST, HTTP, Inputs, Outputs]
---

# Issue Multi-Root Insurance Policy Action

> Create a new multi-root insurance policy along with its associated
            child policies asynchronously.

# Issue Multi-Root Insurance Policy Action

Create a new multi-root insurance policy along with its associated child policies asynchronously.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/issueMultiRootInsurancePolicy

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| issueMultiRootPolicyInputRep | TypeApex-definedDescriptionRequired. An Apex ConnectApi.IssueMultiRootPolicyInputRep record that contains the details to create a new multi-root insurance policy along with its child policies. |

## Outputs

| Output | Details |
| --- | --- |
| jobIdentifier | TypestringDescriptionA unique system-generated ID for the asynchronous job that processes the issuance of a new multi-root insurance policy. |

## Example

POST

This sample request is for the Issue Multi-Root Insurance Policy action.

```

```

This is a sample code to call the Issue Multi-Root Insurance Policy action from Apex.

```

```

This sample response is for the Issue Multi-Root Insurance Policy action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "issueMultiRootPolicyInputRep": {
        "contextId": "c98a08a0a9725b7a7d42c35d02e49d80c77a5aae4ea687b0bf09a7997d2af3d3",
        "insurancePolicy": {
          "policyName": "Test Auto Ins policy Via REST",
          "policyNumber": "PLC5678987",
          "effectiveFromDate": "2024-01-01",
          "effectiveToDate": "2024-12-31",
          "referencePolicyNumber": "1011"
        },
        "transactionRecord": {
          "name": "Sold Policy Transaction"
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
public with sharing class MultiRootPolicyIssuanceInvocable {
    
    /**
     * Execute Multi-Root Policy Issuance with parameters map
     * Usage: MultiRootPolicyIssuanceInvocable.executeMultiRootIssuance(paramsMap);
     * 
     * @param params Map of parameters:
     *   - contextId (String, REQUIRED)
     *   - policyName (String, optional)
     *   - policyNumber (String, optional)
     *   - referencePolicyNumber (String, optional)
     *   - effectiveFromDate (String, optional)
     *   - effectiveToDate (String, optional)
     *   - transactionName (String, optional)
     *   - additionalFields (Map<String, Map<String, String>>, optional)
     */
    public static void executeMultiRootIssuance(Map<String, Object> params) {
        // Extract and validate contextId (REQUIRED)
        String contextId = (String) params.get('contextId');
        if (String.isBlank(contextId)) {
            System.debug('ERROR: contextId is required');
            return;
        }
        
        // Multi-Root Issue Policy IA - Create the standard Invocable Action
        Invocable.Action action = Invocable.Action.createStandardAction('issueMultiRootInsurancePolicy');
        
        // Instantiate the IA input object for Multi-Root Policy Issuance
        // IMPORTANT: Use IssueMultiRootPolicyInputRep, NOT IssuePolicyIAInputRep
        ConnectApi.IssueMultiRootPolicyInputRep policyInput = 
            new ConnectApi.IssueMultiRootPolicyInputRep();
        
        // Set context ID (REQUIRED)
        policyInput.contextId = contextId;
        
        // Extract optional parameters
        String policyName = (String) params.get('policyName');
        String policyNumber = (String) params.get('policyNumber');
        String referencePolicyNumber = (String) params.get('referencePolicyNumber');
        String effectiveFromDate = (String) params.get('effectiveFromDate');
        String effectiveToDate = (String) params.get('effectiveToDate');
        String transactionName = (String) params.get('transactionName');
        Map<String, Map<String, String>> additionalFields = 
            (Map<String, Map<String, String>>) params.get('additionalFields');
        
        // Populate Insurance Policy details (using IA classes) - all optional
        if (!String.isBlank(policyName) || !String.isBlank(policyNumber) || 
            !String.isBlank(referencePolicyNumber) || !String.isBlank(effectiveFromDate) || 
            !String.isBlank(effectiveToDate)) {
            
            ConnectApi.InsPolicyIAInputRep insurancePolicy = 
                new ConnectApi.InsPolicyIAInputRep();
            
            if (!String.isBlank(policyName)) {
                insurancePolicy.policyName = policyName;
            }
            if (!String.isBlank(policyNumber)) {
                insurancePolicy.policyNumber = policyNumber;
            }
            if (!String.isBlank(referencePolicyNumber)) {
                insurancePolicy.referencePolicyNumber = referencePolicyNumber;
            }
            if (!String.isBlank(effectiveFromDate)) {
                insurancePolicy.effectiveFromDate = effectiveFromDate;
            }
            if (!String.isBlank(effectiveToDate)) {
                insurancePolicy.effectiveToDate = effectiveToDate;
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
                
                // Set instance key (e.g., "AutoSilver", "FamilyHealth")
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
        // IMPORTANT: Parameter name is issueMultiRootPolicyInputRep (camelCase)
        action.setInvocationParameter('issueMultiRootPolicyInputRep', policyInput);
        
        System.debug('Starting Multi-Root Policy Issuance Invocable Action (issueMultiRootInsurancePolicy)...');
        System.debug('Context ID: ' + contextId);
        if (!String.isBlank(policyName)) {
            System.debug('Policy Name: ' + policyName);
        }
        
        try {
            // Invoke the action
            List<Invocable.Action.Result> results = action.invoke();
            
            System.debug('Multi-Root Policy Issuance IA result = ' + results);
            
            // Process results
            for (Invocable.Action.Result result : results) {
                if (result.isSuccess()) {
                    System.debug('SUCCESS: Multi-Root Policy Issuance completed successfully!');
                    Object outputValue = result.getOutputParameters().get('jobIdentifier');
                    if (outputValue != null) {
                        System.debug('Job Identifier: ' + outputValue);
                    } else {
                        System.debug('Multi-Root Policy Issuance job started - result: ' + result.getOutputParameters());
                    }
                } else {
                    System.debug('ERROR: Multi-Root Policy Issuance failed');
                    System.debug('Error Details: ' + result.getErrors());
                }
            }
            
        } catch (Exception e) {
            System.debug('EXCEPTION in Multi-Root Policy Issuance Invocable Action: ' + e.getMessage());
            System.debug('Stack Trace: ' + e.getStackTraceString());
        }
    }
}


/*
 * USAGE EXAMPLE:
 * Copy and paste this code into Developer Console Execute Anonymous Window
 */
Map<String, Object> params = new Map<String, Object>();
params.put('contextId', <your-context-id-here>);
params.put('policyName', 'James Multi-Root Policy');
params.put('policyNumber', 'James Multi-Root Policy');
params.put('referencePolicyNumber', 'James1234');
params.put('effectiveFromDate', '2026-01-01');
params.put('effectiveToDate', '2026-10-31');
params.put('transactionName', 'Sold Policy Transaction');

// Build additional fields configuration
Map<String, Map<String, String>> additionalFields = new Map<String, Map<String, String>>();

// Configuration for AutoSilver instance
Map<String, String> autoFields = new Map<String, String>();
autoFields.put('PolicyName', 'James Auto Policy');
autoFields.put('Name', 'James Auto Policy');
additionalFields.put(<your-instanceKey-goes-here>, autoFields);

// Configuration for FamilyHealth instance
Map<String, String> healthFields = new Map<String, String>();
healthFields.put('PolicyName', 'James Medical Policy');
healthFields.put('Name', 'James Medical Policy');
additionalFields.put(<your-instanceKey-goes-here>, healthFields);

params.put('additionalFields', additionalFields);

MultiRootPolicyIssuanceInvocable.executeMultiRootIssuance(params);
```

```
[
  {
    "actionName": "issueMultiRootInsurancePolicy",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "jobIdentifier": "55SG000000PgSH4A0"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
