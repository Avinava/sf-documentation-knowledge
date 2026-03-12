---
title: "Site Spacing --dxp Styling Hooks"
domain: exp-cloud-lwr
topic: site-spacing---dxp-styling-hooks
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.589Z
estimatedTokens: 564
keywords: [Site, Spacing, --dxp, Styling, Hooks, customize, settings, combine, provide, consistent, experience, across]
---

# Site Spacing --dxp Styling Hooks

> Site spacing allows you to customize the global spacing settings for your site. These
    styling hooks combine to provide a consistent spacing experience across each page.

# Site Spacing --dxp Styling Hooks

Site spacing allows you to customize the global spacing settings for your site. These styling hooks combine to provide a consistent spacing experience across each page.

![Site Spacing panel](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_branding_space_updated.png&folder=exp_cloud_lwr)

The Site Spacing tab of the Theme panel lets you set the following properties for desktop and mobile devices.

Max Content Width

The maximum width of the inner content for theme regions and page regions.

Section Padding: Top & Bottom

The space between the top and bottom of a section’s inner content and the top and bottom of the section container, respectively.

Section Padding: Left & Right

The space between the left and right edges of a section’s inner content and the left and right edges of the section container, respectively.

Column Gutters

The space between columns for section components with multiple columns. In mobile form factor, this setting controls the vertical space between stacked columns.

Vertical Space Between Components

The amount of vertical spacing between components in the same region.

Site spacing properties aren’t limited to what’s exposed through the Theme panel. Along with the declarative properties displayed there, there are dozens of additional component-level site spacing hooks, which you can use to fine-tune spacing in different parts of your page.

For example, let’s say you want your header region to span edge-to-edge instead of being confined to the max-content width set in the Theme panel. To achieve this outcome, you would override the max-width and padding directly for the section in question. Using the \--dxp branding hooks enables you to edit the look and feel of any component without violating that component’s style encapsulation.

```

```

#### See Also

-   [How --dxp Styling Hooks Map to Theme Panel Properties](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_map.htm "Each declarative property in the Theme panel maps to one or more programmatic --dxp styling hooks. When a user updates a property in the Theme panel, the system automatically updates any Lightning web component that uses the hooks associated with that branding property.")

## Code Examples

```
header {
    --dxp-c-section-content-spacing-block-start: 0;
    --dxp-c-section-content-spacing-inline-end: 0;
    --dxp-c-section-content-spacing-block-end: 0;
    --dxp-c-section-content-spacing-inline-start: 0;
    --dxp-c-section-columns-max-width: none;
}
```

## Related Topics

- How --dxp Styling Hooks Map to Theme Panel Properties (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_map.htm)
