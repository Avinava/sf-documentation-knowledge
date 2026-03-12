---
title: "Bar Charts"
domain: pages
topic: bar-charts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.916Z
estimatedTokens: 679
keywords: [Bar, Charts, several, linear, data, series, Visualforce, plotted, against, standard, rectangular, grid]
---

# Bar Charts

> Bar charts are one of several linear data series charts available in Visualforce.
        Linear series charts are charts plotted against a standard rectangular grid.

# Bar Charts

Bar charts are one of several linear data series charts available in Visualforce. Linear series charts are charts plotted against a standard rectangular grid.

Each data element in a linear series is described by an X,Y coordinate. The data series defines how to draw the coordinate on the grid. The <apex:barSeries\> charts draw bars stretching between an origin axis and the X,Y coordinates. The orientation attribute determines whether the origin axis is the left axis (Y) or the bottom axis (X). Set <apex:barSeries orientation="horizontal"\> for bars that originate on the left side of the chart, and <apex:barSeries orientation="vertical"\> for a column chart with bars that rise from the bottom of the chart.

To plot multiple data points for each bar interval, group or stack the bars within a single <apex:barSeries\> tag. Multiple <apex:barSeries\> tags in a single chart draw on top of each other, obscuring all but the last data series. To create a vertical column chart, add all fields to be grouped or stacked to the yField attribute:

```

```

By default, data fields in an <apex:barSeries\> are grouped on a chart. To stack them on top of each other, set stacked="true".

![Grouped vs. Stacked Bar Charts](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_grouped_vs_stacked_bar_charts.png&folder=pages)

Use the gutter attribute to adjust spacing between grouped bars. Use the groupGutter attribute to adjust spacing between groups. Use the xPadding and yPadding attributes to adjust the spacing between the chart axes and the bars themselves.

By default, legend titles for stacked or grouped bar charts use the names of fields in the yField attribute. In the previous example, the default titles are “data1”, “data2”, and “data3”. To give the legend more meaningful titles, use the title attribute of the <apex:barSeries\> component. Use commas to separate items. For example, title="MacDonald,Promas,Worle":

![Stacked bar chart with legend](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_bar_stacked_with_legend.png&folder=pages)

```

```

#### See Also

-   [Chart Colors](atlas.en-us.pages.meta/pages/pages_charting_appearance_colors.htm "By default, chart colors match those of the built-in reporting and analytics charts so that you can create visually-consistent dashboards. If you want to create your own color scheme you can customize the colors of most chart elements.")

-   [Chart Layout and Annotation](atlas.en-us.pages.meta/pages/pages_charting_appearance_layout.htm "To make your chart more understandable, add a legend, meaningful axes ranges and labels, and tips or labels on data elements.")

## Code Examples

```
<apex:barSeries orientation="vertical" axis="left" 
    xField="name" yField="data1,data2,data3"/>
```

```
<apex:chart data="{!data}" height="400" width="500">
    <apex:legend position="left"/>
    <apex:axis type="Numeric" position="left" title="Closed Won" grid="true"
        fields="data1,data2,data3" dashSize="2">
        <apex:chartLabel/>
    </apex:axis>
    <apex:axis type="Category" position="bottom" fields="name" title="Stacked Bars">
        <apex:chartLabel rotate="315"/>
    </apex:axis>
    <apex:barSeries orientation="vertical" axis="left" stacked="true"
        xField="name" yField="data1,data2,data3" title="MacDonald,Promas,Worle"/>
</apex:chart>
```

## Related Topics

- Chart Colors (atlas.en-us.pages.meta/pages/pages_charting_appearance_colors.htm)
- Chart Layout and Annotation (atlas.en-us.pages.meta/pages/pages_charting_appearance_layout.htm)
