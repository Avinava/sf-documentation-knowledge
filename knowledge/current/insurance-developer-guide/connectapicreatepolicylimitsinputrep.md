---
title: "ConnectApi.CreatePolicyLimitsInputRep"
domain: insurance-developer-guide
topic: connectapicreatepolicylimitsinputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.167Z
estimatedTokens: 130
keywords: [ConnectApi.CreatePolicyLimitsInputRep, Input, representation, apex, record, policy, limits, created]
---

# ConnectApi.CreatePolicyLimitsInputRep

> Input representation for the apex ConnectApi.CreatePolicyLimitsInputRep record that
    contains the details of the policy limits to be created.

# ConnectApi.CreatePolicyLimitsInputRep

Input representation for the apex ConnectApi.CreatePolicyLimitsInputRep record that contains the details of the policy limits to be created.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeScopes | List<String> | Attribute scopes for which policy limit records must be created. | Optional | 65.0 |
| policyId | String | ID of the insurance policy for which the limits must be generated. | Required | 65.0 |
