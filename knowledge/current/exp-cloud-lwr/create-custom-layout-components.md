---
title: "Create Custom Layout Components"
domain: exp-cloud-lwr
topic: create-custom-layout-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.716Z
estimatedTokens: 1069
keywords: [Custom, Layout, Components, Layouts, Build, Own, LWR, template, Lightning, web, instead, Aura, way, sites, minor]
---

# Create Custom Layout Components

> Layouts are supported in the Build Your Own (LWR) template using Lightning web
    components instead of Aura components. You can also create your own custom layouts in the same
    way as for Aura sites, but with some minor changes in syntax.

# Create Custom Layout Components

Layouts are supported in the Build Your Own (LWR) template using Lightning web components instead of Aura components. You can also create your own custom layouts in the same way as for Aura sites, but with some minor changes in syntax.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

If your custom theme layout component exposes design properties for Experience Builder, remember to declare those properties in the targetConfig of the lightningCommunity\_\_Default target in the js-meta.xml file.

## Regions

Slots are the new way to define parts of a web component’s template that can be configured declaratively. The presence of slots on your component tells Experience Builder that it’s a region.

Named slots (<slot name="header"\>) are analogous to component attributes in Aura layouts. If the slot doesn’t have a name, it’s considered to be the default slot, which is analogous to {!v.body} in Aura.

To learn more about how LWC uses slots, see [Pass Markup into Slots](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_components_slots "HTML (New Window)") in the Lightning Web Components Dev Guide.

## Page Layout

Page layout components use the lightningCommunity\_\_Page\_Layout target in js-meta.xml.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

See an example of a two-row page layout with an exposed hero banner region in customLayoutsAndBranding/force-app/main/default/lwc/customPageLayout in the [code sample files](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm#code_sample).

The JSDoc annotation containing @slot followed by the name of the region is required for the platform to know which slots (or regions in Experience Builder) are exposed for your page layout component. Add this annotation right before the class declaration for the component. For example:

```

```

To ensure that the page renders correctly, don’t add inline comments or other statements between the annotation and the class declaration.

## Theme Layout

Theme layout components use the lightningCommunity\_\_Theme\_Layout target in js-meta.xml.

In Aura theme layout components, you include {!v.body} to denote where your content is rendered. Similarly, for an LWC theme layout component, you must include a default slot—essentially, a slot with no name: <slot></slot>—to indicate the region for your main content.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

See an example of a three-column theme layout in customLayoutsAndBranding/force-app/main/default/lwc/customThemeLayout in the [code sample files](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm#code_sample). For a functional example of how to build a proper navigation component, see [Set Up a Navigation Menu Using Apex](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_navigation.htm "The Build Your Own (LWR) template includes a Navigation Menu component that you can customize for the desktop and mobile versions of your site. If you prefer to create your own component, we recommend that you create a custom Lightning web component with an Apex controller to get the navigation items.")

The JSDoc annotation containing @slot followed by the name of the region is required for the platform to know which slots (or regions in Experience Builder) are exposed for your theme layout component. Add this annotation right before the class declaration for the component. For example:

```

```

To ensure that the page renders correctly, don’t add inline comments or other statements between the annotation and the class declaration.

## F6 Navigation

F6 navigation is available for theme layout components only. The framework treats any DOM elements with the data-f6-region attribute as an F6-navigable region.

To enable F6 navigation for regions in your theme layout, add the data-f6-region attribute to the major regions.

```

```

#### See Also

-   [*Video*: How to Implement Custom Layouts for LWR Sites](https://youtu.be/pcFfTtL4hzU "Video: How to Implement Custom Layouts for LWR Sites - HTML (New Window)")

## Code Examples

```
/**
* @slot contentHeaderRegion
* @slot contentRegion
* @slot contentFooterRegion
*/
export default class YourComponentName extends Lightning Element {
```

```
/**
* @slot themeHeaderRegion
* @slot themeFooterRegion
*/
export default class YourComponentName extends Lightning Element {
```

```
<template>
    <header data-f6-region style={headerStyle}>
        <slot name="header"></slot>
    </header>
    <section data-f6-region style={sectionStyle}>
        <slot></slot>
    </section>
    <footer data-f6-region style={footerStyle}>
        <slot name="footer"></slot>
    </footer>
</template>
```

## Related Topics

- code sample files (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm)
- Set Up a Navigation Menu Using Apex (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_navigation.htm)
