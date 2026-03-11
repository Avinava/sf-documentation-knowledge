---
title: "getTopics(communityId, q, pageParam, pageSize,
                  sortParam)"
domain: apex-reference
topic: gettopicscommunityid-q-pageparam-pagesize-sortparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [getTopics, communityId, pageParam, pageSize, sortParam, Get, page, sorted, topics, match, search, criteria., API, Version, Available, Guest, Users, Requires, Chatter, Signature]
---

# getTopics(communityId, q, pageParam, pageSize,
                  sortParam)

> Get a page of sorted topics that match the search criteria.

### getTopics(communityId, q, pageParam, pageSize, sortParam)

Get a page of sorted topics that match the search criteria.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopics(String communityId, String q, Integer pageParam, Integer pageSize, ConnectApi.TopicSort sortParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The string must contain at least two characters, not including wildcards.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortParam

Type: ConnectApi.​TopicSort

Values are:

-   popularDesc—Sorts topics by popularity with the most popular first. This value is the default.
-   alphaAsc—Sorts topics alphabetically.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")