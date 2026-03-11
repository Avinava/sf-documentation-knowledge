---
title: "getTopics(communityId, q, sortParam)"
domain: apex-reference
topic: gettopicscommunityid-q-sortparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [getTopics, communityId, sortParam, Get, sorted, topics, match, search, criteria., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getTopics(communityId, q, sortParam)

> Get the sorted topics that match the search criteria.

### getTopics(communityId, q, sortParam)

Get the sorted topics that match the search criteria.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId, String q, ConnectApi.TopicSort sortParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The string must contain at least two characters, not including wildcards.

sortParam

Type: ConnectApi.​TopicSort

Values are:

-   popularDesc—Sorts topics by popularity with the most popular first. This value is the default.
-   alphaAsc—Sorts topics alphabetically.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")