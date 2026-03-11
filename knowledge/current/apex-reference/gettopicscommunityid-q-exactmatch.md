---
title: "getTopics(communityId, q, exactMatch)"
domain: apex-reference
topic: gettopicscommunityid-q-exactmatch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [getTopics, communityId, exactMatch, Get, topic, matches, exact, case-insensitive, name., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getTopics(communityId, q, exactMatch)

> Get the topic that matches the exact, case-insensitive name.

### getTopics(communityId, q, exactMatch)

Get the topic that matches the exact, case-insensitive name.

#### API Version

33.0

#### Available to Guest Users

33.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId, String q, Boolean exactMatch)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The string must contain at least two characters, not including wildcards.

exactMatch

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specify true to find a topic by its exact, case-insensitive name.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")