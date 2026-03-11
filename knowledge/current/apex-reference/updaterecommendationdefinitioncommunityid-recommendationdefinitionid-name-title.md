---
title: "updateRecommendationDefinition(communityId,
      recommendationDefinitionId, name, title, actionUrl, actionUrlName,
    explanation)"
domain: apex-reference
topic: updaterecommendationdefinitioncommunityid-recommendationdefinitionid-name-title-
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [updateRecommendationDefinition, communityId, recommendationDefinitionId, name, title, actionUrl, actionUrlName, explanation, Update, custom, recommendation, definition, specified, parameters., API, Version, Requires, Chatter, Signature, Parameters]
---

# updateRecommendationDefinition(communityId,
      recommendationDefinitionId, name, title, actionUrl, actionUrlName,
    explanation)

> Update a custom recommendation definition with the specified
      parameters.

### updateRecommendationDefinition(communityId, recommendationDefinitionId, name, title, actionUrl, actionUrlName, explanation)

Update a custom recommendation definition with the specified parameters.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.RecommendationDefinition updateRecommendationDefinition(String communityId, String recommendationDefinitionId, String name, String title, String actionUrl, String actionUrlName, String explanation recommendationDefinition)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recommendationDefinitionId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the custom recommendation definition.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the custom recommendation definition. The name is displayed in Setup.

title

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Title of the custom recommendation definition.

actionUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

URL for acting on the custom recommendation, for example, the URL to join a group.

actionUrlName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Text label for the action URL in the user interface, for example, “Launch.”

explanation

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Explanation, or body, of the custom recommendation.

#### Return Value

Type: [ConnectApi.RecommendationDefinition](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_definition.htm "Represents a custom recommendation definition.")

#### Usage

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.