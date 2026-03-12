---
title: "ConnectApi.ZoneSearchPage"
domain: apex-reference
topic: connectapizonesearchpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.336Z
estimatedTokens: 150
keywords: [ConnectApi.ZoneSearchPage, Page, zone, search, results.]
---

# ConnectApi.ZoneSearchPage

> Page of zone search results.

# ConnectApi.ZoneSearchPage

Page of zone search results.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageToken | String | Token identifying the current page. | 29.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 29.0 |
| items | List<ConnectApi.ZoneSearchResult> | List of search results. | 29.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | 29.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 29.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.ZoneSearchResult (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_zoneSearchResult.htm)
