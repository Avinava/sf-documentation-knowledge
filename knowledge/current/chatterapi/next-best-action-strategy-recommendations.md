---
title: "Next Best Action, Strategy Recommendations"
domain: chatterapi
topic: next-best-action-strategy-recommendations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.907Z
estimatedTokens: 425
keywords: [Best, Action, Strategy, Recommendations, Execute]
---

# Next Best Action, Strategy Recommendations

> Execute a strategy.

# Next Best Action, Strategy Recommendations

Execute a strategy.

Resource

```

```

Available version

45.0

HTTP methods

POST

Request body for POST

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

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextRecordId | String | ID of the context record. For example, if the next best action is on a case detail page, the ID of the case. | Optional | 45.0 |
| maxResults | Integer | Maximum number of results. Valid values are from 1 to 25. The default is 3. | Optional | 45.0 |
| debugTrace | Boolean | Specifies whether to return trace and debug information in the response (true) or not (false). If unspecified, the default is false. | Optional | 45.0 |

Response body for POST

[Next Best Action Recommendations](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_recommendations.htm "Recommendations returned by a recommendation strategy.")

## Code Examples

```
/connect/recommendation-strategies/strategyName/recommendations
```

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

## Related Topics

- Next Best Action Recommendations (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_recommendations.htm)
