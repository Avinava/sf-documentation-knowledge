---
title: "assignTopicByName(communityId, recordId,
    topicName)"
domain: apex-reference
topic: assigntopicbynamecommunityid-recordid-topicname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.886Z
keywords: [assignTopicByName, communityId, recordId, topicName, Assign, topic, record, feed, item., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# assignTopicByName(communityId, recordId,
    topicName)

> Assign a topic to a record or feed item.

### assignTopicByName(communityId, recordId, topicName)

Assign a topic to a record or feed item.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Topic assignTopicByName(String communityId, String recordId, String topicName)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the record or feed item to which to assign the topic.

topicName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of a new or existing topic.

#### Return Value

Type: [ConnectApi.​Topic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic.htm "Topic.")

#### Usage

Only users with the Assign Topics permission can add existing topics to records or feed items. Only users with the Create Topics permission can add new topics to records or feed items. Administrators must enable topics for objects before users can add topics to records of that object type.