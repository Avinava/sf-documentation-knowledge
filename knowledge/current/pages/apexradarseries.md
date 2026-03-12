---
title: "apex:radarSeries"
domain: pages
topic: apexradarseries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.014Z
estimatedTokens: 1073
keywords: [apex, radarSeries, data, series, rendered, area, inside, connected, points, radial, Visualforce, chart, Radar, charts, sometimes]
---

# apex:radarSeries

> A data series to be rendered as the area inside a series of connected points in a radial Visualforce chart. Radar charts are also sometimes called "spider web" charts. At a minimum you must specify the fields in the data collection to use as X and Y values for each point, as well as a radial axis to

# apex:radarSeries

A data series to be rendered as the area inside a series of connected points in a radial Visualforce chart. Radar charts are also sometimes called "spider web" charts. At a minimum you must specify the fields in the data collection to use as X and Y values for each point, as well as a radial axis to scale against.

**Note:** This component must be enclosed within an <apex:chart\> component. You can have multiple <apex:radarSeries\> components in a single chart.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| fill | String | A string that specifies the color to use to fill the area inside the line, specified as an HTML-style (hexadecimal) color. If not specified, colors are used in sequence from the chart colorSet or theme. Set fill to "none" for an unfilled chart, with lines and markers only. If you do so, be sure to set stroke and marker attributes, which by default aren't visible. |  | 26.0 |  |
| highlight | Boolean | A Boolean value that specifies whether each point should be highlighted when the mouse pointer passes over it. If not specified, this value defaults to true. |  | 26.0 |  |
| id | String | An identifier that allows the chart component to be referenced by other components on the page. |  | 26.0 | global |
| markerFill | String | The color of data point markers for this series, specified as an HTML-style (hexadecimal) color. You must set at least one marker attribute for markers for a series to appear on the chart. |  | 23.0 |  |
| markerSize | Integer | The size of each data point marker for this series. You must set at least one marker attribute for markers for a series to appear on the chart. |  | 23.0 |  |
| markerType | String | The shape of each data point marker for this series. Valid options are:circlecrossYou must set at least one marker attribute for markers for a series to appear on the chart. |  | 23.0 |  |
| opacity | Integer | A decimal number between 0 and 1 representing the opacity of the filled area for the series. Only has an effect if fill is set. |  | 26.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the chart series is rendered in the chart. If not specified, this value defaults to true. |  | 26.0 |  |
| showInLegend | Boolean | A Boolean value that specifies whether this chart series should be added to the chart legend. If not specified, this value defaults to true. |  | 26.0 |  |
| strokeColor | String | A string specifying the color of the line for this series, specified as an HTML-style (hexadecimal) color. If not specified, the line will be the same color as the fill, which effectively renders it invisible. |  | 26.0 |  |
| strokeWidth | Integer | An integer specifying the width of the line for this series. If not specified, no line will be drawn. If fill is also set to "none", this series won't display on the chart. |  | 26.0 |  |
| tips | Boolean | A Boolean value that specifies whether to display a tooltip for each data point marker when the mouse pointer passes over it. The format of the tip is <xField>: <yField>. If not specified, this value defaults to true. |  | 26.0 |  |
| title | String | The title of this chart series, which is displayed in the chart legend. |  | 26.0 |  |
| xField | String | The field in each record provided in the chart data from which to retrieve the x-axis value for each data point in the series. The x-axis in a radar chart is the perimeter circle. This field must exist in every record in the chart data. | Yes | 26.0 |  |
| yField | String | The field in each record provided in the chart data from which to retrieve the y-axis value for each data point in the series. The y-axis in a radar chart is the vertical line running from the center of the radar plot out to the edge. This field must exist in every record in the chart data. | Yes | 26.0 |  |

#### See Also

-   [apex:chart](atlas.en-us.pages.meta/pages/pages_compref_chart.htm)

-   [Radar Charts](atlas.en-us.pages.meta/pages/pages_charting_appearance_radar_charts.htm "Radar charts are like line charts but they use a circular axis instead of a linear grid.")

-   [Visualforce Charting](atlas.en-us.pages.meta/pages/pages_charting.htm)

## Code Examples

```
<!-- Page: -->
<apex:chart height="530" width="700" legend="true" data="{!data}">
    <apex:legend position="left"/>
    <apex:axis type="Radial" position="radial">
        <apex:chartLabel/>
    </apex:axis>
    <apex:radarSeries xField="name" yField="data1" tips="true" opacity="0.4"/>
    <apex:radarSeries xField="name" yField="data2" tips="true" opacity="0.4"/>
    <apex:radarSeries xField="name" yField="data3" tips="true" 
        markerType="cross" strokeWidth="2" strokeColor="#f33" opacity="0.4"/>
</apex:chart>
```

## Related Topics

- apex:chart (atlas.en-us.pages.meta/pages/pages_compref_chart.htm)
- Radar Charts (atlas.en-us.pages.meta/pages/pages_charting_appearance_radar_charts.htm)
- Visualforce Charting (atlas.en-us.pages.meta/pages/pages_charting.htm)
