---
title: "Game Reward"
domain: loyalty
topic: game-reward
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.098Z
estimatedTokens: 104
keywords: [Game, Reward, that’s, provided, participant, plays, Spin, Wheel, Scratch, Card, reward, Resource, Input, Sample, Output]
---

# Game Reward

> Get the details of the reward that’s provided to a participant after the participant
    plays a Spin the Wheel, or Scratch Card game.

# Game reward

Get the details of the reward that’s provided to a participant after the participant plays a Spin the Wheel, or Scratch Card game.

## Resource

```

```

## Signature

```

```

## Input Parameters

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| devMode | Boolean | Indicates whether the method is run in the developer mode (true) or not (false). | Optional |
| mockFileName | String | The name of the file that has the sample response. | Optional |
| gameParticipantRewardId | String | The ID of the participant's game reward won by the participant whose details are to be fetched. | Required |
| version | String | Version of the API. The request body is available in version 60.0 and later. | Optional |

## Return Value

A PlayGameModel instance.

```

```

## Sample Output

```

```

## Output Parameters

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | Error message that provides the reason why the details of the participant reward weren’t found. | Small, 60.0 | 60.0 |
| gameReward | PlayGameReward [] | Details of the game reward won by the participant. | Small, 60.0 | 60.0 |
| status | Boolean | Indicates whether the request succeeded (true) or failed (false). | Small, 60.0 | 60.0 |

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| color | String | Color of the segment in the Spin the Wheel game that represents the game reward. | Small, 60.0 | 60.0 |
| description | String | Description of the game reward. | Small, 60.0 | 60.0 |
| gameRewardId | String | ID of the game reward won by the participant. | Small, 60.0 | 60.0 |
| imageUrl | String | Image URL of the segment in the Spin the Wheel game that represents the game reward. | Small, 60.0 | 60.0 |
| issuedRewardReference | String | Voucher ID, or the transaction journal ID associated with the voucher, or the loyalty points rewarded to the participant. | Small, 60.0 | 60.0 |
| name | String | Name of the game reward. | Small, 60.0 | 60.0 |
| rewardType | String | Type of the game reward. Possible values are:CustomRewardLoyaltyPointsNoRewardRaffleVoucher | Small, 60.0 | 60.0 |
| rewardValue | String | Value of the voucher, or the number of points to credit as a game reward to participants. | Small, 60.0 | 60.0 |

## Code Examples

```
/game/gameparticipantreward/${gameParticipantRewardId}/game-reward
```

```
https://yourInstance.salesforce.com/services/data/v66.0/game/gameparticipantreward/3PRSB0000000hjJ4AQ/game-reward
```

```
playGame(gameParticipantRewardId:version:devMode:mockFileName:)
```

```apex
public func playGame(
           gameParticipantRewardId: String,
           version: String = APIVersion.defaultVersion,
           devMode: Bool = false,
           mockFileName: String = "PlayGame_Success"
       ) async throws -> PlayGameModel
```

```apex
public struct PlayGameModel: Codable
```

## Related Topics

- Game
              Result (atlas.en-us.loyalty.meta/loyalty/connect_responses_game_result.htm)
