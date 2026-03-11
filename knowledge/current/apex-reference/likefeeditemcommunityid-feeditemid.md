---
title: "likeFeedItem(communityId, feedItemId)"
domain: apex-reference
topic: likefeeditemcommunityid-feeditemid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [likeFeedItem, communityId, feedItemId, feed, item, context, user., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value]
---

# likeFeedItem(communityId, feedItemId)

> Like a feed item for the context user.

### likeFeedItem(communityId, feedItemId)

Like a feed item for the context user.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [likeFeedElement(communityId, feedElementId)](#apex_ConnectAPI_ChatterFeeds_likeFeedElement "Like a feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterLike likeFeedItem(String communityId, String feedItemId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

#### Return Value

Type: [ConnectApi.​Chatter​Like](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_like.htm "Chatter like information.")

If the context user already liked the feed item, this method is a non-operation and returns the existing like.