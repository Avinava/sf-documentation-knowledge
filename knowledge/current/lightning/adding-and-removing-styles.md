---
title: "Adding and Removing Styles"
domain: lightning
topic: adding-and-removing-styles
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.099Z
estimatedTokens: 708
keywords: [Adding, Removing, Styles, add, remove, CSS, style, component, element, runtime, Toggling]
---

# Adding and Removing Styles

> You can add or remove a CSS style on a component or element during
        runtime.

# Adding and Removing Styles

You can add or remove a CSS style on a component or element during runtime.

To retrieve the class name on a component, use component.find('myCmp').get('v.class'), where myCmp is the aura:id attribute value.

To append and remove CSS classes from a component or element, use the $A.util.addClass(cmpTarget, 'class') and $A.util.removeClass(cmpTarget, 'class') methods.

**Component source**

```

```

**CSS source**

```

```

**Client-side controller source**

```

```

The buttons in this demo are wired to controller actions that append or remove the CSS styles. To append a CSS style to a component, use $A.util.addClass(cmpTarget, 'class'). Similarly, remove the class by using $A.util.removeClass(cmpTarget, 'class') in your controller. cmp.find() locates the component using the local ID, denoted by aura:id="changeIt" in this demo.

## Toggling a Class

To toggle a class, use $A.util.toggleClass(cmp, 'class'), which adds or removes the class.

The cmp parameter can be component or a DOM element.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

We recommend using a component instead of a DOM element. If the utility function is not used inside afterRender() or rerender(), passing in cmp.getElement() might result in your class not being applied when the components are rerendered. For more information, see [Events Fired During the Rendering Lifecycle](atlas.en-us.lightning.meta/lightning/components_lifecycle.htm "A component is instantiated, rendered, and rerendered during its lifecycle. A component rerenders only when there’s a programmatic or value change that requires a rerender. For example, if a browser event triggers an action that updates the component’s data, the component rerenders.").

To hide or show markup dynamically, see [Dynamically Showing or Hiding Markup](atlas.en-us.lightning.meta/lightning/js_cb_show_hide_markup.htm#js_cb_show_hide_markup "You can use CSS to toggle markup visibility. However, <aura:if> is the preferred approach because it defers the creation and rendering of the enclosed element tree until needed.").

To conditionally set a class for an array of components, pass in the array to $A.util.toggleClass().

```

```

#### See Also

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

-   [CSS in Components](atlas.en-us.lightning.meta/lightning/components_css.htm "Style your components with CSS.")

-   [Component Bundles](atlas.en-us.lightning.meta/lightning/components_bundle.htm "A component bundle contains a component or an app and all its related resources.")

## Code Examples

```
<aura:component>
    <div aura:id="changeIt">Change Me!</div><br />
    <lightning:button onclick="{!c.applyCSS}" label="Add Style" />
    <lightning:button onclick="{!c.removeCSS}" label="Remove Style" />
</aura:component>
```

```
.THIS.changeMe {
    background-color:yellow;
    width:200px;
}
```

```
{
    applyCSS: function(cmp, event) {
        var cmpTarget = cmp.find('changeIt');
        $A.util.addClass(cmpTarget, 'changeMe');
    },
    
    removeCSS: function(cmp, event) {
        var cmpTarget = cmp.find('changeIt');
        $A.util.removeClass(cmpTarget, 'changeMe');
    }
}
```

```
mapClasses: function(arr, cssClass) {
    for(var cmp in arr) {
        $A.util.toggleClass(arr[cmp], cssClass);
    }
}
```

## Related Topics

- Events Fired During the Rendering Lifecycle (atlas.en-us.lightning.meta/lightning/components_lifecycle.htm)
- Dynamically Showing or Hiding Markup (atlas.en-us.lightning.meta/lightning/js_cb_show_hide_markup.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- CSS in Components (atlas.en-us.lightning.meta/lightning/components_css.htm)
- Component Bundles (atlas.en-us.lightning.meta/lightning/components_bundle.htm)
