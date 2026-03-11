---
title: "updateTopic(communityId, topicId, topic)"
domain: apex-reference
topic: updatetopiccommunityid-topicid-topic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [updateTopic, communityId, topicId, topic, Update, description, name, merge, five, secondary, topics, primary, topic., API, Version, Requires, Chatter, Signature, Parameters, Return]
---

# updateTopic(communityId, topicId, topic)

> Update the description or name of a topic or merge up to five secondary topics with a
    primary topic.

### updateTopic(communityId, topicId, topic)

Update the description or name of a topic or merge up to five secondary topics with a primary topic.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Topic updateTopic(String communityId, String topicId, ConnectApi.TopicInput topic)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

topic

Type: [ConnectApi.TopicInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_Topic.htm "Update a topic’s name or description or merge topics.")

A ConnectApi.TopicInput object containing the name and description of the topic or up to five comma-separated secondary topic IDs to merge with the primary topic.

#### Return Value

Type: [ConnectApi.​Topic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic.htm "Topic.")

#### Usage

Only users with the Edit Topics or Modify All Data permission can update topic names and descriptions. Only users with the Delete Topics or Modify All Data permission can merge topics.