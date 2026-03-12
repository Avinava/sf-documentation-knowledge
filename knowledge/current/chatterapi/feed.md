---
title: "Feed"
domain: chatterapi
topic: feed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.649Z
estimatedTokens: 452
keywords: [Feed, Chatter]
---

# Feed

> Chatter feed.

# Feed

Chatter feed.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| feedElement​PostUrl | String | URL to post feed elements to this subject.When returned by a request that includes the HTTP header X-Connect-Bearer-Urls: true, the URL includes a bearer token. Use this bearer token URL to make POST requests. | Small, 31.0 | 31.0 |
| feedElements | Feed Element Page | Page of feed elements for the feed specified in redirectedFeedType. Otherwise, null. | Small, 40.0 | 40.0 |
| feedElementsUrl | String | URL to feed elements. | Small, 31.0 | 31.0 |
| feedItemsUrl | String | URL to feed items. | Small, 29.0 | 23.0–31.0 |
| isModifiedUrl | String | A News Feed Is-Modified resource with a since request parameter that contains an opaque token that describes when the feed was last modified. Returns null if feed is not a news feed.ImportantThis feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants. | Small, 29.0 | 23.0 |
| pinnedFeed​ElementsUrl | String | URL to pinned feed items. | Small, 41.0 | 41.0 |
| redirected​FeedFilter | String | Filter for the feed specified in redirectedFeedType. Otherwise, null. | Small, 42.0 | 42.0 |
| redirected​FeedSort | String | Sort order for the feed specified in redirectedFeedType. Otherwise, null. | Small, 42.0 | 42.0 |
| redirected​FeedType | String | Specifies which feed is returned if pageSize is specified. Otherwise, null. | Small, 40.0 | 40.0 |
| respectsMute | Boolean | Indicates whether the feed respects the mute feature. If true, the feed shows the ability to mute or unmute each element, depending on the value of isMutedByMe; null if the mute feature is disabled for the organization. | Small, 35.0 | 35.0 |

## Related Topics

- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
- News Feed Is-Modified (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_news.htm)
