---
title: "ConnectApi.ReinstatePolicyInputRepresentation"
domain: insurance-developer-guide
topic: connectapireinstatepolicyinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.339Z
estimatedTokens: 318
keywords: [Input, representation, reinstating, insurance, policy]
---

# ConnectApi.ReinstatePolicyInputRepresentation

> Input representation for reinstating an insurance policy.

# ConnectApi.ReinstatePolicyInputRepresentation

Input representation for reinstating an insurance policy.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | List<ConnectApi.Additional​FieldsMapValue> | JSON structure that’s used to add custom or standard fields to the InsurancePolicy, InsurancePolicyAsset, InsurancePolicyCoverage, and InsurancePolicyParticipant objects. The values for additionalFields take precedence over the context or the insurancePolicy JSON. This is applicable only for the endorsed policy version. Address and Geolocation field types are not supported as additional fields. | Optional | 65.0 |
| effectiveDate | String | Date from which the policy reinstatement becomes effective. This date must be within the policy term.For example, if the policy term is 2025-01-01 to 2025-12-31, and you set effectiveDate to 2025-03-01, the reinstatement applies starting March 1, 2025. | Optional | 65.0 |
| insurancePolicy | InsurancePolicy​InputRepresentation | Details of the insurance policy. | Optional | 65.0 |
| transactionRecord | InsurancePolicy​Transaction​InputRepresentation | JSON structure that's used to override the transaction information. | Optional | 65.0 |

## Related Topics

- ConnectApi.Additional​FieldsMapValue (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_additional_fields_map_valu.htm)
- InsurancePolicy​InputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy.htm)
- InsurancePolicy​Transaction​InputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_transaction.htm)
