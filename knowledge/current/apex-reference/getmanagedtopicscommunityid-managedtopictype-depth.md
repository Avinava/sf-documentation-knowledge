---
title: "getManagedTopics(communityId, managedTopicType,
      depth)"
domain: apex-reference
topic: getmanagedtopicscommunityid-managedtopictype-depth
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.328Z
keywords: [getManagedTopics, communityId, managedTopicType, depth, Get, managed, topics, specified, type, including, their, parent, children, Experience, Cloud, site., API, Version, Available, Guest]
---

# getManagedTopics(communityId, managedTopicType,
      depth)

> Get managed topics of the specified type, including their parent and
      children managed topics, in an Experience Cloud site.

### getManagedTopics(communityId, managedTopicType, depth)

Get managed topics of the specified type, including their parent and children managed topics, in an Experience Cloud site.

#### API Version

35.0

#### Available to Guest Users

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId, ConnectApi.ManagedTopicType managedTopicType, Integer depth)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicType

Type: [ConnectApi.ManagedTopicType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedTopicType_enum)

Type of managed topic.

-   Content—Topics that are associated with native content.
-   Featured—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   Navigational—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a Featured, Navigational, and Content topic.

depth

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specify an integer 1–8. If you specify 1, the children property of the ConnectApi.ManagedTopic output class is null. If you specify 2, the children property of the ConnectApi.ManagedTopic output class contains the direct children managed topics, if any, of the managed topic. If you specify 3–8, you get the direct children managed topics and their children managed topics if there are any. If depth isn’t specified, it defaults to 1.

#### Return Value

Type: [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm "A collection of managed topics.")