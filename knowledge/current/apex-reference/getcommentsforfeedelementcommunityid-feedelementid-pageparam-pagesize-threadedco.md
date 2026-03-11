---
title: "getCommentsForFeedElement(communityId, feedElementId,
      pageParam, pageSize, threadedCommentsCollapsed, sortParam)"
domain: apex-reference
topic: getcommentsforfeedelementcommunityid-feedelementid-pageparam-pagesize-threadedco
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getCommentsForFeedElement, communityId, feedElementId, pageParam, pageSize, threadedCommentsCollapsed, sortParam, Get, page, sorted, comments, threaded, style, feed, element., API, Version, Available, Guest, Users]
---

# getCommentsForFeedElement(communityId, feedElementId,
      pageParam, pageSize, threadedCommentsCollapsed, sortParam)

> Get a page of sorted comments in a threaded style for a feed
      element.

### getCommentsForFeedElement(communityId, feedElementId, pageParam, pageSize, threadedCommentsCollapsed, sortParam)

Get a page of sorted comments in a threaded style for a feed element.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.CommentPage getCommentsForFeedElement(String communityId, String feedElementId, String pageParam, Integer pageSize, Boolean threadedCommentsCollapsed, ConnectApi.FeedCommentSortOrder sortParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of comments per page. Valid values are from 1 through 100. If you pass null, the default size is 25.

threadedCommentsCollapsed

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return threaded comments in a collapsed style (true) or not (false). If you pass in null, the default is false.

sortParam

Type: [ConnectApi.FeedCommentSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedCommentSortOrderEnum)

Order of comments. Values are:

-   CreatedDateLatestAsc—Sorts by most recently created comments in ascending order.
-   CreatedDateOldestAsc—Sorts by oldest comments in ascending order.
-   Relevance—Sorts by most relevant content.

Sorting in descending order isn’t supported.

#### Return Value

Type: [ConnectApi.CommentPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_page.htm#apex_connectapi_output_comment_page "A page of comments.")

If the feed element doesn’t support the Comments capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").