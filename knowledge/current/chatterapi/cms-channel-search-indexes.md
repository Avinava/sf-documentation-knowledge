---
title: "CMS Channel Search Indexes"
domain: chatterapi
topic: cms-channel-search-indexes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.749Z
estimatedTokens: 372
keywords: [CMS, Channel, Search, Indexes, latest, live, non-live, trigger, incremental, full, indexing]
---

# CMS Channel Search Indexes

> Get the latest live and non-live search indexes or trigger
      incremental or full search indexing for a channel.

# CMS Channel Search Indexes

Get the latest live and non-live search indexes or trigger incremental or full search indexing for a channel.

Resource

```

```

Available version

54.0

HTTP methods

GET, POST

Response body for GET

[Managed Content Search Index Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_search_index_collection.htm "Collection of search indexes for a channel.")

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fallbackToFull​Index | Boolean | Specifies whether to perform a full index in cases where incremental indexes aren’t possible (true) or not (false). If unspecified, defaults to true. This parameter has no effect if isIncremental is unspecified or set to false. | Optional | 59.0 |
| isIncremental | Boolean | Specifies whether to update the index only with changes that have happened since the last full index was performed (true) or perform a full index (false). If unspecified, the default is false. | Optional | 59.0 |

Response body for POST

[Managed Content Search Index](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_search_index.htm "Search index for a channel.")

After you index your content, use the [Experience Cloud CMS Content Search Resource](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_site_search.htm "Search an Experience Cloud site.") to search your site.

## Code Examples

```
/connect/cms/channels/channelId/search/indexes
```

## Related Topics

- Managed Content Search Index Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_search_index_collection.htm)
- Managed Content Search Index (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_search_index.htm)
- Experience Cloud CMS Content Search Resource (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_site_search.htm)
