---
title: "widgets Properties"
domain: bi-dev-guide-json
topic: widgets-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.237Z
estimatedTokens: 631
keywords: [widgets, key, determine, height, width, widget, it’s, placed, dashboard, layout, Because, designer, uses, grid, specify]
---

# widgets Properties

> The widgets key contains properties that determine
    the height and width of each widget, and where it’s placed on the dashboard layout. Because the
    dashboard designer uses a grid, you specify the properties in terms of rows and columns. For
    example, you specify the number of columns to determine the width of a widget.

# widgets Properties

The widgets key contains properties that determine the height and width of each widget, and where it’s placed on the dashboard layout. Because the dashboard designer uses a grid, you specify the properties in terms of rows and columns. For example, you specify the number of columns to determine the width of a widget.

| Property Name | Details |
| --- | --- |
| name | TypeStringExposed in the Dashboard Designer's User InterfaceNoDescriptionInternal name of the widget. This name is used to reference the widget in the dashboard JSON. |
| column | TypeIntegerExposed in the Dashboard Designer's User InterfaceYes. Value is determined based on the widget's placement.DescriptionThe column number where the widget starts. Column and row specify the top left corner of the widget.If this widget is included in a container, these properties are relative to the container widget. |
| row | TypeIntegerExposed in the Dashboard Designer's User InterfaceYes. Value is determined based on the widget's placement.DescriptionThe row number where the widget starts. Column and row specify the top left corner of the widget. |
| colspan | TypeIntegerExposed in the Dashboard Designer's User InterfaceYes. Value is determined based on the widget's placement.DescriptionThe number of columns that a widget spans—the width of the widget. If the dashboard doesn’t have enough columns to accommodate the specified width, then columns are added to the dashboard. |
| rowspan | TypeIntegerExposed in the Dashboard Designer's User InterfaceYes. Value is determined based on the widget's placement.DescriptionThe number of rows that a widget spans—the height of the widget. If the dashboard doesn’t have enough rows to accomodate the specified height, then rows are added. |
| widgetStyle | TypeArrayAvailable for These WidgetsAll widgetsExposed in the Dashboard Designer's User InterfaceNoDescriptionContains properties that set the border type, border color, and background color. |

-   **[widgetStyle Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayout_widgets_pages_widgetstyle_properties.htm)**
    The widgetStyle key contains properties that set the border type, border color, and background color of the widget. You can specify these attributes at two levels. To set the default for all dashboard widgets, use the widgetStyle field under gridLayouts. To set a specific widget, use the widgetStyle field under widgets. This setting overrides the default settings for all widgets.

## Related Topics

- widgetStyle Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayout_widgets_pages_widgetstyle_properties.htm)
