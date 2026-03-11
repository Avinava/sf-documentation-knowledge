---
title: "getRecommendationReaction(reactionId)"
domain: apex-reference
topic: getrecommendationreactionreactionid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.419Z
keywords: [getRecommendationReaction, reactionId, Get, recommendation, reaction., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getRecommendationReaction(reactionId)

> Get a recommendation reaction.

### getRecommendationReaction(reactionId)

Get a recommendation reaction.

#### API Version

45.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RecommendationReaction getRecommendationReaction(String reactionId)

#### Parameters

reactionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the recommendation reaction or other sObject that caused the user to react.

#### Return Value

Type: [ConnectApi.RecommendationReaction](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_reaction.htm#apex_connectapi_output_n_b_a_reaction "A reaction to a recommendation produced by a recommendation strategy")

#### Usage

Users with the Manage Next Best Action Recommendations or Modify All Data permission can get recommendation reactions.