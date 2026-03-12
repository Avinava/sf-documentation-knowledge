---
title: "Feed Element Page"
domain: chatterapi
topic: feed-element-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.685Z
estimatedTokens: 648
keywords: [Feed, Element, Container, elements, paginated, results]
---

# Feed Element Page

> Container of feed elements with paginated
results.

# Feed Element Page

Container of feed elements with paginated results.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageToken | String | Token identifying the current page. | Medium, 37.0 | 37.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | Medium, 31.0 | 31.0 |
| elements |  | Collection of feed elements. A feed element can be any of these:Generic Feed ElementFeed Item | Small, 31.0 | 31.0 |
| isModifiedToken | String | An opaque polling token that describes when a news feed was last modified. Use this as the value in the since request parameter of the /chatter/feeds/news/me​/feed-elements/is-modified resource.ImportantThis feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants. | Medium, 31.0 | 31.0 |
| isModifiedUrl | String | Connect REST API URL with a since request parameter that contains an opaque token that describes when the feed was last modified. Returns null if the feed isn’t a news feed. Use this URL to poll a news feed for updates.ImportantThis feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants. | Medium, 31.0 | 31.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 31.0 | 31.0 |
| updatesToken | String | Token to use in an updatedSince parameter, or null if not available. An opaque polling token that describes when a news feed was last modified. Use this token as the value in the updatedSince request parameter of the /chatter/feeds/news/me/feed-elements resource. | Big, 31.0 | 31.0 |
| updatesUrl | String | A resource with the feed elements updated since the feed was refreshed. Value is null if the feed doesn’t support updates polling. | Big, 31.0 | 31.0 |

#### See Also

-   [Generic Bundle Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_generic_clumps_capability.htm "If a feed element has this capability, the feed element may be a group of other feed elements condensed into one.")

-   [Tracked Change Bundle Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tracked_change_clumps_capability.htm "If a feed element has this capability, it has a group of other feed elements aggregated into one feed element called a bundle. This type of bundle aggregates feed tracked changes.")

-   [Feed](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm "Chatter feed.")

## Related Topics

- Generic Feed Element (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_generic.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
- Generic Bundle Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_generic_clumps_capability.htm)
- Tracked Change Bundle Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tracked_change_clumps_capability.htm)
- Feed (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm)
