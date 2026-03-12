---
title: "Zone Search Page"
domain: chatterapi
topic: zone-search-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.641Z
estimatedTokens: 183
keywords: [Zone, Search, results, Chatter, Answers]
---

# Zone Search Page

> A page of results from a search within a Chatter Answers zone.

# Zone Search Page

A page of results from a search within a Chatter Answers zone.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageToken | String | Token identifying the current page. | Medium, 29.0 | 29.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | Medium, 29.0 | 29.0 |
| items | Zone Search Results[] | Collection of search results | Small, 29.0 | 29.0 |
| currentPageToken | String | Token identifying the next page, or null if there isn’t a next page. | Small, 29.0 | 29.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 29.0 | 29.0 |

## Related Topics

- Zone Search Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_zone_search_result.htm)
