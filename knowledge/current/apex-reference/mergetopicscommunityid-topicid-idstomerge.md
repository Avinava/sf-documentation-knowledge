---
title: "mergeTopics(communityId, topicId,
    idsToMerge)"
domain: apex-reference
topic: mergetopicscommunityid-topicid-idstomerge
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [mergeTopics, communityId, topicId, idsToMerge, Merge, five, secondary, topics, primary, topic., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# mergeTopics(communityId, topicId,
    idsToMerge)

> Merge up to five secondary topics with a primary topic.

### mergeTopics(communityId, topicId, idsToMerge)

Merge up to five secondary topics with a primary topic.

#### API Version

33.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Topic mergeTopics(String communityId, String topicId, List<String\> idsToMerge)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID for the primary topic for the merge. If this topic is a managed topic, it retains its topic type, topic images, and children topics.

idsToMerge

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of up to five comma-separated secondary topic IDs to merge with the primary topic. If any of the secondary topics are navigational or featured topics, they lose their topic type, topic images, and children topics. Their feed items are reassigned to the primary topic. If you merge a topic with a content topic, the content associations are preserved. If you merge a topic with an inactive endorsee, the endorsement isn’t mapped to the primary topic.

#### Return Value

Type: [ConnectApi.​Topic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic.htm "Topic.")

#### Usage

Only users with the Delete Topics or Modify All Data permission can merge topics.