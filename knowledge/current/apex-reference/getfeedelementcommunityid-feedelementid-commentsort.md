---
title: "getFeedElement(communityId, feedElementId,
      commentSort)"
domain: apex-reference
topic: getfeedelementcommunityid-feedelementid-commentsort
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getFeedElement, communityId, feedElementId, commentSort, Get, feed, element, sorted, comments., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getFeedElement(communityId, feedElementId,
      commentSort)

> Get a feed element with sorted comments.

### getFeedElement(communityId, feedElementId, commentSort)

Get a feed element with sorted comments.

#### API Version

41.0

#### Available to Guest Users

41.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElement getFeedElement(String communityId, String feedElementId, ConnectApi.FeedCommentSortOrder commentSort)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

commentSort

Type: [ConnectApi.FeedCommentSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedCommentSortOrderEnum)

Order of comments.

-   CreatedDateLatestAsc—Sorts by most recently created comments in ascending order.
-   CreatedDateOldestAsc—Sorts by oldest comments in ascending order.
-   Relevance—Sorts by most relevant content.

The default value is CreatedDateLatestAsc.

Sorting in descending order isn’t supported.

#### Return Value

Type: [ConnectApi.FeedElement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")