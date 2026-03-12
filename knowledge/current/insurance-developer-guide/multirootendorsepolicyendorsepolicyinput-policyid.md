---
title: "MultiRootEndorsePolicy(EndorsePolicyInput,
            policyId)"
domain: insurance-developer-guide
topic: multirootendorsepolicyendorsepolicyinput-policyid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.043Z
estimatedTokens: 330
keywords: [MultiRootEndorsePolicy, EndorsePolicyInput, policyId, Resource, Insurance, Multi, Root, Endorsement, Policy, Connect, API, POST, Version, Requires, Chatter]
---

# MultiRootEndorsePolicy(EndorsePolicyInput,
            policyId)

> Resource for the Insurance Multi Root Endorsement Policy Connect API POST
        Method.

# MultiRootEndorsePolicy(EndorsePolicyInput, policyId)

Resource for the Insurance Multi Root Endorsement Policy Connect API POST Method.

## API Version

66.0

## Requires Chatter

No

## Signature

public static ConnectApi.PolicyAsyncRepresentation MultiRootEndorsePolicy(ConnectApi.EndorsePolicyInputRepresentation EndorsePolicyInput, String policyId)

## Parameters

EndorsePolicyInput

Type: [ConnectApi.EndorsePolicyInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_endorse_policy.htm "Input representation of the request to endorse a policy. Context ID of the quote that’s used for endorsement and date that the endorsed policy version is effective from must be passed in the request.")

Details to endorse the multi-root insurance policy along with its child policies.

policyId

Type: String

ID of the insurance policy that must be endorsed along with its child policies.

## Return Value

Type: [ConnectApi.PolicyAsyncRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_multi_root_renew_policy_async_output.htm "Output representation for multi-root policy renewal asynchronous operations.")

## Example

This is a sample code that calls the Multi-Root Policy Endorsement API from Apex.

```

```

## Code Examples

```apex
public with sharing class MultiRootPolicyEndorsement implements System.Callable {
 
    public Object call(String action, Map<String, Object> args) {
        // Retrieve the input and output maps from the arguments
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');
        
        // Check the action type
        if (action == 'multiRootEndorsePolicy') {
            System.debug('Start of connect API call to multi-root endorse policy');
            
            // Get input parameters from the input map
            String contextId = (String) inputMap.get('contextId');
            String policyId = (String) inputMap.get('policyId');
            String policyName = (String) inputMap.get('policyName');
            String policyNumber = (String) inputMap.get('policyNumber');
            String effectiveDate = (String) inputMap.get('effectiveDate');
            String transactionName = (String) inputMap.get('transactionName');
            Map<String, Object> additionalFields = (Map<String, Object>) inputMap.get('additionalFields');
            
            System.debug('Context ID: ' + contextId);
            System.debug('Policy ID: ' + policyId);
            System.debug('Policy Name: ' + policyName);
            System.debug('Policy Number: ' + policyNumber);
            System.debug('Effective Date: ' + effectiveDate);
            System.debug('Transaction Name: ' + transactionName);
            System.debug('Additional Fields: ' + additionalFields);
            
            // Initialize the job identifier
            String jobIdentifier = null;
            
            // Validate required parameters
            if (String.isBlank(contextId)) {
                System.debug('ERROR: Context ID is required');
                outputMap.put('error', 'Context ID is required');
                return null;
            }
            
            try {
                
                // Step 1: Create Multi-Root Policy Endorsement input using the provided context ID
                ConnectApi.EndorsePolicyInputRepresentation policyInput = 
                    new ConnectApi.EndorsePolicyInputRepresentation();
                
                // Populate fields for InsurancePolicyInputRepresentation 
                ConnectApi.InsurancePolicyInputRepresentation insurancePolicy = 
                    new ConnectApi.InsurancePolicyInputRepresentation();
                
                // Set policy basic fields (all optional except contextId)
                if (!String.isBlank(policyName)) {
                    insurancePolicy.policyName = policyName;
                }
                if (!String.isBlank(policyNumber)) {
                    insurancePolicy.policyNumber = policyNumber;
                }
                
                policyInput.insurancePolicy = insurancePolicy;
                
                // Populate transaction record (optional)
                if (!String.isBlank(transactionName)) {
                    ConnectApi.InsurancePolicyTransactionInputRepresentation transactionRecord = 
                        new ConnectApi.InsurancePolicyTransactionInputRepresentation();
                    transactionRecord.name = transactionName;
                    policyInput.transactionRecord = transactionRecord;
                }
                
                // Use the provided context ID (REQUIRED)
                policyInput.contextId = contextId;
             
                // Use the provided Effective Date (REQUIRED)
                policyInput.effectiveDate = effectiveDate;
                
                // Populate additional fields for child policies
                if (additionalFields != null && !additionalFields.isEmpty()) {
                    System.debug('Processing additional fields for child policies');
                    policyInput.additionalFields = buildAdditionalFieldsList(additionalFields);
                }
                
                // Step 2: Execute Multi-Root Policy Endorsement with the provided context ID
                System.debug('Executing Multi-Root Policy Endorsement with context ID: ' + contextId + ' policy ID:' + policyId);
              
                Id idPolicyId = Id.valueOf(policyId);
                
                // Call the Connect API - Multi-Root Endorsement is ASYNCHRONOUS and returns a job identifier
                ConnectApi.PolicyAsyncRepresentation endorseResult =
                    ConnectApi.InsurancePolicyAdminFamily.multiRootEndorsePolicy(policyInput, idPolicyId);
                
                // Get the job identifier
                jobIdentifier = endorseResult.jobIdentifier;
                
                // Log success
                System.debug('Multi-root policy endorsement job started successfully. Job ID: ' + jobIdentifier);
                System.debug('Context: ' + contextId);
                if (!String.isBlank(policyName)) {
                    System.debug('Policy Name: ' + policyName);
                }
                
                // Put the job identifier in the output map
                outputMap.put('jobIdentifier', jobIdentifier);
                outputMap.put('endorsementResult', endorseResult);
                
            } catch (Exception e) {
                System.debug('Error while executing multi-root policy endorsement: ' + e.getMessage());
                System.debug('Stack Trace: ' + e.getStackTraceString());
                outputMap.put('error', e.getMessage());
            }
            
            // Return the job identifier
            return jobIdentifier;
        }
        
        // If the action is not recognized, return null
        return null;
    }


    
    /**
     * Build additional fields list for multi-root policies
     * Converts from Map structure to List<ConnectApi.AdditionalFieldsMapValue>
     * 
     * Input structure:
     * {
     *   "additionalFieldsList": [
     *     {
     *       "additionalFieldsMapValue": {
     *         "instanceKey": "AutoSilver",
     *         "fields": { "PolicyName": "James Auto Policy"}
     *       }
     *     }
     *   ]
     * }
     */
    private static List<ConnectApi.AdditionalFieldsMapValue> buildAdditionalFieldsList(Map<String, Object> additionalFieldsInput) {
        List<ConnectApi.AdditionalFieldsMapValue> fieldsList = new List<ConnectApi.AdditionalFieldsMapValue>();
        
        // Get the additionalFieldsList array
        List<Object> additionalFieldsList = (List<Object>) additionalFieldsInput.get('additionalFieldsList');
        
        if (additionalFieldsList != null && !additionalFieldsList.isEmpty()) {
            for (Object item : additionalFieldsList) {
                Map<String, Object> itemMap = (Map<String, Object>) item;
                Object mapValue = itemMap.get('additionalFieldsMapValue');
                
                if (mapValue != null) {
                    // Create ConnectApi.AdditionalFieldsMapValue instance
                    ConnectApi.AdditionalFieldsMapValue fieldMapValue = new ConnectApi.AdditionalFieldsMapValue();
                    
                    // Set the additionalFieldsMapValue property
                    // This property accepts Object type which will be the Map containing instanceKey and fields
                    fieldMapValue.additionalFieldsMapValue = mapValue;
                    
                    fieldsList.add(fieldMapValue);
                }
            }
        }
        
        return fieldsList;
    }
}

/*
 * USAGE EXAMPLE:
 * Multi-Root Policy Endorsement with Additional Fields
 */

// Create instance of the callable class
MultiRootPolicyEndorsement callable = new MultiRootPolicyEndorsement();

// Prepare the input arguments with additional fields
Map<String, Object> input = new Map<String, Object>();
input.put('contextId', '0000000i18tq18g002917629263342460535451b25974898aae9a44aab48ef3c'); // REQUIRED - Replace with your context ID
input.put('policyId', '0YTSM0000001MrJ4AU'); // REQUIRED - Replace with your policy ID
input.put('policyName', 'James Multi-Root Policy');
input.put('policyNumber', 'James Multi-Root Policy');
input.put('referencePolicyNumber', 'James1234');
input.put('effectiveDate', '2025-08-30'); // REQUIRED
input.put('transactionName', 'Endorsed Policy Transaction');

// Build additional fields for child policies
// Structure matches the JSON payload exactly
Map<String, Object> additionalFields = new Map<String, Object>();
List<Object> additionalFieldsList = new List<Object>();

// Child Policy 1: Auto Insurance
Map<String, Object> autoPolicy = new Map<String, Object>();
Map<String, Object> autoMapValue = new Map<String, Object>();
autoMapValue.put('instanceKey', 'AutoSilver');
Map<String, Object> autoFields = new Map<String, Object>();
autoFields.put('PolicyName', 'James Auto Policy');
autoFields.put('Name', 'James Auto Policy');
autoMapValue.put('fields', autoFields);
autoPolicy.put('additionalFieldsMapValue', autoMapValue);
additionalFieldsList.add(autoPolicy);

// Child Policy 2: Health Insurance
Map<String, Object> healthPolicy = new Map<String, Object>();
Map<String, Object> healthMapValue = new Map<String, Object>();
healthMapValue.put('instanceKey', 'FamilyHealth');

Map<String, Object> healthFields = new Map<String, Object>();
healthFields.put('PolicyName', 'James Medical Policy');
healthFields.put('Name', 'James Medical Policy');
healthMapValue.put('fields', healthFields);
healthPolicy.put('additionalFieldsMapValue', healthMapValue);
additionalFieldsList.add(healthPolicy);

additionalFields.put('additionalFieldsList', additionalFieldsList);
input.put('additionalFields', additionalFields);

// Prepare the output map
Map<String, Object> output = new Map<String, Object>();

// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);

// Call the 'multiRootEndorsePolicy' action
Object result = callable.call('multiRootEndorsePolicy', args);

// Check results
System.debug('Job Identifier: ' + result);
if (output.containsKey('error')) {
    System.debug('ERROR: ' + output.get('error'));
} else if (output.containsKey('endorsementResult')) {
    System.debug('SUCCESS: Multi-root policy endorsement job started with ID: ' + output.get('jobIdentifier'));
    System.debug('This job will endorse the input policy and apply the changes using the context, with additional fields on parent and child policies.');
    System.debug('Monitor this job ID for completion status.');
}
```

## Related Topics

- ConnectApi.EndorsePolicyInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_endorse_policy.htm)
- ConnectApi.PolicyAsyncRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_multi_root_renew_policy_async_output.htm)
