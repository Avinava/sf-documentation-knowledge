---
title: "createManagedTopicByName(communityId, name, managedTopicType,
            parentId)"
domain: apex-reference
topic: createmanagedtopicbynamecommunityid-name-managedtopictype-parentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.328Z
keywords: [createManagedTopicByName, communityId, name, managedTopicType, parentId, Create, child, managed, topic, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createManagedTopicByName(communityId, name, managedTopicType,
            parentId)

> Create a child managed topic by name for an Experience Cloud
            site.

### createManagedTopicByName(communityId, name, managedTopicType, parentId)

Create a child managed topic by name for an Experience Cloud site.

#### API Version

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopic createManagedTopicByName(String communityId, String name, ConnectApi.ManagedTopicType managedTopicType, String parentId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the topic.

managedTopicType

Type: [ConnectApi.ManagedTopicType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ManagedTopicType_enum)

Specify Navigational for the type of managed topic to create a child managed topic.

You can create up to 25 Featured and 5,000 Content topics. You can create up to eight levels of Navigational managed topics with 25 top-level topics and 10 children topics per level for a maximum of 2,775 Navigational topics.

parentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the parent managed topic.

You can create up to eight levels (parent, direct children, their children, etc.) of managed topics and up to 10 children managed topics per managed topic.

#### Return Value

Type: [ConnectApi.ManagedTopic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic.htm "Represents a managed topic in an Experience Cloud site.")

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can create managed topics.