---
title: "Business Objective Insights"
domain: chatterapi
topic: business-objective-insights
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.378Z
estimatedTokens: 405
keywords: [Business, Objective, Insights, goal]
---

# Business Objective Insights

> Insights related to a business objective, or goal.

# Business Objective Insights

Insights related to a business objective, or goal.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | The three-letter ISO currency code associated with the KPI values. For example, 'USD' for US dollars or 'EUR' for euros. | Small, 62.0 | 62.0 |
| current | Double | The current value of the KPI metric. This represents the most recent measurement or calculation of the business objective's key performance indicator. | Small, 59.0 | 59.0 |
| insights | Business Objective Insights[] | A collection of insights related to the business objective. | Small, 62.0 | 62.0 |
| kpiDashboardUrl | String | The URL to the dashboard where the KPI details and visualizations can be viewed. | Small, 62.0 | 62.0 |
| kpiSummaryText | String | A human-readable summary of the KPI's performance, including the change from the previous value. | Small, 62.0 | 62.0 |
| last | Double | The previous value of the KPI metric, used for comparison with the current value to track progress or changes over time. | Small, 59.0 | 59.0 |
| period | String | The time period between the current and last values, such as 'Daily', 'Weekly', 'Monthly', or 'Quarterly'. This indicates the frequency of KPI measurements. | Small, 59.0 | 59.0 |
| targetCompletionDate | String | Target date for completion of the goal. | Small, 62.0 | 62.0 |
| targetValue | Double | Target value for the goal. | Small, 62.0 | 62.0 |
| unit | String | Unit for an insight. Values are:CountCurrencyDollarNumberPercent | Small, 59.0 | 59.0 |
