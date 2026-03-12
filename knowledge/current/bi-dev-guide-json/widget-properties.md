---
title: "widget Properties"
domain: bi-dev-guide-json
topic: widget-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.347Z
estimatedTokens: 300
keywords: [widget, widgets, key, dashboard, separate, node, appears, layouts, it’s, added, depend, chart, legend, text, doesn’t]
---

# widget Properties

> The widgets key defines all widgets that are
        available in the dashboard. It contains a separate node for each widget. Each widget appears
        in all layouts to which it’s added. The properties available for each widget depend on the
        widget type. For example, a chart widget has the legend
        property, but a text widget doesn’t.

# widget Properties

The widgets key defines all widgets that are available in the dashboard. It contains a separate node for each widget. Each widget appears in all layouts to which it’s added. The properties available for each widget depend on the widget type. For example, a chart widget has the legend property, but a text widget doesn’t.

| Property Name | Description |
| --- | --- |
| parameters | Widget parameters vary depending on the type of widget and, if applicable, type of chart. The step element defines the step attached to a widget. For detailed information about different widget parameters, see parameters Properties. |
| type | The widget type specifies one of the other supported widget types. The value of this field must be a string.chartcomparetablecontainerdateselectorglobalfiltersfilterpanelimagelinklistselectornumberpillboxrangeselectortabletextvaluestable |

-   **[parameters Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_widgets_parameters_properties.htm)**
    The parameters key contains a list of properties that control the appearance of the widget. Each widget type, including each chart type, contains a unique set of properties.

## Related Topics

- parameters Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_widgets_parameters_properties.htm)
