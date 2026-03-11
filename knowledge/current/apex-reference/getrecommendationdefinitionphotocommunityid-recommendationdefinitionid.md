---
title: "getRecommendationDefinitionPhoto(communityId,
      recommendationDefinitionId)"
domain: apex-reference
topic: getrecommendationdefinitionphotocommunityid-recommendationdefinitionid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [getRecommendationDefinitionPhoto, communityId, recommendationDefinitionId, Get, custom, recommendation, definition, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getRecommendationDefinitionPhoto(communityId,
      recommendationDefinitionId)

> Get a custom recommendation definition photo.

### getRecommendationDefinitionPhoto(communityId, recommendationDefinitionId)

Get a custom recommendation definition photo.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo getRecommendationDefinitionPhoto(String communityId, String recommendationDefinitionId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recommendationDefinitionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the custom recommendation definition.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm#apex_connectapi_output_photo "Profile photo.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.