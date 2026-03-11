---
title: "ConnectApi.ZoneSearchResult"
domain: apex-reference
topic: connectapizonesearchresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.248Z
keywords: [ConnectApi.ZoneSearchResult, See]
---

# ConnectApi.ZoneSearchResult

# ConnectApi.ZoneSearchResult

Information about a specific zone search result.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| hasBestAnswer | Boolean | Indicates if the search result has a best answer. | 29.0 |
| id | String | ID of the search result. The search result can be a question or an article. | 29.0 |
| title | String | Title of the search result. | 29.0 |
| type | ConnectApi.​ZoneSearch​ResultType Enum | Specifies the zone search result type.Article—Search results contain only articles.Question—Search results contain only questions. | 29.0 |
| voteCount | String | Number of votes given to the search result. | 29.0 |

#### See Also

-   [ConnectApi.ZoneSearchPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_zoneSearchPage.htm "Page of zone search results.")