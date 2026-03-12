---
title: "Other Linear Series Charts"
domain: pages
topic: other-linear-series-charts
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.939Z
estimatedTokens: 864
keywords: [Linear, Series, Charts, data, include, <apex, areaSeries>, lineSeries>, scatterSeries>]
---

# Other Linear Series Charts

> Other linear data series charts include <apex:areaSeries>, <apex:lineSeries>, and <apex:scatterSeries>.

# Other Linear Series Charts

Other linear data series charts include <apex:areaSeries\>, <apex:lineSeries\>, and <apex:scatterSeries\>.

You can combine linear data series charts on the same graph, but to create meaningful charts, keep the following in mind:

-   Data series charts draw on top of each other in the order you define them in Visualforce markup.
-   Define <apex:barSeries\> charts first because they usually need to be in the background because they can’t be transparent.

The <apex:areaSeries\> components are similar to stacked bar charts, except that the chart is drawn as shaded areas defined by a line connecting the points of the series instead of as individual bars. To combine <apex:areaSeries\> with other data series, use the opacity attribute to make the area chart partially transparent. The opacity attribute is a floating point number between 0.0 and 1.0, with 0.0 being fully transparent and 1.0 being fully opaque. Here’s an area series combined with a bar series:

![Area and Bar Combination Chart](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_area_bar_combo_chart.png&folder=pages)

```

```

By default, legend titles for area charts use the names of fields in the yField attribute. In the previous example, the default titles are “data1”, “data2”, and “data3”. To give the legend more meaningful titles, use the title attribute of the <apex:areaSeries\> component. Use commas to separate items. For example, title="MacDonald,Promas,Worle":

![Area chart with legend](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_area_with_legend.png&folder=pages)

```

```

Like <apex:areaSeries\> charts, <apex:lineSeries\> charts use lines to connect a series of points. You can fill the area under the line. Unlike <apex:areaSeries\> charts, <apex:lineSeries\>charts don’t stack. When <apex:lineSeries\>charts aren’t filled, you might choose to put several series in the same chart. Line series can display markers for the data points and you can define the color and size of both the markers and the connecting lines. Here’s a chart that combines three line series, one of which is filled:

![Lines Chart](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_line_charts.png&folder=pages)

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

An <apex:lineSeries\> component might not fill as expected if a Numeric axis doesn’t increase in order as it moves up and to the right. The solution is to set the axis to type="Category" and sort the values manually before passing the data to the chart.

The <apex:scatterSeries\> charts are like <apex:lineSeries\> charts without the connecting lines. By varying the marker size, type, and color, it’s easy to plot many scatter series on the same chart.

#### See Also

-   [Chart Colors](atlas.en-us.pages.meta/pages/pages_charting_appearance_colors.htm "By default, chart colors match those of the built-in reporting and analytics charts so that you can create visually-consistent dashboards. If you want to create your own color scheme you can customize the colors of most chart elements.")

-   [Chart Layout and Annotation](atlas.en-us.pages.meta/pages/pages_charting_appearance_layout.htm "To make your chart more understandable, add a legend, meaningful axes ranges and labels, and tips or labels on data elements.")

## Code Examples

```
<apex:chart height="400" width="700" animate="true" data="{!data}">
    <apex:legend position="left"/>
    <apex:axis type="Numeric" position="left" title="Closed Won" grid="true"
        fields="data1,data2,data3">
        <apex:chartLabel />
    </apex:axis>
    <apex:axis type="Numeric" position="right" fields="data1" 
        title="Closed Lost" />
    <apex:axis type="Category" position="bottom" fields="name" 
        title="Month of the Year">
        <apex:chartLabel rotate="315"/>
    </apex:axis>
    <apex:areaSeries axis="left" tips="true" opacity="0.4" 
        xField="name" yField="data1,data2,data3"/>
    <apex:barSeries orientation="vertical" axis="right" 
        xField="name" yField="data1">
        <apex:chartLabel display="insideEnd" field="data1" color="#333"/>
    </apex:barSeries>
</apex:chart>
```

```
<apex:chart height="400" width="700" animate="true" data="{!data}">
    <apex:legend position="left"/>
    <apex:axis type="Numeric" position="left" fields="data1,data2,data3" 
        title="Closed Won" grid="true">
        <apex:chartLabel />
    </apex:axis>
    <apex:axis type="Category" position="bottom" fields="name" title="2011">
        <apex:chartLabel rotate="315"/>
    </apex:axis>
    <apex:areaSeries axis="left" xField="name" tips="true" 
        yField="data1,data2,data3" title="MacDonald,Picard,Worlex"  />
</apex:chart>
```

```
<apex:chart height="400" width="700" animate="true" legend="true" data="{!data}">
    <apex:legend position="left"/>
    <apex:axis type="Numeric" position="left" title="Volatility" grid="true"
        fields="data1,data2,data3">
        <apex:chartLabel />
    </apex:axis>
    <apex:axis type="Category" position="bottom" title="Month" grid="true"
        fields="name">
        <apex:chartLabel />
    </apex:axis>
    <apex:lineSeries axis="left" xField="name" yField="data1" 
        strokeColor="#0000FF" strokeWidth="4"/>
    <apex:lineSeries axis="left" fill="true" xField="name" yField="data2"
        markerType="cross" markerSize="4" markerFill="#FF0000"/>
    <apex:lineSeries axis="left" xField="name" yField="data3" 
        markerType="circle" markerSize="4" markerFill="#8E35EF">
        <apex:chartTips height="20" width="120"/>
    </apex:lineSeries>
</apex:chart>
```

## Related Topics

- Chart Colors (atlas.en-us.pages.meta/pages/pages_charting_appearance_colors.htm)
- Chart Layout and Annotation (atlas.en-us.pages.meta/pages/pages_charting_appearance_layout.htm)
