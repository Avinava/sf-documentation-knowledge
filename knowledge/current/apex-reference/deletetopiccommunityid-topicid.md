---
title: "deleteTopic(communityId, topicId)"
domain: apex-reference
topic: deletetopiccommunityid-topicid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [deleteTopic, communityId, topicId, Delete, topic., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# deleteTopic(communityId, topicId)

> Delete a topic.

### deleteTopic(communityId, topicId)

Delete a topic.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static Void deleteTopic(String communityId, String topicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

#### Return Value

Type: Void

#### Usage

Only users with the Delete Topics or Modify All Data permission can delete topics.

Topic deletion is asynchronous. If a topic is requested before the deletion completes, the response is successful and the isBeingDeleted property of ConnectApi.Topic is true in version 33.0 and later. If a topic is requested after the deletion completes, the response is ConnectApi.NotFoundException.