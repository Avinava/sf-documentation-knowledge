---
title: "createRecommendationDefinition(communityId,
      recommendationDefinition)"
domain: apex-reference
topic: createrecommendationdefinitioncommunityid-recommendationdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [createRecommendationDefinition, communityId, recommendationDefinition, Create, custom, recommendation, definition., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# createRecommendationDefinition(communityId,
      recommendationDefinition)

> Create a custom recommendation definition.

### createRecommendationDefinition(communityId, recommendationDefinition)

Create a custom recommendation definition.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.RecommendationDefinition createRecommendationDefinition(String communityId, ConnectApi.RecommendationDefinitionInput recommendationDefinition)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recommendationDefinition

Type: [ConnectApi.RecommendationDefinitionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_recommendation_definition.htm#apex_connectapi_input_recommendation_definition "A custom recommendation definition.")

A ConnectApi.RecommendationDefinitionInput object.

#### Return Value

Type: [ConnectApi.RecommendationDefinition](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_definition.htm "Represents a custom recommendation definition.")

#### Usage

Recommendation definitions allow you to create custom recommendations that appear in Experience Cloud sites, encouraging users to watch videos, take training and more.

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

These recommendations appear by default on the Customer Service template. They appear on the home and question detail pages and in the feed in Salesforce mobile web. They also appear anywhere community managers add recommendations using Experience Builder in the Customer Service template.

So that users don’t see the same recommendations all the time, Salesforce periodically removes and brings back custom recommendations that haven’t been accepted or dismissed.