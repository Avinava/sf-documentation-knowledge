---
title: "ConnectApi.InsurancePolicyBulkRenewInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancepolicybulkrenewinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.293Z
estimatedTokens: 152
keywords: [Input, representation, renew, insurance, policies, bulk, resource, includes, policy, IDs, renewed, associated]
---

# ConnectApi.InsurancePolicyBulkRenewInputRepresentation

> Input representation details of the renew insurance policies in bulk resource. The input
    includes the list of insurance policy IDs to be renewed and the details of the associated fields
    of the insurance policies.

# ConnectApi.InsurancePolicyBulkRenewInputRepresentation

Input representation details of the renew insurance policies in bulk resource. The input includes the list of insurance policy IDs to be renewed and the details of the associated fields of the insurance policies.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldValueMap | Object | JSON object that contains the name-value pairs that store the details of the insurance policy. | Required | 64.0 |
| insurance​PolicyIds | Object | List of insurance policy IDs. | Required | 64.0 |
