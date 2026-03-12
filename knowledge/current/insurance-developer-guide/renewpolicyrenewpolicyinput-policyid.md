---
title: "RenewPolicy(RenewPolicyInput, policyId)"
domain: insurance-developer-guide
topic: renewpolicyrenewpolicyinput-policyid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.031Z
estimatedTokens: 253
keywords: [RenewPolicy, RenewPolicyInput, policyId, context, policy, renew, Modify, renewal, date, add, additional, input, JSON, API, Version]
---

# RenewPolicy(RenewPolicyInput, policyId)

> Use the context ID of an existing policy to renew a policy. Modify the renewal date, and
    add optional fields and additional information in the input JSON.

# RenewPolicy(RenewPolicyInput, policyId)

Use the context ID of an existing policy to renew a policy. Modify the renewal date, and add optional fields and additional information in the input JSON.

## API Version

63.0

## Requires Chatter

No

## Signature

public static ConnectApi.PolicyOutputRepresentation RenewPolicy(ConnectApi.RenewPolicyInputRepresentation RenewPolicyInput, String policyId)

```

```

## Parameters

RenewPolicyInput

Type: [ConnectApi.RenewPolicyInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_renew_policy.htm "Input representation of the request to renew a policy.")

Input representation of the request to renew a policy.

policyId

Type: String

ID of the insurance policy that's to be renewed.

## Return Value

Type: [ConnectApi.PolicyOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_policy_output.htm "Output representation of the policy details.")

## Code Examples

```
ConnectApi.InsurancePolicyAdminFamily, RenewPolicy, [ConnectApi.RenewPolicyInputRepresentation, String], ConnectApi.PolicyOutputRepresentation
```

## Related Topics

- ConnectApi.RenewPolicyInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_renew_policy.htm)
- ConnectApi.PolicyOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_policy_output.htm)
