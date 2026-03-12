---
title: "pages Properties"
domain: bi-dev-guide-json
topic: pages-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.226Z
estimatedTokens: 286
keywords: [pages, key, determine, placement, widget, dashboard, layout, Currently, designer, supports]
---

# pages Properties

> The pages key contains properties that determine
    the placement of each widget in the dashboard layout. Currently, dashboard designer supports
    only one page for each layout.

# pages Properties

The pages key contains properties that determine the placement of each widget in the dashboard layout. Currently, dashboard designer supports only one page for each layout.

| Property Name | Details |
| --- | --- |
| label | TypeStringExposed in the Dashboard Designer's User InterfaceYesDescriptionLabel of the page in the dashboard layout. |
| name | TypeStringExposed in the Dashboard Designer's User InterfaceNoDescriptionID of the page in the dashboard layout. |
| widgets | TypeArrayExposed in the Dashboard Designer's User InterfaceNoDescriptionContains properties that determine the height and width of each widget, and where it’s placed on the dashboard layout. |

-   **[widgets Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayout_widgets_properties.htm)**
    The widgets key contains properties that determine the height and width of each widget, and where it’s placed on the dashboard layout. Because the dashboard designer uses a grid, you specify the properties in terms of rows and columns. For example, you specify the number of columns to determine the width of a widget.

## Related Topics

- widgets Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayout_widgets_properties.htm)
