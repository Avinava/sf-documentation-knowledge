---
title: "Use --dxp Styling Hooks in Custom Components"
domain: exp-cloud-lwr
topic: use---dxp-styling-hooks-in-custom-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.547Z
estimatedTokens: 680
keywords: [--dxp, Styling, Hooks, Custom, Components, build, Lightning, web, component, site, uses, design, system, appropriate]
---

# Use --dxp Styling Hooks in Custom Components

> To build a custom Lightning web component for your site that uses the design system,
    use the appropriate --dxp styling hooks.

# Use \--dxp Styling Hooks in Custom Components

To build a custom Lightning web component for your site that uses the design system, use the appropriate \--dxp styling hooks.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

We recommend using \--dxp styling hooks to make general changes across the components in your site. But if the \--dxp branding defaults don’t provide exactly what you need, you can use \--slds-c and \--slds-g-color styling hooks to fine-tune the appearance of individual components where necessary.

This sample shows the code for a custom combobox component.

```

```

To ensure that the input looks similar to other Lightning base components that also respond to branding changes, the CSS must reference the \--dxp styling hooks as follows.

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=exp_cloud_lwr)

#### Important

Values of CSS custom properties are resolved at the time of evaluation. For example, let’s say you have a CSS custom property that references another CSS custom property. If you update the value of the latter CSS custom property in a lower scope, the value of the former CSS custom property doesn’t reflect the new value.

#### See Also

-   [Text --dxp Styling Hooks](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_text.htm "Extensive text branding properties make it easy to control the styling of the headings, body, button, link, and forms text used throughout your site.")

-   [Color --dxp Styling Hooks](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_color.htm "In Experience Builder, the Colors tab is divided into families of colors that each have a specific use case along with a scale of possible values. With these properties, you can adjust the color values for the entire page or for any section within the page. When one of these color values is defined, other colors are subsequently derived and mapped to the individual base components.")

-   [Site Spacing --dxp Styling Hooks](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_spacing.htm "Site spacing allows you to customize the global spacing settings for your site. These styling hooks combine to provide a consistent spacing experience across each page.")

-   [How --dxp Styling Hooks Map to Theme Panel Properties](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_map.htm "Each declarative property in the Theme panel maps to one or more programmatic --dxp styling hooks. When a user updates a property in the Theme panel, the system automatically updates any Lightning web component that uses the hooks associated with that branding property.")

## Code Examples

```
<template>
  <input type="text">
  <ul>
    <li>Option 1</li>
    <li>Option 2</li>
  </ul>
</template>
```

```
input {
  border-color: var(--dxp-g-neutral);
}

input:focus {
  border-color: var(--dxp-g-brand);
}
```

## Related Topics

- Text --dxp Styling Hooks (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_text.htm)
- Color --dxp Styling Hooks (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_color.htm)
- Site Spacing --dxp Styling Hooks (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_spacing.htm)
- How --dxp Styling Hooks Map to Theme Panel Properties (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_map.htm)
