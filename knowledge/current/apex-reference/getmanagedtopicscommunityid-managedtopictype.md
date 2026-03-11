---
title: "getManagedTopics(communityId,
  managedTopicType)"
domain: apex-reference
topic: getmanagedtopicscommunityid-managedtopictype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.328Z
keywords: [getManagedTopics, communityId, managedTopicType, Get, managed, topics, specified, type, Experience, Cloud, site., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# getManagedTopics(communityId,
  managedTopicType)

> Get managed topics of the specified type for an Experience Cloud
            site.

### getManagedTopics(communityId, managedTopicType)

Get managed topics of the specified type for an Experience Cloud site.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId, ConnectApi.ManagedTopicType managedTopicType)

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

If you specify Content, up to 50 topics are returned. If you want more than 50 Content topics, use [getManagedTopics(communityId, managedTopicType, pageParam, pageSize)](#apex_ConnectAPI_ManagedTopics_getManagedTopics_6 "Get a page of managed topics.").

#### Return Value

Type: [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm "A collection of managed topics.")