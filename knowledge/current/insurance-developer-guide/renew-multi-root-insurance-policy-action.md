---
title: "Renew Multi-Root Insurance Policy Action"
domain: insurance-developer-guide
topic: renew-multi-root-insurance-policy-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.710Z
estimatedTokens: 278
keywords: [Renew, Multi-Root, Insurance, Policy, Action, along, associated, child, policies, asynchronously, REST, HTTP, Inputs, Outputs]
---

# Renew Multi-Root Insurance Policy Action

> Renew an existing multi-root insurance policy along with its
            associated child policies asynchronously.

# Renew Multi-Root Insurance Policy Action

Renew an existing multi-root insurance policy along with its associated child policies asynchronously.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/renewMultiRootInsurancePolicy

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| renewMultiRootPolicyInputRep | TypeApex-definedDescriptionRequired. An Apex ConnectApi.RenewMultiRootPolicyInputRep record that contains the details to renew the multi-root insurance policy. |

## Outputs

| Output | Details |
| --- | --- |
| jobIdentifier | TypestringDescriptionA unique system-generated ID for the job that processes the renewal of the multi-root insurance policy. |

## Example

POST

This sample request is for the Renew Multi-Root Insurance Policy action.

```

```

This is a sample code to call the Renew Multi-Root Insurance Policy action from Apex.

```

```

This sample response is for the Renew Multi-Root Insurance Policy action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "renewMultiRootPolicyInputRep": {
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

```apex
public with sharing class MultiRootPolicyRenewalInvocable {
    
    /**
     * Execute Multi-Root Policy Renewal with parameters map
     * Usage: MultiRootPolicyRenewalInvocable.executeMultiRootRenewal(paramsMap);
     * 
     * @param params Map of parameters:
     *   - contextId (String, REQUIRED)
     *   - policyId (String, REQUIRED)
     *   - policyName (String, optional)
     *   - effectiveFromDate (String, optional)
     *   - effectiveToDate (String, optional)
     *   - transactionName (String, optional)
     *   - additionalFields (Map<String, Map<String, String>>, optional)
     */
    public static void executeMultiRootRenewal(Map<String, Object> params) {
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
        
        // Multi-Root Renew Policy IA - Create the standard Invocable Action
        Invocable.Action action = Invocable.Action.createStandardAction('renewMultiRootInsurancePolicy');
        
        // Instantiate the IA input object for Multi-Root Policy Renewal
        // IMPORTANT: Use RenewMultiRootPolicyInputRep
        ConnectApi.RenewMultiRootPolicyInputRep policyInput = 
            new ConnectApi.RenewMultiRootPolicyInputRep();
        
        // Set context ID and policy ID (REQUIRED)
        policyInput.contextId = contextId;
        policyInput.policyId = policyId;
        
        // Extract optional parameters
        String policyName = (String) params.get('policyName');
        String effectiveFromDate = (String) params.get('effectiveFromDate');
        String effectiveToDate = (String) params.get('effectiveToDate');
        String transactionName = (String) params.get('transactionName');
        Map<String, Map<String, String>> additionalFields = 
            (Map<String, Map<String, String>>) params.get('additionalFields');
        
        // Populate Insurance Policy details (using IA classes) - all optional
        if (!String.isBlank(policyName) || !String.isBlank(effectiveFromDate) || 
            !String.isBlank(effectiveToDate)) {
            
            ConnectApi.InsPolicyIAInputRep insurancePolicy = 
                new ConnectApi.InsPolicyIAInputRep();
            
            if (!String.isBlank(policyName)) {
                insurancePolicy.policyName = policyName;
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
        // IMPORTANT: Parameter name is renewMultiRootPolicyInputRep (camelCase)
        action.setInvocationParameter('renewMultiRootPolicyInputRep', policyInput);
        
        System.debug('Starting Multi-Root Policy Renewal Invocable Action (renewMultiRootInsurancePolicy)...');
        System.debug('Context ID: ' + contextId);
        System.debug('Policy ID: ' + policyId);
        if (!String.isBlank(policyName)) {
            System.debug('Policy Name: ' + policyName);
        }
        
        try {
            // Invoke the action
            List<Invocable.Action.Result> results = action.invoke();
            
            System.debug('Multi-Root Policy Renewal IA result = ' + results);
            
            // Process results
            for (Invocable.Action.Result result : results) {
                if (result.isSuccess()) {
                    System.debug('SUCCESS: Multi-Root Policy Renewal completed successfully!');
                    Object outputValue = result.getOutputParameters().get('jobIdentifier');
                    if (outputValue != null) {
                        System.debug('Job Identifier: ' + outputValue);
                    } else {
                        System.debug('Multi-Root Policy Renewal job started - result: ' + result.getOutputParameters());
                    }
                } else {
                    System.debug('ERROR: Multi-Root Policy Renewal failed');
                    System.debug('Error Details: ' + result.getErrors());
                }
            }
            
        } catch (Exception e) {
            System.debug('EXCEPTION in Multi-Root Policy Renewal Invocable Action: ' + e.getMessage());
            System.debug('Stack Trace: ' + e.getStackTraceString());
        }
    }
}

/*
 * USAGE EXAMPLE:
 * Copy and paste this code into Developer Console Execute Anonymous Window
 */
Map<String, Object> params = new Map<String, Object>();
params.put('contextId', <your-context-id-here>); // REQUIRED
params.put('policyId', <your-policy-id-here>); // REQUIRED
params.put('policyName', 'Renewed Multi-Root Policy');
params.put('effectiveFromDate', '2026-01-01');
params.put('effectiveToDate', '2027-01-01');
params.put('transactionName', 'Multi-Root Annual Renewal with Updates');

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

MultiRootPolicyRenewalInvocable.executeMultiRootRenewal(params);
```

```
[
  {
    "actionName": "renewMultiRootInsurancePolicy",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "jobIdentifier": "XYTSG000000PgX74AK"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
