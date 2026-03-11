---
title: "getRecommendationDefinitions(communityId)"
domain: apex-reference
topic: getrecommendationdefinitionscommunityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [getRecommendationDefinitions, communityId, Get, custom, recommendation, definitions., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getRecommendationDefinitions(communityId)

> Get custom recommendation definitions.

### getRecommendationDefinitions(communityId)

Get custom recommendation definitions.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.RecommendationDefinitionPage getRecommendationDefinitions(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.RecommendationDefinitionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_definition_collection.htm "A list of custom recommendation definitions.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.