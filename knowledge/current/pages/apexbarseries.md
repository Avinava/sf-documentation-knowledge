---
title: "apex:barSeries"
domain: pages
topic: apexbarseries
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:22.178Z
estimatedTokens: 1352
keywords: [apex, barSeries, data, series, rendered, bars, Visualforce, chart, minimum, specify, collection, bar, well, axes, scale]
---

# apex:barSeries

> A data series to be rendered as bars in a Visualforce chart. At a minimum you must specify the fields in the data collection to use as X and Y values for each bar, as well as the X and Y axes to scale against. Add multiple Y values to add grouped or stacked bar segments to the chart. Each segment ta

# apex:barSeries

A data series to be rendered as bars in a Visualforce chart. At a minimum you must specify the fields in the data collection to use as X and Y values for each bar, as well as the X and Y axes to scale against. Add multiple Y values to add grouped or stacked bar segments to the chart. Each segment takes a new color.

**Note:** This component must be enclosed within an <apex:chart\> component. You can have multiple <apex:barSeries\> and <apex:lineSeries\> components in a single chart. You can also add <apex:areaSeries\> and <apex:scatterSeries\> components, but the results might not be very readable.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| axis | String | Which axis this chart series should bind to. Must be one of the four edges of the chart:leftrighttopbottomThe axis bound to must be defined by a sibling <apex:axis> component. | Yes | 23.0 |  |
| colorSet | String | A set of color values used, in order, as bar fill colors. Colors are specified as HTML-style (hexadecimal) colors, and should be comma separated. For example, #00F,#0F0,#F00. |  | 26.0 |  |
| colorsProgressWithinSeries | Boolean | A Boolean value that specifies how to progress through the values of the colorSet attribute.When set to true, the first color in the colorSet is used for the first bar (or bar segment, when the <apex:barSeries> is stacked) in an <apex:barSeries>, the second color for the second bar, and so on. Colors restart at the beginning for each <apex:barSeries>.When set to false, the default, the first color in the colorSet is used for all bars in the first <apex:barSeries>, the second color is used for bars in the second <apex:barSeries>, and so on. |  | 26.0 |  |
| groupGutter | Integer | An integer specifying the spacing between groups of bars, as a percentage of the bar width. |  | 26.0 |  |
| gutter | Integer | An integer specifying the spacing between individual bars, as a percentage of the bar width. |  | 26.0 |  |
| highlight | Boolean | A Boolean value that specifies whether each bar should be highlighted when the mouse pointer passes over it. If not specified, this value defaults to true. |  | 23.0 |  |
| highlightColor | String | A string that specifies the HTML-style color overlayed on a bar when it's highlighted. |  | 26.0 |  |
| highlightLineWidth | Integer | An integer that specifies the width in pixels of the line that surrounds a bar when it's highlighted. |  | 26.0 |  |
| highlightOpacity | String | A decimal number between 0 (transparent) and 1 (opaque) representing the opacity of the color overlayed on a bar when it's highlighted. |  | 26.0 |  |
| highlightStroke | String | A string that specifies the HTML-style color of the line that surrounds a bar when it's highlighted. |  | 26.0 |  |
| id | String | An identifier that allows the chart component to be referenced by other components on the page. |  | 23.0 | global |
| orientation | String | The direction of the bars in the chart. Valid options are:horizontalvertical | Yes | 23.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the chart series is rendered in the chart. If not specified, this value defaults to true. |  | 23.0 |  |
| rendererFn | String | A string that specifies the name of a JavaScript function that augments or overrides how each bar is rendered. Implement to provide additional styling or to augment data. |  | 26.0 |  |
| showInLegend | Boolean | A Boolean value that specifies whether this chart series should be added to the chart legend. If not specified, this value defaults to true. |  | 23.0 |  |
| stacked | Boolean | A Boolean value that specifies whether to group or stack bar values. |  | 26.0 |  |
| tips | Boolean | A Boolean value that specifies whether to display a tool tip for each bar when the mouse pointer passes over it. The format of the tip is xField: yField. If not specified, this value defaults to true. |  | 23.0 |  |
| title | String | The title of this chart series, which is displayed in the chart legend.For stacked charts with multiple data series in the yField, separate each series title with a comma. For example: title="MacDonald,Picard,Worle". |  | 23.0 |  |
| xField | String | The field in each record provided in the chart data from which to retrieve the x-axis value for each data point in the series. This field must exist in every record in the chart data. | Yes | 23.0 |  |
| xPadding | Integer | An integer specifying the padding in pixels between the left and right axes and the chart's bars. |  | 26.0 |  |
| yField | String | The field in each record provided in the chart data from which to retrieve the y-axis value for each data point in the series. This field must exist in every record in the chart data. | Yes | 23.0 |  |
| yPadding | Integer | An integer specifying the padding in pixels between the top and bottom axes and the chart's bars. |  | 26.0 |  |

#### See Also

-   [apex:chart](atlas.en-us.pages.meta/pages/pages_compref_chart.htm)

-   [Bar Charts](atlas.en-us.pages.meta/pages/pages_charting_appearance_bar_charts.htm "Bar charts are one of several linear data series charts available in Visualforce. Linear series charts are charts plotted against a standard rectangular grid.")

-   [Visualforce Charting](atlas.en-us.pages.meta/pages/pages_charting.htm)

## Code Examples

```
<!-- Page: -->
<apex:chart height="400" width="700" data="{!data}">
    <apex:axis type="Numeric" position="left" fields="data1"
        title="Opportunities Closed" grid="true"/>
    <apex:axis type="Numeric" position="right" fields="data3"
        title="Revenue (millions)"/>
    <apex:axis type="Category" position="bottom" fields="name"
        title="Month of the Year"/>
    <apex:barSeries title="Monthly Sales" orientation="vertical" axis="right"
        xField="name" yField="data3">
        <apex:chartTips height="20" width="120"/>
    </apex:barSeries>
    <apex:lineSeries title="Closed-Won" axis="left" xField="name" yField="data1"/>
</apex:chart>
```

## Related Topics

- apex:chart (atlas.en-us.pages.meta/pages/pages_compref_chart.htm)
- Bar Charts (atlas.en-us.pages.meta/pages/pages_charting_appearance_bar_charts.htm)
- Visualforce Charting (atlas.en-us.pages.meta/pages/pages_charting.htm)
