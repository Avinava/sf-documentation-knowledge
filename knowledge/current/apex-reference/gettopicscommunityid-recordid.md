---
title: "getTopics(communityId, recordId)"
domain: apex-reference
topic: gettopicscommunityid-recordid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [getTopics, communityId, recordId, Get, first, page, topics, assigned, record, feed, item., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# getTopics(communityId, recordId)

> Get the first page of topics assigned to a record or feed item.

### getTopics(communityId, recordId)

Get the first page of topics assigned to a record or feed item.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId, String recordId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or feed item.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

#### Usage

Administrators must enable topics for objects before users can add topics to records of that object type.