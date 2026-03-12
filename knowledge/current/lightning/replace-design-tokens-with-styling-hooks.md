---
title: "Replace Design Tokens with Styling Hooks"
domain: lightning
topic: replace-design-tokens-with-styling-hooks
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.887Z
estimatedTokens: 533
keywords: [Replace, Design, Tokens, Styling, Hooks, customize, Aura, components, SLDS, instead, Custom, work, they, longer, receive]
---

# Replace Design Tokens with Styling Hooks

> If you use design tokens to customize the styling of your Aura components, use SLDS
    global styling hooks instead. Custom components that use design tokens still work, but they no
    longer receive updates after LWC API version 61.0. By using styling hooks, you can cleanly adopt
    future product innovations and updated web accessibility standards.

# Replace Design Tokens with Styling Hooks

If you use design tokens to customize the styling of your Aura components, use SLDS global styling hooks instead. Custom components that use design tokens still work, but they no longer receive updates after LWC API version 61.0. By using styling hooks, you can cleanly adopt future product innovations and updated web accessibility standards.

## Replace Design Tokens with Styling Hooks

Directly replace design tokens with \--slds styling hooks in your Aura CSS file.

```

```

Most of the customization options provided by design tokens are available with SLDS global styling hooks. For a full list of global styling hooks, see the [Global Styling Hooks Reference](https://www.lightningdesignsystem.com/platforms/lightning/reference/ "HTML (New Window)").

## Styling if Styling Hooks are Unavailable

Only Lightning Experience supports the latest global styling hooks. In containers such as Experience Cloud sites, newer styling hooks, such as the \--slds-g-color-\* styling hooks, aren’t available. To accommodate containers that can’t access these styling hooks, include an \--lwc custom property as a fallback. Use this solution only if the component is expected to run in a container that doesn’t support styling hooks.

Convert a design token to an \--lwc property by adding \--lwc as a prefix to the design token name. For example, instead of t(colorTextBrand), use var(--lwc-colorTextBrand).

## Example

This example shows an Aura CSS file for a custom component that uses a design token to override the component’s background color.

```

```

The best replacement is the new \--slds-g-color-\* styling hooks. However, in this case the container can’t access newer styling hooks. So this example replaces the design token by referencing a global color styling hook and also an \--lwc property that’s derived from the original design token.

```

```

#### See Also

-   [**Salesforce Lightning Design System:** Styling Hooks](https://www.lightningdesignsystem.com/platforms/lightning/styling-hooks/ "Salesforce Lightning Design System: Styling Hooks - HTML (New Window)")

## Code Examples

```
/* Aura Custom Component CSS */
.THIS .my-custom-container {
  background-color: var(--slds-g-color-surface-container-1);
}
```

```
/* Aura CSS using an Aura token to override*/
.THIS .my-custom-container {
  background-color: t(cardColorBackground);
}
```

```
/* Aura Custom Component CSS */
.THIS .my-custom-container {
  background-color: var(--slds-g-color-surface-container-1, --lwc-cardColorBackground);
}
```
