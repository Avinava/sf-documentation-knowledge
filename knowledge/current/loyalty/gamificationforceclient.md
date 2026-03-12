---
title: "GamificationForceClient"
domain: loyalty
topic: gamificationforceclient
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.820Z
estimatedTokens: 380
keywords: [GamificationForceClient, handles, network, requests, GamificationForceAuthenticator, protocol, fetchLocalJson, fetch]
---

# GamificationForceClient

> The GamificationForceClient class handles network
    requests using the GamificationForceAuthenticator
    protocol.

# GamificationForceClient

The GamificationForceClient class handles network requests using the GamificationForceAuthenticator protocol.

This class uses a NetworkManager instance to handle network requests and data processing.

Use this initializer to initialize the GamificationForceClient class.

public init(auth: GamificationForceAuthenticator, forceNetworkManager: NetworkManagerProtocol = NetworkManager.shared)

| Parameter | Type | Description |
| --- | --- | --- |
| auth | GamificationForceAuthenticator | An instance of the GamificationForceAuthenticator protocol. |
| forceNetworkManager | NetworkManagerProtocol | A NetworkManager instance. |

## Methods

## fetchLocalJson

Returns a decoded JSON response result from the given local JSON file.

public func fetchLocalJson<T: Decodable>(type: T.Type, file: String, bundle: Bundle = Bundle.publicModule)

| Parameter | Type | Description |
| --- | --- | --- |
| type | T.Type | The model to be used by the JSON decoder. |
| file | String | The file name of a local JSON file. |
| bundle | Bundle | The app bundle name. |

## fetch

Returns a decoded JSON response result.

public func fetch<T: Decodable>(type: T.Type, with request: URLRequest, urlSession: URLSession = .shared)

| Parameter | Type | Description |
| --- | --- | --- |
| type | T.Type | The model to be used by the JSON decoder. |
| request | URLRequest | The URL request to be executed by the URL session. |
| urlSession | URLSession | An instance of URLSession to execute the request. |
