---
title: "How Branding Works in LWR Sites"
domain: exp-cloud-lwr
topic: how-branding-works-in-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.598Z
estimatedTokens: 948
keywords: [How, Branding, Works, LWR, Sites, Lightning, Web, Runtime, design, system, modify, base, custom, components, achieve]
---

# How Branding Works in LWR Sites

> With the Lightning Web Runtime (LWR) design system, you can modify base and custom
    Lightning web components to achieve a consistent look and feel across your LWR site. The system
    uses --dxp styling hooks, which map to properties in the
    Theme panel, to help you more easily apply branding to your entire site.

# How Branding Works in LWR Sites

With the Lightning Web Runtime (LWR) design system, you can modify base and custom Lightning web components to achieve a consistent look and feel across your LWR site. The system uses \--dxp styling hooks, which map to properties in the Theme panel, to help you more easily apply branding to your entire site.

## What Are \--dxp Styling Hooks?

Styling hooks use CSS custom properties, which are variables within your CSS that cascade to all descendents within the scope of a selector. \--dxp styling hooks are a reduced set of custom properties that map to the lower-level component styling hooks, so you can set a single hook that affects many individual components at once.

These hooks are used in the base components that come with LWR templates, and can also be used in your custom Lightning web components, which means that you can brand your entire site much more quickly.

## What Are the Theme Panel Properties?

The Theme panel in Experience Builder provides several branding properties that let you declaratively control the color, image, text, and site spacing of your site.![The Theme panel](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_branding.png&folder=exp_cloud_lwr)

In the Colors tab, you can create color palettes that differ from the main site colors, and apply them to specific sections of the page. And in the Images tab, you can select images from a Salesforce CMS workspace to create a logo or a browser icon (favicon).![Color Palettes menu](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_branding1.png&folder=exp_cloud_lwr)

From the Text tab, you can set different base font size values for mobile and desktop sites. You can also select from dynamic font styles, headings, and decorations for all types of text, including links and buttons. And in the Site Spacing tab, you can adjust your site’s maximum content width, section padding, and section column and component spacing for desktop and mobile views.![Text and Site Spacing menu](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_branding2.png&folder=exp_cloud_lwr)

## How Do \--dxp Styling Hooks and Theme Panel Properties Work Together?

Each property in the Theme panel in Experience Builder maps to one or more \--dxp styling hooks. So if you update a property in the Theme panel, the system automatically updates any Lightning web components that use the hooks associated with that property.

For example, let’s say you want to develop a custom button component that uses branding properties from the Theme panel. In this case, to use the site’s Brand Color as the background color of the button, the component references the \--dxp-g-brand global styling hook.![Theme menu](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_branding4.png&folder=exp_cloud_lwr)

```

```

Now, whenever a user updates the Brand Color property in the Theme panel, the system instantly updates the background color of the button component.

#### See Also

-   [*Video*: Style LWR Sites with Custom Variables](https://youtu.be/yzzWOaqT4KQ "Video: Style LWR Sites with Custom Variables - HTML (New Window)")

-   [\--dxp Styling Hooks in LWR Sites](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks.htm "With --dxp styling hooks, you can set a single hook that affects both base and custom Lightning web components throughout your LWR site in Experience Cloud.")

-   [How --dxp Styling Hooks Map to Theme Panel Properties](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_map.htm "Each declarative property in the Theme panel maps to one or more programmatic --dxp styling hooks. When a user updates a property in the Theme panel, the system automatically updates any Lightning web component that uses the hooks associated with that branding property.")

## Code Examples

```
.my-custom-button-component {
  background-color: var(--dxp-g-brand);
  color: var(--dxp-g-brand-contrast);
}
```

## Related Topics

- --dxp Styling Hooks in LWR Sites (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks.htm)
- How --dxp Styling Hooks Map to Theme Panel Properties (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_map.htm)
