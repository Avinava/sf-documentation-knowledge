---
title: "createRecommendationAudience(communityId,
      recommendationAudience)"
domain: apex-reference
topic: createrecommendationaudiencecommunityid-recommendationaudience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [createRecommendationAudience, communityId, recommendationAudience, Create, audience, custom, recommendation., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# createRecommendationAudience(communityId,
      recommendationAudience)

> Create an audience for a custom recommendation.

### createRecommendationAudience(communityId, recommendationAudience)

Create an audience for a custom recommendation.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.RecommendationAudience createRecommendationAudience(String communityId, ConnectApi.RecommendationAudienceInput recommendationAudience)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recommendationAudience

Type: [ConnectApi.RecommendationAudienceInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_recommendation_audience.htm "A custom recommendation audience.")

A ConnectApi.RecommendationAudienceInput object.

#### Return Value

Type: [ConnectApi.RecommendationAudience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_audience.htm "A custom recommendation audience.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.