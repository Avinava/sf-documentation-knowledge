---
title: "ConnectApi.RecommendationDefinitionInput"
domain: apex-reference
topic: connectapirecommendationdefinitioninput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:25.452Z
estimatedTokens: 340
keywords: [ConnectApi.RecommendationDefinitionInput, custom, recommendation, definition.]
---

# ConnectApi.RecommendationDefinitionInput

> A custom recommendation definition.

# ConnectApi.RecommendationDefinitionInput

A custom recommendation definition.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionUrl | String | URL for acting on the custom recommendation, for example, the URL to join a group. | Required to create a recommendation definitionOptional to update a recommendation definition | 35.0 |
| actionUrlName | String | Text label for the action URL in the user interface, for example, “Launch.” | Required to create a recommendation definitionOptional to update a recommendation definition | 35.0 |
| explanation | String | Explanation, or body, of the custom recommendation. | Required to create a recommendation definitionOptional to update a recommendation definition | 35.0 |
| name | String | Name of the custom recommendation definition. The name is displayed in Setup. | Required to create a recommendation definitionOptional to update a recommendation definition | 35.0 |
| title | String | Title of the custom recommendation definition. | Optional | 35.0 |

#### See Also

-   [createRecommendationDefinition(communityId, recommendationDefinition)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_createRecommendationDefinition_2 "Create a custom recommendation definition.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- createRecommendationDefinition(communityId, recommendationDefinition) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm)
