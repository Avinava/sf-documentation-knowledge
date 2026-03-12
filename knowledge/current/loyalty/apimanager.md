---
title: "APIManager"
domain: loyalty
topic: apimanager
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.809Z
estimatedTokens: 673
keywords: [APIManager, manages, requests, gamification, invokes, REST, APIs, interact, Salesforce, retrieve, member, games, game, rewards, getGames]
---

# APIManager

> The APIManager class manages requests related to
    gamification, and invokes the gamification REST APIs. Use this class to interact with the
    Salesforce gamification APIs and retrieve member games, and game rewards.

# APIManager

The APIManager class manages requests related to gamification, and invokes the gamification REST APIs. Use this class to interact with the Salesforce gamification APIs and retrieve member games, and game rewards.

The Gamification Mobile iOS SDK requires a valid access token to interact with the Salesforce gamification APIs. To provide a valid access token, pass an instance of GamificationForceAuthenticator protocol in your APIManager class at the time of initialization. The APIManager class manages authentication using the provided instance of GamificationForceAuthenticator.

Use this initializer to initialize the GamificationRemoteRepository class.

public init(auth: GamificationForceAuthenticator, instanceURL: String, forceClient: GamificationForceClient) { self.auth = auth self.instanceURL = instanceURL self.forceClient = forceClient }

| Parameter | Type | Description |
| --- | --- | --- |
| auth | GamificationForceAuthenticator | An instance of the GamificationForceAuthenticator protocol. |
| instanceUrl | String | The URL of your Salesforce org. |
| forceClient | GamificationForceClient | An instance of the GamificationForceClient class. |

## Methods

## getGames

Retrieve games for the specified participant ID. This method returns an instance of the GameModel object.

public func getGames( participantId: String, version: String = APIVersion.defaultVersion, devMode: Bool = false, mockFileName: String = "GetGames\_Success" ) async throws -> GameModel

| Parameter | Type | Description |
| --- | --- | --- |
| participantId | String | The ID of a loyalty program member, an account, or a contact whose eligible games are to be retrieved. |
| version | String | The API version. |
| mockFileName | String | The name of the file that has the sample response. |
| devMode | Boolean | Indicates whether the method is run in the developer mode (true) or not (false). |

## getGameReward

Retrieve the details of the reward that’s provided to a participant after the game play. This method returns an instance of the PlayGameModel object.

public func playGame( gameParticipantRewardId: String, version: String = APIVersion.defaultVersion, devMode: Bool = false, mockFileName: String = "PlayGame\_Success" ) async throws -> PlayGameModel

| Parameter | Type | Description |
| --- | --- | --- |
| gameParticipantRewardId | String | The ID of the participant's game reward won by the participant whose details are to be fetched. |
| version | String | The API version. |
| mockFileName | String | The name of the file that has the sample response. |
| devMode | Boolean | Indicates whether the method is run in the developer mode (true) or not (false). |
