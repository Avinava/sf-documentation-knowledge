---
title: "apex:lineSeries"
domain: pages
topic: apexlineseries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.673Z
estimatedTokens: 1220
keywords: [apex, lineSeries, data, series, rendered, connected, points, linear, Visualforce, chart, minimum, specify, collection, point, well]
---

# apex:lineSeries

> A data series to be rendered as connected points in a linear Visualforce chart. At a minimum you must specify the fields in the data collection to use as X and Y values for each point, as well as the X and Y axes to scale against.

# apex:lineSeries

A data series to be rendered as connected points in a linear Visualforce chart. At a minimum you must specify the fields in the data collection to use as X and Y values for each point, as well as the X and Y axes to scale against.

**Note:** This component must be enclosed within an <apex:chart\> component. You can have multiple <apex:barSeries\> and <apex:lineSeries\> components in a single chart. You can also add <apex:areaSeries\> and <apex:scatterSeries\> components, but the results might not be very readable.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| axis | String | Which axis this chart series should bind to. Must be one of the four edges of the chart:leftrighttopbottomThe axis bound to must be defined by a sibling <apex:axis> component. | Yes | 23.0 |  |
| fill | Boolean | A Boolean value that specifies whether the area under the line should be filled or not. If not specified, this value defaults to false. |  | 23.0 |  |
| fillColor | String | A string that specifies the color to use to fill the area under the line, specified as an HTML-style (hexadecimal) color. If not specified, the fill color matches the line color. Only used if fill is set to true. |  | 26.0 |  |
| highlight | Boolean | A Boolean value that specifies whether each point of the series line should be highlighted when the mouse pointer passes over it. If not specified, this value defaults to true. |  | 23.0 |  |
| highlightStrokeWidth | String | A string that specifies the width of the line that is drawn over the series line when it's highlighted. |  | 26.0 |  |
| id | String | An identifier that allows the chart component to be referenced by other components on the page. |  | 23.0 | global |
| markerFill | String | The color of data point markers for this series, specified as an HTML-style (hexadecimal) color. If not specified, the marker color matches the line color. |  | 23.0 |  |
| markerSize | Integer | The size of each data point marker for this series. If not specified, this value defaults to "3". |  | 23.0 |  |
| markerType | String | The shape of each data point marker for this series. Valid options are:circlecrossIf not specified, the marker shape is chosen from a sequence of shapes. |  | 23.0 |  |
| opacity | String | A decimal number between 0 and 1 representing the opacity of the filled area under the line for the series. If not specified, defaults to "0.3". Only used if fill is set to true. |  | 26.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the chart series is rendered in the chart. If not specified, this value defaults to true. |  | 23.0 |  |
| rendererFn | String | A string that specifies the name of a JavaScript function that augments or overrides how each data point is rendered. Implement to provide additional styling or to augment data. |  | 26.0 |  |
| showInLegend | Boolean | A Boolean value that specifies whether this chart series should be added to the chart legend. If not specified, this value defaults to true. |  | 23.0 |  |
| smooth | Integer | An integer specifying the amount of smoothing for the line, with lower numbers applying more smoothing. 0 (zero) disables smoothing, and uses straight lines between the points in the series. |  | 26.0 |  |
| strokeColor | String | A string specifying the color of the line for this series, specified as an HTML-style (hexadecimal) color. If not specified, colors are used in sequence from the chart colorSet or theme. |  | 26.0 |  |
| strokeWidth | String | An integer specifying the width of the line for this series. |  | 26.0 |  |
| tips | Boolean | A Boolean value that specifies whether to display a tooltip for each data point marker when the mouse pointer passes over it. The format of the tip is <xField>: <yField>. If not specified, this value defaults to true. |  | 23.0 |  |
| title | String | The title of this chart series, which is displayed in the chart legend. |  | 23.0 |  |
| xField | String | The field in each record provided in the chart data from which to retrieve the x-axis value for each data point in the series. This field must exist in every record in the chart data. | Yes | 23.0 |  |
| yField | String | The field in each record provided in the chart data from which to retrieve the y-axis value for each data point in the series. This field must exist in every record in the chart data. | Yes | 23.0 |  |

#### See Also

-   [apex:chart](atlas.en-us.pages.meta/pages/pages_compref_chart.htm)

-   [Other Linear Series Charts](atlas.en-us.pages.meta/pages/pages_charting_appearance_linear_charts.htm "Other linear data series charts include <apex:areaSeries>, <apex:lineSeries>, and <apex:scatterSeries>.")

-   [Visualforce Charting](atlas.en-us.pages.meta/pages/pages_charting.htm)

## Code Examples

```
<!-- Page: -->
<apex:chart height="400" width="700" data="{!data}">
    <apex:axis type="Numeric" position="left" fields="data1,data2"
        title="Opportunities Closed" grid="true"/>
    <apex:axis type="Category" position="bottom" fields="name"
        title="Month of the Year"/>
    <apex:lineSeries title="Closed-Won" axis="left" xField="name" yField="data1"
        fill="true" markerType="cross" markerSize="4" markerFill="#FF0000"/>
    <apex:lineSeries title="Closed-Lost" axis="left" xField="name" yField="data2"
        markerType="circle" markerSize="4" markerFill="#8E35EF"/>
</apex:chart>
```

## Related Topics

- apex:chart (atlas.en-us.pages.meta/pages/pages_compref_chart.htm)
- Other Linear Series Charts (atlas.en-us.pages.meta/pages/pages_charting_appearance_linear_charts.htm)
- Visualforce Charting (atlas.en-us.pages.meta/pages/pages_charting.htm)
