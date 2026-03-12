---
title: "Feed Item Page"
domain: chatterapi
topic: feed-item-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.782Z
estimatedTokens: 490
keywords: [Feed, Item, Chatter]
---

# Feed Item Page

> Chatter feed item page.

# Feed Item Page

Chatter feed item page.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This response body isn’t available in version 32.0 and later. In version 32.0 and later, [Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.") is used.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageUrl | String | URL to the current page of feed items | Medium, 29.0 | 23.0–31.0 |
| isModifiedToken | String | An opaque polling token that describes when a news feed was last modified. Use this value as the since request parameter of the News Feed Is-Modified resource.ImportantThis feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants. | Medium, 29.0 | 27.0–31.0 |
| isModifiedUrl | String | A News Feed Is-Modified resource with a since request parameter that contains an opaque token that describes when the feed was last modified. Returns null if feed is not a news feed.ImportantThis feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants. | Medium, 29.0 | 23.0–31.0 |
| items | Feed Item[] | Collection of one or more feed items | Small, 29.0 | 23.0–31.0 |
| nextPageUrl | String | URL to the next page of feed items | Small, 29.0 | 23.0–31.0 |
| updatesToken | String | Token to use in an updatedSince parameter, or null if not available. | Big, 30.0 | 30.0–31.0 |
| updatesUrl | String | A Connect REST API resource with a query string containing the value of the updatesToken property. The resource returns the feed items that have been updated since the last request. Use the URL as it is—do not modify it. Property is null if not available. | Big, 30.0 | 30.0–31.0 |

## Related Topics

- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
- News Feed Is-Modified (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_news.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
