---
title: "deleteFeedItem(communityId, feedItemId)"
domain: apex-reference
topic: deletefeeditemcommunityid-feeditemid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.231Z
keywords: [deleteFeedItem, communityId, feedItemId, Delete, feed, item., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deleteFeedItem(communityId, feedItemId)

> Delete a feed item.

### deleteFeedItem(communityId, feedItemId)

Delete a feed item.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [deleteFeedElement(communityId, feedElementId)](#apex_ConnectAPI_ChatterFeeds_deleteFeedElement_1 "Delete a feed element.").

#### Requires Chatter

Yes

#### Signature

public static Void deleteFeedItem(String communityId, String feedItemId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

#### Return Value

Type: Void