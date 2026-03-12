---
title: "Games"
domain: loyalty
topic: games
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.102Z
estimatedTokens: 216
keywords: [Games, eligible, expired, played, Spin, Wheel, Scratch, card, loyalty, program, member, account, contact]
---

# Games

> Get a list of eligible, expired, and played games, such as Spin the Wheel, or Scratch
    card, for a loyalty program member, an account, or a contact.

# Games

Get a list of eligible, expired, and played games, such as Spin the Wheel, or Scratch card, for a loyalty program member, an account, or a contact.

Resource

```

```

Resource Example

```

```

```

```

```

```

Available version

60.0

HTTP methods

GET

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| definitionId | String | ID of the game definition associated with the game whose details are to be fetched. | Optional | 60.0 |
| gameParticipantRewardId | String | ID of the participant's game reward associated with the game whose details are to be fetched. | Optional | 60.0 |

Response body for GET

[Games List](atlas.en-us.loyalty.meta/loyalty/connect_responses_games_list.htm "Output representation of the list of games assigned to a member.")

## Code Examples

```
/game/participant/${participantId}/games
```

```
https://yourInstance.salesforce.com/services/data/v66.0/game/participant/0lMRM0000004FHX2A2/games
```

```
https://yourInstance.salesforce.com/services/data/v66.0/game/participant/0lMRM0000004FHX2A2/games?definitionId=3GDxx0000004CAeGAM
```

```
https://yourInstance.salesforce.com/services/data/v66.0/game/participant/0lMRM0000004FHX2A2/games?gameParticipantRewardId=3PRSB0000000hjJ4AQ
```

## Related Topics

- Games
              List (atlas.en-us.loyalty.meta/loyalty/connect_responses_games_list.htm)
