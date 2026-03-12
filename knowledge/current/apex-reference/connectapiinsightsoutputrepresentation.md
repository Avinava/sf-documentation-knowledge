---
title: "ConnectApi.InsightsOutputRepresentation"
domain: apex-reference
topic: connectapiinsightsoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.660Z
estimatedTokens: 145
keywords: [ConnectApi.InsightsOutputRepresentation, Insight, business, objective, goal]
---

# ConnectApi.InsightsOutputRepresentation

> Insight details for a business objective, or goal.

# ConnectApi.InsightsOutputRepresentation

Insight details for a business objective, or goal.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| dashboardUrl | String | URL to the dashboard where the insight can be viewed. | 62.0 |
| insightSummaryText | String | A localized, human-readable summary of the insight value's performance, including the change from the previous value. | 62.0 |
| name | String | Name of the insight. | 62.0 |
| values | List<ConnectApi.​InsightsValues​OutputRepresentation> | List of insight categories. | 62.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​InsightsValues​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_insight_values_output.htm)
