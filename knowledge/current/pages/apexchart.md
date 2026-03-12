---
title: "apex:chart"
domain: pages
topic: apexchart
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.198Z
estimatedTokens: 1075
namespace: MyNamespace.MyChart
keywords: [apex, chart, Visualforce, general, characteristics, including, size, data, binding, Attributes]
---

# apex:chart

> A Visualforce chart. Defines general characteristics of the chart, including size and data binding.

**Namespace:** `MyNamespace.MyChart`

# apex:chart

A Visualforce chart. Defines general characteristics of the chart, including size and data binding.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| animate | Boolean | A Boolean value that specifies whether to animate the chart when it is first rendered. If not specified, this value defaults to true. |  | 23.0 |  |
| background | String | A string that specifies the color to use for the background of the chart, as an HTML-style (hexadecimal) color. If not specified, charts use a plain white background. |  | 26.0 |  |
| colorSet | String | A set of colors to be used by each child series. Colors are specified as HTML-style (hexadecimal) colors, and should be comma separated. For example, #00F,#0F0,#F00. These colors override the default colors used by Visualforce charts. These colors can in turn be overridden by colorSets provided to individual data series. |  | 26.0 |  |
| data | Object | Specifies the data binding for the chart. This can be a controller method reference in an expression, a JavaScript function, or a JavaScript object. In all cases, the result must be an array of records, and every record must contain all fields referenced in child data series components. | Yes | 23.0 |  |
| floating | Boolean | A Boolean value that specifies whether to float the chart outside the regular HTML document flow using CSS absolute positioning. |  | 23.0 |  |
| height | String | The height of the chart rectangle, in pixels when given as an integer, or as a percentage of the height of the containing HTML element, when given as a number followed by a percent sign. Use pixels for consistent behavior across browsers and data sets. Use a percentage when dealing with varying data sets that can produce very tall and short charts. It's most useful for horizontal bar charts with many bars.Note: It's a known issue that percentage heights don't work in Firefox. | Yes | 23.0 |  |
| hidden | Boolean | A Boolean value that specifies whether to show or hide the chart initially. Set to true to render the chart but hide it when the page is first displayed. |  | 23.0 |  |
| id | String | An identifier that allows the chart component to be referenced by other components on the page. |  | 23.0 | global |
| legend | Boolean | A Boolean value that specifies whether to display the default chart legend. Add an <apex:legend> component to the chart for more options. If not specified, this value defaults to true. |  | 23.0 |  |
| name | String | Name of generated JavaScript object used to provide additional configuration, or perform dynamic operations. Name must be unique across all chart components. If the encompassing top-level component (<apex:page> or <apex:component>) is namespaced, the chart name will be prefixed with the namespace, for example, MyNamespace.MyChart. |  | 23.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 23.0 |  |
| renderTo | String | A string to specify the ID of the DOM element to render the chart into. |  | 23.0 |  |
| resizable | Boolean | A Boolean value that specifies whether or not the chart is resizable after rendering. |  | 23.0 |  |
| theme | String | A string specifying the name of the chart theme to use. Themes provide pre-defined sets of colors. Available themes are:SalesforceBlueGreenRedPurpleYellowSkyCategory1Category2Category3Category4Category5Category6The default, "Salesforce", provides colors which match charts in Salesforce reports and analytics. Use colorSet to define your own colors for charting components. |  | 26.0 |  |
| width | String | The width of the chart rectangle, in pixels when given as an integer, or as a percentage of the width of the containing HTML element, when given as a number followed by a percent sign. Use pixels for consistent behavior across browsers and data sets. Use a percentage when you want the chart to stretch with the width of the browser window. | Yes | 23.0 |  |

#### See Also

-   [Building a Complex Chart with](atlas.en-us.pages.meta/pages/pages_charting_example.htm)

-   [Visualforce Charting](atlas.en-us.pages.meta/pages/pages_charting.htm)

## Code Examples

```
<!-- Page: -->
<apex:chart data="{!pieData}">
    <apex:pieSeries labelField="name" dataField="data1"/>
</apex:chart>
```

## Related Topics

- Building a Complex Chart with (atlas.en-us.pages.meta/pages/pages_charting_example.htm)
- Visualforce Charting (atlas.en-us.pages.meta/pages/pages_charting.htm)
