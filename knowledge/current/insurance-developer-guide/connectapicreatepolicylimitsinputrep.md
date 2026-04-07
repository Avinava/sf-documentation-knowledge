---
title: "ConnectApi.CreatePolicyLimitsInputRep"
domain: insurance-developer-guide
topic: connectapicreatepolicylimitsinputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:49.759Z
estimatedTokens: 130
keywords: [ConnectApi.CreatePolicyLimitsInputRep, apex, record, policy, limits, created]
---

> Input representation for the apex ConnectApi.CreatePolicyLimitsInputRep record that
    contains the details of the policy limits to be created.

# ConnectApi.CreatePolicyLimitsInputRep

Input representation for the apex ConnectApi.CreatePolicyLimitsInputRep record that contains the details of the policy limits to be created.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeScopes | List<String> | Attribute scopes for which policy limit records must be created. | Optional | 65.0 |
| policyId | String | ID of the insurance policy for which the limits must be generated. | Required | 65.0 |
