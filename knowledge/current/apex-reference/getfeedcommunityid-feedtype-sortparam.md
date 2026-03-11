---
title: "getFeed(communityId, feedType, sortParam)"
domain: apex-reference
topic: getfeedcommunityid-feedtype-sortparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getFeed, communityId, feedType, sortParam, Get, sorted, feed., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getFeed(communityId, feedType, sortParam)

> Get a sorted feed.

### getFeed(communityId, feedType, sortParam)

Get a sorted feed.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Feed getFeed(String communityId, ConnectApi.FeedType feedType, ConnectApi.FeedSortOrder sortParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are Company, DirectMessageModeration, DirectMessages, Home, Isolated, Moderation, and PendingReview.

sortParam

Type: [ConnectApi.​FeedSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.
-   CreatedDateDesc—Sorts by most recent creation date.
-   LastModifiedDateDesc—Sorts by most recent activity.
-   MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.
-   Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.

If you pass in null, the default value CreatedDateDesc is used.

If feedType is DirectMessages, sortParam must be LastModifiedDateDesc.

#### Return Value

Type: [ConnectApi.Feed](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed.htm "Chatter feed.")