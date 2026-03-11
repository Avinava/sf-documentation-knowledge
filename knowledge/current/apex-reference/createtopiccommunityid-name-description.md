---
title: "createTopic(communityId, name, description)"
domain: apex-reference
topic: createtopiccommunityid-name-description
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.886Z
keywords: [createTopic, communityId, name, description, Create, topic., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# createTopic(communityId, name, description)

> Create a topic.

### createTopic(communityId, name, description)

Create a topic.

#### API Version

36.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Topic createTopic(String communityId, String name, String description)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the topic.

description

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The description of the topic.

#### Return Value

Type: [ConnectApi.​Topic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic.htm "Topic.")

#### Usage

Only users with the Create Topics permission can create a topic.