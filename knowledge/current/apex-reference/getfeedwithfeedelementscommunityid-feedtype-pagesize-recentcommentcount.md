---
title: "getFeedWithFeedElements(communityId, feedType, pageSize,
      recentCommentCount)"
domain: apex-reference
topic: getfeedwithfeedelementscommunityid-feedtype-pagesize-recentcommentcount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getFeedWithFeedElements, communityId, feedType, pageSize, recentCommentCount, Get, page, information, feed, elements, specified, number, comments, per, element, feed., API, Version, Available, Guest]
---

# getFeedWithFeedElements(communityId, feedType, pageSize,
      recentCommentCount)

> Get a page of information about the feed and the feed elements with
      the specified number of comments per feed element from the feed.

### getFeedWithFeedElements(communityId, feedType, pageSize, recentCommentCount)

Get a page of information about the feed and the feed elements with the specified number of comments per feed element from the feed.

#### API Version

40.0

#### Available to Guest Users

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Feed getFeedWithFeedElements(String communityId, ConnectApi.FeedType feedType, Integer pageSize, Integer recentCommentCount)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. Valid values are Company, DirectMessageModeration, DirectMessages, Home, Isolated, Landing, Moderation, and PendingReview. Landing is valid only when communityId is internal.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in 0, feed elements aren’t returned with the feed.

recentCommentCount

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of comments to return with each feed element. The default value is 3.

#### Return Value

Type: [ConnectApi.Feed](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed.htm#apex_connectapi_output_Feed "Chatter feed.")