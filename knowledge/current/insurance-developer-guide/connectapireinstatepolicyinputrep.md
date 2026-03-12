---
title: "ConnectApi.ReinstatePolicyInputRep"
domain: insurance-developer-guide
topic: connectapireinstatepolicyinputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.343Z
estimatedTokens: 318
keywords: [ConnectApi.ReinstatePolicyInputRep, Input, representation, Reinstate, Insurance, Policy, Invocable, Action]
---

# ConnectApi.ReinstatePolicyInputRep

> Input representation for the Reinstate Insurance Policy Invocable Action.

# ConnectApi.ReinstatePolicyInputRep

Input representation for the Reinstate Insurance Policy Invocable Action.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalInput | List<ConnectApi.InsPolicy​AddlInput​IARep> | JSON structure that’s used to add custom or standard fields to the InsurancePolicy, InsurancePolicyAsset, InsurancePolicyCoverage, and InsurancePolicyParticipant objects. The values for additionalInput take precedence over the context or the insurancePolicy JSON. This is applicable only for the endorsed policy version. Address and Geolocation field types are not supported as additional input. | Optional | 65.0 |
| effectiveDate | String | Date from when the policy is reinstated.For example, if the policy term is 2025-01-01 to 2025-12-31, and you set effectiveDate to 2025-03-01, the reinstatement applies starting March 1, 2025. | Optional | 65.0 |
| insurancePolicy | InsPolicyIA​InputRep | Details of the insurance policy. | Optional | 65.0 |
| policyId | String | ID of the canceled insurance policy to be reinstated. | Required | 65.0 |
| transactionRecord | InsPolicyTrxn​IAInputRep | JSON structure that's used to override the transaction information. | Optional | 65.0 |

## Related Topics

- ConnectApi.InsPolicy​AddlInput​IARep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_ins_policy_addl_input_i_a_re.htm)
- InsPolicyIA​InputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_ins_policy_i_a_input_re.htm)
- InsPolicyTrxn​IAInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_ins_policy_trxn_i_a_input_re.htm)
