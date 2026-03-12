---
title: "apex:gaugeSeries"
domain: pages
topic: apexgaugeseries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.470Z
estimatedTokens: 793
keywords: [apex, gaugeSeries, data, series, progress, along, specific, metric, minimum, specify, collection, label, pair, gauge, level]
---

# apex:gaugeSeries

> A data series that shows progress along a specific metric. At a minimum you must specify the fields in the data collection to use as label and value pair for the gauge level to be shown. The readability of a gauge chart benefits when you specify meaningful values for the minimum and maximum along th

# apex:gaugeSeries

A data series that shows progress along a specific metric. At a minimum you must specify the fields in the data collection to use as label and value pair for the gauge level to be shown. The readability of a gauge chart benefits when you specify meaningful values for the minimum and maximum along the associated <apex:axis\>, which must be of type "gauge".

**Note:** This component must be enclosed within an <apex:chart\> component. You should put only one <apex:gaugeSeries\> in a chart.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| colorSet | String | A set of color values used as the gauge level fill colors. Colors are specified as HTML-style (hexadecimal) colors, and should be comma separated. For example, #00F,#0F0. |  | 26.0 |  |
| dataField | String | The field in the records provided in the chart data from which to retrieve the data value for the gauge level. Only the first record is used. | Yes | 26.0 |  |
| donut | Integer | An integer representing the radius of the hole to place in the center of the gauge chart, as a percentage of the radius of the gauge. The default of 0 creates a gauge chart with no hole, that is, a half-circle. |  | 26.0 |  |
| highlight | Boolean | A Boolean value that specifies whether each gauge level should be highlighted when the mouse pointer passes over it. If not specified, this value defaults to true. |  | 26.0 |  |
| id | String | An identifier that allows the chart component to be referenced by other components on the page. |  | 26.0 | global |
| labelField | String | The field in the records provided in the chart data from which to retrieve the label for the gauge level. Only the first record is used. If not specified, this value defaults to "name". |  | 23.0 |  |
| needle | Boolean | A Boolean value that specifies whether to show the gauge needle or not. Defaults to false, don't show the needle. |  | 26.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the chart series is rendered in the chart. If not specified, this value defaults to true. |  | 26.0 |  |
| rendererFn | String | A string that specifies the name of a JavaScript function that augments or overrides how gauge elements are rendered. Implement to provide additional styling or to augment data. |  | 26.0 |  |
| tips | Boolean | A Boolean value that specifies whether to display a tooltip for the gauge level when the mouse pointer passes over it. The format of the tip is <labelField>: <dataField>. If not specified, this value defaults to true. |  | 26.0 |  |

#### See Also

-   [apex:axis](atlas.en-us.pages.meta/pages/pages_compref_axis.htm)

-   [apex:chart](atlas.en-us.pages.meta/pages/pages_compref_chart.htm)

-   [Gauge Charts](atlas.en-us.pages.meta/pages/pages_charting_appearance_gauge_charts.htm "Gauge charts show a single measurement against a defined axis or scale. Although it charts a single number, you can vary the axis and chart colors to communicate what that number means.")

-   [Visualforce Charting](atlas.en-us.pages.meta/pages/pages_charting.htm)

## Code Examples

```
<!-- Page: -->
<apex:chart height="250" width="450" animate="true" legend="true" data="{!data}">
    <apex:axis type="gauge" position="left" margin="-10" 
        minimum="0" maximum="100" steps="10"/>
    <apex:gaugeSeries dataField="data1" highlight="true" tips="true" donut="25" 
        colorSet="#F49D10, #ddd">
        <apex:chartLabel display="over"/>
    </apex:gaugeSeries>
</apex:chart>
```

## Related Topics

- apex:axis (atlas.en-us.pages.meta/pages/pages_compref_axis.htm)
- apex:chart (atlas.en-us.pages.meta/pages/pages_compref_chart.htm)
- Gauge Charts (atlas.en-us.pages.meta/pages/pages_charting_appearance_gauge_charts.htm)
- Visualforce Charting (atlas.en-us.pages.meta/pages/pages_charting.htm)
