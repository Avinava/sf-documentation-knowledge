---
title: "getFeedElementBatch(communityId,
      feedElementIds)"
domain: apex-reference
topic: getfeedelementbatchcommunityid-feedelementids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getFeedElementBatch, communityId, feedElementIds, Get, list, feed, elements., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getFeedElementBatch(communityId,
      feedElementIds)

> Get a list of feed elements.

### getFeedElementBatch(communityId, feedElementIds)

Get a list of feed elements.

#### API Version

31.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BatchResult\[\] getFeedElementBatch(String communityId, List<String\> feedElementIds)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of up to 500 feed element IDs.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a ConnectApi.FeedElement object and errors for feed elements that didn’t load.