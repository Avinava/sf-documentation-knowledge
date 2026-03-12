---
title: "Time Series V2 Forecast Info Input"
domain: salesforce-recipes-api
topic: time-series-v2-forecast-info-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.531Z
estimatedTokens: 135
keywords: [Time, Series, Forecast, Info, Input, version, node, recipe]
---

# Time Series V2 Forecast Info Input

> The forecast info for a time series version 2 node in a recipe.

# Time Series V2 Forecast Info Input

The forecast info for a time series version 2 node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| aggregate | Aggregate​Input | The aggregate data. | Required | 54.0 |
| confidence​Interval​Fields | Time​Series​Output​Confidence​Interval​High​Low | The confidence interval field name and labels. | Required | 54.0 |
| forecast​Field | Recipe​Name​Label​Input | The aggregate data. | Small, v54.0 | 54.0 |

## Related Topics

- Aggregate​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_aggregate_input.htm)
- Time​Series​Output​Confidence​Interval​High​Low (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_time_series_input_confidence_interval_high_low_input.htm)
- Recipe​Name​Label​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_name_label_input.htm)
