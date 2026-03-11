---
title: "ConnectApi.ChatterLikePage"
domain: apex-reference
topic: connectapichatterlikepage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.034Z
keywords: [ConnectApi.ChatterLikePage, See]
---

# ConnectApi.ChatterLikePage

# ConnectApi.ChatterLikePage

Page of Chatter likes.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageToken | Integer | Token identifying the current page. | 28.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 28.0 |
| items | List<ConnectApi.​Chatter​Like> | List of likes. | 32.0 |
| likes | List<ConnectApi.​Chatter​Like> | List of likes.ImportantAs of API version 32.0, use the items property. | 28.0–31.0 |
| nextPageToken | Integer | Token identifying the next page, or null if there isn’t a next page. | 28.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 28.0 |
| previousPageToken | Integer | Token identifying the previous page, or null if there isn’t a previous page. | 28.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | 28.0 |
| total | Integer | Total number of likes across all pages. | 28.0 |

#### See Also

-   [ConnectApi.ChatterLikesCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_likes_capability.htm "If a feed element has this capability, the context user can like it. Exposes information about existing likes.")
    
-   [ConnectApi.Comment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm "A comment.")