---
title: "getMotifBatch(communityId, idOrPrefixList)"
domain: apex-reference
topic: getmotifbatchcommunityid-idorprefixlist
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.716Z
keywords: [getMotifBatch, communityId, idOrPrefixList, Get, motif, list, objects., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# getMotifBatch(communityId, idOrPrefixList)

> Get a motif for a list of objects.

### getMotifBatch(communityId, idOrPrefixList)

Get a motif for a list of objects.

#### API Version

31.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BatchResult\[\] getMotifBatch(String communityId, List<String\> idOrPrefixList)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

idOrPrefixList

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of object IDs or prefixes.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a ConnectApi.Motif object and errors for motifs that didn’t load.

#### Example

```

```