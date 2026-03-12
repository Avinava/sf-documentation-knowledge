---
title: "GameAPIClient"
domain: loyalty
topic: gameapiclient
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.788Z
estimatedTokens: 216
keywords: [GameAPIClient, creates, retrofit, instance, invoke, REST, APIs, getOkHttpClientBuilder, getNetworkClient]
---

# GameAPIClient

> The GameAPIClient class creates a retrofit
    instance to invoke REST APIs.

# GameAPIClient

The GameAPIClient class creates a retrofit instance to invoke REST APIs.

This class extends the NetworkClient abstract class.

Use this constructor to initialize the GameAPIClient class.

class GameAPIClient constructor(auth: GameAuthenticator, instanceUrl: String) : NetworkClient(auth, instanceUrl)

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| auth | GameAuthenticator | An instance of the GameAuthenticator interface. | Required |
| instanceUrl | String | The URL of your Salesforce org. | Required |

## Methods

## getOkHttpClientBuilder

Retrieve an instance of OkHttpClient.

final OkHttpClient getOkHttpClientBuilder()

## getNetworkClient

Override the getNetworkClient method of the NetworkClient abstract class to get an instance of GameAPIInterface.

final GameAPIInterface getNetworkClient()
