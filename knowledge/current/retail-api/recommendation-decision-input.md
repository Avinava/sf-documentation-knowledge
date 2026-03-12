---
title: "Recommendation Decision Input"
domain: retail-api
topic: recommendation-decision-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.922Z
estimatedTokens: 182
keywords: [Recommendation, Decision, Input, representation, recommendations, taken]
---

# Recommendation Decision Input

> Input representation of recommendations details for which
      recommendation decision is taken.

# Recommendation Decision Input

Input representation of recommendations details for which recommendation decision is taken.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recommendation​Decision | String | The unique identifier of a recommendation decision that is taken for recommendations. | Required | 51.0 |
| recommendation​DecisionParams | Map<String, String> | The unique identifier of the other parameters that are relevant to process the decision taken. | Optional | 51.0 |
| recommendationIds | String[] | The unique identifier of the recommendations for which the recommendation decision is taken. | Required | 51.0 |

## Code Examples

```
{  "recommendationDecision": "Accept",
  "recommendationIds": ["9Tuxx0000004Eu0CAE"],
}
```
