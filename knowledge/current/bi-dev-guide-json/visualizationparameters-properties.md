---
title: "visualizationParameters
            Properties"
domain: bi-dev-guide-json
topic: visualizationparameters-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.336Z
estimatedTokens: 316
keywords: [visualizationParameters, key, chart, defined, step, associate, widget, override, settings]
---

# visualizationParameters
            Properties

> The visualizationParameters key contains chart
        properties defined for the step. When you associate the step with a widget, the widget
        properties override these settings.

# visualizationParameters Properties

The visualizationParameters key contains chart properties defined for the step. When you associate the step with a widget, the widget properties override these settings.

| Field Name | Description |
| --- | --- |
| options | Specifies chart properties for steps added or clipped to the designer. CRM Analytics overrides these options when they are defined in the widget parameters. For more information about chart properties, see Visualizing Data With Charts. |
| visualizationType | Specifies the chart type. You can override the chart type at the widget level.Valid values for visualizationType are:calheatmap— calendar heat mapchoropleth — choropleth (map)combo — lines and bars to show multiple metricsflatgauge — flat gaugefunnel — funnelhbar — horizontal barhdot — horizontal dot plotheatmap— heat mapmatrix— matrixparallelcoords — parallel coordinatespie — donutpivottable — pivot tablepolargauge — polar gaugepyramid — pyramidrating — ratingscatter — scatter plotstackhbar — stacked horizontal barstackpyramid — stacked pyramidstackvbar — stacked vertical barstackwaterfall — stacked waterfalltime — timelinetime-bar — time bartime-combo — time barvbar — vertical barvdot — vertical dot plotwaterfall — waterfall |
