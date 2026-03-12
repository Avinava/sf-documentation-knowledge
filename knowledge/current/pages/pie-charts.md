---
title: "Pie Charts"
domain: pages
topic: pie-charts
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.943Z
estimatedTokens: 281
keywords: [Pie, Charts, common, customizations, <apex, pieSeries>, colors, labels, colorSet, attribute, chartLabel>, component, were, demonstrated, previous]
---

# Pie Charts

> The most common customizations to <apex:pieSeries> charts is to colors
and labels. Use the colorSet attribute and the <apex:chartLabel> component that were demonstrated in previous examples.

# Pie Charts

The most common customizations to <apex:pieSeries\> charts is to colors and labels. Use the colorSet attribute and the <apex:chartLabel\> component that were demonstrated in previous examples.

To create a ring chart instead of a pie chart, set the donut attribute. The donut attribute is an integer between 0 and 100 and represents the percentage of the radius of the hole. Here’s a simple ring chart:

![Ring Chart](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_ring_chart.png&folder=pages)

```

```

#### See Also

-   [Chart Colors](atlas.en-us.pages.meta/pages/pages_charting_appearance_colors.htm "By default, chart colors match those of the built-in reporting and analytics charts so that you can create visually-consistent dashboards. If you want to create your own color scheme you can customize the colors of most chart elements.")

-   [Chart Layout and Annotation](atlas.en-us.pages.meta/pages/pages_charting_appearance_layout.htm "To make your chart more understandable, add a legend, meaningful axes ranges and labels, and tips or labels on data elements.")

## Code Examples

```
<apex:chart data="{!pieData}" height="400" width="500" background="#F5F5F5">
    <apex:legend position="left"/>
    <apex:pieSeries labelField="name" dataField="data1" donut="50">
        <apex:chartLabel display="middle" orientation="vertical" 
            font="bold 18px Helvetica"/>
    </apex:pieSeries>
</apex:chart>
```

## Related Topics

- Chart Colors (atlas.en-us.pages.meta/pages/pages_charting_appearance_colors.htm)
- Chart Layout and Annotation (atlas.en-us.pages.meta/pages/pages_charting_appearance_layout.htm)
