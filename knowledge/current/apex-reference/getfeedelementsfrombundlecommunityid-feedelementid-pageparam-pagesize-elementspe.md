---
title: "getFeedElementsFromBundle(communityId, feedElementId,
      pageParam, pageSize, elementsPerBundle, recentCommentCount)"
domain: apex-reference
topic: getfeedelementsfrombundlecommunityid-feedelementid-pageparam-pagesize-elementspe
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getFeedElementsFromBundle, communityId, feedElementId, pageParam, pageSize, elementsPerBundle, recentCommentCount, Get, page, feed, elements, bundle., Specify, number, per, bundle, include, specified, comments, element.]
---

# getFeedElementsFromBundle(communityId, feedElementId,
      pageParam, pageSize, elementsPerBundle, recentCommentCount)

> Get a page of feed elements from a bundle. Specify the number of
   elements per bundle and include no more than the specified number of comments per feed
   element.

### getFeedElementsFromBundle(communityId, feedElementId, pageParam, pageSize, elementsPerBundle, recentCommentCount)

Get a page of feed elements from a bundle. Specify the number of elements per bundle and include no more than the specified number of comments per feed element.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElementPage getFeedElementsFromBundle(String communityId, String feedElementId, String pageParam, Integer pageSize, Integer elementsPerBundle, Integer recentCommentCount)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

elementsPerBundle

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.

recentCommentCount

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of comments to return with each feed element. The default value is 3.

#### Return Value

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")