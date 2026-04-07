---
title: "Time Series Parameters Input"
domain: salesforce-recipes-api
topic: time-series-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:39:18.798Z
estimatedTokens: 386
keywords: [Time, Series, node, recipe]
---

> The parameters for a time series node in a recipe.

# Time Series Parameters Input

The parameters for a time series node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| confidence​Interval | Recipe​Time​Series​Confidence​Interval​Type | The confidence interval. Valid values are:EightyNinety​FiveNone | Required | 51.0 |
| confidence​Interval​Fields | Map<String, Time​Series​Input​Confidence​Interval​High​Low> | The confidence interval field name and labels. | Required | 52.0 |
| day​Field | String | The day field. | Required | 51.0 |
| forecast​Fields | String[] | The list of forecast fields. | Required | 51.0 |
| forecast​Length | Integer | The forecast length. | Required | 51.0 |
| group​Dates​By | Recipe​Group​Dates​By | The value to group dates by. Valid values are:YearYear​MonthYear​Month​DayYear​QuarterYear​Week | Required | 51.0 |
| ignore​Last​Time​Period | Boolean | Indicates whether to ignore the last time period (true) or not (false). | Required | 51.0 |
| model | Recipe​Time​Series​Model | The time series model. Valid values are:AdditiveAutoMultiplicative | Required | 51.0 |
| seasonality | Integer | The seasonality. | Required | 51.0 |
| sub​Year​Field | String | The sub year field. | Required | 51.0 |
| target​Date​Field | Recipe​Name​Label​Input | The target date field. | Required | 51.0 |
| target​Forecast​Fields | Recipe​Name​Label​Input[] | The list of target forecast fields. | Required | 51.0 |
| year​Field | String | The year field. | Required | 51.0 |

## Related Topics

- Time​Series​Input​Confidence​Interval​High​Low (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_time_series_input_confidence_interval_high_low_input.htm)
- Recipe​Name​Label​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_name_label_input.htm)
