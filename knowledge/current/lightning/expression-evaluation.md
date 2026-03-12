---
title: "Expression Evaluation"
domain: lightning
topic: expression-evaluation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.961Z
estimatedTokens: 581
keywords: [Expression, Evaluation, Expressions, evaluated, much, way, JavaScript, programming, languages, Action, Lightning, Web, Components]
---

# Expression Evaluation

> Expressions are evaluated much the same way that expressions
in JavaScript or other programming languages are evaluated.

# Expression Evaluation

Expressions are evaluated much the same way that expressions in JavaScript or other programming languages are evaluated.

Operators are a subset of those available in JavaScript, and evaluation order and precedence are generally the same as JavaScript. Parentheses enable you to ensure a specific evaluation order. What you may find surprising about expressions is how often they are evaluated. The framework notices when things change, and triggers re-rendering of any components that are affected. Dependencies are handled automatically. When a component is re-rendered, any expressions it uses will be re-evaluated.

## Action Methods

Expressions are also used to provide action methods for user interface events: onclick, onhover, and any other component attributes beginning with "on".

Action methods must be assigned to attributes using an expression, for example {!c.theAction}. This expression assigns a reference to the controller function that handles the action.

Assigning action methods via expressions allows you to assign them conditionally, based on the state of the application or user interface. For more information, see [Conditional Expressions](atlas.en-us.lightning.meta/lightning/expr_conditional.htm#expr_conditional "Here are examples of conditional expressions using the ternary operator and the <aura:if> tag.").

```

```

This button will show "Like It" for items that have not yet been liked, and clicking it will call the likeIt action method. Then the component will re-render, and the opposite user interface display and method assignment will be in place. Clicking a second time will unlike the item, and so on.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The example demonstrates how attributes can help you control the state of a button. To create a button that toggles between states, we recommend using the lightning:buttonStateful component.

## Action Methods with Lightning Web Components

If you try to use an action method with a Lightning web component, it doesn’t behave as expected because Lightning web components don’t support expressions the same way that Aura components do. To write an action method, assign a controller action and execute logic depending on a value.

```

```

```

```

## Code Examples

```
<aura:component>
    <aura:attribute name="liked" type="Boolean" default="true"/>
    <lightning:button aura:id="likeBtn"
     label="{!(v.liked) ? 'Like It' : 'Unlike It'}"
     onclick="{!(v.liked) ? c.likeIt  : c.unlikeIt}"
    />
</aura:component>
```

```
<aura:component>
    <aura:attribute name="liked" type="Boolean" default="true"/>
    <c:lwcButton aura:id="likeBtn"
     label="{!(v.liked) ? 'Like It' : 'Unlike It'}"
     onclick="{!c.handleLikeButtonClick}"
    />
</aura:component>
```

```
({
    handleLikeButtonClick: function (cmp) {
        if (cmp.get('v.liked')) {
             // like it logic
        } else {
             // unlike it logic
        }
    }
})
```

## Related Topics

- Conditional Expressions (atlas.en-us.lightning.meta/lightning/expr_conditional.htm)
