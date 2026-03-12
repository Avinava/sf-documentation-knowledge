---
title: "Game Assignment Output"
domain: loyalty
topic: game-assignment-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.372Z
estimatedTokens: 225
keywords: [Game, Assignment, Output, representation, assigned, member]
---

# Game Assignment Output

> Output representation of the details of a game assigned to a member.

# Game Assignment Output

Output representation of the details of a game assigned to a member.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| gameParticipantId | String | ID of the associated game participant. | Small, 60.0 | 60.0 |
| gameParticipantRewardId | String | The ID of the game participant reward record that stores the details of the reward that the member receives after they play the game. The record is associated with the source transaction journal and the record that issues the reward to the participant. | Small, 60.0 | 60.0 |
| gameDefinitionName | String | Name of the assigned game definition. | Small, 60.0 | 60.0 |
| gameExpirationDate | String | Date until which the assigned game is valid. | Small, 60.0 | 60.0 |
| reason | String | Reason the game was assigned to the member. | Small, 60.0 | 60.0 |
