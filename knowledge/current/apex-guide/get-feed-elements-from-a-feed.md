---
title: "Get Feed Elements From a Feed"
domain: apex-guide
topic: get-feed-elements-from-a-feed
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.848Z
keywords: [Get, Feed, Elements, Tip, See]
---

# Get Feed Elements From a Feed

# Get Feed Elements From a Feed

Call a method to get feed elements from a feed.

Call [getFeedElementsFromFeed(communityId, feedType, subjectId)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_2) to get the first page of feed elements from the context user’s news feed.

```

```

The getFeedElementsFromFeed method is overloaded, which means that the method name has many different signatures. A signature is the name of the method and its parameters in order.

Each signature lets you send different inputs. For example, one signature may specify the feed type and the subject ID. Another signature could have those parameters and an additional parameter to specify the maximum number of comments to return for each feed element.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

Each signature operates on certain feed types. Use the signatures that operate on the ConnectApi.FeedType.Record to get group feeds, since a group is a record type.

#### See Also

-   [*Apex Reference Guide*: ChatterFeeds Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm "Apex Reference Guide: ChatterFeeds Class - HTML (New Window)")