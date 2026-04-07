---
title: "Time Series Parameters"
domain: salesforce-recipes-api
topic: time-series-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:05:25.984Z
estimatedTokens: 395
keywords: [Time, Series, node, recipe]
---

# Time Series Parameters

> The parameters for a time series node in a recipe.

# Time Series Parameters

The parameters for a time series node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| confidence​Interval | Recipe​Time​Series​Confidence​Interval​Type | The confidence interval. Valid values are:EightyNinety​FiveNone | Small, v51.0 | 51.0 |
| confidence​Interval​Fields | Map<String, Time​Series​Output​Confidence​Interval​High​Low> | The confidence interval field name and labels. | Small, v52.0 | 52.0 |
| day​Field | String | The day field. | Small, v51.0 | 51.0 |
| forecast​Fields | String[] | The list of forecast fields. | Small, v51.0 | 51.0 |
| forecast​Length | Integer | The forecast length. | Small, v51.0 | 51.0 |
| group​Dates​By | Recipe​Group​Dates​By | The value to group dates by. Valid values are:YearYear​MonthYear​Month​DayYear​QuarterYear​Week | Small, v51.0 | 51.0 |
| ignore​Last​Time​Period | Boolean | Indicates whether to ignore the last time period (true) or not (false). | Small, v51.0 | 51.0 |
| model | Recipe​Time​Series​Model | The time series model. Valid values are:AdditiveAutoMultiplicative | Small, v51.0 | 51.0 |
| seasonality | Integer | The seasonality. | Small, v51.0 | 51.0 |
| sub​Year​Field | String | The sub year field. | Small, v51.0 | 51.0 |
| target​Date​Field | Recipe​Name​Label | The target date field. | Small, v51.0 | 51.0 |
| target​Forecast​Fields | Recipe​Name​Label[] | The list of target forecast fields. | Small, v51.0 | 51.0 |
| year​Field | String | The year field. | Small, v51.0 | 51.0 |

## Related Topics

- Time​Series​Output​Confidence​Interval​High​Low (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_time_series_output_confidence_interval_high_low.htm)
- Recipe​Name​Label (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_name_label.htm)
