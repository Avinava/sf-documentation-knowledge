---
title: "ConnectApi.NBARecommendation"
domain: apex-reference
topic: connectapinbarecommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.060Z
estimatedTokens: 303
keywords: [ConnectApi.NBARecommendation, recommendation, strategy]
---

# ConnectApi.NBARecommendation

> A recommendation returned by a recommendation
    strategy.

# ConnectApi.NBARecommendation

A recommendation returned by a recommendation strategy.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| aiModel | String | Reserved for future use. | 47.0 |
| acceptanceLabel | String | Text indicating user acceptance of the recommendation. | 45.0 |
| description | String | Description of the recommendation. | 45.0 |
| externalId | String | External ID of the recommendation. This ID doesn’t need to be a Salesforce 18-character ID. For example, it can be a product number from an external system. | 46.0 |
| imageUrl | String | URL to the asset file to display. | 45.0 |
| recommendation​Mode | String | Reserved for future use. | 46.0 |
| recommendation​Score | Double | Reserved for future use. | 46.0 |
| rejectionLabel | String | Text indicating user rejection of the recommendation. | 45.0 |
| target | ConnectApi.​AbstractNBATarget | Target to act on. | 45.0 |
| targetAction | ConnectApi.​AbstractNBAAction | Action to recommend. | 45.0 |

#### See Also

-   [ConnectApi.NBARecommendations](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_recommendations.htm "Recommendations returned by a recommendation strategy.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- ConnectApi.​AbstractNBATarget (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_n_b_a_target.htm)
- ConnectApi.​AbstractNBAAction (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_n_b_a_action.htm)
- ConnectApi.NBARecommendations (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_recommendations.htm)
