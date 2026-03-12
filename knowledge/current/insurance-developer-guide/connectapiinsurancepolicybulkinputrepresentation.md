---
title: "ConnectApi.InsurancePolicyBulkInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancepolicybulkinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.291Z
estimatedTokens: 148
keywords: [Input, representation, cancel, policies, bulk, resource, includes, insurance, policy, IDs, canceled, associated]
---

# ConnectApi.InsurancePolicyBulkInputRepresentation

> Input representation details of the cancel policies in bulk resource. The input includes
    the list of insurance policy IDs to be canceled and the details of the associated fields of the
    insurance policies.

# ConnectApi.InsurancePolicyBulkInputRepresentation

Input representation details of the cancel policies in bulk resource. The input includes the list of insurance policy IDs to be canceled and the details of the associated fields of the insurance policies.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldValueMap | Object | JSON object that contains the name-value pairs that store the details of the insurance policy. | Required | 64.0 |
| insurancePolicyIds | Object | List of Insurance policy IDs. | Required | 64.0 |
