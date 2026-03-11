---
title: "getFeedItem(communityId, feedItemId)"
domain: apex-reference
topic: getfeeditemcommunityid-feeditemid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.231Z
keywords: [getFeedItem, communityId, feedItemId, Get, feed, item., API, Version, Important, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value, Note]
---

# getFeedItem(communityId, feedItemId)

> Get a feed item.

### getFeedItem(communityId, feedItemId)

Get a feed item.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getFeedElement(communityId, feedElementId)](#apex_ConnectAPI_ChatterFeeds_getFeedElement_1 "Get a feed element.").

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedItem getFeedItem(String communityId, String feedItemId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

#### Return Value

Type: [ConnectApi.FeedItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item.htm "Feed item.")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Triggers on FeedItem objects run before their attachment and capabilities information is saved, which means that ConnectApi.FeedItem.attachment information and ConnectApi.FeedElement.capabilities information may not be available in the trigger.