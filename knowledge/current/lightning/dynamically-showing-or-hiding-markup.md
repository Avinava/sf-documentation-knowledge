---
title: "Dynamically Showing or Hiding Markup"
domain: lightning
topic: dynamically-showing-or-hiding-markup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.095Z
estimatedTokens: 511
keywords: [Dynamically, Showing, Hiding, Markup, CSS, toggle, visibility, However, <aura, if>, preferred, approach, because, defers, creation]
---

# Dynamically Showing or Hiding Markup

> You can use CSS to toggle markup visibility. However, <aura:if> is the preferred approach because it defers the creation and
        rendering of the enclosed element tree until needed.

# Dynamically Showing or Hiding Markup

You can use CSS to toggle markup visibility. However, <aura:if> is the preferred approach because it defers the creation and rendering of the enclosed element tree until needed.

For an example using <aura:if>, see [Best Practices for Conditional Markup](atlas.en-us.lightning.meta/lightning/components_conditional_markup.htm "Using the <aura:if> tag is the preferred approach to conditionally display markup but there are alternatives. Consider the performance cost and code maintainability when you design components. The best design choice depends on your use case.").

This example uses $A.util.toggleClass(cmp, 'class') to toggle visibility of markup.

```

```

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

There’s no space in the .THIS.toggle selector because we’re using the rule to match a <p\> tag, which is a top-level element. For more information, see [CSS in Components](atlas.en-us.lightning.meta/lightning/components_css.htm "Style your components with CSS.").

Add the c:toggleCss component to an app. To hide or show the text by toggling the CSS class, click the **Toggle** button.

#### See Also

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

-   [Component Attributes](atlas.en-us.lightning.meta/lightning/components_attributes.htm "Component attributes are like member variables on a class in Apex. They are typed fields that are set on a specific instance of a component, and can be referenced from within the component's markup using an expression syntax. Attributes enable you to make components more dynamic.")

-   [Adding and Removing Styles](atlas.en-us.lightning.meta/lightning/js_cb_styles.htm "You can add or remove a CSS style on a component or element during runtime.")

## Code Examples

```
<!--c:toggleCss-->
<aura:component>
    <lightning:button label="Toggle" onclick="{!c.toggle}"/>
    <p aura:id="text">Now you see me</p>
</aura:component>
```

```
/*toggleCssController.js*/
({
    toggle : function(component, event, helper) {
        var toggleText = component.find("text");
        $A.util.toggleClass(toggleText, "toggle");
    }
})
```

```
/*toggleCss.css*/
.THIS.toggle {
    display: none;
}
```

## Related Topics

- Best Practices for Conditional Markup (atlas.en-us.lightning.meta/lightning/components_conditional_markup.htm)
- CSS in Components (atlas.en-us.lightning.meta/lightning/components_css.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- Component Attributes (atlas.en-us.lightning.meta/lightning/components_attributes.htm)
- Adding and Removing Styles (atlas.en-us.lightning.meta/lightning/js_cb_styles.htm)
