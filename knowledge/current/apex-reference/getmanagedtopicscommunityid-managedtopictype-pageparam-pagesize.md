---
title: "getManagedTopics(communityId, managedTopicType, pageParam,
      pageSize)"
domain: apex-reference
topic: getmanagedtopicscommunityid-managedtopictype-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.328Z
keywords: [getManagedTopics, communityId, managedTopicType, pageParam, pageSize, Get, page, managed, topics., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getManagedTopics(communityId, managedTopicType, pageParam,
      pageSize)

> Get a page of managed topics.

### getManagedTopics(communityId, managedTopicType, pageParam, pageSize)

Get a page of managed topics.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId, ConnectApi.ManagedTopicType managedTopicType, Integer pageParam, Integer pageSize)

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

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 50.

#### Return Value

Type: [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm "A collection of managed topics.")