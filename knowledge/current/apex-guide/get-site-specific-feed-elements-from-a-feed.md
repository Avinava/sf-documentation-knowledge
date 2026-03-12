---
title: "Get Site-Specific Feed Elements from a Feed"
domain: apex-guide
topic: get-site-specific-feed-elements-from-a-feed
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.340Z
estimatedTokens: 202
keywords: [Get, Site-Specific, Feed, Elements, Call, display, user, profile, feed, contains, only, elements, scoped, specific, Experience, Cloud, site.]
---

# Get Site-Specific Feed Elements from a Feed

> Call a method to display a user profile feed that contains only feed elements that are
    scoped to a specific Experience Cloud site.

# Get Site-Specific Feed Elements from a Feed

Call a method to display a user profile feed that contains only feed elements that are scoped to a specific Experience Cloud site.

Feed elements that have a User or a Group parent record are scoped to sites. Feed elements whose parents are record types other than User or Group are always visible in all sites. Other parent record types could be scoped to sites in the future.

This example calls [getFeedElementsFromFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, filter)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_7a) to get only site-specific feed elements.

```

```

## Code Examples

```
ConnectApi.FeedElementPage fep = ConnectApi.ChatterFeeds.getFeedElementsFromFeed(Network.getNetworkId(), ConnectApi.FeedType.UserProfile, 'me', 3, ConnectApi.FeedDensity.FewerUpdates, null, null, ConnectApi.FeedSortOrder.LastModifiedDateDesc, ConnectApi.FeedFilter.CommunityScoped);
```
