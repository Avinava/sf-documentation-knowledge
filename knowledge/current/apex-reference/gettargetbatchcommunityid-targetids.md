---
title: "getTargetBatch(communityId, targetIds)"
domain: apex-reference
topic: gettargetbatchcommunityid-targetids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.546Z
keywords: [getTargetBatch, communityId, targetIds, Get, target, information, comma-separated, list, IDs., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getTargetBatch(communityId, targetIds)

> Get target information for a comma-separated list of target
    IDs.

### getTargetBatch(communityId, targetIds)

Get target information for a comma-separated list of target IDs.

#### API Version

48.0

#### Available to Guest Users

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BatchResult\[\] getTargetBatch(String communityId, List<String\> targetIds)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

targetIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of target IDs.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")

The ConnectApi.BatchResult.getResult() method returns a [ConnectApi.Target](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_target.htm "Personalization target information.") object and errors for targets that didn’t load.