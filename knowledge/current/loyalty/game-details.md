---
title: "Game Details"
domain: loyalty
topic: game-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.376Z
estimatedTokens: 279
keywords: [Game, Output, representation, definition]
---

# Game Details

> Output representation of the details of a game definition.

# Game Details

Output representation of the details of a game definition.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the game. | Small, 60.0 | 60.0 |
| endDate | String | Date until which participants are eligible to play the game. | Small, 60.0 | 60.0 |
| gameRewards | Game Rewards List [] | List of possible rewards for a game. | Small, 60.0 | 60.0 |
| name | String | Name of the game definition. | Small, 60.0 | 60.0 |
| participantGameRewards | Participant Game Rewards List[] | List of participant game reward records that contain the details of the game reward the participant has won for each game play, or can win after playing the game. | Small, 60.0 | 60.0 |
| startDate | String | Date from which participants are eligible to play the game. | Small, 60.0 | 60.0 |
| timeoutDuration | Integer | Duration of the game in seconds before the game session times out. | Small, 60.0 | 60.0 |
| type | String | Type of the game. Possible values are:ScratchcardSpintheWheel | Small, 60.0 | 60.0 |

## Related Topics

- Game Rewards
                  List (atlas.en-us.loyalty.meta/loyalty/connect_responses_game_rewards_list.htm)
- Participant Game Rewards List (atlas.en-us.loyalty.meta/loyalty/connect_responses_participant_game_rewards_list.htm)
