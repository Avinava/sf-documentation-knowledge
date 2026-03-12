---
title: "Standard Design Tokens for Experience Builder Sites"
domain: lightning
topic: standard-design-tokens-for-experience-builder-sites
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.925Z
estimatedTokens: 1211
keywords: [Standard, Design, Tokens, Experience, Builder, Sites, subset, components, compatible, Theme, panel, administrators, quickly, style, entire]
---

# Standard Design Tokens for Experience Builder Sites

> Use a subset of the standard design tokens to make your components compatible with the
  Theme panel in Experience Builder. The Theme panel enables administrators to quickly style an
  entire site using these properties. Each property in the Theme panel maps to one or more standard
  design tokens. When an administrator updates a property in the Theme panel, the system
  automatically updates any Lightning components that use the tokens associated with that branding
  property.

# Standard Design Tokens for Experience Builder Sites

Use a subset of the standard design tokens to make your components compatible with the Theme panel in Experience Builder. The Theme panel enables administrators to quickly style an entire site using these properties. Each property in the Theme panel maps to one or more standard design tokens. When an administrator updates a property in the Theme panel, the system automatically updates any Lightning components that use the tokens associated with that branding property.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Salesforce recommends that you use [Styling Hooks](https://www.lightningdesignsystem.com/platforms/lightning/styling-hooks/ "HTML (New Window)") instead of design tokens if possible. While existing design tokens still work, styling hooks are the future of customization for Lightning web components and Aura components. See [Replace Design Tokens with Styling Hooks](atlas.en-us.lightning.meta/lightning/styling_hooks.htm "If you use design tokens to customize the styling of your Aura components, use SLDS global styling hooks instead. Custom components that use design tokens still work, but they no longer receive updates after LWC API version 61.0. By using styling hooks, you can cleanly adopt future product innovations and updated web accessibility standards.").

![Experience Builder Theme panel](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fdesign_tokens_community_builder.png&folder=lightning)

## Available Tokens for Experience Builder Sites

For Experience Builder sites, these standard tokens are available when extending from [forceCommunity:base](atlas.en-us.lightning.meta/lightning/tokens_standard_force_base.htm#tokens_standard_force_base "The standard tokens available are a subset of the design tokens offered in the Salesforce Lightning Design System (SLDS). The following tokens are available when extending from force:base.").

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

The standard token values evolve along with SLDS. Available tokens and their values can change without notice.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Design tokens are not available for navigation branding properties. To add branding to navigation properties, override the navigation bar within the custom components. See [CSS Overrides Migration for the Navigation Menu](https://developer.salesforce.com/docs/atlas.en-us.260.0.communities_dev.meta/communities_dev/communities_dev_nav_menu_css.htm).

| These Branding panel properties... | ...map to these standard design tokens |
| --- | --- |
| Text Color | colorTextDefault |
| Detail Text Color | colorTextActionLabelcolorTextLabelcolorTextPlaceholdercolorTextWeak |
| Action Color | colorBackgroundButtonBrandcolorBorderBrandcolorBorderButtonBrandcolorBrandcolorTextBrandcolorTextTabLabelSelectedcolorTextActionLabelActiveNoteAs of Summer ’18 colorBackgroundHighlight is no longer mapped to Action Color. |
| Link Color | colorTextLink |
| Overlay Text Color | colorTextButtonBrandcolorTextButtonBrandHovercolorTextInverse |
| Border Color | colorBordercolorBorderButtonDefaultcolorBorderInputcolorBorderSeparatorAlt |
| Company Logo | brandLogoImage |
| Header Image | headerImageUrl |
| Login Pages Background Image | LoginBackgroundImage |
| Primary Font | fontFamily |
| Text Case | textTransform |

In addition, the following standard tokens are available for derived theme properties in the template. You can indirectly access derived properties when you update the properties in the Theme panel. For example, if you change the Action Color property in the Theme panel, the system automatically recalculates the Action Color Darker value based on the new value.

| These derived branding properties... | ...map to these standard design tokens |
| --- | --- |
| Action Color Darker(Derived from Action Color) | colorBackgroundButtonBrandActivecolorBackgroundButtonBrandHover |
| Hover Color(Derived from Action Color) | colorBackgroundButtonDefaultHovercolorBackgroundRowHovercolorBackgroundRowSelectedcolorBackgroundShade |
| Link Color Darker(Derived from Link Color) | colorTextLinkActivecolorTextLinkHover |

For a complete list of the design tokens available in the SLDS, see [Design Tokens](http://www.lightningdesignsystem.com/resources/tokens/ "HTML (New Window)") on the Lightning Design System site.

#### See Also

-   [Configure Components for Experience Builder](atlas.en-us.lightning.meta/lightning/components_config_for_builder.htm "Make your custom Aura components available to drag to the Lightning Components pane in Experience Builder.")

## Related Topics

- Replace Design Tokens with Styling Hooks (atlas.en-us.lightning.meta/lightning/styling_hooks.htm)
- forceCommunity:base (atlas.en-us.lightning.meta/lightning/tokens_standard_force_base.htm)
- Configure Components for Experience Builder (atlas.en-us.lightning.meta/lightning/components_config_for_builder.htm)
