---
title: "Create Components for LWR Sites"
domain: exp-cloud-lwr
topic: create-components-for-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.704Z
estimatedTokens: 1164
keywords: [Components, LWR, Sites, Lightning, web, component, folder, include, configuration, file, named, <component>.js-meta.xml, metadata, including, design]
---

# Create Components for LWR Sites

> Each Lightning web component folder must include a configuration file named
        <component>.js-meta.xml. The configuration file
    defines the metadata values for the component, including the design configuration values for
    Experience Builder.

# Create Components for LWR Sites

Each Lightning web component folder must include a configuration file named <component>.js-meta.xml. The configuration file defines the metadata values for the component, including the design configuration values for Experience Builder.

If you previously created Lightning web components for Experience Builder sites, you’re familiar with the lightningCommunity\_\_Page and lightningCommunity\_\_Default targets. For the LWR template, we added two new target types—lightningCommunity\_\_Page\_Layout and lightningCommunity\_\_Theme\_Layout.

| Target Value | Description |
| --- | --- |
| lightningCommunity__Page | Enables a drag-and-drop component to be used on an LWR or Aura site page in Experience Builder. Components appear in the Components panel. |
| lightningCommunity__Page_Layout | Enables a component to be used as a page layout in an LWR site in Experience Builder. Components appear in the Page Layout window. |
| lightningCommunity__Theme_Layout | Enables a component to be used as a theme layout in an LWR site in Experience Builder. Components appear in Settings in the Theme area. |
| lightningCommunity__Default | Used together with lightningCommunity__Page or lightningCommunity__Theme_Layout. Enables a component to expose properties that are editable when the component is selected in Experience Builder.For Experience Builder sites, only lightningCommunity__Default supports configurable component properties. We support these property attribute data types:IntegerStringBooleanPicklistColor |

To use a component in Experience Builder, edit the <component>.js-meta.xml file to define the component’s design configuration values as follows.

-   To make your component usable in Experience Builder, set isExposed to true, and define lightningCommunity\_\_Page, lightningCommunity\_\_Page\_Layout, or lightningCommunity\_\_Theme\_Layout in targets.
-   To include properties that are editable when the component is selected in Experience Builder, define lightningCommunity\_\_Default in targets and define the properties in targetConfigs.

See [Configure a Component for Experience Builder](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_config_for_community_builder) in the Lightning Web Components Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

All configuration file tags listed in [Configuration File Tags](https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.reference_configuration_tags) in the Lightning Web Components Developer Guide are supported.

-   **[Component Properties](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_props.htm)**
    Let’s look at some sample code for a Lightning web component that includes four editable properties. lightningCommunity\_\_Page tells Experience Builder that this component is a drag-and-drop component. And the lightningCommunity\_\_Default target is used to configure any design-time component properties for Experience Builder in its targetConfig.
-   **[Base Lightning Component Limitations in LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_limitations.htm)**
    In LWR sites for Experience Cloud, you can use most of the components in the Lightning Component Library, but there are some limitations.
-   **[User Interface API](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_api.htm)**
    User Interface API allows you to get Salesforce record data into your Lightning web component. LWR sites don’t require anything special when developing your Lightning web components with User Interface API.
-   **[@salesforce Modules in LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_module.htm)**
    LWR sites in Experience Cloud support @salesforce modules, which add functionality to Lightning web components at runtime.
-   **[Lightning Navigation](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_navigation.htm)**
    Use the lightning/navigation API to navigate to different pages within your site, generate URLs to different routes, and get the current pageReference object.
-   **[Make a Custom Lightning Web Component Screen-Size Responsive](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_responsive_properties.htm)**
    For enhanced LWR sites, you can assign separate values for the desktop, mobile, and tablet versions of certain properties in custom Lightning web components. With screen-responsive properties, the component uses the correct property value based on the end user’s screen size.

## Related Topics

- Component Properties (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_props.htm)
- Base Lightning Component Limitations in LWR Sites (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_limitations.htm)
- User Interface API (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_api.htm)
- @salesforce Modules in LWR Sites (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_module.htm)
- Lightning Navigation (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_comp_navigation.htm)
- Make a Custom Lightning Web Component Screen-Size Responsive (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_responsive_properties.htm)
