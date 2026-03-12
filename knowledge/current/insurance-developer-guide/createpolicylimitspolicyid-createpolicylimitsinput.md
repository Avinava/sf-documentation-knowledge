---
title: "CreatePolicyLimits(policyId, CreatePolicyLimitsInput)"
domain: insurance-developer-guide
topic: createpolicylimitspolicyid-createpolicylimitsinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.857Z
estimatedTokens: 329
keywords: [CreatePolicyLimits, policyId, CreatePolicyLimitsInput, insurance, policy, limit, records, defined, attributes, coverages, Version, Requires]
---

# CreatePolicyLimits(policyId, CreatePolicyLimitsInput)

> insurance policy limit records for the specified policy based on the defined
        attributes and coverages of the insurance policy.

# CreatePolicyLimits(policyId, CreatePolicyLimitsInput)

insurance policy limit records for the specified policy based on the defined attributes and coverages of the insurance policy.

## Version

64.0

## Requires

No

## Signature

public static ConnectApi.CreatePolicyLimitsRepresentation CreatePolicyLimits(String policyId, ConnectApi.CreatePolicyLimitsInputRepresentation CreatePolicyLimitsInput)

## Parameters

policyId

Type: String

of the policy to generate limits for.

CreatePolicyLimitsInput

Type: [ConnectApi.CreatePolicyLimitsInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_create_policy_limits.htm "Input representation for creating insurance policy limit records.")

that specifies the attribute scopes for which the policy limit records be created.

## Return Value

Type: [ConnectApi.CreatePolicyLimitsRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_create_policy_limits.htm "Output representation of the created insurance policy limit records.")

## Example

This Apex example shows how to call the CreatePolicyLimits method to automatically generate limit tracking records that are associated with a given policy ID.

Class Definition

```

```

Usage Example

```

```

## Code Examples

```apex
public with sharing class CreatePolicyLimitsCallable implements System.Callable {
    
    public Object call(String action, Map<String, Object> args) {
        // Retrieve the input and output maps from the arguments
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');
        
        // Check the action type
        if (action == 'createPolicyLimits') {
            // Retrieve the policy ID from the input map
            String policyId = (String) inputMap.get('policyId');
            
            System.debug('Start of connect API call to create policy limits');
            System.debug('Policy ID: ' + policyId);
            
            // Initialize the output representation
            ConnectApi.CreatePolicyLimitsRepresentation policyLimitsData;
            
            // Call the Connect API to create policy limits
            try {
                // Call the Connect API resource directly using the correct method signature
                policyLimitsData = ConnectApi.InsuranceClaimFamily.createPolicyLimits(policyId);
                
                System.debug('Policy limits created successfully: ' + policyLimitsData);
                
                // Put the policy limits data in the output map
                outputMap.put('policyLimitsData', policyLimitsData);
            }
            catch (Exception e) {
                System.debug('Error while creating policy limits: ' + e.getMessage());
                outputMap.put('error', e.getMessage());
            }
            
            // Return the policy limits data
            return policyLimitsData;
        }
        
        // If the action is not recognized, return null
        return null;
    }
}
```

```apex
CreatePolicyLimitsCallable callable = new CreatePolicyLimitsCallable();

// Prepare the input arguments
Map<String, Object> input = new Map<String, Object>();

// Set the policy ID (required)
input.put('policyId', '0YTxx000000001LGAQ');

// Prepare the output map
Map<String, Object> output = new Map<String, Object>();

// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);

// Call the 'createPolicyLimits' action
Object result = callable.call('createPolicyLimits', args);

// Check the result
if (result != null) {
    System.debug('Policy limits created successfully: ' + result);
    
    // Access the created policy limits data
    ConnectApi.CreatePolicyLimitsRepresentation policyLimitsData = 
        (ConnectApi.CreatePolicyLimitsRepresentation) result;
    
    // Process the result as needed
    System.debug('Policy Limits Data: ' + policyLimitsData);
    
    // Access the generated policy limit IDs
    if (policyLimitsData.policyLimitIds != null) {
        System.debug('Generated Policy Limit IDs: ' + policyLimitsData.policyLimitIds);
        System.debug('Number of limits generated: ' + policyLimitsData.policyLimitIds.size());
    }
} else {
    System.debug('Error occurred: ' + output.get('error'));
}
```

## Related Topics

- ConnectApi.CreatePolicyLimitsInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_create_policy_limits.htm)
- ConnectApi.CreatePolicyLimitsRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_create_policy_limits.htm)
