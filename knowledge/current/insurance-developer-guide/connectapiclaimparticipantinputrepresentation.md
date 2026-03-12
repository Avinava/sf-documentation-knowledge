---
title: "ConnectApi.ClaimParticipantInputRepresentation"
domain: insurance-developer-guide
topic: connectapiclaimparticipantinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.130Z
estimatedTokens: 244
keywords: [Input, representation, claim, participant]
---

# ConnectApi.ClaimParticipantInputRepresentation

> Input representation for a claim participant.

# ConnectApi.ClaimParticipantInputRepresentation

Input representation for a claim participant.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Account ID of the claim participant. | Optional | 65.0 |
| action | String | Action to perform on the record, such as create or update. | Optional | 65.0 |
| additionalFields | Object | Additional fields for the claim record to create or update the record. | Optional | 65.0 |
| contactId | String | Contact ID of the claim participant. | Optional | 65.0 |
| instanceKey | String | Unique instance key of the claim participant. | Optional | 65.0 |
| insurancePolicyParticipantId | String | ID of the insurance policy participant that's related to the claim. | Optional | 65.0 |
| isInjured | String | Specifies if the participant is injured or not. | Optional | 65.0 |
| roles | List<String> | Roles of the claim participant. | Optional | 65.0 |
