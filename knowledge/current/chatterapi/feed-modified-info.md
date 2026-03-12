---
title: "Feed Modified Info"
domain: chatterapi
topic: feed-modified-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.799Z
estimatedTokens: 294
keywords: [Feed, Modified, Info]
---

# Feed Modified Info

> Feed modified information.

# Feed Modified Info

Feed modified information.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isModified | Boolean | true if a news feed and has been modified since the last time it was polled, false otherwise. Returns null if the feed is not a news feed. | Small, 29.0 | 23.0 |
| isModifiedToken | String | An opaque polling token that describes when a news feed was last modified. Use this value as the since request parameter of the News Feed Is-Modified resource. | Small, 29.0 | 27.0 |
| nextPollUrl | String | A News Feed Is-Modified resource with a since request parameter that contains an opaque token that describes when the feed was last modified. Returns null if feed is not a news feed. Make a request to this resource after making a request to the isModifiedUrl resource in the Feed or Feed Item Page response bodies. | Small, 29.0 | 23.0 |

## Related Topics

- News Feed Is-Modified (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_news.htm)
