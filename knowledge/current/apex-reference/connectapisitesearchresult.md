---
title: "ConnectApi.SiteSearchResult"
domain: apex-reference
topic: connectapisitesearchresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.014Z
keywords: [ConnectApi.SiteSearchResult]
---

# ConnectApi.SiteSearchResult

# ConnectApi.SiteSearchResult

Site search result.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageToken | String | Token for the current page of search results. | 54.0 |
| currentPageUrl | String | URL to the current page of search results. | 54.0 |
| items | List<ConnectApi.​SiteSearchItem> | Collection of search result items. | 54.0 |
| language | String | Language of the search results. | 54.0 |
| nextPageToken | String | Token for the next page of search results. | 54.0 |
| nextPageUrl | String | URL to the next page of search results, or null if there isn’t a next page. | 54.0 |
| pageSize | Integer | Number of items per page in search results. | 54.0 |
| previousPageToken | String | Token for the previous page of search results. | 54.0 |
| previousPageUrl | String | URL to the previous page of search results, or null if there isn’t a previous page. | 54.0 |
| totalItems | Integer | Total number of items in the search results across all pages. | 54.0 |