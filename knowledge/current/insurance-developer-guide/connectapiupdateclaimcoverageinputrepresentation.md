---
title: "ConnectApi.UpdateClaimCoverageInputRepresentation"
domain: insurance-developer-guide
topic: connectapiupdateclaimcoverageinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.361Z
estimatedTokens: 147
keywords: [Input, representation, updating, claim, coverage]
---

# ConnectApi.UpdateClaimCoverageInputRepresentation

> Input representation for updating a claim coverage.

# ConnectApi.UpdateClaimCoverageInputRepresentation

Input representation for updating a claim coverage.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Object | Additional fields for the coverage. | Optional | 65.0 |
| expenseReserveAmount | Double | Amount that's reserved to cover potential expenses while handling the claim, such as administrative or legal costs. | Optional | 65.0 |
| lossReserveAmount | Double | Amount that's reserved to cover a potential payment for a loss. | Optional | 65.0 |
