---
title: "Assigned Games"
domain: loyalty
topic: assigned-games
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.898Z
estimatedTokens: 1188
keywords: [Assigned, Games, eligible, expired, played, Spin, Wheel, Scratch, card, loyalty, program, member, account, contact, Resource]
---

# Assigned Games

> Get a list of eligible, expired, and played games, such as Spin the Wheel, or Scratch
    card, for a loyalty program member, an account, or a contact.

# Assigned Games

Get a list of eligible, expired, and played games, such as Spin the Wheel, or Scratch card, for a loyalty program member, an account, or a contact.

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
| participantId | String | The ID of a loyalty program member, an account, or a contact whose eligible games are to be retrieved. | Required |
| version | String | Version of the API. The request body is available in version 60.0 and later. | Optional |

## Return Value

A GameModel instance.

```

```

## Sample Output

```

```

## Output Parameters

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | Message that provides the reason why a list of games weren't found for the participant. | Small, 60.0 | 60.0 |
| gameDefinitions | GameDefinition[] | List of game definitions associated with the games assigned to the member.A game definition has the details of a game, including:The list of possible rewards for the game.The participant game reward records that contain details of the game reward the participant has won for each game play, or can win after playing the game. | Small, 60.0 | 60.0 |
| status | Boolean | Indicates whether the request succeeded (true) or failed (false). | Small, 60.0 | 60.0 |

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the game. | Small, 60.0 | 60.0 |
| endDate | String | Date until which participants are eligible to play the game. | Small, 60.0 | 60.0 |
| gameDefinitionId | String | ID of the game definition associated with the game. | Small, 60.0 | 60.0 |
| gameRewards | GameReward [] | List of possible rewards for a game. | Small, 60.0 | 60.0 |
| name | String | Name of the game definition. | Small, 60.0 | 60.0 |
| participantGameRewards | ParticipantGameReward[] | List of participant game reward records that contain the details of the game reward the participant has won for each game play, or can win after playing the game. | Small, 60.0 | 60.0 |
| startDate | String | Date from which participants are eligible to play the game. | Small, 60.0 | 60.0 |
| timeoutDuration | Integer | Duration of the game in seconds before the game session times out. | Small, 60.0 | 60.0 |
| type | String | Type of the game. Possible values are:ScratchcardSpintheWheel | Small, 60.0 | 60.0 |

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| color | String | Color of the segment in the Spin the Wheel game that represents the game reward. | Small, 60.0 | 60.0 |
| description | String | Description of the game reward. | Small, 60.0 | 60.0 |
| imageUrl | String | Image URL of the segment in the Spin the Wheel game that represents the game reward. | Small, 60.0 | 60.0 |
| name | String | Name of the game reward. | Small, 60.0 | 60.0 |
| gameRewardId | String | ID of the game reward. | Small, 60.0 | 60.0 |
| rewardType | String | Type of the game reward. Possible values are:CustomRewardLoyaltyPointsNoRewardRaffleVoucher | Small, 60.0 | 60.0 |
| rewardValue | String | Value of the voucher, or the number of points to credit as a game reward to participants. | Small, 60.0 | 60.0 |

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| expirationDate | String | Date until which the game reward is valid. | Small, 60.0 | 60.0 |
| gameParticipantRewardId | String | ID of the participant game reward object. | Small, 60.0 | 60.0 |
| gameRewardId | String | ID of the game reward won. This field is null for a game yet to be played. | Small, 60.0 | 60.0 |
| issuedRewardReference | String | Voucher ID, or the transaction journal ID associated with the voucher, or the loyalty points rewarded to the participant. This field is null for a game yet to be played. | Small, 60.0 | 60.0 |
| sourceActivity | String | ID of the promotion, or the transaction journal that is associated with the activity because of which the participant was eligible to play the game. Examples of source activities include purchasing a product, and reviewing on social media.This field is null for a game yet to be played. | Small, 60.0 | 60.0 |
| status | String | Status of the reward. Possible values are:ExpiredNoRewardRewardedYetToReward | Small, 60.0 | 60.0 |

## Code Examples

```
getGames(participantId:version:devMode:mockFileName:)
```

```apex
public func getGames(
           participantId: String,
           version: String = APIVersion.defaultVersion,
           devMode: Bool = false,
           mockFileName: String = "GetGames_Success"
       ) async throws -> GameModel
```

```apex
public struct GameModel : Codable
```

```
{
   "message":null,
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
