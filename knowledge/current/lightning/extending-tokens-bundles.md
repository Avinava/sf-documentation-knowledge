---
title: "Extending Tokens Bundles"
domain: lightning
topic: extending-tokens-bundles
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.907Z
estimatedTokens: 535
keywords: [Extending, Tokens, Bundles, extends, attribute, extend, bundle, another]
---

# Extending Tokens Bundles

> Use the extends attribute to extend one tokens
  bundle from another.

# Extending Tokens Bundles

Use the extends attribute to extend one tokens bundle from another.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Salesforce recommends that you use [Styling Hooks](https://www.lightningdesignsystem.com/platforms/lightning/styling-hooks/ "HTML (New Window)") instead of design tokens if possible. While existing design tokens still work, styling hooks are the future of customization for Lightning web components and Aura components. See [Replace Design Tokens with Styling Hooks](atlas.en-us.lightning.meta/lightning/styling_hooks.htm "If you use design tokens to customize the styling of your Aura components, use SLDS global styling hooks instead. Custom components that use design tokens still work, but they no longer receive updates after LWC API version 61.0. By using styling hooks, you can cleanly adopt future product innovations and updated web accessibility standards.").

To add tokens from one bundle to another, extend the “child” tokens bundle from the “parent” tokens, like this.

```

```

Overriding tokens values works mostly as you’d expect: tokens in a child tokens bundle override tokens with the same name from a parent bundle. The exception is if you’re using standard tokens. You can’t override standard tokens in Lightning Experience or the Salesforce mobile app.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Overriding standard token values is undefined behavior and unsupported. If you create a token with the same name as a standard token, it overrides the standard token’s value in some contexts, and has no effect in others. This behavior will change in a future release. Don’t use it.

#### See Also

-   [Using Standard Design Tokens](atlas.en-us.lightning.meta/lightning/tokens_standard.htm "Salesforce exposes a set of “base” tokens that you can access in your component style resources. Use these standard tokens to mimic the look-and-feel of the Salesforce Lightning Design System (SLDS) in your own custom components.")

## Code Examples

```
<aura:tokens extends="yourNamespace:parentTokens">
    <!-- additional tokens here -->
</aura:tokens>
```

## Related Topics

- Replace Design Tokens with Styling Hooks (atlas.en-us.lightning.meta/lightning/styling_hooks.htm)
- Using Standard Design Tokens (atlas.en-us.lightning.meta/lightning/tokens_standard.htm)
