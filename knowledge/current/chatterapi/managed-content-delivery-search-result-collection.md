---
title: "Managed Content Delivery Search Result Collection"
domain: chatterapi
topic: managed-content-delivery-search-result-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.470Z
estimatedTokens: 192
keywords: [Managed, Content, Delivery, Search, Result, Collection, paginated, results]
---

# Managed Content Delivery Search Result Collection

> Collection of paginated managed content delivery search results.

# Managed Content Delivery Search Result Collection

Collection of paginated managed content delivery search results.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | Total count of search results. | Small, 64.0 | 64.0 |
| isNextPage​Available | Boolean | Specifies whether there are more search results (true) or not (false). | Small, 64.0 | 64.0 |
| items | Managed Content Delivery Search Result Item[] | Collection of search result items. | Small, 64.0 | 64.0 |

#### See Also

-   [CMS Delivery Channel Contents Search](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_contents_search.htm "Search for content in a channel or an Experience Cloud site.")

## Related Topics

- Managed Content Delivery Search Result Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_delivery_search_result_item.htm)
- CMS Delivery Channel Contents Search (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_contents_search.htm)
