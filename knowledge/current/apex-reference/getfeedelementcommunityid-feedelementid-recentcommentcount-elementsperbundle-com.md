---
title: "getFeedElement(communityId, feedElementId,
      recentCommentCount, elementsPerBundle, commentSort)"
domain: apex-reference
topic: getfeedelementcommunityid-feedelementid-recentcommentcount-elementsperbundle-com
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getFeedElement, communityId, feedElementId, recentCommentCount, elementsPerBundle, commentSort, Get, feed, element, specified, number, elements, per, bundle, including, sorted, comments, element., API, Version]
---

# getFeedElement(communityId, feedElementId,
      recentCommentCount, elementsPerBundle, commentSort)

> Get a feed element with the specified number of elements per bundle
      including no more than the specified number of sorted comments per feed
    element.

### getFeedElement(communityId, feedElementId, recentCommentCount, elementsPerBundle, commentSort)

Get a feed element with the specified number of elements per bundle including no more than the specified number of sorted comments per feed element.

#### API Version

41.0

#### Available to Guest Users

41.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElement getFeedElement(String communityId, String feedElementId, Integer recentCommentCount, Integer elementsPerBundle, ConnectApi.FeedCommentSortOrder commentSort)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

recentCommentCount

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of comments to return with each feed element. The default value is 3.

elementsPerBundle

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

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