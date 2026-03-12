---
title: "Claim Participant Input"
domain: insurance-developer-guide
topic: claim-participant-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.687Z
estimatedTokens: 281
keywords: [Claim, Participant, Input, representation]
---

# Claim Participant Input

> Input representation for a claim participant.

# Claim Participant Input

Input representation for a claim participant.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Account ID of the claim participant. | Optional | 65.0 |
| action | String | Action to perform on the participant record, such as create, update, or delete.Supported only for Claims (PATCH) requests that add, update, or remove a claim participant. | Required to update claim participant | 65.0 |
| additional​Fields | Object | Additional standard or custom fields to add details for the claim participant. | Optional | 65.0 |
| contactId | String | Contact ID of the claim participant. | Optional | 65.0 |
| instanceKey | String | Unique identifier for the participant. | Optional | 65.0 |
| insurancePolicy​ParticipantId | String | ID of the insurance policy participant that's related to the claim. | Optional | 65.0 |
| isInjured | String | Specifies if the participant is injured or not. | Optional | 65.0 |
| roles | String[] | Roles of the claim participant. | Required | 65.0 |

## Code Examples

```
[
  {
    "instanceKey": "participant_driver_01",
    "contactId": "003xx000003DGQyAAO",
    "accountId": "001xx000003DGQyAAO",
    "insurancePolicyParticipantId": "0pPxx000000001qEAA",
    "isInjured": false,
    "roles": {
      "list": [
        "Driver",
        "Claimant"
      ]
    },
    "additionalFields": {
      "StatementTaken": true
    },
    "action": "update"
  }
]
```
