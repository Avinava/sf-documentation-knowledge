---
title: "Chatter Stream Collection"
domain: chatterapi
topic: chatter-stream-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.820Z
estimatedTokens: 149
keywords: [Chatter, Stream, Collection, feed, streams]
---

# Chatter Stream Collection

> A collection of Chatter feed streams.

# Chatter Stream Collection

A collection of Chatter feed streams.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageUrl | String | URL to the current page of streams. | Medium, 39.0 | 39.0 |
| items | Chatter Stream[] | List of streams. | Small, 39.0 | 39.0 |
| nextPageUrl | String | URL to the next page of streams.In version 39.0, all streams are included in currentPageUrl and nextPageUrl is null. | Medium, 39.0 | 39.0 |
| total | Integer | Total number of streams in the collection. | Small, 39.0 | 39.0 |

## Related Topics

- Chatter Stream (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_stream.htm)
