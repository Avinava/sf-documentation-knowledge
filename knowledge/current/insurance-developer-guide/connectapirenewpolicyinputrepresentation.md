---
title: "ConnectApi.RenewPolicyInputRepresentation"
domain: insurance-developer-guide
topic: connectapirenewpolicyinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.352Z
estimatedTokens: 289
keywords: [Input, representation, renew, policy]
---

# ConnectApi.RenewPolicyInputRepresentation

> Input representation of the request to renew a policy.

# ConnectApi.RenewPolicyInputRepresentation

Input representation of the request to renew a policy.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | List<ConnectApi.​AdditionalFieldsMapValue> | The JSON structure that’s used to add custom or standard fields to the InsurancePolicy, InsurancePolicyAsset, InsurancePolicyCoverage, and InsurancePolicyParticipant objects. The values for additionalFields take precedence over the context or the insurancePolicy JSON. This is applicable only for the endorsed policy version. Address and Geolocation field types are not supported as additional fields. | Optional | 63.0 |
| contextId | String | Context ID of the quote that's used to renew the policy. | Required | 63.0 |
| insurancePolicy | InsurancePolicy​InputRepresentation | The JSON structure that’s used to renew the policy. It contains fields and values from the Insurance Policy object. | Optional | 63.0 |
| transactionRecord | InsurancePolicy​TransactionInput​Representation | The JSON structure that's used to override the transaction information. | Optional | 63.0 |

## Related Topics

- ConnectApi.​AdditionalFieldsMapValue (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_additional_fields_map_valu.htm)
- InsurancePolicy​InputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy.htm)
- InsurancePolicy​TransactionInput​Representation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_transaction.htm)
