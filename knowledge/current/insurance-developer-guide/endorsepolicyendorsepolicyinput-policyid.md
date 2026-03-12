---
title: "EndorsePolicy(EndorsePolicyInput, policyId)"
domain: insurance-developer-guide
topic: endorsepolicyendorsepolicyinput-policyid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.984Z
estimatedTokens: 296
keywords: [EndorsePolicy, EndorsePolicyInput, policyId, Endorse, latest, version, insurance, policy, context, effective, date, include, additional, input, JSON]
---

# EndorsePolicy(EndorsePolicyInput, policyId)

> Endorse the latest version of the insurance policy based on the context ID and effective
    date. You can also include other optional fields and additional details in the input
    JSON.

# EndorsePolicy(EndorsePolicyInput, policyId)

Endorse the latest version of the insurance policy based on the context ID and effective date. You can also include other optional fields and additional details in the input JSON.

## API Version

63.0

## Requires Chatter

No

## Signature

public static ConnectApi.PolicyOutputRepresentation EndorsePolicy(ConnectApi.EndorsePolicyInputRepresentation EndorsePolicyInput, String policyId)

```

```

## Parameters

EndorsePolicyInput

Type: [ConnectApi.EndorsePolicyInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_endorse_policy.htm "Input representation of the request to endorse a policy. Context ID of the quote that’s used for endorsement and date that the endorsed policy version is effective from must be passed in the request.")

Input representation of the request to endorse a policy.

policyId

Type: String

ID of the policy to be endorsed.

## Return Value

Type: [ConnectApi.PolicyOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_policy_output.htm "Output representation of the policy details.")

## Code Examples

```
ConnectApi.InsurancePolicyAdminFamily, EndorsePolicy, [ConnectApi.EndorsePolicyInputRepresentation, String], ConnectApi.PolicyOutputRepresentation
```

## Related Topics

- ConnectApi.EndorsePolicyInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_endorse_policy.htm)
- ConnectApi.PolicyOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_policy_output.htm)
