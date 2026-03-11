---
title: "getThreadsForFeedComment(communityId, commentId, pageParam,
      pageSize)"
domain: apex-reference
topic: getthreadsforfeedcommentcommunityid-commentid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getThreadsForFeedComment, communityId, commentId, pageParam, pageSize, Get, page, threaded, comments, comment., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getThreadsForFeedComment(communityId, commentId, pageParam,
      pageSize)

> Get a page of threaded comments for a comment.

### getThreadsForFeedComment(communityId, commentId, pageParam, pageSize)

Get a page of threaded comments for a comment.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.CommentPage getThreadsForFeedComment(String communityId, String commentId, String pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the comment.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.CommentPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_page.htm#apex_connectapi_output_comment_page "A page of comments.")

If the comment doesn’t support the comments capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").