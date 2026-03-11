---
title: "getAudienceBatch(communityId, audienceIds)"
domain: apex-reference
topic: getaudiencebatchcommunityid-audienceids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.546Z
keywords: [getAudienceBatch, communityId, audienceIds, Get, audience, information, comma-separated, list, IDs., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getAudienceBatch(communityId, audienceIds)

> Get audience information for a comma-separated list of audience
      IDs.

### getAudienceBatch(communityId, audienceIds)

Get audience information for a comma-separated list of audience IDs.

#### API Version

48.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BatchResult\[\] getAudienceBatch(String communityId, List<String\> audienceIds)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Experience Cloud site.

audienceIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of audience IDs.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a [ConnectApi.Audience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience.htm "A personalization audience.") object and errors for audiences that didn’t load.