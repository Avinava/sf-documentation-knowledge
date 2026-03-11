---
title: "ConnectApi.ModerationFlagsCollection"
domain: apex-reference
topic: connectapimoderationflagscollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.283Z
keywords: [ConnectApi.ModerationFlagsCollection, See]
---

# ConnectApi.ModerationFlagsCollection

# ConnectApi.ModerationFlagsCollection

A collection of flags on a feed item, comment, or file.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageToken | String | Token identifying the current page. | 40.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 40.0 |
| flags | List<ConnectApi.​ModerationFlag​ItemDetail> | List of flag details. | 40.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | 40.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 40.0 |
| pageSize | Integer | Number of items per page. | 40.0 |

#### See Also

-   [ConnectApi.ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")