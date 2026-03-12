---
title: "Lens State"
domain: bi-dev-guide-rest
topic: lens-state
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.395Z
estimatedTokens: 2926
keywords: [Lens, State, Analytics, lenses, Bar​Lens​Visualization​Options, Dot​Lens​Visualization​Options, Heat​Map​Lens​Visualization​Options, Matrix​Lens​Visualization​Options, Pie​Lens​Visualization​Options, Pivot​Table​Lens​Visualization​Options, Scatter​Lens​Visualization​Options, Stacked​Bar​Lens​Visualization​Options, Table​Lens​Visualization​Options, Time​Lens​Visualization​Options, Values​Table​Lens​Visualization​Options]
---

# Lens State

> The state for an Analytics lenses.

# Lens State

The state for an Analytics lenses.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| options | Lens​Visualization Option | The configuration options for different lens visualizations. Valid values are:Bar​Lens​Visualization​OptionsComparison​Table​Lens​Visualization​OptionsDot​Lens​Visualization​OptionsHeat​Map​Lens​Visualization​OptionsMatrix​Lens​Visualization​OptionsParallel​Coords​Lens​Visualization​OptionsPie​Lens​Visualization​OptionsPivot​Table​Lens​Visualization​OptionsScatter​Lens​Visualization​OptionsStacked​Bar​Lens​Visualization​OptionsTable​Lens​Visualization​OptionsTime​Lens​Visualization​OptionsValues​Table​Lens​Visualization​Options | Small, 36.0 | 36.0 |
| query | Query | The SAQL query used to create this lens. | Small, 36.0 | 36.0 |

## Bar​Lens​Visualization​Options

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| legend | Boolean | Indicates whether to display the legend or not. | Small, 36.0 | 36.0 |
| legend​Hide​Header | Boolean | Indicates whether to hide the legend header or not. | Small, 36.0 | 36.0 |
| legend​Width | Integer | The width of the legend. | Small, 36.0 | 36.0 |
| max​Column​Width | Integer | The maximum width of the header column. | Small, 36.0 | 36.0 |
| min​Column​Width | Integer | The minimum width of the header column. | Small, 36.0 | 36.0 |
| miniBars | Integer | The width of the mini-bars, if used. | Small, 36.0 | 36.0 |
| multi​Metrics | Boolean | Indicates whether multiple measures are projected on the same chart, side by side, or if every measure is in its own chart. | Small, 36.0 | 36.0 |
| split​Axis | Boolean | Indicates whether each measure is projected on one axis or if all measures share an axis. | Small, 36.0 | 36.0 |
| sqrt | Boolean | Indicates whether the axis is sqrt scale or not. | Small, 36.0 | 36.0 |
| trellis | Boolean | Indicates whether the last group is treated as a trellis dimension or not. Every distinct value of the dimension is a chart. | Small, 36.0 | 36.0 |

## Comparison​Table​Lens​Visualization​Options

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| max​Column​Width | Integer | The maximum width of the header column. | Small, 36.0 | 36.0 |
| min​Column​Width | Integer | The minimum width of the header column. | Small, 36.0 | 36.0 |
| subtotals | Boolean | Indicates whether to display subtotals in the table or not. | Small, 48.0 | 48.0 |
| totals | Boolean | Indicates whether to display totals in the table or not. | Small, 36.0 | 36.0 |

## Dot​Lens​Visualization​Options

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fit | Boolean | Indicates whether to scale the position and size of a data shape so that it's proportional to its percentage of its category or not. | Small, 36.0 | 36.0 |
| legend | Boolean | Indicates whether to display the legend or not. | Small, 36.0 | 36.0 |
| legend​Hide​Header | Boolean | Indicates whether to hide the legend header or not. | Small, 36.0 | 36.0 |
| legend​Width | Integer | The width of the legend. | Small, 36.0 | 36.0 |
| sqrt | Boolean | Indicates whether the axis is sqrt scale or not. | Small, 36.0 | 36.0 |

## Heat​Map​Lens​Visualization​Options

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| legend​Hide​Header | Boolean | Indicates whether to hide the legend header or not. | Small, 36.0 | 36.0 |
| legend​Width | Integer | The width of the legend. | Small, 36.0 | 36.0 |
| sqrt | Boolean | Indicates whether the axis is sqrt scale or not. | Small, 36.0 | 36.0 |

## Matrix​Lens​Visualization​Options

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| legend​Hide​Header | Boolean | Indicates whether to hide the legend header or not. | Small, 36.0 | 36.0 |
| legend​Width | Integer | The width of the legend. | Small, 36.0 | 36.0 |
| sqrt | Boolean | Indicates whether the axis is sqrt scale or not. | Small, 36.0 | 36.0 |

## Parallel​Coords​Lens​Visualization​Options

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fit | Boolean | Indicates whether to scale the position and size of a data shape so that it's proportional to its percentage of its category or not. | Small, 36.0 | 36.0 |
| legend | Boolean | Indicates whether to display the legend or not. | Small, 36.0 | 36.0 |
| legend​Hide​Header | Boolean | Indicates whether to hide the legend header or not. | Small, 36.0 | 36.0 |
| legend​Width | Integer | The width of the legend. | Small, 36.0 | 36.0 |
| sqrt | Boolean | Indicates whether the axis is sqrt scale or not. | Small, 36.0 | 36.0 |

## Pie​Lens​Visualization​Options

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| legend​Hide​Header | Boolean | Indicates whether to hide the legend header or not. | Small, 36.0 | 36.0 |
| legend​Width | Integer | The width of the legend. | Small, 36.0 | 36.0 |
| sqrt | Boolean | Indicates whether the axis is sqrt scale or not. | Small, 36.0 | 36.0 |

## Pivot​Table​Lens​Visualization​Options

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| column​Totals | Boolean | Indicates whether to display column totals in the table (true) or not (false). | Small, 55.0 | 55.0 |
| max​Column​Width | Integer | The maximum width of the header column. | Small, 36.0 | 36.0 |
| min​Column​Width | Integer | The minimum width of the header column. | Small, 36.0 | 36.0 |
| row​Totals | Boolean | Indicates whether to display row totals in the table (true) or not (false). | Small, 55.0 | 55.0 |
| totals | Boolean | Indicates whether to display totals in the table or not. | Small, 36.0 | 36.0 |

## Scatter​Lens​Visualization​Options

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fit | Boolean | Indicates whether to scale the position and size of a data shape so that it's proportional to its percentage of its category or not. | Small, 36.0 | 36.0 |
| legend | Boolean | Indicates whether to display the legend or not. | Small, 36.0 | 36.0 |
| legend​Hide​Header | Boolean | Indicates whether to hide the legend header or not. | Small, 36.0 | 36.0 |
| legend​Width | Integer | The width of the legend. | Small, 36.0 | 36.0 |
| sqrt | Boolean | Indicates whether the axis is sqrt scale or not. | Small, 36.0 | 36.0 |

## Stacked​Bar​Lens​Visualization​Options

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| legend | Boolean | Indicates whether to display the legend or not. | Small, 36.0 | 36.0 |
| legend​Hide​Header | Boolean | Indicates whether to hide the legend header or not. | Small, 36.0 | 36.0 |
| legend​Width | Integer | The width of the legend. | Small, 36.0 | 36.0 |
| max​Column​Width | Integer | The maximum width of the header column. | Small, 36.0 | 36.0 |
| min​Column​Width | Integer | The minimum width of the header column. | Small, 36.0 | 36.0 |
| miniBars | Integer | The width of the mini-bars, if used. | Small, 36.0 | 36.0 |
| normalize | Boolean | Indicates whether to scale the position and size of data shape so that it’s proportional to its percentage of its category or not. | Small, 36.0 | 36.0 |
| sqrt | Boolean | Indicates whether the axis is sqrt scale or not. | Small, 36.0 | 36.0 |

## Table​Lens​Visualization​Options

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| column​Totals | Boolean | Indicates whether to display column totals in the table (true) or not (false). | Small, 55.0 | 55.0 |
| subtotals | Boolean | Indicates whether to display subtotals in the table or not. | Small, 48.0 | 48.0 |
| row​Totals | Boolean | Indicates whether to display row totals in the table (true) or not (false). | Small, 55.0 | 55.0 |
| totals | Boolean | Indicates whether to display totals in the table or not. | Small, 36.0 | 36.0 |

## Time​Lens​Visualization​Options

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| legend | Boolean | Indicates whether to display the legend or not. | Small, 36.0 | 36.0 |
| legend​Hide​Header | Boolean | Indicates whether to hide the legend header or not. | Small, 36.0 | 36.0 |
| legend​Width | Integer | The width of the legend. | Small, 36.0 | 36.0 |
| multi​Metrics | Boolean | Indicates whether multiple measures are projected on the same chart, side by side, or if every measure is in its own chart. | Small, 36.0 | 36.0 |
| sqrt | Boolean | Indicates whether the axis is sqrt scale or not. | Small, 36.0 | 36.0 |

## Values​Table​Lens​Visualization​Options

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| hide​Header​Column | Boolean | Indicates whether to display header column or not. | Small, 36.0 | 36.0 |
| max​Column​Width | Integer | The maximum width of the header column. | Small, 36.0 | 36.0 |
| min​Column​Width | Integer | The minimum width of the header column. | Small, 36.0 | 36.0 |
| totals | Boolean | Indicates whether to display totals in the table or not. | Small, 36.0 | 36.0 |

## Query

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aggregate​Filters | Object | The query aggregate filters. | Small, 48.0 | 48.0 |
| limit | Object | The query limit. | Small, 48.0 | 48.0 |
| orders | Object | The query orders. | Small, 48.0 | 48.0 |
| pivot​Totals | String | The query pivot totals. | Small, 55.0 | 55.0 |
| query | String | The SAQL query text. | Small, 36.0 | 36.0 |
| source​Filters | Compact​Form​Filter | The query source filters. | Small, 48.0 | 48.0 |
| sources | Compact​Form​Source | The query sources. | Small, 48.9 | 48.0 |
| totals | String | The query totals. | Small, 55.0 | 55.0 |
| version | Double | The version of this query. | Small, 36.0 | 36.0 |

## Compact​Form​Filter

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| boolean​Filter​Logic | String | The boolean filter logic. | Small, 49.0 | 49.0 |
| filters | Object | The list of filters. | Small, 48.0 | 48.0 |

## Compact​Form​Source

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cogroup​Type | Connect​Wave​Compact​Form​Cogroup​Type​Enum | The compact form source cogroup type. Valid values are:AntiInnerLeftOuterRightSemi | Small, 48.0 | 48.0 |
| columns | Compact​Form​Column | The compact form source columns. | Small, 48.0 | 48.0 |
| groups | Object | The compact form source groups. | Small, 48.0 | 48.0 |
| filters | Object | The compact form source column filters. | Small, 52.0 | 52.0 |
| name | String | The compact form source name. | Small, 48.0 | 48.0 |

## Compact​Form​Column

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| field | Object | The compact form column field. | Small, 48.0 | 48.0 |
| formula | String | The compact form column formula. | Small, 48.0 | 48.0 |
| name | String | The name of the compact form column. | Small, 48.0 | 48.0 |
