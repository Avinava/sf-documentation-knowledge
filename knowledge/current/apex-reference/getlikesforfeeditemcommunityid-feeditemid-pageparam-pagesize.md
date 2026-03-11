---
title: "getLikesForFeedItem(communityId, feedItemId, pageParam,
                  pageSize)"
domain: apex-reference
topic: getlikesforfeeditemcommunityid-feeditemid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [getLikesForFeedItem, communityId, feedItemId, pageParam, pageSize, Get, page, likes, feed, item., API, Version, Important, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# getLikesForFeedItem(communityId, feedItemId, pageParam,
                  pageSize)

> Get a page of likes for a feed item.

### getLikesForFeedItem(communityId, feedItemId, pageParam, pageSize)

Get a page of likes for a feed item.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getLikesForFeedElement(communityId, feedElementId, pageParam, pageSize)](#apex_ConnectAPI_ChatterFeeds_getLikesForFeedElement_2 "Get a page of likes for a feed element.").

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterLikePage getLikesForFeedItem(String communityId, String feedItemId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​Chatter​Like​Page](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_like_page.htm "Page of Chatter likes.")