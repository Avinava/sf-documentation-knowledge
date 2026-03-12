---
title: "GamificationRemoteRepository"
domain: loyalty
topic: gamificationremoterepository
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.797Z
estimatedTokens: 584
keywords: [GamificationRemoteRepository, invokes, manages, gamification-related, REST, API, requests, interact, Salesforce, gamification, APIs, retrieve, member, games, play]
---

# GamificationRemoteRepository

> The GamificationRemoteRepository class invokes and
    manages gamification-related REST API requests. Use this class to interact with the Salesforce
    gamification APIs and retrieve member games, and play a game.

# GamificationRemoteRepository

The GamificationRemoteRepository class invokes and manages gamification-related REST API requests. Use this class to interact with the Salesforce gamification APIs and retrieve member games, and play a game.

The Gamification Mobile Android SDK requires a valid access token to interact with the Salesforce gamification APIs. To provide a valid access token, implement the GameAuthenticator interface in your GamificationRemoteRepository class at the time of initialization. This class manages authentication using the provided instance of GameAuthenticator.

Use this constructor to initialize the GamificationRemoteRepository class.

class GamificationRemoteRepository constructor( auth: GameAuthenticator, instanceUrl: String, gameClient: NetworkClient )

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| auth | GameAuthenticator | An instance of the GameAuthenticator interface. | Required |
| instanceUrl | String | The URL of your Salesforce org. | Required |
| gameClient | NetworkClient | An instance of the GameAPIClient class. | Required |

## Methods

## getGames

Retrieve games for the specified participant ID.

final Result<Games> getGames(String participantId, String gameParticipantRewardId, Boolean mockResponse)

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| participantId | String | The ID of a loyalty program member, an account, or a contact whose eligible games are to be retrieved. | Required |
| gameParticipantRewardId | String | The ID of the participant's game reward associated with the game whose details are to be fetched. | Optional |
| mockResponse | Boolean | Indicates whether to include a sample response (true) or not (false). | Optional |

## getGameReward

Retrieve the details of the reward that’s provided to a participant after the game play.

final Result<GameRewardResponse> getGameReward(String gameParticipantRewardId, Boolean mockResponse)

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| gameParticipantRewardId | String | The ID of the participant's game reward won by the participant whose details are to be fetched. | Required |
| mockResponse | Boolean | Indicates whether to include a sample response (true) or not (false). | Optional |
