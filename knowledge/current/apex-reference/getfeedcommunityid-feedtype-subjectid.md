---
title: "getFeed(communityId, feedType, subjectId)"
domain: apex-reference
topic: getfeedcommunityid-feedtype-subjectid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getFeed, communityId, feedType, subjectId, Get, feed, record, user., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getFeed(communityId, feedType, subjectId)

> Get a feed for a record or user.

### getFeed(communityId, feedType, subjectId)

Get a feed for a record or user.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Feed getFeed(String communityId, ConnectApi.FeedType feedType, String subjectId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every ConnectApi.FeedType except Company, DirectMessageModeration, DirectMessages, Filter, Home, Isolated, Landing, Moderation, and PendingReview.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If feedType is Record, subjectId can be any record ID, including a group ID. If feedType is Streams, subjectId must be a stream ID. If feedType is Topics, subjectId must be a topic ID. If feedType is UserProfile, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias me.

#### Return Value

Type: [ConnectApi.Feed](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed.htm "Chatter feed.")