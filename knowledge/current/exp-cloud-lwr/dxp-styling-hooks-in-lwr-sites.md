---
title: "--dxp Styling Hooks in LWR Sites"
domain: exp-cloud-lwr
topic: --dxp-styling-hooks-in-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.554Z
estimatedTokens: 887
keywords: [--dxp, Styling, Hooks, LWR, Sites, hook, affects, base, custom, Lightning, web, components, throughout, site, Experience]
---

# --dxp Styling Hooks in LWR Sites

> With --dxp styling hooks, you can set a single
    hook that affects both base and custom Lightning web components throughout your LWR site in
    Experience Cloud.

# \--dxp Styling Hooks in LWR Sites

With \--dxp styling hooks, you can set a single hook that affects both base and custom Lightning web components throughout your LWR site in Experience Cloud.

The Salesforce Lightning Design System (SLDS) provides many [styling hooks](https://www.lightningdesignsystem.com/platforms/lightning/styling-hooks/) that give granular control over how each base component looks. Styling hooks use [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), which are variables within your CSS that cascade to all descendents within the scope of a selector. For example, the [lightning-button](https://www.lightningdesignsystem.com/components/buttons/#Styling-Hooks-Overview) component uses the styling hook \--slds-c-button-color-background to change its background color. You can define the hook in any selector.

```

```

But with this system, accurately reflecting your brand across every component in your site, including associated variations and states, often requires updating hundreds of styling hook definitions.

In contrast, \--dxp styling hooks are a reduced set of custom properties that map to the lower-level component styling hooks, so you can set a single hook that changes many individual components at once. For example, setting the \--dxp-g-brand hook affects the background color of the button, the link color, and the input border color on focus.

![--dxp-g-brand affecting background color](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_hooks.png&folder=exp_cloud_lwr)

Root is the background color of the container, with root-contrast as the foreground color. Each color pairing must maintain an acceptable contrast ratio for accessibility.

![Color pairings with contrast](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_hooks2.png&folder=exp_cloud_lwr)

Any container can inherit styles (default) or define new styles. If a scoped container sets its own root (background color), remember to reevaluate all other \--dxp hooks to make sure that they’re accessible against the new root.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

We recommend using \--dxp styling hooks to make general changes across the components in your site. But if the \--dxp branding defaults don’t provide exactly what you need, you can use \--slds-c and \--slds-g-color styling hooks to fine-tune the appearance of individual components where necessary.

```

```

-   **[Color --dxp Styling Hooks](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_color.htm)**
    In Experience Builder, the Colors tab is divided into families of colors that each have a specific use case along with a scale of possible values. With these properties, you can adjust the color values for the entire page or for any section within the page. When one of these color values is defined, other colors are subsequently derived and mapped to the individual base components.
-   **[Text --dxp Styling Hooks](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_text.htm)**
    Extensive text branding properties make it easy to control the styling of the headings, body, button, link, and forms text used throughout your site.
-   **[Site Spacing --dxp Styling Hooks](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_spacing.htm)**
    Site spacing allows you to customize the global spacing settings for your site. These styling hooks combine to provide a consistent spacing experience across each page.

## Code Examples

```
<style>
  /**
   * Scoped to the root of the document and all its descendant elements.
   */
  :root {
    --slds-c-button-color-background: peachpuff;
  }
 
  /**
   * Scoped to any element with the class applied and all its descendant elements
   */
  .container {
    --slds-c-button-color-background: peachpuff;
  }
</style>
```

```
<link rel=“stylesheet” href=“{​ basePath }/assets/styles/salesforce-lightning-design-system.min.css?{​ versionKey }” />
<link rel=“stylesheet” href=“{​ basePath }/assets/styles/dxp-site-spacing-styling-hooks.min.css?{​ versionKey }” />
<link rel=“stylesheet” href=“{​ basePath }/assets/styles/dxp-styling-hooks.min.css?{​ versionKey }” />
<link rel=“stylesheet” href=“{​ basePath }/assets/styles/dxp-slds-extensions.min.css?{​ versionKey }” />

<style>
  .mycontainer {
    /** Use --dxp-g to make broad changes **/
    --dxp-g-root: #1a1b1e;
    --dxp-g-root-contrast: #fff;
    --dxp-g-brand: #5eb4ff;
    --dxp-g-brand-contrast: #fff;
    --dxp-g-neutral: #76716b;
    --dxp-g-neutral-contrast: #fff;

    /** Use --slds-c to fine-tune where necessary **/
    --slds-c-button-color-background: peachpuff;
  }
</style>
```

## Related Topics

- Color --dxp Styling Hooks (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_color.htm)
- Text --dxp Styling Hooks (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_text.htm)
- Site Spacing --dxp Styling Hooks (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_spacing.htm)
