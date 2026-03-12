---
title: "ConnectApi.EndorsePolicyInputRepresentation"
domain: insurance-developer-guide
topic: connectapiendorsepolicyinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.178Z
estimatedTokens: 343
keywords: [Input, representation, endorse, policy, Context, quote, that’s, endorsement, date, endorsed, version, effective, passed]
---

# ConnectApi.EndorsePolicyInputRepresentation

> Input representation of the request to endorse a policy. Context ID of the quote that’s
    used for endorsement and date that the endorsed policy version is effective from must be passed
    in the request.

# ConnectApi.EndorsePolicyInputRepresentation

Input representation of the request to endorse a policy. Context ID of the quote that’s used for endorsement and date that the endorsed policy version is effective from must be passed in the request.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | List<ConnectApi.Additional​FieldsMapValue> | The JSON structure that’s used to add custom or standard fields to the InsurancePolicy, InsurancePolicyAsset, InsurancePolicyCoverage, and InsurancePolicyParticipant objects. The values for additionalFields take precedence over the context or the insurancePolicy JSON. This is applicable only for the endorsed policy version. Address and Geolocation field types are not supported as additional fields. | Optional | 63.0 |
| contextId | String | Context ID of the quote that’s used for endorsement. | Required | 63.0 |
| effectiveDate | String | Date from when endorsed policy version is effective from. | Required | 63.0 |
| insurancePolicy | InsurancePolicyInput​Representation | The JSON structure that overrides the name and policy number of the endorsed policy version. | Optional | 63.0 |
| transactionRecord | InsurancePolicy​Transaction​InputRepresentation | The JSON structure that overrides the transaction information. | Optional | 63.0 |

## Related Topics

- ConnectApi.Additional​FieldsMapValue (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_additional_fields_map_valu.htm)
- InsurancePolicyInput​Representation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_transaction.htm)
- InsurancePolicy​Transaction​InputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_transaction.htm)
