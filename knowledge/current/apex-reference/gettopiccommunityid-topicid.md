---
title: "getTopic(communityId, topicId)"
domain: apex-reference
topic: gettopiccommunityid-topicid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [getTopic, communityId, topicId, Get, topic., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getTopic(communityId, topicId)

> Get a topic.

### getTopic(communityId, topicId)

Get a topic.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Topic getTopic(String communityId, String topicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

#### Return Value

Type: [ConnectApi.​Topic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic.htm "Topic.")