---
title: "bulkRenewInsurancePolicy(insurancePolicyBulkInput)"
domain: insurance-developer-guide
topic: bulkrenewinsurancepolicyinsurancepolicybulkinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.815Z
estimatedTokens: 515
keywords: [bulkRenewInsurancePolicy, insurancePolicyBulkInput, Renew, policies, bulk, Insurance, Policy, IDs, API, Version, Requires, Chatter, Usage]
---

# bulkRenewInsurancePolicy(insurancePolicyBulkInput)

> Renew policies in bulk for the specified Insurance Policy IDs.

# bulkRenewInsurancePolicy(insurancePolicyBulkInput)

Renew policies in bulk for the specified Insurance Policy IDs.

## API Version

64.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsurancePolicyBulkOutputRepresentation bulkRenewInsurancePolicy(ConnectApi.InsurancePolicyBulkRenewInputRepresentation insurancePolicyBulkInput)

```

```

## Parameters

insurancePolicyBulkInput

Type: [ConnectApi.InsurancePolicyBulkRenewInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_bulk_renew.htm "Input representation details of the renew insurance policies in bulk resource. The input includes the list of insurance policy IDs to be renewed and the details of the associated fields of the insurance policies.")

Input representation of the request to renew insurance policies in bulk.

## Return Value

Type: [ConnectApi.InsurancePolicyBulkOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_policy_bulk_output.htm "Output representation details of the bulk cancel policy resource.")

## Usage

Insurance Policy Bulk Renewal API takes a JSON input that contains a list of insurance policy IDs that must be renewed along with the fieldValueMap details. The API submits the request to a queue, creates policies, along with child records by using the context definition selected in setup. The service also overrides the fieldValueMap in the new policy for each policy ID passed in the request. Users receive success and failure notifications on completion.

Keep these considerations in mind when you use this method.

-   The RenewedFromPolicyId value of the new policy is set to the current policy ID and IsRenewedPolicy field of the new policy is set to true.
-   The name of the new policy is a copy of {ExistingName}.
-   The fieldValueMap expects the keys to be API name and is case-sensitive.

## Example

This example shows how to call the bulk renew policy API from Apex code.

```

```

## Code Examples

```
ConnectApi.InsuranceBrokerageFamily, bulkRenewInsurancePolicy, [ConnectApi.InsurancePolicyBulkRenewInputRepresentation], ConnectApi.InsurancePolicyBulkOutputRepresentation
```

```apex
global class ConnectDriver {
         
      global static void callBulkRenewConnectAPI() {
       Map<String, Object> input = new Map<String, Object>();

       TestConnectAPI callable = new TestConnectAPI();

       ConnectApi.InsurancePolicyBulkInputRepresentation policyInput = new ConnectApi.InsurancePolicyBulkInputRepresentation();

       Map<String, Object> fields = new Map<String, Object>();
       fields.put('Name', 'Test Apex Bulk');
       policyInput.fieldValueMap = fields;

       List<String> policyIds = new List<String>();
       policyIds.add('0YTxx000000001dGAA');
       policyIds.add('0YTxx000000001dHAA');
       policyInput.insurancePolicyIds = policyIds;

       input.put('policyInput', policyInput);

       Map<String, Object> output = new Map<String, Object>();
       Map<String, Object> args = new Map<String, Object>();
       args.put('input', input);
       args.put('output', output);

       Object result = callable.call('bulkRenew', args);
       ConnectApi.InsurancePolicyBulkOutputRepresentation bulkData = (ConnectApi.InsurancePolicyBulkOutputRepresentation) result;
       System.debug('Bulk Renew Data: ' + JSON.serializePretty(bulkData));
       if (output.containsKey('error')) {
           System.debug('Error: ' + output.get('error'));
       }
   }

}
```

## Related Topics

- ConnectApi.InsurancePolicyBulkRenewInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_bulk_renew.htm)
- ConnectApi.InsurancePolicyBulkOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_policy_bulk_output.htm)
