---
title: "Games List"
domain: loyalty
topic: games-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.394Z
estimatedTokens: 247
keywords: [Games, Output, representation, assigned, member]
---

# Games List

> Output representation of the list of games assigned to a member.

# Games List

Output representation of the list of games assigned to a member.

JSON example

Here’s an example of the details of an eligible Spin the Wheel game assigned to a member, and an already played Scratch Card game.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorMessage | String | Message that provides the reason why a list of games weren't found for the participant. | Small, 60.0 | 60.0 |
| gameDefinitions | Game Details [] | List of game definitions associated with the games assigned to the member.A game definition has the details of a game, including:The list of possible rewards for the game.The participant game reward records that contain details of the game reward the participant has won for each game play, or can win after playing the game. | Small, 60.0 | 60.0 |
| status | Boolean | Indicates whether the request succeeded (true) or failed (false). | Small, 60.0 | 60.0 |

## Code Examples

```
{
   "errorMessage":null,
   "gameDefinitions":[
      {
         "description":"Play Spin The Wheel to get amazing rewards",
         "endDate":"2024-07-31T19:00:00.000Z",
         "gameRewards":[
            {
               "color":"FF5733",
               "description":"Get 10%  Off Voucher",
               "imageUrl":null,
               "name":"10 % Off",
               "rewardType":"Voucher",
               "rewardValue":null
            },
            {
               "color":"000000",
               "description":"Loyalty Points",
               "imageUrl":null,
               "name":"1000 Reward Points",
               "rewardType":"LoyaltyPoints",
               "rewardValue":"100.0"
            },
            {
               "color":"762E2E",
               "description":"Better Luck Next Time",
               "imageUrl":null,
               "name":"No Reward",
               "rewardType":"NoReward",
               "rewardValue":null
            }
         ],
         "participantGameRewards":[
            {
               "expirationDate":"2024-01-04T20:00:00.000Z",
               "gameParticipantRewardId":"3PRSB0000000hjJ4AQ",
               "gameRewardId":null,
               "issuedRewardReference":null,
               "sourceActivity":null,
               "status":"YetToReward"
            }
         ],
         "name":"Spin The Wheel",
         "startDate":"2023-10-01T19:00:00.000Z",
         "timeoutDuration":10,
         "type":"SpintheWheel"
      },
      {
         "description":"Play Scratch card to get amazing rewards",
         "endDate":"2024-07-31T19:00:00.000Z",
         "gameRewards":[
                        {
               "color":"",
               "description":"Get 10%  Off Voucher",
               "imageUrl":null,
               "name":"10 % Off",
               "rewardType":"Voucher",
               "rewardValue":null
            },
            {
               "color":"",
               "description":"Better Luck Next Time",
               "imageUrl":null,
               "name":"No Reward",
               "rewardType":"NoReward",
               "rewardValue":null
            }
         ],
         "participantGameRewards":[
            {
               "expirationDate":"2024-01-04T20:00:00.000Z",
               "gameParticipantRewardId":"2ABSB0000000hjJ3AM",
               "gameRewardId":"2GRSB0000000Caf4AB",
               "issuedRewardReference":"0lVSB000000032j2AA",
               "sourceActivity":"0c85i0000009c6D",
               "status":"Rewarded"
            }
         ],
         "name":"Scratch Card",
         "startDate":"2023-10-01T19:00:00.000Z",
         "timeoutDuration":20,
         "type":"Scratchcard"
      }
   ],
   "status":true
}
```

## Related Topics

- Game
                           Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_game_details.htm)
