---
title: "ConnectApi.BusObjInsightsOutputRepresentation"
domain: apex-reference
topic: connectapibusobjinsightsoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.228Z
estimatedTokens: 378
keywords: [ConnectApi.BusObjInsightsOutputRepresentation, Insights, related, business, objective, goal.]
---

# ConnectApi.BusObjInsightsOutputRepresentation

> Insights related to a business objective, or goal.

# ConnectApi.BusObjInsightsOutputRepresentation

Insights related to a business objective, or goal.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currencyIsoCode | String | The three-letter ISO currency code associated with the KPI values. For example, 'USD' for US dollars or 'EUR' for euros. | 62.0 |
| current | Double | The current value of the KPI metric. This represents the most recent measurement or calculation of the business objective's key performance indicator. | 59.0 |
| insights | List<ConnectApi.​InsightsOutput​Representation> | A collection of insights related to the business objective. | 62.0 |
| kpiDashboardUrl | String | The URL to the dashboard where the KPI details and visualizations can be viewed. | 62.0 |
| kpiSummaryText | String | A human-readable summary of the KPI's performance, including the change from the previous value. | 62.0 |
| last | Double | The previous value of the KPI metric, used for comparison with the current value to track progress or changes over time. | 59.0 |
| period | String | The time period between the current and last values, such as 'Daily', 'Weekly', 'Monthly', or 'Quarterly'. This indicates the frequency of KPI measurements. | 59.0 |
| targetCompletionDate | Datetime | Target date for completion of the goal. | 62.0 |
| targetValue | Double | Target value for the goal. | 62.0 |
| unit | ConnectApi.​ConnectInsight​UnitEnum | Unit for an insight. Values are:CountCurrencyDollarNumberPercent | 59.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​InsightsOutput​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_insights_output.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​ConnectInsight​UnitEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
