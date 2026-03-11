---
title: "getCommentsForFeedItem(communityId, feedItemId, pageParam,
      pageSize)"
domain: apex-reference
topic: getcommentsforfeeditemcommunityid-feeditemid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.231Z
keywords: [getCommentsForFeedItem, communityId, feedItemId, pageParam, pageSize, Get, page, comments, feed, item., API, Version, Important, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# getCommentsForFeedItem(communityId, feedItemId, pageParam,
      pageSize)

> Get a page of comments for a feed item.

### getCommentsForFeedItem(communityId, feedItemId, pageParam, pageSize)

Get a page of comments for a feed item.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getCommentsForFeedElement(communityId, feedElementId, pageParam, pageSize)](#apex_ConnectAPI_ChatterFeeds_getCommentsForFeedElement_2 "Get a page of comments for a feed element.").

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.CommentPage getCommentsForFeedItem(String communityId, String feedItemId, String pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​Comment​​Page](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_page.htm "A page of comments.")