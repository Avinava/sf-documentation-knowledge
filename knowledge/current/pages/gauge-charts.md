---
title: "Gauge Charts"
domain: pages
topic: gauge-charts
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.924Z
estimatedTokens: 335
keywords: [Gauge, Charts, show, measurement, against, defined, axis, scale, Although, number, vary, chart, colors, communicate, means]
---

# Gauge Charts

> Gauge charts show a single measurement against a defined
axis or scale. Although it charts a single number, you can vary the
axis and chart colors to communicate what that number means.

# Gauge Charts

Gauge charts show a single measurement against a defined axis or scale. Although it charts a single number, you can vary the axis and chart colors to communicate what that number means.

Use the minimum and maximum attributes of the <apex:axis\> tag to define the range of values. Use the colorSet attribute of the <apex:gaugeSeries\> tag to indicate whether the current value is good or bad. Here’s a chart that indicates the metric is well within an acceptable range:

![Gauge Chart](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_gauge_chart.png&folder=pages)

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Gauge charts don’t support legends or labels.

#### See Also

-   [Chart Colors](atlas.en-us.pages.meta/pages/pages_charting_appearance_colors.htm "By default, chart colors match those of the built-in reporting and analytics charts so that you can create visually-consistent dashboards. If you want to create your own color scheme you can customize the colors of most chart elements.")

-   [Chart Layout and Annotation](atlas.en-us.pages.meta/pages/pages_charting_appearance_layout.htm "To make your chart more understandable, add a legend, meaningful axes ranges and labels, and tips or labels on data elements.")

## Code Examples

```
<apex:chart height="250" width="450" animate="true" data="{!data}">
    <apex:axis type="Gauge" position="gauge" title="Transaction Load"
        minimum="0" maximum="100" steps="10"/>
    <apex:gaugeSeries dataField="data1" donut="50" colorSet="#78c953,#ddd"/>
</apex:chart>
```

## Related Topics

- Chart Colors (atlas.en-us.pages.meta/pages/pages_charting_appearance_colors.htm)
- Chart Layout and Annotation (atlas.en-us.pages.meta/pages/pages_charting_appearance_layout.htm)
