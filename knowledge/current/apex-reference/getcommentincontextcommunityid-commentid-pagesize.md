---
title: "getCommentInContext(communityId, commentId,
    pageSize)"
domain: apex-reference
topic: getcommentincontextcommunityid-commentid-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getCommentInContext, communityId, commentId, pageSize, Get, threaded, comment, context, its, parent, comments, post., API, Version, Available, Guest, Users, Requires, Chatter, Signature]
---

# getCommentInContext(communityId, commentId,
    pageSize)

> Get a threaded comment in the context of its parent comments and
      post.

### getCommentInContext(communityId, commentId, pageSize)

Get a threaded comment in the context of its parent comments and post.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElement getCommentInContext(String communityId, String commentId, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the comment.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25.

#### Return Value

Type: [ConnectApi.FeedElement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm#apex_connectapi_output_feed_element "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

If the comment doesn’t support the comments capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").