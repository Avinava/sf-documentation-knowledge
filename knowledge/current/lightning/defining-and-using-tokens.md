---
title: "Defining and Using Tokens"
domain: lightning
topic: defining-and-using-tokens
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.964Z
estimatedTokens: 467
keywords: [Defining, Tokens, token, name-value, pair, specify, <aura, token>, component, Define, bundle, components’, CSS, styles, resources]
---

# Defining and Using Tokens

> A token is a name-value pair that you specify using the <aura:token> component. Define tokens in a tokens bundle, and then use tokens in
    your components’ CSS styles resources.

# Defining and Using Tokens

A token is a name-value pair that you specify using the <aura:token> component. Define tokens in a tokens bundle, and then use tokens in your components’ CSS styles resources.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Salesforce recommends that you use [Styling Hooks](https://www.lightningdesignsystem.com/platforms/lightning/styling-hooks/ "HTML (New Window)") instead of design tokens if possible. While existing design tokens still work, styling hooks are the future of customization for Lightning web components and Aura components. See [Replace Design Tokens with Styling Hooks](atlas.en-us.lightning.meta/lightning/styling_hooks.htm "If you use design tokens to customize the styling of your Aura components, use SLDS global styling hooks instead. Custom components that use design tokens still work, but they no longer receive updates after LWC API version 61.0. By using styling hooks, you can cleanly adopt future product innovations and updated web accessibility standards.").

## Defining Tokens

Add new tokens as child components of the bundle’s <aura:tokens> component. For example:

```

```

The only allowed attributes for the <aura:token> tag are name and value.

## Using Tokens

Tokens created in the defaultTokens bundle are automatically available in components in your namespace. To use a design token, reference it using the token() function and the token name in the CSS resource of a component bundle. For example:

```

```

If you prefer a more concise function name for referencing tokens, you can use the t() function instead of token(). The two are equivalent. If your token names follow a naming convention or are sufficiently descriptive, the use of the more terse function name won’t affect the clarity of your CSS styles.

## Code Examples

```
<aura:tokens>
    <aura:token name="myBodyTextFontFace" 
               value="'Salesforce Sans', Helvetica, Arial, sans-serif"/>
    <aura:token name="myBodyTextFontWeight" value="normal"/>
    <aura:token name="myBackgroundColor" value="#f4f6f9"/>
    <aura:token name="myDefaultMargin" value="6px"/>
</aura:tokens>
```

```
.THIS p {
    font-family: token(myBodyTextFontFace);
    font-weight: token(myBodyTextFontWeight);
}
```

## Related Topics

- Replace Design Tokens with Styling Hooks (atlas.en-us.lightning.meta/lightning/styling_hooks.htm)
