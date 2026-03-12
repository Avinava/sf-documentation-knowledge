---
title: "ConnectApi.NBARecommendations"
domain: apex-reference
topic: connectapinbarecommendations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.063Z
estimatedTokens: 206
keywords: [ConnectApi.NBARecommendations, Recommendations, recommendation, strategy]
---

# ConnectApi.NBARecommendations

> Recommendations returned by a recommendation
    strategy.

# ConnectApi.NBARecommendations

Recommendations returned by a recommendation strategy.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| debug | String | Runtime debug information recorded during recommendation strategy execution. | 45.0 |
| errors | String | Runtime errors that occurred during recommendation strategy execution. | 45.0 |
| executionId | String | ID of the recommendation strategy execution. | 45.0 |
| onBehalfOfId | String | ID of the user or entity for which the recommendation strategy was executed. | 45.0 |
| recommendations | List<ConnectApi.​NBARecommendation> | List of recommendations returned by a recommendation strategy. | 45.0 |
| trace | ConnectApi.​StrategyTrace | Trace information for the recommendation strategy execution, if requested. | 45.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​NBARecommendation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_recommendation.htm)
- ConnectApi.​StrategyTrace (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_strategy_trace.htm)
