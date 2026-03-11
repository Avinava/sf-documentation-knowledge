---
title: "deleteManagedTopic(communityId,
    managedTopicId)"
domain: apex-reference
topic: deletemanagedtopiccommunityid-managedtopicid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.328Z
keywords: [deleteManagedTopic, communityId, managedTopicId, Delete, managed, topic, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# deleteManagedTopic(communityId,
    managedTopicId)

> Delete a managed topic from an Experience Cloud site.

### deleteManagedTopic(communityId, managedTopicId)

Delete a managed topic from an Experience Cloud site.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static deleteManagedTopic(String communityId, String managedTopicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

managedTopicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of managed topic.

#### Return Value

Type: Void

#### Usage

Only community managers (users with the Create and Set Up Experiences or Manage Experiences permission) can delete managed topics.