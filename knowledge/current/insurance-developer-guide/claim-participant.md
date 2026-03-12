---
title: "Claim Participant"
domain: insurance-developer-guide
topic: claim-participant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.407Z
estimatedTokens: 185
keywords: [Claim, Participant, Output, representation]
---

# Claim Participant

> Output representation for the details of a claim participant.

# Claim Participant

Output representation for the details of a claim participant.

JSON example

```

```

| Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Account ID of the claim participant. | Big, 65.0 | 65.0 |
| contactId | String | Contact ID of the claim participant. | Big, 65.0 | 65.0 |
| id | String | ID of the claim participant. | Big, 65.0 | 65.0 |
| instanceKey | String | Instance key of the claim participant. | Big, 65.0 | 65.0 |
| insurance​Policy​ParticipantId | String | ID of the insurance policy participant that's related to the claim. | Big, 65.0 | 65.0 |
| roles | String[] | Roles of the claim participant. | Small, 65.0 | 65.0 |

## Code Examples

```
"participants": [
    {
      "id": "0kaxx000000001dEAA",
      "instanceKey": "participant_driver_1",
      "accountId": "001xx000003DGQyAAO",
      "contactId": "003xx000003DGQyAAO",
      "insurancePolicyParticipantId": "0pPxx000000001qEAA",
      "roles": [
        "Driver",
        "Claimant"
      ]
    }
  ]
```
