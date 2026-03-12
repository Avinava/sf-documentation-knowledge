---
title: "renewInsurancePolicy(insurancePolicyProcessInput,
      policyId)"
domain: insurance-developer-guide
topic: renewinsurancepolicyinsurancepolicyprocessinput-policyid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.826Z
estimatedTokens: 487
keywords: [renewInsurancePolicy, insurancePolicyProcessInput, policyId, Renew, policy, insurance, API, Version, Requires, Chatter, Usage]
---

# renewInsurancePolicy(insurancePolicyProcessInput,
      policyId)

> Renew policy for the specified insurance policy ID.

# renewInsurancePolicy(insurancePolicyProcessInput, policyId)

Renew policy for the specified insurance policy ID.

## API Version

63.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsurancePolicyProcessOutputRepresentation renewInsurancePolicy(ConnectApi.InsurancePolicyRenewInputRepresentation insurancePolicyProcessInput, String policyId)

```

```

## Parameters

insurancePolicyProcessInput

Type: [ConnectApi.InsurancePolicyRenewInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_renew.htm "Input representation details of the resource to renew an insurance policy.")

Input representation details of the request to renew an insurance policy.

policyId

Type: String

ID of the insurance policy that's to be renewed.

## Return Value

Type: [ConnectApi.InsurancePolicyProcessOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_policy_process_output.htm "Output representation details of the insurance policy renewal resource.")

## Usage

The Insurance Policy Renewal API takes a JSON input that contains the insurance policy ID that must be renewed along with the fieldValueMap details. The API submits the request to a queue, creates a policy, along with child records by using the context definition selected in setup. The service also overrides the fieldValueMap in the new policy for the policy ID passed in the request. Users receive success and failure notifications on request completion.

Keep these considerations in mind when you use this method.

-   The RenewedFromPolicyId value of the new policy is set to the current policy ID and IsRenewedPolicy field of the new policy is set to true.
-   The fieldValueMap expects the keys to be API name and is case-sensitive.

## Example

This example shows how to call the renew policy API from Apex code.

```

```

## Code Examples

```
ConnectApi.InsuranceBrokerageFamily, renewInsurancePolicy, [ConnectApi.InsurancePolicyRenewInputRepresentation, String], ConnectApi.InsurancePolicyProcessOutputRepresentation
```

```apex
global class ConnectDriver {
         
    global static void callRenewConnectAPI(){
        
        Map<String, Object> input = new Map<String, Object>();
        input.put('policyId', '0YTxx000000001dGAA');
        
        TestConnectAPI callable = new TestConnectAPI();
        
        // Create and populate the IssuePolicyInputRepresentation object
        ConnectApi.InsurancePolicyRenewInputRepresentation policyInput = new ConnectApi.InsurancePolicyRenewInputRepresentation();
        
        // Populate fields for InsurancePolicyInputRepresentation
        Map<String, Object> fields = new Map<String, Object>();
        fields.put('Name', 'Test Apex');
        
        policyInput.fieldValueMap = fields;
       
        
        // Add the policyInput to the input map
        input.put('policyInput', policyInput);
        
        // Prepare the output map
        Map<String, Object> output = new Map<String, Object>();
        
        // Prepare the args map
        Map<String, Object> args = new Map<String, Object>();
        args.put('input', input);
        args.put('output', output);
        
        // Call the 'issueInsurancePolicy' action
        Object result = callable.call('renew', args);
        // Retrieve the policy data from the result
        ConnectApi.InsurancePolicyProcessOutputRepresentation policyData = (ConnectApi.InsurancePolicyProcessOutputRepresentation) result;
        // Output the policy data to the debug log
        System.debug('Policy Data: ' + JSON.serializePretty(policyData));
        // Check for errors in the output map
        if (output.containsKey('error')) {
            System.debug('Error: ' + output.get('error'));
		}
    }
}
```

## Related Topics

- ConnectApi.InsurancePolicyRenewInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_renew.htm)
- ConnectApi.InsurancePolicyProcessOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_policy_process_output.htm)
