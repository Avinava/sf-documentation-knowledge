---
title: "getManagedTopics(communityId)"
domain: apex-reference
topic: getmanagedtopicscommunityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.328Z
keywords: [getManagedTopics, communityId, Get, featured, navigational, managed, topics, Experience, Cloud, site., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getManagedTopics(communityId)

> Get the featured and navigational managed topics for an Experience
         Cloud site.

### getManagedTopics(communityId)

Get the featured and navigational managed topics for an Experience Cloud site.

To get the content topics for an Experience Cloud site, use [getManagedTopics(communityId, managedTopicType)](#apex_ConnectAPI_ManagedTopics_getManagedTopics_2 "Get managed topics of the specified type for an Experience Cloud site.").

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopicCollection getManagedTopics(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm "A collection of managed topics.")