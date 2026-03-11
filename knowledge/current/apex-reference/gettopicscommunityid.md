---
title: "getTopics(communityId)"
domain: apex-reference
topic: gettopicscommunityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [getTopics, communityId, Get, first, page, topics, org, Experience, Cloud, site., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getTopics(communityId)

> Get the first page of topics for the org or Experience Cloud site.

### getTopics(communityId)

Get the first page of topics for the org or Experience Cloud site.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")