---
title: "getCommentsForFeedElement(communityId, feedElementId,
      sortParam)"
domain: apex-reference
topic: getcommentsforfeedelementcommunityid-feedelementid-sortparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getCommentsForFeedElement, communityId, feedElementId, sortParam, Get, sorted, comments, feed, element., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCommentsForFeedElement(communityId, feedElementId,
      sortParam)

> Get sorted comments for a feed element.

### getCommentsForFeedElement(communityId, feedElementId, sortParam)

Get sorted comments for a feed element.

#### API Version

41.0

#### Available to Guest Users

41.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.CommentsCapability getCommentsForFeedElement(String communityId, String feedElementId, ConnectApi.FeedCommentSortOrder sortParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

sortParam

Type: [ConnectApi.FeedCommentSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedCommentSortOrderEnum)

Order of comments. Values are:

-   CreatedDateLatestAsc—Sorts by most recently created comments in ascending order.
-   CreatedDateOldestAsc—Sorts by oldest comments in ascending order.
-   Relevance—Sorts by most relevant content.

Sorting in descending order isn’t supported.

#### Return Value

Type: [ConnectApi.CommentsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comments_capability.htm#apex_connectapi_output_comments_capability "If a feed element or comment has this capability, the context user can add a comment to it.")

If the feed element doesn’t support the Comments capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").