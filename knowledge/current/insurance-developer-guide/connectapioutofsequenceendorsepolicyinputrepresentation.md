---
title: "ConnectApi.OutOfSequenceEndorsePolicyInputRepresentation"
domain: insurance-developer-guide
topic: connectapioutofsequenceendorsepolicyinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.318Z
estimatedTokens: 307
keywords: [Input, representation, perform, out-of-sequence, endorsement, insurance, policy]
---

# ConnectApi.OutOfSequenceEndorsePolicyInputRepresentation

> Input representation of the details to perform an out-of-sequence endorsement on an
    insurance policy.

# ConnectApi.OutOfSequenceEndorsePolicyInputRepresentation

Input representation of the details to perform an out-of-sequence endorsement on an insurance policy.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of the context that's used to create an endorsement policy version. | Required | 65.0 |
| effectiveDate | String | Date from which the out-of-sequence endorsement applies. This date must be within the policy term.For example, if the policy term is 2025-01-01 to 2025-12-31, and you set effectiveDate to 2025-03-01, the endorsement applies starting March 1, 2025, and the API re-rates the policy from 2025-03-01 forward. | Required | 65.0 |
| fieldSetIds | AdditionalFields​FieldSet​Input​Representation | Field set IDs of the additional fields that are associated with the insurance policy. | Optional | 65.0 |
| insurancePolicy | InsurancePolicy​Input​Representation | Details of the insurance policy to create the out-of-sequence endorsement for. | Optional | 65.0 |
| transactionRecord | InsurancePolicy​TransactionInput​Representation | JSON structure that's used to override the transaction information. | Optional | 65.0 |

## Related Topics

- AdditionalFields​FieldSet​Input​Representation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_additional_fields_field_set.htm)
- InsurancePolicy​Input​Representation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy.htm)
- InsurancePolicy​TransactionInput​Representation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_transaction.htm)
