---
title: "apex:chartLabel"
domain: pages
topic: apexchartlabel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.205Z
estimatedTokens: 636
keywords: [apex, chartLabel, how, labels, Depending, component, wraps, <apex, chartLabel>, gives, options, affecting, display, data, series]
---

# apex:chartLabel

> Defines how labels are displayed. Depending on what component wraps it, <apex:chartLabel> gives you options for affecting the display of data series labels, pie chart segment labels, and axes labels.

# apex:chartLabel

Defines how labels are displayed. Depending on what component wraps it, <apex:chartLabel\> gives you options for affecting the display of data series labels, pie chart segment labels, and axes labels.

**Note:** This component must be enclosed by a data series component or an <apex:axis\> component.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| color | String | The color of the label text specified as an HTML-style (hexadecimal) color. If not specified, this value defaults to "#000" (black). |  | 23.0 |  |
| display | String | Specifies the position of labels, or disables the display of labels. Valid options are:rotatemiddleinsideStartinsideEndoutsideoverundernone (to hide labels)If not specified, this value defaults to "middle". |  | 23.0 |  |
| field | String | The field in each record provided in the chart data from which to retrieve the label for each data point in the series. This field must exist in every record in the chart data. If not specified, this value defaults to "name". |  | 23.0 |  |
| font | String | The font to use for the label text, as a CSS-style font definition. If not specified, this value defaults to "11px Helvetica, sans-serif". |  | 23.0 |  |
| id | String | An identifier that allows the chart component to be referenced by other components on the page. |  | 23.0 | global |
| minMargin | Integer | Specifies the minimum distance from a label to the origin of the visualization, in pixels. If not specified, this value defaults to 50. |  | 23.0 |  |
| orientation | String | Display the label text characters normally, or stacked vertically. Valid options are:horizontalverticalIf not specified, this value defaults to "horizontal" for normal left-to-right text. |  | 23.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the chart label is rendered with the chart. If not specified, this value defaults to true. |  | 23.0 |  |
| rendererFn | String | A string that specifies the name of a JavaScript function that augments or overrides label rendering for axis or series labels. |  | 26.0 |  |
| rotate | Integer | Degrees to rotate the label text. If not specified, this value defaults to 0. |  | 23.0 |  |

#### See Also

-   [apex:axis](atlas.en-us.pages.meta/pages/pages_compref_axis.htm)

-   [apex:chart](atlas.en-us.pages.meta/pages/pages_compref_chart.htm)

-   [Visualforce Charting](atlas.en-us.pages.meta/pages/pages_charting.htm)

## Code Examples

```
<!-- Page: -->
<apex:chart height="400" width="700" data="{!data}">
    <apex:axis type="Numeric" position="left" fields="data1"
        title="Opportunities Closed" grid="true"/>
    <apex:axis type="Category" position="bottom" fields="name"
        title="Month of the Year">
        <apex:chartLabel rotate="315"/>
    </apex:axis>
    <apex:lineSeries title="Closed-Won" axis="left" xField="name" yField="data1"/>
    <apex:lineSeries title="Closed-Lost" axis="left" xField="name" yField="data2"/>
</apex:chart>
```

## Related Topics

- apex:axis (atlas.en-us.pages.meta/pages/pages_compref_axis.htm)
- apex:chart (atlas.en-us.pages.meta/pages/pages_compref_chart.htm)
- Visualforce Charting (atlas.en-us.pages.meta/pages/pages_charting.htm)
