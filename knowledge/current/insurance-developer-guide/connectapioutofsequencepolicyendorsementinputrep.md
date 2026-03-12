---
title: "ConnectApi.OutOfSequencePolicyEndorsementInputRep"
domain: insurance-developer-guide
topic: connectapioutofsequencepolicyendorsementinputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.323Z
estimatedTokens: 257
keywords: [Input, representation, perform, out-of-sequence, endorsement, insurance, policy]
---

# ConnectApi.OutOfSequencePolicyEndorsementInputRep

> Input representation of the details to perform an out-of-sequence endorsement on an
    insurance policy.

# ConnectApi.OutOfSequencePolicyEndorsementInputRep

Input representation of the details to perform an out-of-sequence endorsement on an insurance policy.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of the context that's used to create an endorsement policy version. | Required | 65.0 |
| effectiveDate | String | Date on which the out of sequence endorsement operation happens. | Required | 65.0 |
| fieldSetIds | FieldSetIdsInputRep | Field set IDs of the additional fields that are associated with the insurance policy. | Optional | 65.0 |
| insurancePolicy | InsPolicyIAInputRep | Details of the insurance policy to create the out-of-sequence endorsement for. | Optional | 65.0 |
| policyId | String | ID of the insurance policy to create the out-of-sequence endorsement for. | Required | 65.0 |
| transactionRecord | InsPolicyTrxnIAInputRep | JSON structure that's used to override the transaction information. | Optional | 65.0 |

## Related Topics

- FieldSetIdsInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_field_set_ids_input_re.htm)
- InsPolicyIAInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_ins_policy_i_a_input_re.htm)
- InsPolicyTrxnIAInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_ins_policy_trxn_i_a_input_re.htm)
