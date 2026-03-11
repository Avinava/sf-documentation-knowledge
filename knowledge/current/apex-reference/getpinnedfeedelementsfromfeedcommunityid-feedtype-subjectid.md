---
title: "getPinnedFeedElementsFromFeed(communityId, feedType,
      subjectId)"
domain: apex-reference
topic: getpinnedfeedelementsfromfeedcommunityid-feedtype-subjectid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getPinnedFeedElementsFromFeed, communityId, feedType, subjectId, Get, pinned, feed, elements, group, topic, feed., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# getPinnedFeedElementsFromFeed(communityId, feedType,
      subjectId)

> Get pinned feed elements from a group or topic feed.

### getPinnedFeedElementsFromFeed(communityId, feedType, subjectId)

Get pinned feed elements from a group or topic feed.

#### API Version

41.0

#### Available to Guest Users

41.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.PinnedFeedElements getPinnedFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. Valid values are Record and Topics.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If feedType is Record, subjectId must be a group ID. If feedType is Topics, subjectId must be a topic ID.

#### Return Value

Type: [ConnectApi.PinnedFeedElements](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pinned_feed_element_collection.htm#apex_connectapi_output_pinned_feed_element_collection "List of pinned feed elements for a feed.")

If the feed doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

In the UI, pinned feed elements don’t show all auxiliary information, such as comments, likes, interaction counts, or read by information. As a result, the ConnectApi.PinnedFeedElements output class doesn’t include all the information for these capabilities.