---
title: "ConnectApi.AbstractRecommendation"
domain: apex-reference
topic: connectapiabstractrecommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.079Z
estimatedTokens: 437
keywords: [ConnectApi.AbstractRecommendation, Chatter, custom, recommendation]
---

# ConnectApi.AbstractRecommendation

> A Chatter, custom, or static recommendation.

# ConnectApi.AbstractRecommendation

A Chatter, custom, or static recommendation.

This class is abstract.

Superclass of:

-   [ConnectApi.EntityRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_entity_recommendation.htm "A Chatter, custom, or static recommendation.")
-   [ConnectApi.NonEntityRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_non_entity_recommendation.htm "A recommendation for a non-Salesforce entity, such as an application.")

    ConnectApi.NonEntityRecommendation isn’t used in version 34.0 and later. In version 34.0 and later, [ConnectApi.EntityRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_entity_recommendation.htm "A Chatter, custom, or static recommendation.") is used for all recommendations.


| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| explanation | ConnectApi.​Recommendation​Explanation | The Chatter, custom, or static recommendation explanation. | 32.0 |
| platformAction​Group | ConnectApi.​PlatformAction​Group | A platform action group instance with state appropriate for the context user. | 34.0 |
| recommendation​Type | ConnectApi.​RecommendationType | Specifies the type of record being recommended. | 32.0 |
| url | String | URL for the Chatter, custom, or static recommendation. | 34.0 |

#### See Also

-   [ConnectApi.RecommendationsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_capability.htm "If a feed element has this capability, it has a recommendation.")

-   [ConnectApi.RecommendationCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm "A list of Chatter, custom, and static recommendations.")

## Related Topics

- ConnectApi.EntityRecommendation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_entity_recommendation.htm)
- ConnectApi.NonEntityRecommendation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_non_entity_recommendation.htm)
- ConnectApi.​Recommendation​Explanation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rec_explanation_summary.htm)
- ConnectApi.​PlatformAction​Group (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_platform_action_group.htm)
- ConnectApi.​RecommendationType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.RecommendationsCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_capability.htm)
- ConnectApi.RecommendationCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm)
