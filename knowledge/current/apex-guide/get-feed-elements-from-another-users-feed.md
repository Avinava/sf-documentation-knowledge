---
title: "Get Feed Elements From Another User’s Feed"
domain: apex-guide
topic: get-feed-elements-from-another-users-feed
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.323Z
estimatedTokens: 249
keywords: [Feed, Elements, Another, User’s, Call]
---

# Get Feed Elements From Another User’s Feed

> Call a method to get feed elements from another user’s feed.

# Get Feed Elements From Another User’s Feed

Call a method to get feed elements from another user’s feed.

Call [getFeedElementsFromFeed(communityId, feedType, subjectId)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_2) to get the first page of feed elements from another user’s feed.

```

```

This example calls the same method to get the first page of feed elements from another user’s record feed.

```

```

The getFeedElementsFromFeed method is overloaded, which means that the method name has many different signatures. A signature is the name of the method and its parameters in order.

Each signature lets you send different inputs. For example, one signature can specify the feed type and the subject ID. Another signature could have those parameters and an extra parameter to specify the maximum number of comments to return for each feed element.

## Code Examples

```
ConnectApi.FeedElementPage fep = ConnectApi.ChatterFeeds.getFeedElementsFromFeed(Network.getNetworkId(), ConnectApi.FeedType.UserProfile, '005R0000000HwMA');
```

```
ConnectApi.FeedElementPage fep = ConnectApi.ChatterFeeds.getFeedElementsFromFeed(Network.getNetworkId(), ConnectApi.FeedType.Record, '005R0000000HwMA');
```
