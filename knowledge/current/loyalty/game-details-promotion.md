---
title: "Game Details (Promotion)"
domain: loyalty
topic: game-details-promotion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.597Z
estimatedTokens: 166
keywords: [Game, Promotion, that's, assigned, customer]
---

# Game Details (Promotion)

> The details of the game that's assigned to the customer.

# Game Details (Promotion)

The details of the game that's assigned to the customer.

JSON example

This example shows a sample response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| gameDefinitionName | String | Name of the game that's assigned to a customer. | Big, 65.0 | 65.0 |
| gameExpirationDate | String | Date on which the game expires for the customer. | Big, 65.0 | 65.0 |
| gameParticipantRewardId | String | The ID of the game participant reward record that stores the details of the reward that the customer receives after they play the game. | Big, 65.0 | 65.0 |

## Code Examples

```
"gamesAssignedList": [
        {
          "gameDefinitionName": "SpintheWheelGame",
          "gameExpirationDate": "2025-10-10T00:00:00.000Z",
          "gameParticipantRewardId": "3PRSB0000004LFZ"
         }
       ]
```
