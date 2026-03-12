---
title: "Tokens Bundles"
domain: lightning
topic: tokens-bundles
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.896Z
estimatedTokens: 540
keywords: [Tokens, Bundles, bundle, components, events, interfaces]
---

# Tokens Bundles

> Tokens are a type of bundle, just like components, events, and interfaces.

# Tokens Bundles

Tokens are a type of bundle, just like components, events, and interfaces.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Salesforce recommends that you use [Styling Hooks](https://www.lightningdesignsystem.com/platforms/lightning/styling-hooks/ "HTML (New Window)") instead of design tokens if possible. While existing design tokens still work, styling hooks are the future of customization for Lightning web components and Aura components. See [Replace Design Tokens with Styling Hooks](atlas.en-us.lightning.meta/lightning/styling_hooks.htm "If you use design tokens to customize the styling of your Aura components, use SLDS global styling hooks instead. Custom components that use design tokens still work, but they no longer receive updates after LWC API version 61.0. By using styling hooks, you can cleanly adopt future product innovations and updated web accessibility standards.").

A tokens bundle contains only one resource, a tokens collection definition.

| Resource | Resource Name | Usage |
| --- | --- | --- |
| Tokens Collection | defaultTokens.tokens | The only required resource in a tokens bundle. Contains markup for one or more tokens. Each tokens bundle contains only one tokens resource. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

You can’t edit the tokens bundle name or description in the Developer Console after you create it. The bundle’s AuraBundleDefinition can be modified using the Metadata API.

A tokens collection starts with the <aura:tokens> tag. It can only contain <aura:token> tags to define tokens.

Tokens collections have restricted support for expressions; see Using Expressions in Tokens. You can’t use other markup, renderers, controllers, or anything else in a tokens collection.

#### See Also

-   [Using Expressions in Tokens](atlas.en-us.lightning.meta/lightning/tokens_expressions.htm "Tokens support a restricted set of expressions. Use expressions to reuse one token value in another token, or to combine tokens to form a more complex style property.")

## Related Topics

- Replace Design Tokens with Styling Hooks (atlas.en-us.lightning.meta/lightning/styling_hooks.htm)
- Using Expressions in Tokens (atlas.en-us.lightning.meta/lightning/tokens_expressions.htm)
