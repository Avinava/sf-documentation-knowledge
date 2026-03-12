---
title: "ConnectApi.ClaimParticipantInputRep"
domain: insurance-developer-guide
topic: connectapiclaimparticipantinputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.134Z
estimatedTokens: 263
keywords: [ConnectApi.ClaimParticipantInputRep, Invocable, Action, Input, representation, Claim, Participant]
---

# ConnectApi.ClaimParticipantInputRep

> Invocable Action Input representation for Claim Participant

# ConnectApi.ClaimParticipantInputRep

Invocable Action Input representation for Claim Participant

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Account ID that's associated with the claim participant. | Optional | 65.0 |
| action | String | Action to perform on the record, such as create or update. | Optional | 65.0 |
| additionalFields | List<ConnectApi.ClaimAdditionalFieldInputRep> | Additional standard or custom fields to add details for the claim participant. | Optional | 65.0 |
| contactId | String | Contact ID that's associated with the participant. | Optional | 65.0 |
| instanceKey | String | Unique identifier for the participant. | Optional | 65.0 |
| insurancePolicyParticipantId | String | ID of the insurance policy participant that's related to the claim. | Optional | 65.0 |
| isInjured | String | Specifies if the participant is injured or not. | Optional | 65.0 |
| roles | List<String> | Roles of the claim participant. | Optional | 65.0 |

## Related Topics

- ConnectApi.ClaimAdditionalFieldInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_additional_field_input_re.htm)
