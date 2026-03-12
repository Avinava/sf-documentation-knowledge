---
title: "Data Binding Between Components"
domain: lightning
topic: data-binding-between-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.955Z
estimatedTokens: 1947
keywords: [Data, Binding, Components, add, component, markup, expression, initialize, attribute, container, There, two, forms, exhibit, different]
---

# Data Binding Between Components

> When you add a component in markup, you can use an expression to initialize attribute
      values in the component based on attribute values of the container component. There are two
      forms of expression syntax, which exhibit different behaviors for data binding between the
      components.

# Data Binding Between Components

When you add a component in markup, you can use an expression to initialize attribute values in the component based on attribute values of the container component. There are two forms of expression syntax, which exhibit different behaviors for data binding between the components.

This concept is a little tricky, but it will make more sense when we look at an example. Consider a c:parent component that has a parentAttr attribute. c:parent contains a c:child component with a childAttr attribute that’s initialized to the value of the parentAttr attribute. We’re passing the parentAttr attribute value from c:parent into the c:child component, which results in a data binding, also known as a value binding, between the two components.

```

```

{!v.parentAttr} is a bound expression. Any change to the value of the childAttr attribute in c:child also affects the parentAttr attribute in c:parent and vice versa.

Now, let's change the markup from:

```

```

to:

```

```

{#v.parentAttr} is an unbound expression. Any change to the value of the childAttr attribute in c:child doesn’t affect the parentAttr attribute in c:parent and vice versa.

Here’s a summary of the differences between the forms of expression syntax.

{#expression} (Unbound Expressions)

Data updates behave as you would expect in JavaScript. Primitives, such as String, are passed by value, and data updates for the expression in the parent and child are decoupled.

Objects, such as Array or Map, are passed by reference, so changes to the data in the child propagate to the parent. However, change handlers in the parent aren’t notified. The same behavior applies for changes in the parent propagating to the child.

{!expression} (Bound Expressions)

Data updates in either component are reflected through bidirectional data binding in both components. Similarly, change handlers are triggered in both the parent and child components.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=lightning)

#### Tip

Bi-directional data binding is expensive for performance and it can create hard-to-debug errors due to the propagation of data changes through nested components. We recommend using the {#expression} syntax instead when you pass an expression from a parent component to a child component unless you require bi-directional data binding.

## Unbound Expressions

Let’s look at another example of a c:parentExpr component that contains another component, c:childExpr.

Here is the markup for c:childExpr.

```

```

Here is the markup for c:parentExpr.

```

```

The c:parentExpr component uses an unbound expression to set an attribute in the c:childExpr component.

```

```

When we instantiate childExpr, we set the childAttr attribute to the value of the parentAttr attribute in c:parentExpr. Since the {#v.parentAttr} syntax is used, the v.parentAttr expression is not bound to the value of the childAttr attribute.

The c:exprApp application is a wrapper around c:parentExpr.

```

```

In the Developer Console, click **Preview** in the sidebar for c:exprApp to view the app in your browser.

Both parentAttr and childAttr are set to “parent attribute”, which is the default value of parentAttr.

Now, let’s create a client-side controller for c:childExpr so that we can dynamically update the component. Here is the source for childExprController.js.

```

```

In the Developer Console, click **Update Preview** for c:exprApp.

Press the **Update childAttr** button. This updates childAttr to “updated child attribute”. The value of parentAttr is unchanged since we used an unbound expression.

```

```

Let’s add a client-side controller for c:parentExpr. Here is the source for parentExprController.js.

```

```

In the Developer Console, click **Update Preview** for c:exprApp.

Press the **Update parentAttr** button. This time, parentAttr is set to “updated parent attribute” while childAttr is unchanged due to the unbound expression.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=lightning)

#### Warning

Don’t use a component’s init event and client-side controller to initialize an attribute that is used in an unbound expression. The attribute will not be initialized. Use a bound expression instead. For more information on a component’s init event, see [Invoking Actions on Component Initialization](atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm#js_cb_init_handler "Use the init event to initialize a component or fire an event after component construction but before rendering.").

Alternatively, you can wrap the component in another component. When you instantiate the wrapped component in the wrapper component, initialize the attribute value instead of initializing the attribute in the wrapped component’s client-side controller.

## Bound Expressions

Now, let’s update the code to use a bound expression instead. Change this line in c:parentExpr:

```

```

to:

```

```

In the Developer Console, click **Update Preview** for c:exprApp.

Press the **Update childAttr** button. This updates both childAttr and parentAttr to “updated child attribute” even though we only set v.childAttr in the client-side controller of childExpr. Both attributes were updated since we used a bound expression to set the childAttr attribute.

## Change Handlers and Data Binding

You can configure a component to automatically invoke a change handler, which is a client-side controller action, when a value in one of the component's attributes changes.

When you use a bound expression, a change in the attribute in the parent or child component triggers the change handler in both components. When you use an unbound expression, the change is not propagated between components so the change handler is only triggered in the component that contains the changed attribute.

Let’s add change handlers to our earlier example to see how they are affected by bound versus unbound expressions.

Here is the updated markup for c:childExpr.

```

```

Notice the <aura:handler> tag with name="change", which signifies a change handler. value="{!v.childAttr}" tells the change handler to track the childAttr attribute. When childAttr changes, the onChildAttrChange client-side controller action is invoked.

Here is the client-side controller for c:childExpr.

```

```

Here is the updated markup for c:parentExpr with a change handler.

```

```

Here is the client-side controller for c:parentExpr.

```

```

In the Developer Console, click **Update Preview** for c:exprApp.

Open your browser’s console (**More tools** | **Developer tools** in Chrome).

Press the **Update parentAttr** button. The change handlers for c:parentExpr and c:childExpr are both triggered as we’re using a bound expression.

```

```

Change c:parentExpr to use an unbound expression instead.

```

```

In the Developer Console, click **Update Preview** for c:exprApp.

Press the **Update childAttr** button. This time, only the change handler for c:childExpr is triggered as we’re using an unbound expression.

#### See Also

-   [Detecting Data Changes with Change Handlers](atlas.en-us.lightning.meta/lightning/js_cb_data_change.htm "Configure a component to automatically invoke a change handler, which is a client-side controller action, when a value in one of the component's attributes changes.")

-   [Dynamic Output in Expressions](atlas.en-us.lightning.meta/lightning/expr_dynamic_output.htm "The simplest way to use expressions is to output dynamic values.")

-   [Component Composition](atlas.en-us.lightning.meta/lightning/components_composition.htm "Composing fine-grained components in a larger component enables you to build more interesting components and applications.")

## Code Examples

```
<!--c:parent-->
<aura:component>
    <aura:attribute name="parentAttr" type="String" default="parent attribute"/>
    
    <!-- Instantiate the child component -->
    <c:child childAttr="{!v.parentAttr}" />
</aura:component>
```

```
<c:child childAttr="{!v.parentAttr}" />
```

```
<c:child childAttr="{#v.parentAttr}" />
```

```
<!--c:childExpr-->
<aura:component>
    <aura:attribute name="childAttr" type="String" />

    <p>childExpr childAttr: {!v.childAttr}</p>
    <p><lightning:button label="Update childAttr" 
          onclick="{!c.updateChildAttr}"/></p>
</aura:component>
```

```
<!--c:parentExpr-->
<aura:component>
    <aura:attribute name="parentAttr" type="String" default="parent attribute"/>

    <!-- Instantiate the child component -->
    <c:childExpr childAttr="{#v.parentAttr}" />
       
    <p>parentExpr parentAttr: {!v.parentAttr}</p>
    <p><lightning:button label="Update parentAttr"
          onclick="{!c.updateParentAttr}"/></p>
</aura:component>
```

## Related Topics

- Invoking Actions on Component Initialization (atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm)
- Detecting Data Changes with Change Handlers (atlas.en-us.lightning.meta/lightning/js_cb_data_change.htm)
- Dynamic Output in Expressions (atlas.en-us.lightning.meta/lightning/expr_dynamic_output.htm)
- Component Composition (atlas.en-us.lightning.meta/lightning/components_composition.htm)
