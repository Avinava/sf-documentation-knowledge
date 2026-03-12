---
title: "Time Series V2 Parameters"
domain: salesforce-recipes-api
topic: time-series-v2-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.053Z
estimatedTokens: 404
keywords: [Time, Series, version, node, recipe]
---

# Time Series V2 Parameters

> The parameters for a time series version 2 node in a recipe.

# Time Series V2 Parameters

The parameters for a time series version 2 node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| algorithm | Time​Series​V2​Forecast​Algorithm​Enum | The forecast algorithm. Valid values are:Holt​Winters | Small, v54.0 | 54.0 |
| algorithm​Parameters | Time​Series​V2​Algorithm​Parameters | The parameters for the algorithm. | Small, v54.0 | 54.0 |
| confidence​Interval | Recipe​Time​Series​Confidence​Interval​Type | The confidence interval. Valid values are:EightyNinety​FiveNone | Small, v54.0 | 54.0 |
| forecast​Date​Field | String | The forecast date field. | Small, v54.0 | 54.0 |
| forecast​Dates​By | Recipe​Group​Dates​By | The value to group dates by. Valid values are:Fiscal​YearFiscal​Year​MonthFiscal​Year​QuarterFiscal​Year​WeekYear​MonthYear​Month​DayYear​QuarterYear​Week | Small, v54.0 | 54.0 |
| forecast​Fields | Time​Series​V2​Forecast​Info[] | The list of forecast fields. | Small, v54.0 | 54.0 |
| forecast​Length | Integer | The forecast length. | Small, v54.0 | 54.0 |
| forecast​Length​Type | Time​Series​V2​Forecast​Length​Type​Enum | The forecast length type. Valid values are:Rolling | Small, v54.0 | 54.0 |
| grouping​Fields | Extract​Parameter[] | The list of partition groupings. | Small, v54.0 | 54.0 |
| partial​Data​Handling | Time​Series​V2​Partial​Data​Handling​Enum | The partial data handling value. Valid values are:Ignore​LastNone | Small, v54.0 | 54.0 |
| target​Date​Field | Recipe​Name​Label | The target date field. | Small, v54.0 | 54.0 |

## Related Topics

- Time​Series​V2​Algorithm​Parameters (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_time_series_v2_algorithm_parameters.htm)
- Time​Series​V2​Forecast​Info (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_time_series_v2_forecast_info.htm)
- Extract​Parameter (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_extract_parameter.htm)
- Recipe​Name​Label (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_name_label.htm)
