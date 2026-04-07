---
title: "RequestType"
domain: mc-apis
topic: requesttype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:23.303Z
estimatedTokens: 144
keywords: [RequestType, API]
---

# RequestType

> The RequestType object specifies type of API request.

# RequestType

The RequestType object specifies type of API request.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Asynchronous | Enumeration | Specifies that the API request is processed asynchronously. The request is queued and a response is returned to the caller immediately. Once the request has been processed, if the caller has supplied information in the SendReponseTo array of the Options, the actual results of the request are returned to the caller. |
| Synchronous | Enumeration | Specifies that the process is processed synchronously. |
