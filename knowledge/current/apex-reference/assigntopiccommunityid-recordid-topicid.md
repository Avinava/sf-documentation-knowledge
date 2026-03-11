---
title: "assignTopic(communityId, recordId, topicId)"
domain: apex-reference
topic: assigntopiccommunityid-recordid-topicid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.886Z
keywords: [assignTopic, communityId, recordId, topicId, Assign, topic, record, feed, item., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# assignTopic(communityId, recordId, topicId)

> Assign a topic to a record or feed item.

### assignTopic(communityId, recordId, topicId)

Assign a topic to a record or feed item.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Topic assignTopic(String communityId, String recordId, String topicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or feed item.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

#### Return Value

Type: [ConnectApi.​Topic](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topic.htm "Topic.")

#### Usage

Only users with the Assign Topics permission can add existing topics to records or feed items. Administrators must enable topics for objects before users can add topics to records of that object type.