---
title: "apex:scatterSeries"
domain: pages
topic: apexscatterseries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.051Z
estimatedTokens: 856
keywords: [apex, scatterSeries, data, series, rendered, individual, connected, points, linear, Visualforce, chart, minimum, specify, collection, point]
---

# apex:scatterSeries

> A data series to be rendered as individual (not connected) points in a linear Visualforce chart. At a minimum you must specify the fields in the data collection to use as X and Y values for each point, as well as the X and Y axes to scale against.

# apex:scatterSeries

A data series to be rendered as individual (not connected) points in a linear Visualforce chart. At a minimum you must specify the fields in the data collection to use as X and Y values for each point, as well as the X and Y axes to scale against.

**Note:** This component must be enclosed within an <apex:chart\> component. You can have multiple <apex:scatterSeries\> components in a single chart. You can also add <apex:areaSeries\>, <apex:barSeries\>, and <apex:lineSeries\> components, but the results might not be very readable.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| axis | String | Which axis this chart series should bind to. Must be one of the four edges of the chart:leftrighttopbottomThe axis bound to must be defined by a sibling <apex:axis> component. |  | 26.0 |  |
| highlight | Boolean | A Boolean value that specifies whether each point should be highlighted when the mouse pointer passes over it. If not specified, this value defaults to true. |  | 26.0 |  |
| id | String | An identifier that allows the chart component to be referenced by other components on the page. |  | 26.0 | global |
| markerFill | String | The color of data point markers for this series, specified as an HTML-style (hexadecimal) color. |  | 26.0 |  |
| markerSize | Integer | The size of each data point marker for this series. |  | 26.0 |  |
| markerType | String | The shape of each data point marker for this series. Valid options are:circlecrossIf not specified, the marker shape is chosen from a sequence of shapes. |  | 26.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the chart series is rendered in the chart. If not specified, this value defaults to true. |  | 26.0 |  |
| rendererFn | String | A string that specifies the name of a JavaScript function that augments or overrides how each data point is rendered. Implement to provide additional styling or to augment data. |  | 26.0 |  |
| showInLegend | Boolean | A Boolean value that specifies whether this chart series should be added to the chart legend. If not specified, this value defaults to true. |  | 26.0 |  |
| tips | Boolean | A Boolean value that specifies whether to display a tooltip for each data point marker when the mouse pointer passes over it. The format of the tip is <xField>: <yField>. If not specified, this value defaults to true. |  | 26.0 |  |
| title | String | The title of this chart series, which is displayed in the chart legend. |  | 26.0 |  |
| xField | String | The field in each record provided in the chart data from which to retrieve the x-axis value for each data point in the series. This field must exist in every record in the chart data. | Yes | 26.0 |  |
| yField | String | The field in each record provided in the chart data from which to retrieve the y-axis value for each data point in the series. This field must exist in every record in the chart data. | Yes | 26.0 |  |

#### See Also

-   [apex:chart](atlas.en-us.pages.meta/pages/pages_compref_chart.htm)

-   [Other Linear Series Charts](atlas.en-us.pages.meta/pages/pages_charting_appearance_linear_charts.htm "Other linear data series charts include <apex:areaSeries>, <apex:lineSeries>, and <apex:scatterSeries>.")

-   [Visualforce Charting](atlas.en-us.pages.meta/pages/pages_charting.htm)

## Code Examples

```
<!-- Page: -->
<apex:chart height="530" width="700" animate="true" data="{!data}">
    <apex:scatterSeries xField="data1" yField="data2" 
        markerType="circle" markerSize="3"/>
    <apex:axis type="Numeric" position="bottom" fields="data1" 
        title="Torque" grid="true">
        <apex:chartLabel/>
    </apex:axis>
    <apex:axis type="Numeric" position="left" fields="data2" 
        title="Lateral Motion" grid="true">
        <apex:chartLabel/>
    </apex:axis>
</apex:chart>
```

## Related Topics

- apex:chart (atlas.en-us.pages.meta/pages/pages_compref_chart.htm)
- Other Linear Series Charts (atlas.en-us.pages.meta/pages/pages_charting_appearance_linear_charts.htm)
- Visualforce Charting (atlas.en-us.pages.meta/pages/pages_charting.htm)
