---
title: "Best Practices for Conditional Markup"
domain: lightning
topic: best-practices-for-conditional-markup
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:48.077Z
estimatedTokens: 588
keywords: [Best, Practices, Conditional, Markup, <aura, if>, tag, preferred, approach, conditionally, display, there, alternatives, Consider, performance]
---

# Best Practices for Conditional Markup

> Using the <aura:if> tag is the preferred
        approach to conditionally display markup but there are alternatives. Consider the
        performance cost and code maintainability when you design components. The best design choice
        depends on your use case.

# Best Practices for Conditional Markup

Using the <aura:if> tag is the preferred approach to conditionally display markup but there are alternatives. Consider the performance cost and code maintainability when you design components. The best design choice depends on your use case.

## Conditionally Create Elements with <aura:if>

Let’s look at a simple example that shows an error message when an error occurs.

```

```

The <div> component and its contents are only created and rendered if the value of the isTrue expression evaluates to true. If the value of the isTrue expression changes and evaluates to false, all the components inside the <aura:if> tag are destroyed. The components are created again if the isTrue expression changes again and evaluates to true.

The general guideline is to use <aura:if> because it helps your components load faster initially by deferring the creation and rendering of the enclosed element tree until the condition is fulfilled.

## Toggle Visibility Using CSS

You can use CSS to toggle visibility of markup by calling $A.util.toggleClass(cmp, 'class') in JavaScript code.

Elements in markup are created and rendered up front, but they’re hidden. For an example, see [Dynamically Showing or Hiding Markup](atlas.en-us.lightning.meta/lightning/js_cb_show_hide_markup.htm "You can use CSS to toggle markup visibility. However, <aura:if> is the preferred approach because it defers the creation and rendering of the enclosed element tree until needed.").

The conditional markup is created and rendered even if it’s not used, so <aura:if> is preferred.

## Dynamically Create Components in JavaScript

You can dynamically create components in JavaScript code. However, writing code is usually harder to maintain and debug than using markup. Again, using <aura:if> is preferred but the best design choice depends on your use case.

#### See Also

-   [Conditional Expressions](atlas.en-us.lightning.meta/lightning/expr_conditional.htm "Here are examples of conditional expressions using the ternary operator and the <aura:if> tag.")

-   [Dynamically Creating Components](atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm "Create a component dynamically in your client-side JavaScript code by using the $A.createComponent() method. To create multiple components, use $A.createComponents().")

## Code Examples

```
<aura:if isTrue="{!v.isError}">
    <div>{!v.errorMessage}</div>
</aura:if>
```

## Related Topics

- Dynamically Showing or Hiding Markup (atlas.en-us.lightning.meta/lightning/js_cb_show_hide_markup.htm)
- Conditional Expressions (atlas.en-us.lightning.meta/lightning/expr_conditional.htm)
- Dynamically Creating Components (atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm)
