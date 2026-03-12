---
title: "Radar Charts"
domain: pages
topic: radar-charts
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.946Z
estimatedTokens: 343
keywords: [Radar, Charts, line, they, circular, axis, instead, linear, grid]
---

# Radar Charts

> Radar charts are like line charts but they use a circular
axis instead of a linear grid.

# Radar Charts

Radar charts are like line charts but they use a circular axis instead of a linear grid.

Use the markerType, markerSize, and markerFill attributes to set the style, size, and color of the markers. Use the strokeColor and strokeWidth attributes to set the color and thickness of the connecting lines. Optionally, set fill=true to fill the area enclosed by the series, and use opacity to make it transparent so that other series remain visible. The opacity attribute is a floating point number between 0.0 and 1.0, with 0.0 being fully transparent and 1.0 being fully opaque.

Here’s an example of a radar chart, and the markup that creates it:

![Radar Chart](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_radar_chart.png&folder=pages)

```

```

#### See Also

-   [Chart Colors](atlas.en-us.pages.meta/pages/pages_charting_appearance_colors.htm "By default, chart colors match those of the built-in reporting and analytics charts so that you can create visually-consistent dashboards. If you want to create your own color scheme you can customize the colors of most chart elements.")

-   [Chart Layout and Annotation](atlas.en-us.pages.meta/pages/pages_charting_appearance_layout.htm "To make your chart more understandable, add a legend, meaningful axes ranges and labels, and tips or labels on data elements.")

## Code Examples

```
<apex:chart height="530" width="700" legend="true" data="{!data}">
    <apex:legend position="left"/>
    <apex:axis type="Radial" position="radial">
        <apex:chartLabel />
    </apex:axis>
    <apex:radarSeries xField="name" yField="data1" tips="true" opacity="0.4"/>
    <apex:radarSeries xField="name" yField="data2" tips="true" opacity="0.4"/>
    <apex:radarSeries xField="name" yField="data3" tips="true" 
        markerType="cross" strokeWidth="2" strokeColor="#f33" opacity="0.4"/>
 </apex:chart>
```

## Related Topics

- Chart Colors (atlas.en-us.pages.meta/pages/pages_charting_appearance_colors.htm)
- Chart Layout and Annotation (atlas.en-us.pages.meta/pages/pages_charting_appearance_layout.htm)
