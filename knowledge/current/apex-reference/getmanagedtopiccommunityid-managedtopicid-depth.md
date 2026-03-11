---
title: "getManagedTopic(communityId, managedTopicId,
    depth)"
domain: apex-reference
topic: getmanagedtopiccommunityid-managedtopicid-depth
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.328Z
keywords: [getManagedTopic, communityId, managedTopicId, depth, Get, managed, topic, including, its, parent, children, topics, Experience, Cloud, site., API, Version, Available, Guest, Users]
---

# getManagedTopic(communityId, managedTopicId,
    depth)

> Get a managed topic, including its parent and children managed
      topics, in an Experience Cloud site.

### getManagedTopic(communityId, managedTopicId, depth)

Get a managed topic, including its parent and children managed topics, in an Experience Cloud site.

#### API Version

35.0

#### Available to Guest Users

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopic getManagedTopic(String communityId, String managedTopicId, Integer depth)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of managed topic.

depth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specify an integer 1–8. If you specify 1, the children property of the ConnectApi.ManagedTopic output class is null. If you specify 2, the children property of the ConnectApi.ManagedTopic output class contains the direct children managed topics, if any, of the managed topic. If you specify 3–8, you get the direct children managed topics and their children managed topics if there are any. If depth isn’t specified, it defaults to 1.

#### Return Value

Type: [ConnectApi.ManagedTopic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic.htm "Represents a managed topic in an Experience Cloud site.")