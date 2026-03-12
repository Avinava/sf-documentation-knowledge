---
title: "Chart Layout and Annotation"
domain: pages
topic: chart-layout-and-annotation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.929Z
estimatedTokens: 634
keywords: [Chart, Layout, Annotation, understandable, add, legend, meaningful, axes, ranges, labels, tips, data, elements]
---

# Chart Layout and Annotation

> To make your chart more understandable, add a legend, meaningful
axes ranges and labels, and tips or labels on data elements.

# Chart Layout and Annotation

To make your chart more understandable, add a legend, meaningful axes ranges and labels, and tips or labels on data elements.

By default all charts have a legend. To suppress the default legend, set <apex:chart legend="false"\>. To control the placement of the legend and the spacing of legend entries, add an <apex:legend\> component to the chart. Place the legend on any of the four edges of a chart using the position attribute. Use the font attribute to control the text style used in the legend. The font attribute is a string specifying a [CSS-style shorthand font property](http://www.w3.org/TR/CSS21/fonts.html#propdef-font "HTML (New Window)"). For example, <apex:legend position="left" **font="bold 24px Helvetica"**/>.

Appropriate axis scaling and labeling can mean the difference between a chart that is illegible or misleading and one that is clear and persuasive. By default, an <apex:axis type="Numeric"\> component sets the scale automatically based on the data fields set in the fields attribute. Automatic scaling ensures that all data fits on the chart but the chart might not begin or end with meaningful numbers. Use the minimum and maximum attributes to override the automatic scaling. To set the interval for tick marks, use the steps attribute. This attribute is an integer that specifies the number of steps between the two ends of the axis. Use the dashSize, grid, and gridFill attributes to add lines or shading to the chart to make it easier to compare measurements to the scale.

You can apply chart labels to axes and data series. When <apex:chartLabel\> is a child of <apex:axis\>, the labels are drawn on the outside of the axis. When <apex:chartLabel\> is a child of a data series component, the labels are drawn on or near the data elements on the chart. Use the field attribute to set the text for the label. Use the display attribute to set where the label is drawn. Use the orientation and rotate attributes to adjust the text of the label so that it fits on the chart.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The orientation attribute has no effect when a <apex:chartLabel\> component is used with a <apex:pieSeries\> component.

This sample chart uses many of these components and attributes to create a meaningful visual design:

![Stacked bar chart with legend](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_stacked_bar_chart_with_legend.png&folder=pages)

```

```

## Code Examples

```
<apex:chart data="{!data}" height="400" width="500">
    <apex:legend position="left" font="bold 14px Helvetica"/>
    <apex:axis type="Numeric" position="left" title="Closed Won" grid="true"
        fields="data1,data2,data3" minimum="0" maximum="225" steps="8" dashSize="2">
        <apex:chartLabel />
    </apex:axis>
    <apex:axis type="Category" position="bottom" fields="name" title="2012">
        <apex:chartLabel rotate="315"/>
    </apex:axis>
    <apex:barSeries orientation="vertical" axis="left" 
        xField="name" yField="data1,data2,data3" stacked="true"/>
</apex:chart>
```
