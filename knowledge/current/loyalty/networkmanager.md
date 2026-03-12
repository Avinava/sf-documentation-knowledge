---
title: "NetworkManager"
domain: loyalty
topic: networkmanager
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.717Z
estimatedTokens: 254
keywords: [NetworkManager, manages, network, requests, processing, data, conforms, NetworkManagerProtocol, manage, responses, Shared, Instance, REST]
---

# NetworkManager

> The NetworkManager class manages network requests and
  processing of data. The NetworkManager class conforms to the NetworkManagerProtocol, which defines
  the set of methods and properties that are used to manage network requests and
  responses.

# NetworkManager

The NetworkManager class manages network requests and processing of data. The NetworkManager class conforms to the NetworkManagerProtocol, which defines the set of methods and properties that are used to manage network requests and responses.

Use this signature to define the NetworkManager class.

```

```

## Create a Shared Instance

Create a shared instance of the NetworkManager class by using this signature.

shared

```

```

## Get REST Requests

Use Async/Await to get all the REST requests asynchronously by using this signature.

fetch(type:request:urlSession:)

```

```

Use the parameters in this table to create a fetch request.

| Parameters | Description |
| --- | --- |
| type | A type or model of data that you want to decode from the JSON format. |
| request | The URLRequest, which is executed by URLSession. |
| urlSession | An instance of URLSession, which is used to execute the request and manage HTTP requests and responses. The default instance is URLSession.shared. |

## Code Examples

```apex
public class NetworkManager : NetworkManagerProtocol
```

```apex
public static let shared: NetworkManager
```

```apex
public func fetch<T>(type: T.Type, request: URLRequest, urlSession: URLSession = URLSession.shared) async throws -> T where T : Decodable
```
