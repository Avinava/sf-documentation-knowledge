---
title: "Using Expressions in Tokens"
domain: lightning
topic: using-expressions-in-tokens
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.904Z
estimatedTokens: 882
keywords: [Expressions, Tokens, support, restricted, reuse, token, another, combine, form, complex, style, Cross-Referencing, Combining]
---

# Using Expressions in Tokens

> Tokens support a restricted set of expressions. Use expressions to reuse one token
    value in another token, or to combine tokens to form a more complex style property.

# Using Expressions in Tokens

Tokens support a restricted set of expressions. Use expressions to reuse one token value in another token, or to combine tokens to form a more complex style property.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Salesforce recommends that you use [Styling Hooks](https://www.lightningdesignsystem.com/platforms/lightning/styling-hooks/ "HTML (New Window)") instead of design tokens if possible. While existing design tokens still work, styling hooks are the future of customization for Lightning web components and Aura components. See [Replace Design Tokens with Styling Hooks](atlas.en-us.lightning.meta/lightning/styling_hooks.htm "If you use design tokens to customize the styling of your Aura components, use SLDS global styling hooks instead. Custom components that use design tokens still work, but they no longer receive updates after LWC API version 61.0. By using styling hooks, you can cleanly adopt future product innovations and updated web accessibility standards.").

## Cross-Referencing Tokens

To reference one token’s value in another token’s definition, wrap the token to be referenced in standard expression syntax.

In the following example, we reference tokens provided by Salesforce in our custom tokens. Although you can’t see the standard tokens directly, imagine that they look something like the following.

```

```

With the preceding in mind, you can reference the standard tokens in your custom tokens, as in the following.

```

```

You can only cross-reference tokens defined in the same file or a parent.

Expression syntax in tokens resources is restricted to references to other tokens.

## Combining Tokens

To support combining individual token values into more complex CSS style properties, the token() function supports string concatenation. For example, if you have the following tokens defined:

```

```

You can combine these two tokens in a CSS style definition. For example:

```

```

You can mix tokens with strings as much as necessary to create the right style definition. For example, use margin: token(defaultVerticalSpacing + ' ' + defaultHorizonalSpacing + ' 3px'); to hard code the bottom spacing in the preceding definition.

The only operator supported within the token() function is “+” for string concatenation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Since Winter ’21, we convert Aura tokens to CSS custom properties under the covers. CSS custom properties are a web standard that wasn’t supported when we initially created Aura tokens. Concatenating an Aura token with another token that defines a CSS unit isn’t supported due to how we convert the Aura tokens. The tokens are statically converted to custom properties and can result in incorrect CSS syntax, which is then discarded by the CSS parser.

For example, don’t separate the size and unit into separate tokens.

```

```

If you concatenate the tokens, the CSS doesn’t work as you expect.

```

```

The result is font-size: 24, though you might expect it to be font-size: 24px.

Instead, define a size and unit in one token for this use case.

```

```

#### See Also

-   [Defining and Using Tokens](atlas.en-us.lightning.meta/lightning/tokens_using.htm "A token is a name-value pair that you specify using the <aura:token> component. Define tokens in a tokens bundle, and then use tokens in your components’ CSS styles resources.")

## Code Examples

```
<!-- force:base tokens (SLDS standard tokens) -->
<aura:tokens>
  ...
  <aura:token name="colorBackground" value="rgb(244, 246, 249)" />
  <aura:token name="fontFamily" value="'Salesforce Sans', Arial, sans-serif" />
  ...
</aura:tokens>
```

```
<!-- defaultTokens.tokens (your tokens) -->
<aura:tokens extends="force:base">
  <aura:token name="mainColor" value="{! colorBackground }" />
  <aura:token name="btnColor" value="{! mainColor }" />
  <aura:token name="myFont" value="{! fontFamily }" />
</aura:tokens>
```

```
<!-- defaultTokens.tokens (your tokens) -->
<aura:tokens>
  <aura:token name="defaultHorizonalSpacing" value="12px" />
  <aura:token name="defaultVerticalSpacing" value="6px" />
</aura:tokens>
```

```
/* myComponent.css */
.THIS div.notification {
  margin: token(defaultVerticalSpacing + ' ' + defaultHorizonalSpacing);
  /* more styles here */
}
```

```
<!-- DO NOT DO THIS! -->
<aura:token name="v24" value="24" />
<aura:token name="px" value="px" />
```

## Related Topics

- Replace Design Tokens with Styling Hooks (atlas.en-us.lightning.meta/lightning/styling_hooks.htm)
- Defining and Using Tokens (atlas.en-us.lightning.meta/lightning/tokens_using.htm)
