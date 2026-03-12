---
title: "ConnectApi.InsurancePolicyInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancepolicyinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.287Z
estimatedTokens: 251
keywords: [Input, representation, insurance, policy]
---

# ConnectApi.InsurancePolicyInputRepresentation

> Input representation details of an insurance policy.

# ConnectApi.InsurancePolicyInputRepresentation

Input representation details of an insurance policy.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveFromDate | String | Date from when the policy is effective.This property isn't applicable to the out-of-sequence endorsement and policy reinstatement APIs. | Optional | 63.0 |
| effectiveToDate | String | Date until when the policy is effective.This property isn't applicable to the out-of-sequence endorsement and policy reinstatement APIs. | Optional | 63.0 |
| policyName | String | Name of the insurance policy. | Optional | 63.0 |
| policyNumber | String | Number of the policy. | Optional | 63.0 |
| referencePolicy​Number | String | Reference number that's used to link policies across terms.If not specified, policies are linked by the insurance policy ID.This property isn't applicable to the out-of-sequence endorsement and policy reinstatement APIs. | Optional | 65.0 |
