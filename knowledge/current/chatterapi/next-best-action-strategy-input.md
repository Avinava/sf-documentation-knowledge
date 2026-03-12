---
title: "Next Best Action Strategy Input"
domain: chatterapi
topic: next-best-action-strategy-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.162Z
estimatedTokens: 201
keywords: [Best, Action, Strategy, Input, recommendation]
---

# Next Best Action Strategy Input

> A recommendation strategy.

# Next Best Action Strategy Input

A recommendation strategy.

Root XML tag

<nbaStrategyInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextRecordId | String | ID of the context record. For example, if the next best action is on a case detail page, the ID of the case. | Optional | 45.0 |
| maxResults | Integer | Maximum number of results. Valid values are from 1 to 25. The default is 3. | Optional | 45.0 |
| strategyContext | Map<String, String> | Variable and value mappings for the strategy. | Optional | 45.0 |
| debugTrace | Boolean | Specifies whether to return trace and debug information in the response (true) or not (false). If unspecified, the default is false. | Optional | 45.0 |

## Code Examples

```
{
   "strategyContext": {
      "key1": "val1",
      "key2": "val2"
   },
   "contextRecordId": "a0lB0000001G2nFIAS",
   "maxResults": 5
}
```
