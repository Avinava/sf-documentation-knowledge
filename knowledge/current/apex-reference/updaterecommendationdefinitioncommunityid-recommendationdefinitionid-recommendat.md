---
title: "updateRecommendationDefinition(communityId,
      recommendationDefinitionId, recommendationDefinition)"
domain: apex-reference
topic: updaterecommendationdefinitioncommunityid-recommendationdefinitionid-recommendat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [updateRecommendationDefinition, communityId, recommendationDefinitionId, recommendationDefinition, Update, custom, recommendation, definition., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# updateRecommendationDefinition(communityId,
      recommendationDefinitionId, recommendationDefinition)

> Update a custom recommendation definition.

### updateRecommendationDefinition(communityId, recommendationDefinitionId, recommendationDefinition)

Update a custom recommendation definition.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.RecommendationDefinition updateRecommendationDefinition(String communityId, String recommendationDefinitionId, ConnectApi.RecommendationDefinitionInput recommendationDefinition)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recommendationDefinitionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the custom recommendation definition.

recommendationDefinition

Type: [ConnectApi.RecommendationDefinitionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_recommendation_definition.htm#apex_connectapi_input_recommendation_definition "A custom recommendation definition.")

A ConnectApi.RecommendationDefinitionInput object containing the properties to update.

#### Return Value

Type: [ConnectApi.RecommendationDefinition](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_definition.htm "Represents a custom recommendation definition.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.