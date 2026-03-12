---
title: "ReinstatePolicy(ReinstatePolicyInput, policyId)"
domain: insurance-developer-guide
topic: reinstatepolicyreinstatepolicyinput-policyid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.027Z
estimatedTokens: 259
keywords: [ReinstatePolicy, ReinstatePolicyInput, policyId, Reinstate, previously, canceled, insurance, policy, API, Version, Requires, Chatter]
---

# ReinstatePolicy(ReinstatePolicyInput, policyId)

> Reinstate a previously canceled insurance policy.

# ReinstatePolicy(ReinstatePolicyInput, policyId)

Reinstate a previously canceled insurance policy.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.PolicyOutputRepresentation ReinstatePolicy(ConnectApi.ReinstatePolicyInputRepresentation ReinstatePolicyInput, String policyId)

## Parameters

ReinstatePolicyInput

Type: [ConnectApi.Reinstate​PolicyInput​Representation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_reinstate_policy.htm "Input representation for reinstating an insurance policy.")

Input representation for reinstating an insurance policy.

policyId

Type: String

ID of the insurance policy to be reinstated.

## Return Value

Type: [ConnectApi.Policy​Output​Representation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_policy_output.htm "Output representation of the policy details.")

## Example

Here's an example of how to invoke the Reinstate Policy API by using Apex.

```

```

## Code Examples

```apex
// Create and populate the ReinstatePolicyInputRepresentation object
ConnectApi.ReinstatePolicyInputRepresentation policyInput = new ConnectApi.ReinstatePolicyInputRepresentation();

// Populate fields for InsurancePolicyInputRepresentation
ConnectApi.InsurancePolicyInputRepresentation insurancePolicy = new ConnectApi.InsurancePolicyInputRepresentation();
insurancePolicy.policyName = 'Health Insurance Policy Reinstated';
insurancePolicy.policyNumber = 'HIPE12';

// Create the list that will hold the AdditionalFieldsMapValue wrappers.
List<ConnectApi.AdditionalFieldsMapValue> additionalFieldsValueList = new List<ConnectApi.AdditionalFieldsMapValue>();

// 1. Create the map containing the actual field data for ONE item.
Map<String, Object> dataForFirstMapValue = new Map<String, Object>();
dataForFirstMapValue.put('instanceKey', 'AutoSilver'); // Example key/value from your JSON structure
Map<String, Object> innerFieldsMap = new Map<String, Object>();
innerFieldsMap.put('Currency__c', '4456'); // Example inner field value
dataForFirstMapValue.put('fields', innerFieldsMap); // Put the inner fields map here

// 2. Create an instance of the AdditionalFieldsMapValue wrapper for this item.
ConnectApi.AdditionalFieldsMapValue firstMapValueWrapper = new ConnectApi.AdditionalFieldsMapValue();

// 3. Assign the map data (created in step 1) to the *correct property* on the wrapper instance.
firstMapValueWrapper.additionalFieldsMapValue = dataForFirstMapValue;


// 4. Add the populated wrapper instance to the list.
additionalFieldsValueList.add(firstMapValueWrapper);

// --- End of Populating the First Item ---


// --- If you need more items in the list, repeat steps 1-4 for each ---

// Assign the populated additional object to the policyInput
policyInput.additionalFields = additionalFieldsValueList;


policyInput.insurancePolicy = insurancePolicy;

// Optionally populate InsurancePolicyTransactionInputRepresentation
ConnectApi.InsurancePolicyTransactionInputRepresentation transactionRecord = new ConnectApi.InsurancePolicyTransactionInputRepresentation();
policyInput.transactionRecord = transactionRecord;

// Optionally set the effective date
// policyInput.effectiveDate = '2025-06-01';

try {
    // Call the Connect API directly
    ConnectApi.PolicyOutputRepresentation policyData =
        ConnectApi.InsurancePolicyAdminFamily.reinstatePolicy(policyInput, '0YTxx00000000MbGAI');

    // Output the policy data to the debug log
    System.debug('Policy reinstated successfully: ' + JSON.serializePretty(policyData));
} catch (Exception e) {
    // Log the error
    System.debug('Error while reinstating policy: ' + e.getMessage());
}
```

## Related Topics

- ConnectApi.Reinstate​PolicyInput​Representation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_reinstate_policy.htm)
- ConnectApi.Policy​Output​Representation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_policy_output.htm)
