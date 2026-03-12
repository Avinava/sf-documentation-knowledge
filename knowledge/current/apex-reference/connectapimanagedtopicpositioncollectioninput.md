---
title: "ConnectApi.ManagedTopicPositionCollectionInput"
domain: apex-reference
topic: connectapimanagedtopicpositioncollectioninput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.132Z
estimatedTokens: 151
keywords: [ConnectApi.ManagedTopicPositionCollectionInput, collection, relative, positions, managed, topics.]
---

# ConnectApi.ManagedTopicPositionCollectionInput

> A collection of relative positions of
managed topics.

# ConnectApi.ManagedTopicPositionCollectionInput

A collection of relative positions of managed topics.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| managedTopic​Positions | List<ConnectApi.​ManagedTopic​PositionInput> | List of relative positions of managed topics. This list can include Featured and Navigational managed topics and doesn’t need to include all managed topics.For more information about reordering managed topics, see the example in reorderManagedTopics(communityId, managedTopicPositionCollection). | Required | 32.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ManagedTopic​PositionInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_topic_position.htm)
- reorderManagedTopics(communityId, managedTopicPositionCollection) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedTopics_static_methods.htm)
