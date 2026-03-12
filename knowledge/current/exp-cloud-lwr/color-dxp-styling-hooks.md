---
title: "Color --dxp Styling Hooks"
domain: exp-cloud-lwr
topic: color---dxp-styling-hooks
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:27.561Z
estimatedTokens: 1345
keywords: [Color, --dxp, Styling, Hooks, Experience, Builder, Colors, tab, divided, families, specific, case, along, scale, possible]
---

# Color --dxp Styling Hooks

> In Experience Builder, the Colors tab is divided into families of colors that each have
    a specific use case along with a scale of possible values. With these properties, you can adjust
    the color values for the entire page or for any section within the page. When one of these color
    values is defined, other colors are subsequently derived and mapped to the individual base
    components.

# Color --dxp Styling Hooks

In Experience Builder, the Colors tab is divided into families of colors that each have a specific use case along with a scale of possible values. With these properties, you can adjust the color values for the entire page or for any section within the page. When one of these color values is defined, other colors are subsequently derived and mapped to the individual base components.

For example, if you change the brand color from the default blue, the system updates the associated brand colors in all base components.

![The Colors tab](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_branding_color.png&folder=exp_cloud_lwr)

Experience Builder has a default derivation of these values that’s increasingly contrasted against the root.

-   If the root background color is dark, derivation becomes increasingly lighter to contrast against the background.
-   If the root background color is light, derivation becomes increasingly darker to contrast against the background.

These derivation colors are often used for interaction states. For example, the color of a button can change from \--dxp-g-brand to \--dxp-g-brand-1 on hover.

Additionally, many colors come in pairs, with a background color and an associated foreground color. Ensure that each color pairing maintains an acceptable contrast ratio for accessibility purposes.

## Usage Considerations

-   Use the correct family of hooks for your use case. For example, if the main color of your brand is red, don’t use \--dxp-g-destructive because it also happens to be red. Use \--dxp-g-destructive only for error and invalid states. Instead, to define your brand color, use \--dxp-g-brand.
-   You can’t configure \--dxp-g-neutral, \--dxp-g-warning, \--dxp-g-info, \--dxp-g-success, or \--dxp-g-destructive declaratively in the Theme panel. To modify these styling hooks, you must manually update them in the head markup.
-   Because alpha values affect transparency, modifying the value can have an unintended impact on page elements. If you’re overriding a color, we recommend keeping the alpha transparency at the same level as that color.
-   Changes to ExperienceBundle or DigitalExperienceBundle don’t trigger automatic color derivations.

## Root

The background color of the page or a section within the page. Root-1 is often used for components that retain the root background color, but have an interaction state—for example, the background hover state of neutral buttons.

| --dxp-g-root (1)--dxp-g-root-contrast (2)--dxp-g-root-1 (3)--dxp-g-root-contrast-1 |  |
| --- | --- |

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

If you redefine --dxp-g-root on a section within a page, reevaluate all other --dxp styling hooks to make sure that they’re accessible against the new root. If they’re not, redefine the hooks.

## Brand

The primary brand color of your site. For Salesforce, the color is blue. Commonly used on buttons, links, focus states, and so on.

| --dxp-g-brand (1)--dxp-g-brand-contrast (2)--dxp-g-brand-1 (3)--dxp-g-brand-contrast-1 (4) |  |
| --- | --- |

## Success

Communicates success. Commonly used on badges, alerts, toasts, and success variant buttons.

| --dxp-g-success (1)--dxp-g-success-contrast (2)--dxp-g-success-1 (3)--dxp-g-success-contrast-1 (4) |  |
| --- | --- |

## Destructive

Communicates an error or an invalid state. Used on alerts, badges, toasts, form fields in an error state, and destructive variant buttons.

| --dxp-g-destructive (1)--dxp-g-destructive-contrast (2)--dxp-g-destructive-1 (3)--dxp-g-destructive-contrast-1 (4) |  |
| --- | --- |

## Warning

Communicates a warning to the user. Used on badges, alerts, and toasts.

| --dxp-g-warning (1)--dxp-g-warning-contrast (2) |  |
| --- | --- |

## Info

Communicates non-urgent information. Used on tooltips and popovers.

| --dxp-g-info (1)--dxp-g-info-contrast (2)--dxp-g-info-1--dxp-g-info-contrast-1 |  |
| --- | --- |

## Neutral

Used to break the flow between elements with borders and shadows. Neutral colors are also used for non-urgent informational elements, such as toasts and badges, and elements that don’t have interaction, such as icons and disabled inputs.

| --dxp-g-neutral (1)--dxp-g-neutral-contrast--dxp-g-neutral-1 (3)--dxp-g-neutral-contrast-1--dxp-g-neutral-2--dxp-g-neutral-contrast-2--dxp-g-neutral-3--dxp-g-neutral-contrast-3 |  |
| --- | --- |

#### See Also

-   [How --dxp Styling Hooks Map to Theme Panel Properties](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_map.htm "Each declarative property in the Theme panel maps to one or more programmatic --dxp styling hooks. When a user updates a property in the Theme panel, the system automatically updates any Lightning web component that uses the hooks associated with that branding property.")

-   [Create a Color Palette for Page Sections and Columns](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_section.htm "On many websites, it’s common to have sections of a page, such as the header, footer, or columns and banners, that use different colors from the overall site. For example, perhaps you want to create a header with a dark background and a light foreground, whereas the rest of your site does the opposite. To achieve this, you can create separate color palettes and apply them to these page areas.")

## Related Topics

- How --dxp Styling Hooks Map to Theme Panel Properties (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_hooks_map.htm)
- Create a Color Palette for Page Sections and Columns (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/brand_section.htm)
