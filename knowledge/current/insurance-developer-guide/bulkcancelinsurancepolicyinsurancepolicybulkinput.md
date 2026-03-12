---
title: "bulkCancelInsurancePolicy(insurancePolicyBulkInput)"
domain: insurance-developer-guide
topic: bulkcancelinsurancepolicyinsurancepolicybulkinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.811Z
estimatedTokens: 386
keywords: [bulkCancelInsurancePolicy, insurancePolicyBulkInput, Cancel, policies, bulk, Insurance, Policy, IDs, API, Version, Requires, Chatter, Usage]
---

# bulkCancelInsurancePolicy(insurancePolicyBulkInput)

> Cancel policies in bulk for the specified Insurance Policy IDs.

# bulkCancelInsurancePolicy(insurancePolicyBulkInput)

Cancel policies in bulk for the specified Insurance Policy IDs.

## API Version

64.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsurancePolicyBulkOutputRepresentation bulkCancelInsurancePolicy(ConnectApi.InsurancePolicyBulkInputRepresentation insurancePolicyBulkInput)

```

```

## Parameters

insurancePolicyBulkInput

Type: [ConnectApi.InsurancePolicyBulkInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_bulk.htm "Input representation details of the cancel policies in bulk resource. The input includes the list of insurance policy IDs to be canceled and the details of the associated fields of the insurance policies.")

Input representation of the request to cancel policies in bulk.

## Return Value

Type: [ConnectApi.InsurancePolicyBulkOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_policy_bulk_output.htm "Output representation details of the bulk cancel policy resource.")

## Usage

Use this method to cancel insurance policies. The JSON input includes a field value map of insurance policy fields, such as CancellationEffectiveDate, Status, and CancellationReason, and a list of insurance policy IDs. After the request is successfully sent to the message queue, policies are canceled asynchronously, and a success or failure notification is sent to the user after the completion of the request.

## Code Examples

```
ConnectApi.InsuranceBrokerageFamily, bulkCancelInsurancePolicy, [ConnectApi.InsurancePolicyBulkInputRepresentation], ConnectApi.InsurancePolicyBulkOutputRepresentation
```

## Related Topics

- ConnectApi.InsurancePolicyBulkInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_bulk.htm)
- ConnectApi.InsurancePolicyBulkOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_policy_bulk_output.htm)
