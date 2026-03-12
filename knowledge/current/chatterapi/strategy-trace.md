---
title: "Strategy Trace"
domain: chatterapi
topic: strategy-trace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.215Z
estimatedTokens: 151
keywords: [Strategy, Trace, Messages, nodes, recommendation, execution]
---

# Strategy Trace

> Messages and trace nodes for a recommendation strategy
    execution.

# Strategy Trace

Messages and trace nodes for a recommendation strategy execution.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| messages | String[] | Messages and errors from the strategy execution. | Small, 45.0 | 45.0 |
| nodes | Strategy Trace Node[] | Nodes of the strategy execution used for debugging. | Small, 45.0 | 45.0 |

#### See Also

-   [Next Best Action Recommendations](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_recommendations.htm "Recommendations returned by a recommendation strategy.")

## Related Topics

- Strategy Trace Node (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_strategy_trace_node.htm)
- Next Best Action Recommendations (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_recommendations.htm)
