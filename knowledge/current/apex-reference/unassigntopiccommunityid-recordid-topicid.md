---
title: "unassignTopic(communityId, recordId, topicId)"
domain: apex-reference
topic: unassigntopiccommunityid-recordid-topicid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [unassignTopic, communityId, recordId, topicId, Remove, topic, record, feed, item., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# unassignTopic(communityId, recordId, topicId)

> Remove a topic from a record or feed item.

### unassignTopic(communityId, recordId, topicId)

Remove a topic from a record or feed item.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static Void unassignTopic(String communityId, String recordId, String topicId)

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

Type: Void

#### Usage

Only users with the Assign Topics permission can remove topics from feed items or records. Administrators must enable topics for objects before users can add topics to records of that object type.