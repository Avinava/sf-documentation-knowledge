---
title: "apex:chartTips"
domain: pages
topic: apexcharttips
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.212Z
estimatedTokens: 546
keywords: [apex, chartTips, tooltips, appear, mouseover, data, series, elements, component, offers, configuration, options, setting, tips, attribute]
---

# apex:chartTips

> Defines tooltips which appear on mouseover of data series elements. This component offers more configuration options than the default tooltips displayed by setting the tips attribute of a data series component to true.

# apex:chartTips

Defines tooltips which appear on mouseover of data series elements. This component offers more configuration options than the default tooltips displayed by setting the tips attribute of a data series component to true.

**Note:** This component must be enclosed by a data series component.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| height | Integer | The height of the tooltip, in pixels. |  | 23.0 |  |
| id | String | An identifier that allows the chart component to be referenced by other components on the page. |  | 23.0 | global |
| labelField | String | The field in each record of the chart data to use as the label for the tooltip for each data point in the series. Tooltips will be displayed as <label>: <value>. This field must exist in every record in the chart data. If not specified, this value defaults to the labelField for pie and gauge series, and the xField for other data series. |  | 23.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the tooltips for the data series are rendered with the chart. If not specified, this value defaults to true. |  | 23.0 |  |
| rendererFn | String | A string that specifies the name of a JavaScript function that augments or overrides tooltip rendering for chart tips. |  | 26.0 |  |
| trackMouse | Boolean | A Boolean value that specifies whether the chart tips should follow the mouse pointer. If not specified, this value defaults to true. |  | 23.0 |  |
| valueField | String | The field in each record of the chart data to use as the value for the tooltip for each data point in the series. Tooltips will be displayed as <label>: <value>. This field must exist in every record in the chart data. If not specified, this value defaults to the dataField for pie and gauge series, and the yField for other data series. |  | 23.0 |  |
| width | Integer | The width of the tooltip, in pixels. |  | 23.0 |  |

#### See Also

-   [apex:chart](atlas.en-us.pages.meta/pages/pages_compref_chart.htm)

-   [Visualforce Charting](atlas.en-us.pages.meta/pages/pages_charting.htm)

## Code Examples

```
<!-- Page: -->
<apex:chart height="400" width="700" data="{!data}">
    <apex:axis type="Numeric" position="left" fields="data1"
        title="Millions" grid="true"/>
    <apex:axis type="Category" position="bottom" fields="name"
        title="Month of the Year"/>
    <apex:barSeries title="Monthly Sales" orientation="vertical" axis="left"
        xField="name" yField="data1">
        <apex:chartTips height="20" width="120"/>
    </apex:barSeries>
</apex:chart>
```

## Related Topics

- apex:chart (atlas.en-us.pages.meta/pages/pages_compref_chart.htm)
- Visualforce Charting (atlas.en-us.pages.meta/pages/pages_charting.htm)
