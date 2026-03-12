---
title: "ConnectApi.VerifyPolicyCoverageInputRep"
domain: insurance-developer-guide
topic: connectapiverifypolicycoverageinputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.371Z
estimatedTokens: 154
keywords: [ConnectApi.VerifyPolicyCoverageInputRep, Invocable, action, input, representation, verify, coverage, specific, insurance, policy]
---

# ConnectApi.VerifyPolicyCoverageInputRep

> Invocable action input representation details to verify the coverage of a specific
    insurance policy.

# ConnectApi.VerifyPolicyCoverageInputRep

Invocable action input representation details to verify the coverage of a specific insurance policy.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| coverageId | String | Insurance policy coverage ID. | Required | 65.0 |
| insuredAssetOrParticipantId | String | ID of the insured asset or participant that's related to the policy coverage. | Optional | 65.0 |
| lossDate | String | Date on which the incident occurred. | Optional | 65.0 |
| policyId | String | ID of the insurance policy. | Required | 65.0 |
