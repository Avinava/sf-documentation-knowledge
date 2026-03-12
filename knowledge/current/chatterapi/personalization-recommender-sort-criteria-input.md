---
title: "Personalization Recommender Sort Criteria Input"
domain: chatterapi
topic: personalization-recommender-sort-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.467Z
estimatedTokens: 142
keywords: [Personalization, Recommender, Sort, Criteria, Input, rule-based, recommenders]
---

# Personalization Recommender Sort Criteria Input

> Defines the sort criteria for rule-based recommenders.

# Personalization Recommender Sort Criteria Input

Defines the sort criteria for rule-based recommenders.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| calculatedInsightName | String | The API name of the calculated insight. | Required | 64.0 |
| calculatedInsightMetricName | String | The API name of the metric of the calculated insight. | Required | 64.0 |
| sortOrder | Personalization Recommender Sort Order Enum | The order of the items being returned based on the metric value. | Required | 64.0 |

## Related Topics

- Personalization Recommender Sort Order Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_sort_order_enum.htm)
