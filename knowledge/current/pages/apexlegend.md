---
title: "apex:legend"
domain: pages
topic: apexlegend
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.663Z
estimatedTokens: 387
keywords: [apex, legend, chart, component, offers, additional, configuration, options, beyond, defaults, attribute, <apex, chart>, Attributes]
---

# apex:legend

> Defines a chart legend. This component offers additional configuration options beyond the defaults used by the legend attribute of the <apex:chart> component.

# apex:legend

Defines a chart legend. This component offers additional configuration options beyond the defaults used by the legend attribute of the <apex:chart\> component.

**Note:** This component must be enclosed within an <apex:chart\> component.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| font | String | The font to be used for the legend text, as a CSS-style font definition. If not specified, this value defaults to "12px Helvetica". |  | 23.0 |  |
| id | String | An identifier that allows the chart component to be referenced by other components on the page. |  | 23.0 | global |
| padding | Integer | The amount of spacing between the legend border and the contents of the legend, in pixels. |  | 23.0 |  |
| position | String | The position of the legend, in relation to the chart. Valid options are:leftrighttopbottom | Yes | 23.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the chart legend is rendered with the chart. If not specified, this value defaults to true. |  | 23.0 |  |
| spacing | Integer | The amount of spacing between legend items, in pixels. |  | 23.0 |  |

#### See Also

-   [apex:chart](atlas.en-us.pages.meta/pages/pages_compref_chart.htm)

-   [Chart Layout and Annotation](atlas.en-us.pages.meta/pages/pages_charting_appearance_layout.htm "To make your chart more understandable, add a legend, meaningful axes ranges and labels, and tips or labels on data elements.")

## Code Examples

```
<!-- Page: -->
<apex:chart height="400" width="700" data="{!data}">
    <apex:legend position="right"/>
    <apex:axis type="Numeric" position="left" fields="data1,data2"
        title="Opportunities Closed" grid="true"/>
    <apex:axis type="Category" position="bottom" fields="name"
        title="Month of the Year"/>
    <apex:lineSeries title="Closed-Won" axis="left" xField="name" yField="data1"/>
    <apex:lineSeries title="Closed-Lost" axis="left" xField="name" yField="data2"/>
</apex:chart>
```

## Related Topics

- apex:chart (atlas.en-us.pages.meta/pages/pages_compref_chart.htm)
- Chart Layout and Annotation (atlas.en-us.pages.meta/pages/pages_charting_appearance_layout.htm)
