---
title: "ConnectApi.StrategyTraceNode"
domain: apex-reference
topic: connectapistrategytracenode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.115Z
estimatedTokens: 224
keywords: [ConnectApi.StrategyTraceNode, trace, node, recommendation, strategy, execution]
---

# ConnectApi.StrategyTraceNode

> A trace node for a recommendation strategy execution.

# ConnectApi.StrategyTraceNode

A trace node for a recommendation strategy execution.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| inputCount | Integer | Number of items put into the node. | 45.0 |
| messages | List<String> | Messages that occurred during node execution. | 45.0 |
| nodeName | String | Name of the node. | 45.0 |
| nodeTime | Long | Time spent processing inside the node. | 45.0 |
| nodeType | String | Type of node. | 45.0 |
| outputCount | Integer | Number of items returned from the node. | 45.0 |
| outputs | List<String> | Recommendations that are returned from the node. | 45.0 |
| totalTime | Long | Total time spent processing. | 45.0 |

#### See Also

-   [ConnectApi.StrategyTrace](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_strategy_trace.htm "Messages and trace nodes for a recommendation strategy execution.")

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Long (atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm)
- ConnectApi.StrategyTrace (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_strategy_trace.htm)
