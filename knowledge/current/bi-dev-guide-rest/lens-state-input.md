---
title: "Lens State Input"
domain: bi-dev-guide-rest
topic: lens-state-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.772Z
estimatedTokens: 1303
keywords: [Lens, State, Input, Analytics, Query​Input, Compact​Form​Filter​Input, Compact​Form​Source​Input, Compact​Form​Column​Input, Lens​Visualization​Options​Input]
---

# Lens State Input

> The state for an Analytics lens.

# Lens State Input

The state for an Analytics lens.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| options | Lens​Visualization​Options​Input | The configuration options for different lens visualizations. | Optional | 36.0 |
| query | Query​Input | The SAQL query to be used to create this lens. | If using any visualization type other than comparison table, you are required to specify this property. | 36.0 |

## Query​Input

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| aggregate​Filters | Object | The compact form aggregate filters for the query. | Optional | 48.0 |
| column​Groups | Object | The column groups for the query. | Optional | 56.0 |
| column​Totals | Object | The column totals for the query. | Optional | 56.0 |
| limit | Object | The query limit. | Optional | 48.0 |
| orders | Object | The query orders. | Optional | 48.0 |
| query | String | The SAQL query. | Optional for PATCH, required for POST | 36.0 |
| row​Totals | Object | The row totals for the query. | Optional | 56.0 |
| source​Filters | Map<String,Compact​Form​Filter​Input> | The map of compact form source filters for the query. | Optional | 48.0 |
| sources | Compact​Form​Source​Input[] | The list of compact form sources for the query. | Optional | 48.0 |
| timezone | String | The timezone for the query request. | Optional | 43.0 |
| version | Double | Version to which this query language construct belongs. | Optional for PATCH, required for POST | 36.0 |

## Compact​Form​Filter​Input

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| boolean​Filter​Logic | String | The boolean filter logic. | Optional | 49.0 |
| filters | Object | The compact form filters. | Required | 48.0 |

## Compact​Form​Source​Input

H

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cogroup​Type | Connect​Wave​Compact​Form​Cogroup​Type​Enum | The compact form source cogroup type. Valid values are:AntiInnerLeftOuterRightSemi | Required | 48.0 |
| columns | Compact​Form​Column​Input[] | The list of compact form source columns. | Required | 48.0 |
| groups | Object | The compact form source groups. | Required | 48.0 |
| filters | Object | The compact form source column filters. | Required | 48.0 |
| name | String | The compact form source name. | Required | 52.0 |

## Compact​Form​Column​Input

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | Object | The compact form column field | Required | 48.0 |
| formula | String | The formula for the compact form column. | Required | 48.0 |
| name | String | The name of the compact form column. | Required | 48.0 |

## Lens​Visualization​Options​Input

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| column​Totals | Boolean | Indicates whether to display column totals in the table (true) or not (false). | Optional | 55.0 |
| fit | Boolean | Indicates whether to scale the position and size of data shape so that it’s proportional to its percentage of its category (true) or not (false). | Optional | 36.0 |
| hide​Header​Column | Boolean | Indicates whether to display header column (true) or not (false). | Optional | 36.0 |
| legend | Boolean | Indicates whether to show legend (true) or not (false). | Optional | 36.0 |
| legend​Hide​Header | Boolean | Indicates whether to hide the legend (true) or not (false). | Optional | 36.0 |
| legend​Width | Integer | The width of the legend. | Optional | 36.0 |
| max​Column​Width | Integer | The maximum width of the header column. | Optional | 36.0 |
| min​Column​Width | Integer | The minimum width of the header column. | Optional | 36.0 |
| miniBars | Integer | The width of the miniBars, if present. | Optional | 36.0 |
| multi​Metrics | Boolean | Indicates whether multiple measures are projected on the same chart, side by side (true) , or if every measure is in its own chart (false). | Optional | 36.0 |
| normalize | Boolean | Indicates whether to scale the position and size of data shape so that it’s proportional to its percentage of its category (true) or not (false). | Optional | 36.0 |
| row​Totals | Boolean | Indicates whether to display row totals in the table (true) or not (false). | Optional | 55.0 |
| split​Axis | Boolean | Indicates whether each measure is projected on one axis or if all measures share an axis (true) or not (false). | Optional | 36.0 |
| sqrt | Boolean | Indicates whether the axis is sqrt scale (true) or not (false). | Optional | 36.0 |
| subtotals | Boolean | Indicates whether to display subtotals in the table (true) or not (false). | Optional | 48.0 |
| totals | Boolean | Indicates whether to display totals in the table (true) or not (false). | Optional | 36.0 |
| trellis | Boolean | Indicates whether the last group is treated as a trellis dimension (true) or not (false). Every distinct value of the dimension is a chart. | Optional | 36.0 |
