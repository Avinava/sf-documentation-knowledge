---
title: "createManagedTopicByName(communityId, name,
   managedTopicType)"
domain: apex-reference
topic: createmanagedtopicbynamecommunityid-name-managedtopictype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.328Z
keywords: [createManagedTopicByName, communityId, name, managedTopicType, Create, managed, topic, specific, type, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createManagedTopicByName(communityId, name,
   managedTopicType)

> Create a managed topic of a specific type by name for an Experience
   Cloud site.

### createManagedTopicByName(communityId, name, managedTopicType)

Create a managed topic of a specific type by name for an Experience Cloud site.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopic createManagedTopicByName(String communityId, String name, ConnectApi.ManagedTopicType managedTopicType)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the topic.

managedTopicType

Type: [ConnectApi.ManagedTopicType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedTopicType_enum)

Specify the type of managed topic.

-   Content—Topics that are associated with native content.
-   Featured—Topics that are featured, for example, on the Experience Cloud site home page, but don’t provide overall navigation.
-   Navigational—Topics that display in a navigational menu in the Experience Cloud site.

A topic can be associated with all three managed topic types, so a topic can be a Featured, Navigational, and Content topic.

You can create up to 25 Featured and 5,000 Content topics. You can create up to eight levels of Navigational managed topics with 25 top-level topics and 10 children topics per level for a maximum of 2,775 Navigational topics.

#### Return Value

Type: [ConnectApi.ManagedTopic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic.htm "Represents a managed topic in an Experience Cloud site.")

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create managed topics.