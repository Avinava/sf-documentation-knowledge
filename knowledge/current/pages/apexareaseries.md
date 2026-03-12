---
title: "apex:areaSeries"
domain: pages
topic: apexareaseries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.150Z
estimatedTokens: 1075
keywords: [apex, areaSeries, data, series, rendered, shaded, areas, Visualforce, chart, It's, similar, line, fill, attribute, except]
---

# apex:areaSeries

> A data series to be rendered as shaded areas in a Visualforce chart. It's similar to a line series with the fill attribute set to true, except that multiple Y values for each X will "stack" as levels upon each other.

# apex:areaSeries

A data series to be rendered as shaded areas in a Visualforce chart. It's similar to a line series with the fill attribute set to true, except that multiple Y values for each X will "stack" as levels upon each other.

At a minimum you must specify the fields in the data collection to use as X and Y values for each point along the line that defines the amount of area each point represents, as well as the X and Y axes to scale against. Add multiple Y values to add levels to the chart. Each level takes a new color.

**Note:** This component must be enclosed within an <apex:chart\> component. You can have multiple <apex:areaSeries\> components in a single chart, and you can add <apex:barSeries\>, <apex:lineSeries\>, and <apex:scatterSeries\> components, but the results might not be very readable.

## An area chart with three Y values to plot as levels on the chart.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| axis | String | Which axis this chart series should bind to. Must be one of the four edges of the chart:leftrighttopbottomThe axis bound to must be defined by a sibling <apex:axis> component. | Yes | 26.0 |  |
| colorSet | String | A set of color values used, in order, as level area fill colors. Colors are specified as HTML-style (hexadecimal) colors, and should be comma separated. For example, #00F,#0F0,#F00. |  | 26.0 |  |
| highlight | Boolean | A Boolean value that specifies whether each level should be highlighted when the mouse pointer passes over it. If not specified, this value defaults to true. |  | 23.0 |  |
| highlightLineWidth | Integer | An integer that specifies the width in pixels of the line that surrounds a level when it's highlighted. |  | 26.0 |  |
| highlightOpacity | String | A decimal number between 0 and 1 representing the opacity of the color overlayed on a level when it's highlighted. |  | 26.0 |  |
| highlightStrokeColor | String | A string that specifies the HTML-style color of the line that surrounds a level when it's highlighted. |  | 26.0 |  |
| id | String | An identifier that allows the chart component to be referenced by other components on the page. |  | 26.0 | global |
| opacity | String | A decimal number between 0 and 1 representing the opacity of the filled area for this level of the series. |  | 26.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the chart series is rendered in the chart. If not specified, this value defaults to true. |  | 26.0 |  |
| rendererFn | String | A string that specifies the name of a JavaScript function that augments or overrides how each data point is rendered. Implement to provide additional styling or to augment data. |  | 26.0 |  |
| showInLegend | Boolean | A Boolean value that specifies whether this chart series should be added to the chart legend. If not specified, this value defaults to true. |  | 26.0 |  |
| tips | Boolean | A Boolean value that specifies whether to display a tooltip for each data point marker when the mouse pointer passes over it. The format of the tip is xField: yField. If not specified, this value defaults to true. |  | 26.0 |  |
| title | String | The title of this chart series, which is displayed in the chart legend.For stacked charts with multiple data series in the yField, separate each series title with a comma. For example: title="MacDonald,Picard,Worle". |  | 26.0 |  |
| xField | String | The field in each record provided in the chart data from which to retrieve the x-axis value for each data point in the series. This field must exist in every record in the chart data. | Yes | 26.0 |  |
| yField | String | The field in each record provided in the chart data from which to retrieve the y-axis value for each data point in the series. This field must exist in every record in the chart data. | Yes | 26.0 |  |

#### See Also

-   [apex:chart](atlas.en-us.pages.meta/pages/pages_compref_chart.htm)

-   [Visualforce Charting](atlas.en-us.pages.meta/pages/pages_charting.htm)

-   [Other Linear Series Charts](atlas.en-us.pages.meta/pages/pages_charting_appearance_linear_charts.htm "Other linear data series charts include <apex:areaSeries>, <apex:lineSeries>, and <apex:scatterSeries>.")

## Code Examples

```
<apex:chart height="400" width="700" animate="true" legend="true" data="{!data}">
    <apex:legend position="left"/>
    <apex:axis type="Numeric" position="left" fields="data1,data2,data3" 
        title="Closed Won" grid="true">
        <apex:chartLabel/>
    </apex:axis>
    <apex:axis type="Category" position="bottom" fields="name" 
        title="Month of the Year">
        <apex:chartLabel rotate="315"/>
    </apex:axis>
    <apex:areaSeries axis="left" xField="name" yField="data1,data2,data3" tips="true"/>
</apex:chart>
```

## Related Topics

- apex:chart (atlas.en-us.pages.meta/pages/pages_compref_chart.htm)
- Visualforce Charting (atlas.en-us.pages.meta/pages/pages_charting.htm)
- Other Linear Series Charts (atlas.en-us.pages.meta/pages/pages_charting_appearance_linear_charts.htm)
