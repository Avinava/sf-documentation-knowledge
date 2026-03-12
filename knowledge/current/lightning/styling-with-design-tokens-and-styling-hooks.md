---
title: "Styling with Design Tokens and Styling Hooks"
domain: lightning
topic: styling-with-design-tokens-and-styling-hooks
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.910Z
estimatedTokens: 878
keywords: [Styling, Design, Tokens, Hooks, Capture, essential, visual, named, Reuse, throughout, Lightning, components, CSS, resources, easy]
---

# Styling with Design Tokens and Styling Hooks

> Capture the essential values of your visual design into named tokens
      or global styling hooks. Reuse these values throughout your Lightning components CSS
      resources. Tokens and styling hooks make it easy to ensure that your design is consistent, and
      even easier to update your design as it evolves.

# Styling with Design Tokens and Styling Hooks

Capture the essential values of your visual design into named tokens or global styling hooks. Reuse these values throughout your Lightning components CSS resources. Tokens and styling hooks make it easy to ensure that your design is consistent, and even easier to update your design as it evolves.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Salesforce recommends that you use [Styling Hooks](https://www.lightningdesignsystem.com/platforms/lightning/styling-hooks/ "HTML (New Window)") instead of design tokens if possible. While existing design tokens still work, styling hooks are the future of customization for Lightning web components and Aura components. See [Replace Design Tokens with Styling Hooks](atlas.en-us.lightning.meta/lightning/styling_hooks.htm "If you use design tokens to customize the styling of your Aura components, use SLDS global styling hooks instead. Custom components that use design tokens still work, but they no longer receive updates after LWC API version 61.0. By using styling hooks, you can cleanly adopt future product innovations and updated web accessibility standards.").

Design tokens and styling hooks are visual design “atoms” for building a design for your components or apps. Specifically, they’re named entities that store visual design attributes: pixel values for margins and spacing, font sizes and families, or hex values for colors. Both design tokens and styling hooks are a terrific way to centralize the low-level values, which you then use to compose the styles that make up the design of your component or app.

-   **[Tokens Bundles](atlas.en-us.lightning.meta/lightning/tokens_bundles.htm)**
    Tokens are a type of bundle, just like components, events, and interfaces.
-   **[Create a Tokens Bundle](atlas.en-us.lightning.meta/lightning/tokens_create_bundle.htm)**
    Create a tokens bundle in your org using the Developer Console.
-   **[Defining and Using Tokens](atlas.en-us.lightning.meta/lightning/tokens_using.htm)**
    A token is a name-value pair that you specify using the <aura:token> component. Define tokens in a tokens bundle, and then use tokens in your components’ CSS styles resources.
-   **[Using Expressions in Tokens](atlas.en-us.lightning.meta/lightning/tokens_expressions.htm)**
    Tokens support a restricted set of expressions. Use expressions to reuse one token value in another token, or to combine tokens to form a more complex style property.
-   **[Extending Tokens Bundles](atlas.en-us.lightning.meta/lightning/tokens_extending.htm)**
    Use the extends attribute to extend one tokens bundle from another.
-   **[Using Standard Design Tokens](atlas.en-us.lightning.meta/lightning/tokens_standard.htm)**
    Salesforce exposes a set of “base” tokens that you can access in your component style resources. Use these standard tokens to mimic the look-and-feel of the Salesforce Lightning Design System (SLDS) in your own custom components.
-   **[Replace Design Tokens with Styling Hooks](atlas.en-us.lightning.meta/lightning/styling_hooks.htm)**
    If you use design tokens to customize the styling of your Aura components, use SLDS global styling hooks instead. Custom components that use design tokens still work, but they no longer receive updates after LWC API version 61.0. By using styling hooks, you can cleanly adopt future product innovations and updated web accessibility standards.

## Related Topics

- Replace Design Tokens with Styling Hooks (atlas.en-us.lightning.meta/lightning/styling_hooks.htm)
- Tokens Bundles (atlas.en-us.lightning.meta/lightning/tokens_bundles.htm)
- Create a Tokens Bundle (atlas.en-us.lightning.meta/lightning/tokens_create_bundle.htm)
- Defining and Using Tokens (atlas.en-us.lightning.meta/lightning/tokens_using.htm)
- Using Expressions in Tokens (atlas.en-us.lightning.meta/lightning/tokens_expressions.htm)
- Extending Tokens Bundles (atlas.en-us.lightning.meta/lightning/tokens_extending.htm)
- Using Standard Design Tokens (atlas.en-us.lightning.meta/lightning/tokens_standard.htm)
