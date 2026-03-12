---
title: "Using Standard Design Tokens"
domain: lightning
topic: using-standard-design-tokens
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.916Z
estimatedTokens: 765
keywords: [Standard, Design, Tokens, Salesforce, “base”, access, component, style, resources, mimic, look-and-feel, Lightning, System, SLDS, own]
---

# Using Standard Design Tokens

> Salesforce exposes a set of “base” tokens that you can access in your component style
    resources. Use these standard tokens to mimic the look-and-feel of the Salesforce Lightning
    Design System (SLDS) in your own custom components.

# Using Standard Design Tokens

Salesforce exposes a set of “base” tokens that you can access in your component style resources. Use these standard tokens to mimic the look-and-feel of the Salesforce Lightning Design System (SLDS) in your own custom components.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Salesforce recommends that you use [Styling Hooks](https://www.lightningdesignsystem.com/platforms/lightning/styling-hooks/ "HTML (New Window)") instead of design tokens if possible. While existing design tokens still work, styling hooks are the future of customization for Lightning web components and Aura components. See [Replace Design Tokens with Styling Hooks](atlas.en-us.lightning.meta/lightning/styling_hooks.htm "If you use design tokens to customize the styling of your Aura components, use SLDS global styling hooks instead. Custom components that use design tokens still work, but they no longer receive updates after LWC API version 61.0. By using styling hooks, you can cleanly adopt future product innovations and updated web accessibility standards.").

To add the standard tokens to your org, extend a tokens bundle from the base tokens, like so.

```

```

Once added to defaultTokens (or another tokens bundle that defaultTokens extends) you can reference tokens from force:base just like your own tokens, using the token() function and token name. For example:

```

```

You can mix-and-match your tokens with the standard tokens. It’s a best practice to develop a naming system for your own tokens to make them easily distinguishable from standard tokens. Consider prefixing your token names with “my”, or something else easily identifiable.

-   **[Overriding Standard Tokens (Deprecated)](atlas.en-us.lightning.meta/lightning/tokens_standard_overrides.htm)**
    If you override design tokens for your custom components, replace them with SLDS styling hooks.
-   **[Standard Design Tokens— force:base](atlas.en-us.lightning.meta/lightning/tokens_standard_force_base.htm)**
    The standard tokens available are a subset of the design tokens offered in the Salesforce Lightning Design System (SLDS). The following tokens are available when extending from force:base.
-   **[Standard Design Tokens for Experience Builder Sites](atlas.en-us.lightning.meta/lightning/tokens_standard_communities.htm)**
    Use a subset of the standard design tokens to make your components compatible with the Theme panel in Experience Builder. The Theme panel enables administrators to quickly style an entire site using these properties. Each property in the Theme panel maps to one or more standard design tokens. When an administrator updates a property in the Theme panel, the system automatically updates any Lightning components that use the tokens associated with that branding property.

#### See Also

-   [Extending Tokens Bundles](atlas.en-us.lightning.meta/lightning/tokens_extending.htm "Use the extends attribute to extend one tokens bundle from another.")

## Code Examples

```
<aura:tokens extends="force:base">
    <!-- your own tokens here -->
</aura:tokens>
```

```
.THIS p {
    font-family: token(fontFamily);
    font-weight: token(fontWeightRegular);
}
```

## Related Topics

- Replace Design Tokens with Styling Hooks (atlas.en-us.lightning.meta/lightning/styling_hooks.htm)
- Overriding Standard Tokens (Deprecated) (atlas.en-us.lightning.meta/lightning/tokens_standard_overrides.htm)
- Standard Design Tokens— force:base (atlas.en-us.lightning.meta/lightning/tokens_standard_force_base.htm)
- Standard Design Tokens for Experience Builder Sites (atlas.en-us.lightning.meta/lightning/tokens_standard_communities.htm)
- Extending Tokens Bundles (atlas.en-us.lightning.meta/lightning/tokens_extending.htm)
