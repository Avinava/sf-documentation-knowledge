---
title: "ConnectApi.QueryInfo"
domain: apex-reference
topic: connectapiqueryinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.804Z
keywords: [ConnectApi.QueryInfo]
---

# ConnectApi.QueryInfo

# ConnectApi.QueryInfo

Query execution information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| queryId | String | Unique identifier assigned to a search query to enable tracking usage and analysis of user interactions with search results. | 65.0 |
| sobjects | Map<String, ConnectApi.​ObjectQueryInfo> | Query execution information for the object. | 64.0 |
| status | ConnectApi.​SearchStatus | Status on the object search such as error messages and warnings. | 64.0 |