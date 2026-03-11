---
title: "getTopics(communityId, sortParam)"
domain: apex-reference
topic: gettopicscommunityid-sortparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [getTopics, communityId, sortParam, Get, first, page, sorted, topics, org, community., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getTopics(communityId, sortParam)

> Get the first page of sorted topics for the org or community.

### getTopics(communityId, sortParam)

Get the first page of sorted topics for the org or community.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId, ConnectApi.TopicSort sortParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

sortParam

Type: ConnectApi.​TopicSort

Values are:

-   popularDesc—Sorts topics by popularity with the most popular first. This value is the default.
-   alphaAsc—Sorts topics alphabetically.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")