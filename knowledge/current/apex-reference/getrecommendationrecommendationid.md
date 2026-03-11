---
title: "getRecommendation(recommendationId)"
domain: apex-reference
topic: getrecommendationrecommendationid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.419Z
keywords: [getRecommendation, recommendationId, Get, recommendation., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getRecommendation(recommendationId)

> Get a recommendation.

### getRecommendation(recommendationId)

Get a recommendation.

#### API Version

45.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Recommendation getRecommendation(String recommendationId)

#### Parameters

recommendationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the recommendation.

#### Return Value

Type: [ConnectApi.Recommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_proposition.htm#apex_connectapi_output_proposition "A Next Best Action recommendation object.")