---
title: "ConnectApi.FeedModifiedInfo"
domain: apex-reference
topic: connectapifeedmodifiedinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.812Z
keywords: [ConnectApi.FeedModifiedInfo, Important]
---

# ConnectApi.FeedModifiedInfo

# ConnectApi.FeedModifiedInfo

Feed modified information.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| isModified | Boolean | true if the news feed has been modified since the last time it was polled; false otherwise. Returns null if the feed is not a news feed. | 28.0 |
| isModifiedToken | String | Opaque polling token to use in the since parameter of the ChatterFeeds.isModified method. The token describes when the feed was last modified. | 28.0 |
| nextPollUrl | String | Connect REST API URL with a since request parameter that contains an opaque token that describes when the feed was last modified. Returns null if the feed isn’t a news feed. Use this URL to poll a news feed for updates. | 28.0 |