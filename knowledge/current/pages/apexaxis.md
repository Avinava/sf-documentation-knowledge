---
title: "apex:axis"
domain: pages
topic: apexaxis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.166Z
estimatedTokens: 851
keywords: [apex, axis, chart, units, scale, labeling, visual, options, define, four, axes, edge, Attributes]
---

# apex:axis

> Defines an axis for a chart. Use this to set the units, scale, labeling, and other visual options for the axis. You can define up to four axes for a single chart, one for each edge.

# apex:axis

Defines an axis for a chart. Use this to set the units, scale, labeling, and other visual options for the axis. You can define up to four axes for a single chart, one for each edge.

**Note:** This component must be enclosed within an <apex:chart\> component.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| dashSize | Integer | The size of the dash marker, in pixels. If not specified, this value defaults to 3. |  | 23.0 |  |
| fields | String | The field(s) in each record of the chart data from which to retrieve axis label values. You can specify more than one field, to increase the range of the axis scale to include all values. Fields must exist in every record in the chart data. |  | 23.0 |  |
| grid | Boolean | A Boolean value specifying whether to draw gridlines in the background of the chart. If true for a vertical axis, vertical lines are drawn, and likewise for horizontal axis. A proper grid can be drawn by setting grid to true on both a horizontal and a vertical axis of a chart. If not specified, this value defaults to false. |  | 23.0 |  |
| gridFill | Boolean | A Boolean value specifying whether to fill in alternating grid intervals with a background color. If not specified, this value defaults to false. |  | 23.0 |  |
| id | String | An identifier that enables the chart component to be referenced by other components on the page. |  | 23.0 | global |
| margin | Integer | An integer value that specifies the distance between the outer edge of the chart and the baseline of the axis label text. Negative values are permitted, and move the labels inside the chart edge. Valid only when the axis type (and chart) is Gauge. If not specified, this value defaults to 10. |  | 26.0 |  |
| maximum | Integer | The maximum value for the axis. If not set, the maximum is calculated automatically from the values in fields. |  | 23.0 |  |
| minimum | Integer | The minimum value for the axis. If not set, the minimum is calculated automatically from the values in fields. |  | 23.0 |  |
| position | String | The edge of the chart to which to bind the axis. Valid options are:leftrighttopbottomgaugeradialThe first four positions correspond to the edges of a standard linear chart. "gauge" is specific to an axis used by <apex:gaugeSeries>, and "radial" is specific to an axis used by <apex:radarSeries>. | Yes | 23.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the axis elements are rendered with the chart. If not specified, this value defaults to true. |  | 23.0 |  |
| steps | Integer | An integer value that specifies the number of tick marks to places on the axis. If set, it overrides the automatic calculation of tick marks for the axis. Valid only when the axis type is Numeric. |  | 26.0 |  |
| title | String | The label for the axis. |  | 23.0 |  |
| type | String | Specifies the type of the axis, which is used to calculate axis intervals and spacing. Valid options are:"Category" for non-numeric information, such as names or types of items, and so on."Numeric" for quantitative values."Gauge" is used only with, and required by, <apex:gaugeSeries>."Radial" is used only with, and required by, <apex:radarSeries>. | Yes | 23.0 |  |

#### See Also

-   [apex:chart](atlas.en-us.pages.meta/pages/pages_compref_chart.htm)

## Code Examples

```
<!-- Page: -->
<apex:chart height="400" width="700" data="{!data}">
    <apex:axis type="Numeric" position="left" fields="data1"
        title="Opportunities Closed" grid="true"/>
    <apex:axis type="Numeric" position="right" fields="data3"
        title="Revenue (millions)"/>
    <apex:axis type="Category" position="bottom" fields="name"
        title="Month of the Year">
        <apex:chartLabel rotate="315"/>
    </apex:axis>
    <apex:barSeries title="Monthly Sales" orientation="vertical" axis="right"
        xField="name" yField="data3"/>
    <apex:lineSeries title="Closed-Won" axis="left" xField="name" yField="data1"/>
</apex:chart>
```

## Related Topics

- apex:chart (atlas.en-us.pages.meta/pages/pages_compref_chart.htm)
