---
title: "Query
    Info"
domain: chatterapi
topic: query-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.726Z
estimatedTokens: 141
keywords: [Query, Info, Search, execution]
---

# Query
    Info

> Contains Search query execution information.

# Query Info

Contains Search query execution information.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| queryId | String | Unique identifier assigned to a search query to enable tracking usage and analysis of user interactions with search results. | Small, 65.0 | 65.0 |
| sobjects | Map<String, Object Query Info> | Query execution information per object. | Small, 64.0 | 64.0 |
| status | Status | Status on the object search such as error messages and warnings. | Small, 64.0 | 64.0 |

## Related Topics

- Object Query Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_object_query_inf.htm)
- Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_statu.htm)
