---
title: "Reply Recommendations Metric"
domain: chatterapi
topic: reply-recommendations-metric
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:20.929Z
estimatedTokens: 407
keywords: [Reply, Recommendations, Metric]
---

# Reply Recommendations Metric

> Reply recommendations metric.

# Reply Recommendations Metric

Reply recommendations metric.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activeAgentCount | Integer | Number of agents who were shown recommendations (MAU). | Small, 52.0 | 52.0 |
| agentsEngaged | Integer | Number of agents who interacted with a recommendation. | Small, 52.0 | 52.0 |
| conversations​Count | Integer | Number of unique conversations in which recommendations were served. | Small, 52.0 | 52.0 |
| conversations​WithEngagements | Integer | Number of distinct conversations that used the recommendation (post or edit interactions). | Small, 52.0 | 52.0 |
| metricsDate | String | Date of metrics computation.Metrics are aggregated on a monthly basis and are computed on the first day of each month for the previous month. | Small, 52.0 | 52.0 |
| predictionsCount | Integer | Number of times recommendations are displayed to agents. | Small, 54.0 | 54.0 |
| recommendations​Count | Integer | Number of recommendations displayed to agents. | Small, 52.0 | 52.0 |
| recommendations​EditCount | Integer | Number of times agents edited a recommendation. | Small, 52.0 | 52.0 |
| recommendations​NotHelpfulCount | Integer | Number of times agents indicated that a recommendation was not helpful. | Small, 52.0 | 52.0 |
| recommendations​PostCount | Integer | Number of times agents posted a recommendation. | Small, 52.0 | 52.0 |

#### See Also

-   [Reply Recommendations Metrics](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reply_recommendations_metrics.htm "Reply recommendations metrics.")

## Related Topics

- Reply Recommendations Metrics (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reply_recommendations_metrics.htm)
