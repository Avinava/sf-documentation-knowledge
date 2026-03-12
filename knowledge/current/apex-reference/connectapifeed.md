---
title: "ConnectApi.Feed"
domain: apex-reference
topic: connectapifeed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.710Z
estimatedTokens: 406
keywords: [ConnectApi.Feed, Chatter, feed.]
---

# ConnectApi.Feed

> Chatter feed.

# ConnectApi.Feed

Chatter feed.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| feedElement​PostUrl | String | Connect REST API URL to post feed elements to this subject. | 31.0 |
| feedElements | ConnectApi.FeedElementPage | Page of feed elements for the feed specified in redirectedFeedType. Otherwise, null. | 40.0 |
| feedElementsUrl | String | Connect REST API URL to feed elements. | 31.0 |
| feedItemsUrl | String | Connect REST API URL to feed items. | 28.0–31.0 |
| isModifedUrl | String | Connect REST API URL with a since request parameter that contains an opaque token that describes when the feed was last modified. Returns null if the feed isn’t a news feed. Use this URL to poll a news feed for updates.ImportantThis feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants. | 28.0 |
| pinnedFeed​ElementsUrl | String | URL to pinned feed items. | 41.0 |
| redirected​FeedFilter | ConnectApi.​FeedFilter | Filter for the feed specified in redirectedFeedType. Otherwise, null. | 42.0 |
| redirected​FeedSort | ConnectApi.​FeedSort​Order | Sort order for the feed specified in redirectedFeedType. Otherwise, null. | 42.0 |
| redirected​FeedType | ConnectApi.​FeedType | Specifies which feed is returned if pageSize is specified. Otherwise, null. | 40.0 |
| respectsMute | Boolean | Indicates whether the feed respects the mute feature. If true, the feed shows the ability to mute or unmute each element, depending on the value of isMutedByMe; null if the mute feature is disabled for the organization. | 35.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.FeedElementPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm)
- ConnectApi.​FeedFilter (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​FeedSort​Order (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​FeedType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
