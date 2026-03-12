---
title: "gridLayouts
    Properties"
domain: bi-dev-guide-json
topic: gridlayouts-properties
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.222Z
estimatedTokens: 636
keywords: [gridLayouts, key, layouts, dashboard, separate, node, layout, provide, devices, placement, widget, cell, spacing, grid, dashboard’s]
---

# gridLayouts
    Properties

> The gridLayouts key defines all layouts for the
    dashboard. It contains a separate node for each layout. Each layout has properties that provide
    information about the devices that can use the layout and the placement of each widget in the
    layout. It also contains dashboard properties, like cell spacing in the grid and the dashboard’s
    background color or image.

# gridLayouts Properties

The gridLayouts key defines all layouts for the dashboard. It contains a separate node for each layout. Each layout has properties that provide information about the devices that can use the layout and the placement of each widget in the layout. It also contains dashboard properties, like cell spacing in the grid and the dashboard’s background color or image.

| Property Name | Details |
| --- | --- |
| name | TypeStringExposed in the Dashboard Designer's User InterfaceYes.DescriptionName of the layout. |
| maxWidth | Maximum width (in pixels) that the dashboard can use. If needed, CRM Analytics rearranges the existing dashboard widgets based on this setting in the layout. |
| numColumns | TypeIntegerExposed in the Dashboard Designer's User InterfaceYes.DescriptionThe number of columns in the designer grid for this layout. |
| pages | TypeArrayExposed in the Dashboard Designer's User InterfaceNoDescriptionContains properties that specify the name and ID of the page, and determine the placement of each widget in the dashboard layout. |
| rowHeight | TypeStringExposed in the Dashboard Designer's User InterfaceYes.DescriptionThe height of each row in the designer grid for this layout. Valid values are fine and normal (default). |
| selectors | TypeArrayExposed in the Dashboard Designer's User InterfaceYes.DescriptionDevice requirements that help CRM Analytics choose the optimal layout for the device accessing the dashboard. |
| style | TypeArrayExposed in the Dashboard Designer's User InterfaceYes.DescriptionProperties about the designer grid, including columns, rows, cell spacing, and background. |

-   **[pages Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayout_widgets_pages_properties.htm)**
    The pages key contains properties that determine the placement of each widget in the dashboard layout. Currently, dashboard designer supports only one page for each layout.
-   **[selectors Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayout_widgets_selector_properties.htm)**
    The selectors key contains layout properties that specify the layout name, designer grid settings, background settings, and requirements for devices that can use this layout.
-   **[style Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayout_widgets_style_properties.htm)**
    The style key contains the dashboard properties, like cell spacing in the grid, as well as the dashboard’s background color or image.

## Related Topics

- pages Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayout_widgets_pages_properties.htm)
- selectors Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayout_widgets_selector_properties.htm)
- style Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayout_widgets_style_properties.htm)
