---
title: "ForceClient"
domain: loyalty
topic: forceclient
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.676Z
estimatedTokens: 459
keywords: [ForceClient, authentication, network, requests, uses, ForceAuthenticator, protocol, handle, access, tokens, Salesforce, API, Define, Manager, Instance]
---

# ForceClient

> Create authentication network requests by using the ForceClient class. ForceClient uses
  ForceAuthenticator, which is a protocol that defines the required methods to handle access tokens
  in Salesforce API.

# ForceClient

Create authentication network requests by using the ForceClient class. ForceClient uses ForceAuthenticator, which is a protocol that defines the required methods to handle access tokens in Salesforce API.

Use this signature to define the ForceClient class.

```

```

## Define Authentication

Handle the authentication process and encapsulate the logic to obtain and refresh the access token. Use this resource and signature to define the auth variable.

```

```

```

```

## Define the Network Manager

Make HTTP requests to the Salesforce server and manage the responses. Use this resource and signature to define the forceNetworkManager variable.

ForceNetworkManager

```

```

## Create an Instance from Force Authenticator

Create an instance from the ForceAuthenticator, and defines the required methods to handle access tokens in Salesforce API. Use this resource and signature to define the public initializer for the ForceClient class.

init(auth:forceNetworkManager:)

```

```

Use the parameters in this table to define an authentication instance.

| Parameters | Description |
| --- | --- |
| auth | A ForceAuthenticator instance that defines the required methods to handle access tokens in Salesforce API. |
| forceNetworkManager | A NetworkManagerProtocol instance that defines the requirements of a network manager. |

## Fetch Authentication Requests

Get all the REST requests for authentication. This request returns a decoded JSON response result. Use this resource and signature to define the fetch request.

fetch(type:with:urlSession:)

```

```

Use the parameters in this table to create a fetch request.

| Parameters | Description |
| --- | --- |
| type | A type or model of data that you want to decode from the JSON format. |
| request | A URLRequest, which is executed by URLSession. |

## Code Examples

```apex
public class ForceClient
```

```apex
public var auth: ForceAuthenticator
```

```apex
public var forceNetworkManager: NetworkManagerProtocol
```

```apex
public init(auth: ForceAuthenticator, forceNetworkManager: NetworkManagerProtocol = NetworkManager.shared
```

```
func fetch<T>(type: T.Type, with request: URLRequest, urlSession: URLSession = .shared) async throws -> T where T : Decodable
```
