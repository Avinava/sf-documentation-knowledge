---
title: "widgetStyle JSON and
            Properties"
domain: bi-dev-guide-json
topic: widgetstyle-json-and-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.421Z
estimatedTokens: 459
keywords: [widgetStyle, JSON, key, widget, applied]
---

# widgetStyle JSON and
            Properties

> The widgetStyle key contains the default widget
        properties that can be applied to each widget.

# widgetStyle JSON and Properties

The widgetStyle key contains the default widget properties that can be applied to each widget.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_json)

#### Note

You can specify these attributes at two levels. To set the default for all dashboard widgets, use the widgetStyle field under gridLayouts. To set a specific widget, use the widgetStyle field under widgets. Settings at the widget level override the default settings for all widgets.

| Property Name | Details |
| --- | --- |
| backgroundColor | TypeStringAvailable for This WidgetAll widgetsExposed in the Dashboard Designer's User InterfaceYesDescriptionColor of the widget’s background, specified in hex color code. The default is #FFFFFF. |
| borderColor | TypeStringAvailable for This WidgetAll widgetsExposed in the Dashboard Designer's User InterfaceYesDescriptionColor of the widget’s border, specified in hex color code. The default is #FFFFFF. If no border is specified, the widget has no border. |
| borderEdges | TypeListAvailable for These WidgetsAll widgetsExposed in the Dashboard Designer's User InterfaceYesDescriptionA list of values that specify which edges of the widget have a border. Valid values are left, right, top, bottom, and all. Default is no border. |
| borderRadius | TypeIntegerAvailable for These WidgetsAll widgetsExposed in the Dashboard Designer's User InterfaceYesDescriptionRoundness of the border corners.Valid values are: 0(not rounded, default), 4, 8, and 16. The higher the value, the more rounded the corner. |
| borderWidth | TypeIntegerAvailable for These WidgetsAll widgetsExposed in the Dashboard Designer's User InterfaceYesDescriptionThickness of the border.Valid values are: 1, 2 (default), 4, and 8. The higher the value, the thicker the border. |
