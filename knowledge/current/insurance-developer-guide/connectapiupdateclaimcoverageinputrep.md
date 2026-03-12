---
title: "ConnectApi.UpdateClaimCoverageInputRep"
domain: insurance-developer-guide
topic: connectapiupdateclaimcoverageinputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.366Z
estimatedTokens: 196
keywords: [ConnectApi.UpdateClaimCoverageInputRep, Input, representation, claim, coverage, action]
---

# ConnectApi.UpdateClaimCoverageInputRep

> Input representation for the update claim coverage action.

# ConnectApi.UpdateClaimCoverageInputRep

Input representation for the update claim coverage action.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | List<ConnectApi.ClaimAdditionalFieldInputRep> | Additional standard or custom fields to update the record. | Optional | 65.0 |
| claimId | String | ID of the claim. | Required | 65.0 |
| coverageId | String | ID of the coverage within the claim. | Required | 65.0 |
| expenseReserveAmount | Double | Amount that's reserved to cover potential expenses while handling the claim, such as administrative or legal costs. | Optional | 65.0 |
| lossReserveAmount | Double | Amount that's reserved to cover a potential payment for a loss. | Optional | 65.0 |
