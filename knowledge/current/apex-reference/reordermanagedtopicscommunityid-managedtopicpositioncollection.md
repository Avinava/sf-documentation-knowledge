---
title: "reorderManagedTopics(communityId,
   managedTopicPositionCollection)"
domain: apex-reference
topic: reordermanagedtopicscommunityid-managedtopicpositioncollection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.328Z
keywords: [reorderManagedTopics, communityId, managedTopicPositionCollection, Reorder, relative, positions, managed, topics, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# reorderManagedTopics(communityId,
   managedTopicPositionCollection)

> Reorder the relative positions of managed topics in an Experience
   Cloud site.

### reorderManagedTopics(communityId, managedTopicPositionCollection)

Reorder the relative positions of managed topics in an Experience Cloud site.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedTopicCollection reorderManagedTopics(String communityId, ConnectApi.ManagedTopicPositionCollectionInput managedTopicPositionCollection)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicPositionCollection

Type: [ConnectApi.ManagedTopicPositionCollectionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_topic_position_collection.htm "A collection of relative positions of managed topics.")

A collection of relative positions of managed topics. This collection can include only Featured and Navigational topics and doesn’t have to include all managed topics.

#### Return Value

Type: [ConnectApi.ManagedTopicCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_topic_collection.htm "A collection of managed topics.")

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can reorder managed topics.

You can reorder parent managed topics or children managed topics with the same parent. If you don’t include all managed topics in the ConnectApi.ManagedTopicPositionCollectionInput, the managed topics are reordered by respecting the positions indicated in the ConnectApi.ManagedTopicPositionCollectionInput and then by pushing down any managed topics that aren’t included in the ConnectApi.ManagedTopicPositionCollectionInput to the next available position.

#### Example

If you have these managed topics:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicA | 0 |
| ManagedTopicB | 1 |
| ManagedTopicC | 2 |
| ManagedTopicD | 3 |
| ManagedTopicE | 4 |

And you reorder managed topics by including this information in ConnectApi.ManagedTopicPositionCollectionInput:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicD | 0 |
| ManagedTopicE | 2 |

The result is:

| Managed Topic | Position |
| --- | --- |
| ManagedTopicD | 0 |
| ManagedTopicA | 1 |
| ManagedTopicE | 2 |
| ManagedTopicB | 3 |
| ManagedTopicC | 4 |