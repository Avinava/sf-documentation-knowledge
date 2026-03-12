---
title: "Dashboard JSON Properties"
domain: bi-dev-guide-json
topic: dashboard-json-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.261Z
estimatedTokens: 722
keywords: [Dashboard, JSON, consists, define, layouts, pages, widgets, steps, exposed, editable, designer, user, Others, via]
---

# Dashboard JSON Properties

> The dashboard JSON consists of properties that define layouts, pages, widgets, and
    steps. Some properties are exposed and editable in the dashboard designer user interface. Others
    are only editable via JSON.

# Dashboard JSON Properties

The dashboard JSON consists of properties that define layouts, pages, widgets, and steps. Some properties are exposed and editable in the dashboard designer user interface. Others are only editable via JSON.

Each dashboard JSON contains the following high-level properties.

| Property Name | Details |
| --- | --- |
| label | TypeStringExposed in the Dashboard Designer's User InterfaceYesDescriptionName of the dashboard. |
| mobileDisabled | TypeBooleanExposed in the Dashboard Designer's User InterfaceYesDescriptionSpecifies whether the dashboard can be accessed in the mobile app. Use this parameter to hide dashboards that don’t perform well on mobile devices. Default is false. |
| description | TypeStringExposed in the Dashboard Designer's User InterfaceYesDescriptionDescription of the dashboard. |
| state | TypeArrayExposed in the Dashboard Designer's User InterfaceNoDescriptionSpecifies properties for all layouts, widgets, and steps defined in the dashboard. When you save a dashboard using the dashboard designer, the state of the dashboard is persisted in the JSON. |
| datasets | TypeArrayExposed in the Dashboard Designer's User InterfaceNoDescriptionSpecifies all datasets used by steps in the dashboard. |

The following sections describe the different properties nested under state.

-   **[dataSourceLinks JSON](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_dataSourceLinks.htm)**
    The dataSourceLinks section defines all data sources configured for the dashboard.
-   **[gridLayouts JSON](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayouts.htm)**
    The gridLayouts section defines all layouts built for the dashboard.
-   **[widgetStyle JSON and Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_widgetstyle.htm)**
    The widgetStyle key contains the default widget properties that can be applied to each widget.
-   **[steps JSON](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_properties.htm)**
    The steps key defines all steps available in a CRM Analytics dashboard. It contains a separate node for each step. Each step node has properties that define the query or list of static values. It also contains properties that control the behavior of the step, like whether to facet the step. The properties and JSON syntax vary based on the step type and whether the step is in compact form or SAQL form.
-   **[widgets JSON](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_widgets.htm)**
    The widgets section defines the widgets that appear in the dashboard. Each widget has a name.
-   **[filters JSON](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_filters.htm)**
    The filters section defines the global filters added to a global filter panel widget, which is available in the dashboard designer.

## Related Topics

- dataSourceLinks JSON (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_dataSourceLinks.htm)
- gridLayouts JSON (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayouts.htm)
- widgetStyle JSON and Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_widgetstyle.htm)
- steps JSON (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_properties.htm)
- widgets JSON (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_widgets.htm)
- filters JSON (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_filters.htm)
