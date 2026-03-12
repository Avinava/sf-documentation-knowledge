---
title: "Managed Content Search Result Items Collection"
domain: chatterapi
topic: managed-content-search-result-items-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.559Z
estimatedTokens: 158
keywords: [Managed, Content, Search, Result, Items, Collection, Paginated, CMS, keyword-based]
---

# Managed Content Search Result Items Collection

> Paginated collection of CMS keyword-based search result
    items.

# Managed Content Search Result Items Collection

Paginated collection of CMS keyword-based search result items.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | Total count of search results. | Small, 57.0 | 57.0 |
| currentPageUri | String | URI for the current page of search results. | Small, 57.0 | 57.0 |
| items | Managed Content Folder Search Result[]Managed Content Variant Search Result[] | List of search result items. | Small, 57.0 | 57.0 |
| nextPageUri | String | URI for the next page of search results. | Small, 57.0 | 57.0 |

## Related Topics

- Managed Content Folder Search Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_folder_search_result.htm)
- Managed Content Variant Search Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_variant_search_result.htm)
