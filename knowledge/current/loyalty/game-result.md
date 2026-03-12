---
title: "Game Result"
domain: loyalty
topic: game-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.380Z
estimatedTokens: 170
keywords: [Game, Result, Output, representation, reward, participant, won]
---

# Game Result

> Output representation of the game reward that a participant has won.

# Game Result

Output representation of the game reward that a participant has won.

JSON example

Here’s an example of a reward won by the participant for the Spin the Wheel game:

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorMessage | String | Error message that provides the reason why the details of the participant reward weren’t found. | Small, 60.0 | 60.0 |
| gameReward | Game Reward Details [] | Details of the game reward won by the participant. | Small, 60.0 | 60.0 |
| status | Boolean | Indicates whether the request succeeded (true) or failed (false). | Small, 60.0 | 60.0 |

## Code Examples

```
{
   "errorMessage":null,
   "gameReward":[
      {
         "color":"01CD6C",
         "description":”Loyalty Points”,
         "gameRewardId":"3GRSB0000000Caf4AE",
         "imageUrl":null,
         "issuedRewardReference":"0lVSB000000032j2AA",
         "name":"1000 Reward Points",
         "rewardType":"LoyaltyPoints",
         "rewardValue":"100.0"
      }
   ],
   "status":true
}
```

## Related Topics

- Game
                  Reward Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_game_reward_details.htm)
