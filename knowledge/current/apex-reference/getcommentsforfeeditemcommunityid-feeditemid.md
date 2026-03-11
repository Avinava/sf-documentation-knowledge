---
title: "getCommentsForFeedItem(communityId,
    feedItemId)"
domain: apex-reference
topic: getcommentsforfeeditemcommunityid-feeditemid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.231Z
keywords: [getCommentsForFeedItem, communityId, feedItemId, Get, comments, feed, item., API, Version, Important, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCommentsForFeedItem(communityId,
    feedItemId)

> Get comments for a feed item.

### getCommentsForFeedItem(communityId, feedItemId)

Get comments for a feed item.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getCommentsForFeedElement(communityId, feedElementId)](#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedElement_1 "Get comments for a feed element.").

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.CommentPage getCommentsForFeedItem(String communityId, String feedItemId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

#### Return Value

Type: [ConnectApi.​Comment​​Page](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_page.htm "A page of comments.")