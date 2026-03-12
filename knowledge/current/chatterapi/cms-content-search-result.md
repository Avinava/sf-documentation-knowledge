---
title: "CMS Content Search Result"
domain: chatterapi
topic: cms-content-search-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.154Z
estimatedTokens: 299
keywords: [CMS, Content, Search, Result]
---

# CMS Content Search Result

> CMS Content Search result.

# CMS Content Search Result

CMS Content Search result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageToken | String | Token for the current page of search results. | Small, 54.0 | 54.0 |
| currentPageUrl | String | URL to the current page of search results. | Small, 54.0 | 54.0 |
| items | CMS Content Search Item[] | Collection of search result items. | Medium, 54.0 | 54.0 |
| language | String | Language of the search results. | Small, 54.0 | 54.0 |
| nextPageToken | String | Token for the next page of search results. | Small, 54.0 | 54.0 |
| nextPageUrl | String | URL to the next page of search results, or null if there isn’t a next page. | Small, 54.0 | 54.0 |
| pageSize | Integer | Number of items per page in search results. | Small, 54.0 | 54.0 |
| previousPageToken | String | Token for the previous page of search results. | Small, 54.0 | 54.0 |
| previousPageUrl | String | URL to the previous page of search results, or null if there isn’t a previous page. | Small, 54.0 | 54.0 |
| totalItems | Integer | Total number of items in the search results across all pages. | Small, 54.0 | 54.0 |

## Related Topics

- CMS Content Search Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_site_search_item.htm)
