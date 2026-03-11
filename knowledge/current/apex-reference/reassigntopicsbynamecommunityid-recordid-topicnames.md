---
title: "reassignTopicsByName(communityId, recordId,
      topicNames)"
domain: apex-reference
topic: reassigntopicsbynamecommunityid-recordid-topicnames
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [reassignTopicsByName, communityId, recordId, topicNames, Reassign, topics, record, feed, item, remove, assigned, add, topics., Optionally, provide, list, suggested, assign, improve, future]
---

# reassignTopicsByName(communityId, recordId,
      topicNames)

> Reassign all the topics on a record or feed item, that is, remove all the assigned
    topics on a record or feed item and add topics. Optionally, provide a list of suggested topics
    to assign to a record or feed item to improve future topic suggestions.

### reassignTopicsByName(communityId, recordId, topicNames)

Reassign all the topics on a record or feed item, that is, remove all the assigned topics on a record or feed item and add topics. Optionally, provide a list of suggested topics to assign to a record or feed item to improve future topic suggestions.

#### API Version

35.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage reassignTopicsByName(String communityId, String recordId, ConnectApi.TopicNamesInput topicNames)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the record or feed item to which to assign the topic.

topicNames

Type: [ConnectApi.TopicNamesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_topic_name_collection.htm "A list of topic names to replace currently assigned topics. Also a list of suggested topics to assign.")

A list of topics to replace the currently assigned topics. Optionally, a list of suggested topics to assign to improve future topic suggestions.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

#### Usage

Only users with the Assign Topics permission can remove topics from records or feed items and add existing topics to records or feed items. Only users with the Create Topics permission can add new topics to records or feed items. Administrators must enable topics for objects before users can add topics to records of that object type.