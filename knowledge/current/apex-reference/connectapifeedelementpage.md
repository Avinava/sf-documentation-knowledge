---
title: "ConnectApi.FeedElementPage"
domain: apex-reference
topic: connectapifeedelementpage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.789Z
keywords: [ConnectApi.FeedElementPage, See]
---

# ConnectApi.FeedElementPage

# ConnectApi.FeedElementPage

A paged collection of ConnectApi.FeedElement objects.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currentPageToken | String | Token identifying the current page. | 31.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 31.0 |
| elements | List<ConnectApi.​FeedElement> | Collection of feed elements. | 31.0 |
| isModifiedToken | String | Opaque polling token to use in the since parameter of the ChatterFeeds.isModified method. The token describes when the feed was last modified.ImportantThis feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants. | 31.0 |
| isModifiedUrl | String | Connect REST API URL with a since request parameter that contains an opaque token that describes when the feed was last modified. Returns null if the feed isn’t a news feed. Use this URL to poll a news feed for updates.ImportantThis feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants. | 31.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | 31.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 31.0 |
| updatesToken | String | A token to use in a request to the ConnectApi.ChatterFeeds.getFeedElementsUpdatedSince method. | 31.0 |
| updatesUrl | String | Connect REST API feed resource containing the feed elements that have been updated since the feed was refreshed. If the feed doesn’t support this feature, the value is null. | 31.0 |

#### See Also

-   [ConnectApi.BundleCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_bundle_capability.htm "If a feed element has this capability, it has a container of feed elements called a bundle.")
    
-   [ConnectApi.Feed](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed.htm "Chatter feed.")