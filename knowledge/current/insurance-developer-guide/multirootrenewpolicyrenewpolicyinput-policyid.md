---
title: "MultiRootRenewPolicy(RenewPolicyInput, policyId)"
domain: insurance-developer-guide
topic: multirootrenewpolicyrenewpolicyinput-policyid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.014Z
estimatedTokens: 312
keywords: [MultiRootRenewPolicy, RenewPolicyInput, policyId, Asynchronouly, renew, multi-root, insurance, policy, renewed, records, parent, associated, child, policies, priced]
---

# MultiRootRenewPolicy(RenewPolicyInput, policyId)

> Asynchronouly renew a multi-root insurance policy, create renewed records for the parent
        policy and the associated child policies. Use the priced context ID for the renewal
        process.

# MultiRootRenewPolicy(RenewPolicyInput, policyId)

Asynchronouly renew a multi-root insurance policy, create renewed records for the parent policy and the associated child policies. Use the priced context ID for the renewal process.

## API Version

66.0

## Requires Chatter

No

## Signature

public static ConnectApi.PolicyAsyncRepresentation MultiRootRenewPolicy(ConnectApi.RenewPolicyInputRepresentation RenewPolicyInput, String policyId)

## Parameters

RenewPolicyInput

Type: [ConnectApi.RenewPolicyInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_renew_policy.htm "Input representation of the request to renew a policy.")

Input representation of the request to renew an existing multi-root policy.

policyId

Type: String

ID of the multi-root policy that must be renewed along with its child policies.

## Return Value

Type: [ConnectApi.PolicyAsyncRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_multi_root_renew_policy_async_output.htm "Output representation for multi-root policy renewal asynchronous operations.")

## Example

This is a sample code that calls the Multi-Root Policy Renewal API from Apex.

```

```

## Code Examples

```apex
public with sharing class MultiRootPolicyRenewal implements System.Callable {
 
    public Object call(String action, Map<String, Object> args) {
        // Retrieve the input and output maps from the arguments
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');
        
        // Check the action type
        if (action == 'multiRootRenewPolicy') {
            System.debug('Start of connect API call to multi-root renew policy');
            
            // Get input parameters from the input map
            String contextId = (String) inputMap.get('contextId');
            String policyId = (String) inputMap.get('policyId');
            String policyName = (String) inputMap.get('policyName');
            String policyNumber = (String) inputMap.get('policyNumber');
            String effectiveFromDate = (String) inputMap.get('effectiveFromDate');
            String effectiveToDate = (String) inputMap.get('effectiveToDate');
            String transactionName = (String) inputMap.get('transactionName');
            Map<String, Object> additionalFields = (Map<String, Object>) inputMap.get('additionalFields');
            
            System.debug('Context ID: ' + contextId);
            System.debug('Policy ID: ' + policyId);
            System.debug('Policy Name: ' + policyName);
            System.debug('Policy Number: ' + policyNumber);
            System.debug('Effective From Date: ' + effectiveFromDate);
            System.debug('Effective To Date: ' + effectiveToDate);
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
            
            if (String.isBlank(policyId)) {
                System.debug('ERROR: Policy ID is required');
                outputMap.put('error', 'Policy ID is required');
                return null;
            }
            
            try {
                
                // Step 1: Create Multi-Root Policy Renewal input using the provided context ID
                ConnectApi.RenewPolicyInputRepresentation renewalInput = 
                    new ConnectApi.RenewPolicyInputRepresentation();
                
                // Use the provided context ID (REQUIRED)
                renewalInput.contextId = contextId;
                
                // Populate fields for InsurancePolicyInputRepresentation (nested object)
                ConnectApi.InsurancePolicyInputRepresentation insurancePolicy = 
                    new ConnectApi.InsurancePolicyInputRepresentation();
                
                // Set policy basic fields (all optional)
                if (!String.isBlank(policyName)) {
                    insurancePolicy.policyName = policyName;
                }
                if (!String.isBlank(policyNumber)) {
                    insurancePolicy.policyNumber = policyNumber;
                }
                
                // Set effective dates on the insurancePolicy object (not on renewalInput directly)
                if (!String.isBlank(effectiveFromDate)) {
                    insurancePolicy.effectiveFromDate = effectiveFromDate;
                }
                if (!String.isBlank(effectiveToDate)) {
                    insurancePolicy.effectiveToDate = effectiveToDate;
                }
                
                // Only set insurancePolicy if any fields were set
                if (!String.isBlank(policyName) || !String.isBlank(policyNumber) || 
                    !String.isBlank(effectiveFromDate) || !String.isBlank(effectiveToDate)) {
                    renewalInput.insurancePolicy = insurancePolicy;
                }
                
                // Populate transaction record (optional)
                if (!String.isBlank(transactionName)) {
                    ConnectApi.InsurancePolicyTransactionInputRepresentation transactionRecord = 
                        new ConnectApi.InsurancePolicyTransactionInputRepresentation();
                    transactionRecord.name = transactionName;
                    renewalInput.transactionRecord = transactionRecord;
                }
                
                // Populate additional fields for child policies
                if (additionalFields != null && !additionalFields.isEmpty()) {
                    System.debug('Processing additional fields for child policies');
                    renewalInput.additionalFields = buildAdditionalFieldsList(additionalFields);
                }
                
                // Step 2: Execute Multi-Root Policy Renewal with the provided context ID and policy ID
                System.debug('Executing Multi-Root Policy Renewal with context ID: ' + contextId + ' and policy ID: ' + policyId);
                
                // Call the Connect API - Multi-Root Renewal is ASYNCHRONOUS and returns a job identifier
                // NOTE: Parameter order is INPUT first, then policyId
                ConnectApi.PolicyAsyncRepresentation renewalResult =
                    ConnectApi.InsurancePolicyAdminFamily.multiRootRenewPolicy(renewalInput, policyId);
                
                // Get the job identifier
                jobIdentifier = renewalResult.jobIdentifier;
                
                // Log success
                System.debug('Multi-root policy renewal job started successfully. Job ID: ' + jobIdentifier);
                System.debug('Context: ' + contextId);
                System.debug('Policy ID: ' + policyId);
                
                // Put the job identifier in the output map
                outputMap.put('jobIdentifier', jobIdentifier);
                outputMap.put('renewalResult', renewalResult);
                
            } catch (Exception e) {
                System.debug('Error while executing multi-root policy renewal: ' + e.getMessage());
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
     *         "fields": { "EffectiveFromDate": "2025-01-01", "EffectiveToDate": "2026-01-01"}
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
 * Copy and paste this code into Developer Console Execute Anonymous Window
 */

// Create instance of the callable class
MultiRootPolicyRenewal callable = new MultiRootPolicyRenewal();

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

// Prepare the input arguments - WITH ADDITIONAL FIELDS
Map<String, Object> input = new Map<String, Object>();
input.put('contextId', <your-context-id-here>); // REQUIRED
input.put('policyId', <your-policy-id-here>); // REQUIRED
input.put('effectiveFromDate', '2026-01-01'); // Optional
input.put('effectiveToDate', '2027-01-01'); // Optional
input.put('policyName', 'Renewed Multi-Root Policy');
input.put('transactionName', 'Multi-Root Annual Renewal with Updates');
input.put('additionalFields', additionalFields);

// Prepare the output map
Map<String, Object> output = new Map<String, Object>();

// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);

// Call the 'multiRootRenewPolicy' action
Object result = callable.call('multiRootRenewPolicy', args);

// Check results
if (output.containsKey('error')) {
    System.debug('ERROR: ' + output.get('error'));
} else if (output.containsKey('jobIdentifier')) {
    String jobId = (String) output.get('jobIdentifier');
    System.debug('SUCCESS: Multi-root renewal job started with Job ID: ' + jobId);
    System.debug('Use this job ID to track the renewal progress');
}
```

## Related Topics

- ConnectApi.RenewPolicyInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_renew_policy.htm)
- ConnectApi.PolicyAsyncRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_multi_root_renew_policy_async_output.htm)
