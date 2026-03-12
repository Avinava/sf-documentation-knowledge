---
title: "ConnectApi.CreateClaimCoverageInputRepresentation"
domain: insurance-developer-guide
topic: connectapicreateclaimcoverageinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.154Z
estimatedTokens: 305
keywords: [Input, representation, creating, claim, coverage]
---

# ConnectApi.CreateClaimCoverageInputRepresentation

> Input representation for creating a claim coverage.

# ConnectApi.CreateClaimCoverageInputRepresentation

Input representation for creating a claim coverage.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Object | Additional fields for the claim coverage. | Optional | 65.0 |
| claimItemId | String | ID of the claim item. | Optional | 65.0 |
| claimParticipantId | String | ID of the claim participant. | Optional | 65.0 |
| currencyIsoCode | String | Currency ISO code for reserve adjustments. | Optional | 65.0 |
| expenseReserveAmount | Double | Amount that's reserved to cover potential expenses while handling the claim, such as administrative or legal costs. | Optional | 65.0 |
| insurancePolicyAssetId | String | ID of the insurance policy asset. | Optional | 65.0 |
| insurancePolicyCoverageId | String | ID of the insurance policy coverage. | Optional | 65.0 |
| lossReserveAmount | Double | Amount that's reserved to cover a potential payment for a loss. | Optional | 65.0 |
| name | String | Name of the claim coverage. | Optional | 65.0 |
| reserveProcessingMode | String | Determines how financial reserves are handled when a claim coverage is created. | Optional | 65.0 |
