---
title: "ConnectApi.CancelPolicyInputRepresentation"
domain: insurance-developer-guide
topic: connectapicancelpolicyinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.093Z
estimatedTokens: 119
keywords: [Input, representation, cancel, policy]
---

# ConnectApi.CancelPolicyInputRepresentation

> Input representation of the request to cancel a policy.

# ConnectApi.CancelPolicyInputRepresentation

Input representation of the request to cancel a policy.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveDate | String | Date on which the cancellation of the policy goes into effect. | Required | 63.0 |
| transactionRecord | InsurancePolicyTransactionInputRepresentation | The JSON structure that overrides the transaction information. | Optional | 63.0 |

## Related Topics

- InsurancePolicyTransactionInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_policy_transaction.htm)
