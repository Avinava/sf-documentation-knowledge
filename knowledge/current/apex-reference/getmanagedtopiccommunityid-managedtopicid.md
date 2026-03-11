---
title: "getManagedTopic(communityId, managedTopicId)"
domain: apex-reference
topic: getmanagedtopiccommunityid-managedtopicid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.328Z
keywords: [getManagedTopic, communityId, managedTopicId, Get, managed, topic, Experience, Cloud, site., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getManagedTopic(communityId, managedTopicId)

> Get a managed topic in an Experience Cloud site.

### getManagedTopic(communityId, managedTopicId)

Get a managed topic in an Experience Cloud site.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopic getManagedTopic(String communityId, String managedTopicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of managed topic.

#### Return Value

Type: [ConnectApi.ManagedTopic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic.htm "Represents a managed topic in an Experience Cloud site.")