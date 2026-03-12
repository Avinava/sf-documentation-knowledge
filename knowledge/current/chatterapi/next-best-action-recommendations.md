---
title: "Next Best Action Recommendations"
domain: chatterapi
topic: next-best-action-recommendations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.833Z
estimatedTokens: 232
keywords: [Best, Action, Recommendations, recommendation, strategy]
---

# Next Best Action Recommendations

> Recommendations returned by a recommendation
    strategy.

# Next Best Action Recommendations

Recommendations returned by a recommendation strategy.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| debug | String | Runtime debug information recorded during recommendation strategy execution. | Small, 45.0 | 45.0 |
| errors | String | Runtime errors that occurred during recommendation strategy execution. | Small, 45.0 | 45.0 |
| executionId | String | ID of the recommendation strategy execution. | Small, 45.0 | 45.0 |
| onBehalfOfId | String | ID of the user or entity for which the recommendation strategy was executed. | Small, 45.0 | 45.0 |
| recommendations | Next Best Action Recommendation[] | List of recommendations returned by a recommendation strategy. | Small, 45.0 | 45.0 |
| trace | Strategy Trace | Trace information for the recommendation strategy execution, if requested. | Small, 45.0 | 45.0 |

## Related Topics

- Next Best Action Recommendation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_recommendation.htm)
- Strategy Trace (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_strategy_trace.htm)
