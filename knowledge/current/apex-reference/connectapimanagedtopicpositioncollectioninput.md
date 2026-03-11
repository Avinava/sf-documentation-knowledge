---
title: "ConnectApi.ManagedTopicPositionCollectionInput"
domain: apex-reference
topic: connectapimanagedtopicpositioncollectioninput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.301Z
keywords: [ConnectApi.ManagedTopicPositionCollectionInput]
---

# ConnectApi.ManagedTopicPositionCollectionInput

# ConnectApi.ManagedTopicPositionCollectionInput

A collection of relative positions of managed topics.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| managedTopic​Positions | List<ConnectApi.​ManagedTopic​PositionInput> | List of relative positions of managed topics. This list can include Featured and Navigational managed topics and doesn’t need to include all managed topics.For more information about reordering managed topics, see the example in reorderManagedTopics(communityId, managedTopicPositionCollection). | Required | 32.0 |