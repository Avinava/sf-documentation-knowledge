---
title: "ConnectApi.GenericResponseOutputRepresentation"
domain: life-sciences-dev-guide
topic: connectapigenericresponseoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:54.714Z
estimatedTokens: 131
keywords: [generic, Connect, API, call]
---

> Output representation for a generic response from a Connect API
            call.

# ConnectApi.GenericResponseOutputRepresentation

Output representation for a generic response from a Connect API call.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| isSuccess | Boolean | Indicates if the API call was successful. | 65.0 |
| errors | List<String> | List of errors encountered during the API call. | 65.0 |
| jobId | String | ID of the asynchronous processing job, if applicable. | 65.0 |
| message | String | Message describing the result of the API call. | 65.0 |
