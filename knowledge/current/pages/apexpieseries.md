---
title: "apex:pieSeries"
domain: pages
topic: apexpieseries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.006Z
estimatedTokens: 764
keywords: [apex, pieSeries, data, series, rendered, wedges, Visualforce, pie, chart, minimum, specify, collection, label, pairs, wedge]
---

# apex:pieSeries

> A data series to be rendered as wedges in a Visualforce pie chart. At a minimum you must specify the fields in the data collection to use as label and value pairs for each pie wedge.

# apex:pieSeries

A data series to be rendered as wedges in a Visualforce pie chart. At a minimum you must specify the fields in the data collection to use as label and value pairs for each pie wedge.

**Note:** This component must be enclosed within an <apex:chart\> component. You can only have one <apex:pieSeries\> in a chart.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| colorSet | String | A set of color values used, in order, as the pie wedge fill colors. Colors are specified as HTML-style (hexadecimal) colors, and should be comma separated. For example, #00F,#0F0,#F00. |  | 23.0 |  |
| dataField | String | The field in each record provided in the chart data from which to retrieve the data value for each pie wedge in the series. This field must exist in every record in the chart data. | Yes | 23.0 |  |
| donut | Integer | An integer representing the radius of the hole to place in the center of the pie chart, as a percentage of the radius of the pie. If no value is specified, 0 is used, which creates a normal pie chart, with no hole. |  | 26.0 |  |
| highlight | Boolean | A Boolean value that specifies whether each pie wedge should be highlighted when the mouse pointer passes over it. If not specified, this value defaults to true. |  | 23.0 |  |
| id | String | An identifier that allows the chart component to be referenced by other components on the page. |  | 23.0 | global |
| labelField | String | The field in each record provided in the chart data from which to retrieve the label for each pie wedge in the series. This field must exist in every record in the chart data. If not specified, this value defaults to "name". |  | 23.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the chart series is rendered in the chart. If not specified, this value defaults to true. |  | 23.0 |  |
| rendererFn | String | A string that specifies the name of a JavaScript function that augments or overrides how each pie wedge is rendered. Implement to provide additional styling or to augment data. |  | 26.0 |  |
| showInLegend | Boolean | A Boolean value that specifies whether to show this series in the chart legend, if a legend is enabled. If not specified, this value defaults to true. |  | 23.0 |  |
| tips | Boolean | A Boolean value that specifies whether to display a tooltip for each pie wedge when the mouse pointer passes over it. The format of the tip is <labelField>: <dataField>. If not specified, this value defaults to true. |  | 23.0 |  |

#### See Also

-   [apex:chart](atlas.en-us.pages.meta/pages/pages_compref_chart.htm)

-   [Pie Charts](atlas.en-us.pages.meta/pages/pages_charting_appearance_pie_charts.htm "The most common customizations to <apex:pieSeries> charts is to colors and labels. Use the colorSet attribute and the <apex:chartLabel> component that were demonstrated in previous examples.")

-   [Visualforce Charting](atlas.en-us.pages.meta/pages/pages_charting.htm)

## Code Examples

```
<!-- Page: -->
    <apex:chart data="{!pieData}" height="300" width="400">
        <apex:pieSeries labelField="name" dataField="data1"/>
    </apex:chart>
```

## Related Topics

- apex:chart (atlas.en-us.pages.meta/pages/pages_compref_chart.htm)
- Pie Charts (atlas.en-us.pages.meta/pages/pages_charting_appearance_pie_charts.htm)
- Visualforce Charting (atlas.en-us.pages.meta/pages/pages_charting.htm)
