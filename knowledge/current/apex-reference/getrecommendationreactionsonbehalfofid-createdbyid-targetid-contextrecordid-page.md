---
title: "getRecommendationReactions(onBehalfOfId, createdById,
            targetId, contextRecordId, pageParam, pageSize)"
domain: apex-reference
topic: getrecommendationreactionsonbehalfofid-createdbyid-targetid-contextrecordid-page
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.419Z
keywords: [getRecommendationReactions, onBehalfOfId, createdById, targetId, contextRecordId, pageParam, pageSize, Get, recommendation, reactions., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getRecommendationReactions(onBehalfOfId, createdById,
            targetId, contextRecordId, pageParam, pageSize)

> Get recommendation reactions.

### getRecommendationReactions(onBehalfOfId, createdById, targetId, contextRecordId, pageParam, pageSize)

Get recommendation reactions.

#### API Version

45.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RecommendationReactions getRecommendationReactions(String onBehalfOfId, String createdById, String targetId, String contextRecordId, Integer pageParam, Integer pageSize)

#### Parameters

onBehalfOfId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Use the ID of the user who is indirectly reacting to the recommendation to filter the results.

createdById

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Use the ID of the user or record that created the recommendation reaction to filter the results.

targetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Use the ID of the target to filter the results.

contextRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Use the ID of a context record to filter the results.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.RecommendationReactions](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_reaction_collection.htm "A list of recommendation reactions.")

#### Usage

Users with the Manage Next Best Action Recommendations or Modify All Data permission can get recommendation reactions.