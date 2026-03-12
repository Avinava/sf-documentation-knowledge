---
title: "Conditional Expressions"
domain: lightning
topic: conditional-expressions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.940Z
estimatedTokens: 282
keywords: [Conditional, Expressions, examples, ternary, operator, <aura, if>, tag, Markup]
---

# Conditional Expressions

> Here are examples of conditional expressions using the ternary operator and the
            <aura:if> tag.

# Conditional Expressions

Here are examples of conditional expressions using the ternary operator and the <aura:if> tag.

## Ternary Operator

This expression uses the ternary operator to conditionally output one of two values dependent on a condition.

```

```

The {!v.location == '/active' ? 'selected' : ''} expression conditionally sets the class attribute of an HTML <a> tag, by checking whether the location attribute is set to /active. If true, the expression sets class to selected.

## Using <aura:if> for Conditional Markup

This snippet of markup uses the <aura:if> tag to conditionally display an edit button.

```

```

If the edit attribute is set to true, lightning:button displays. Otherwise, the text in the else attribute displays.

#### See Also

-   [Best Practices for Conditional Markup](atlas.en-us.lightning.meta/lightning/components_conditional_markup.htm "Using the <aura:if> tag is the preferred approach to conditionally display markup but there are alternatives. Consider the performance cost and code maintainability when you design components. The best design choice depends on your use case.")

## Code Examples

```
<a class="{!v.location == '/active' ? 'selected' : ''}" href="#/active">Active</a>
```

```
<aura:attribute name="edit" type="Boolean" default="true"/>
<aura:if isTrue="{!v.edit}">
    <lightning:button label="Edit"/>
    <aura:set attribute="else">
        You can’t edit this.
    </aura:set>
</aura:if>
```

## Related Topics

- Best Practices for Conditional Markup (atlas.en-us.lightning.meta/lightning/components_conditional_markup.htm)
