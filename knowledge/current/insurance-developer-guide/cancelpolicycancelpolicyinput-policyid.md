---
title: "CancelPolicy(CancelPolicyInput, policyId)"
domain: insurance-developer-guide
topic: cancelpolicycancelpolicyinput-policyid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.982Z
estimatedTokens: 312
keywords: [CancelPolicy, CancelPolicyInput, policyId, Cancel, insurance, policy, version, API, effective, date, cancellation, input, JSON, advance, term]
---

# CancelPolicy(CancelPolicyInput, policyId)

> Cancel an insurance policy version. The API takes the effective date of cancellation from
    the input JSON. You can advance the cancellation date within the policy term, but you can’t
    postpone the cancellation.

# CancelPolicy(CancelPolicyInput, policyId)

Cancel an insurance policy version. The API takes the effective date of cancellation from the input JSON. You can advance the cancellation date within the policy term, but you can’t postpone the cancellation.

## API Version

63.0

## Requires Chatter

No

## Signature

public static ConnectApi.CancelPolicyOutputRepresentation CancelPolicy(ConnectApi.CancelPolicyInputRepresentation CancelPolicyInput, String policyId)

```

```

## Parameters

CancelPolicyInput

Type: [ConnectApi.CancelPolicyInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_cancel_policy.htm "Input representation of the request to cancel a policy.")

Description

policyId

Type: String

Input representation of the request to cancel a policy.

## Return Value

Type: [ConnectApi.CancelPolicyOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_cancel_policy_output.htm "Output representation details of cancel policy, such as impacted policy versions and refund associated with the cancellation.")

## Usage

Send the cancellation effective date and transaction record in the request to cancel a policy.

## Code Examples

```
ConnectApi.InsurancePolicyAdminFamily, CancelPolicy, [ConnectApi.CancelPolicyInputRepresentation, String], ConnectApi.CancelPolicyOutputRepresentation
```

## Related Topics

- ConnectApi.CancelPolicyInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_cancel_policy.htm)
- ConnectApi.CancelPolicyOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_cancel_policy_output.htm)
