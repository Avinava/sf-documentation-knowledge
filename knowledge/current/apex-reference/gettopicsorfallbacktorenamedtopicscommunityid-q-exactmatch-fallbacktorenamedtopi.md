---
title: "getTopicsOrFallBackToRenamedTopics(communityId, q,
      exactMatch, fallBackToRenamedTopics)"
domain: apex-reference
topic: gettopicsorfallbacktorenamedtopicscommunityid-q-exactmatch-fallbacktorenamedtopi
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [getTopicsOrFallBackToRenamedTopics, communityId, exactMatch, fallBackToRenamedTopics, Get, most, recent, renamed, topic, match, there, isn’t, exact, match., API, Version, Available, Guest, Users, Requires]
---

# getTopicsOrFallBackToRenamedTopics(communityId, q,
      exactMatch, fallBackToRenamedTopics)

> Get the most recent renamed topic match, if there isn’t an exact match.

### getTopicsOrFallBackToRenamedTopics(communityId, q, exactMatch, fallBackToRenamedTopics)

Get the most recent renamed topic match, if there isn’t an exact match.

#### API Version

35.0

#### Available to Guest Users

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopicsOrFallBackToRenamedTopics(String communityId, String q, Boolean exactMatch, Boolean fallBackToRenamedTopics)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The string must contain at least two characters, not including wildcards.

exactMatch

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specify true to find a topic by its exact, case-insensitive name or to find the most recent renamed topic match if there isn’t an exact match.

fallBackToRenamedTopics

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specify true and if there isn’t an exact match, the most recent renamed topic match is returned. If there are multiple renamed topic matches, only the most recent is returned. If there are no renamed topic matches, an empty collection is returned.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")