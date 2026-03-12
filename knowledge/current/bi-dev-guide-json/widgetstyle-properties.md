---
title: "widgetStyle
    Properties"
domain: bi-dev-guide-json
topic: widgetstyle-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.231Z
estimatedTokens: 395
keywords: [widgetStyle, key, border, color, background, widget, specify, attributes, two, levels, dashboard, widgets, under, gridLayouts, specific]
---

# widgetStyle
    Properties

> The widgetStyle key contains properties that set
    the border type, border color, and background color of the widget. You can specify these
    attributes at two levels. To set the default for all dashboard widgets, use the widgetStyle field under gridLayouts. To set a specific widget, use the widgetStyle field under widgets. This setting
    overrides the default settings for all widgets.

# widgetStyle Properties

The widgetStyle key contains properties that set the border type, border color, and background color of the widget. You can specify these attributes at two levels. To set the default for all dashboard widgets, use the widgetStyle field under gridLayouts. To set a specific widget, use the widgetStyle field under widgets. This setting overrides the default settings for all widgets.

| Property Name | Details |
| --- | --- |
| backgroundColor | TypeStringAvailable for These WidgetsAll widgetsExposed in the Dashboard Designer's User InterfaceYesDescriptionBackground color of the widget. The default is #FFFFFF. |
| borderColor | TypeStringAvailable for These WidgetsAll widgetsExposed in the Dashboard Designer's User InterfaceYesDescriptionColor of the widget’s border. The default is #FFFFFF. |
| borderEdges | TypeListAvailable for These WidgetsAll widgetsExposed in the Dashboard Designer's User InterfaceYesDescriptionA list of values that specify which edges of the widget have a border. Valid values are left, right, top, bottom, and all. Default is no border. |
| borderRadius | TypeIntegerAvailable for This WidgetAll widgetsExposed in the Dashboard Designer's User InterfaceYesDescriptionThe roundness of the border corners.Valid values are: 0 (not rounded, default), 4, 8, and 16. The higher the value, the more rounded the corner. |
| borderWidth | TypeIntegerAvailable for These WidgetsAll widgetsExposed in the Dashboard Designer's User InterfaceYesDescriptionWidth of the widget’s border. Valid values are 1, 2 (default), 4, and 8. |
