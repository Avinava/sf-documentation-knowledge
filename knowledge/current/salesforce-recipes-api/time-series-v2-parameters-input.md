---
title: "Time Series V2 Parameters Input"
domain: salesforce-recipes-api
topic: time-series-v2-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.540Z
estimatedTokens: 397
keywords: [Time, Series, Input, version, node, recipe]
---

# Time Series V2 Parameters Input

> The parameters for a time series version 2 node in a recipe.

# Time Series V2 Parameters Input

The parameters for a time series version 2 node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| algorithm | Time​Series​V2​Forecast​Algorithm​Enum | The forecast algorithm. Valid values are:Holt​Winters | Required | 54.0 |
| algorithm​Parameters | Time​Series​V2​Algorithm​Input | The parameters for the algorithm. | Required | 54.0 |
| confidence​Interval | Recipe​Time​Series​Confidence​Interval​Type | The confidence interval. Valid values are:EightyNinety​FiveNone | Required | 54.0 |
| forecast​Date​Field | String | The forecast date field. | Required | 54.0 |
| forecast​Dates​By | Recipe​Group​Dates​By | The value to group dates by. Valid values are:Fiscal​YearFiscal​Year​MonthFiscal​Year​QuarterFiscal​Year​WeekYear​MonthYear​Month​DayYear​QuarterYear​Week | Required | 54.0 |
| forecast​Fields | Time​Series​V2​Forecast​Info​Input[] | The list of forecast fields. | Required | 54.0 |
| forecast​Length | Integer | The forecast length. | Required | 54.0 |
| forecast​Length​Type | Time​Series​V2​Forecast​Length​Type​Enum | The forecast length type. Valid values are:Rolling | Required | 54.0 |
| grouping​Fields | Extract​Grain​Parameter​Input[] | The list of grouping fields. | Required | 54.0 |
| partial​Data​Handling | Time​Series​V2​Partial​Data​Handling​Enum | The partial data handling value. Valid values are:Ignore​LastNone | Required | 54.0 |
| target​Date​Field | Recipe​Name​Label​Input | The target date field. | Required | 54.0 |

## Related Topics

- Time​Series​V2​Algorithm​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_time_series_v2_algorithm_input.htm)
- Time​Series​V2​Forecast​Info​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_time_series_v2_forecast_info_input.htm)
- Extract​Grain​Parameter​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_extract_grain_parameter_input.htm)
- Recipe​Name​Label​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_name_label_input.htm)
