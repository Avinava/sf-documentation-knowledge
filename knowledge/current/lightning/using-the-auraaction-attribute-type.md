---
title: "Using the Aura.Action Attribute Type"
domain: lightning
topic: using-the-auraaction-attribute-type
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.398Z
estimatedTokens: 637
keywords: [Aura.Action, Attribute, action, framework, child, component, parent, pass, handler, instantiates, markup, pattern, shortcut, controller, on*]
---

# Using the Aura.Action Attribute Type

> An Aura.Action is a reference to an action in the
        framework. If a child component has an Aura.Action
        attribute, a parent component can pass in an action handler when it instantiates the child
        component in its markup. This pattern is a shortcut to pass a controller action from a
        parent component to a child component that it contains, and is used for on* handlers, such as onclick.

# Using the Aura.Action Attribute Type

An Aura.Action is a reference to an action in the framework. If a child component has an Aura.Action attribute, a parent component can pass in an action handler when it instantiates the child component in its markup. This pattern is a shortcut to pass a controller action from a parent component to a child component that it contains, and is used for on\* handlers, such as onclick.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=lightning)

#### Warning

Although Aura.Action works for passing an action handler to a child component, we recommend registering an event in the child component and firing the event in the child’s controller instead. Then, handle the event in the parent component. The event approach requires a few extra steps in creating or choosing an event and firing it but events are the standard way to communicate between components.

Aura.Action shouldn’t be used for other use cases. Here are some known limitations of Aura.Action.

-   Don’t use cmp.set() in JavaScript code to reset an attribute of type="Aura.Action" after it’s previously been set. Doing so generates an error.

    ```

    ```

-   Don’t use $A.enqueueAction() in the child component to enqueue the action passed to the Aura.Action attribute.

## Example

This example demonstrates how to pass an action handler from a parent component to a child component.

Here’s the child component with the Aura.Action attribute. The onclick handler for the button uses the value of the onclick attribute, which has type of Aura.Action.

```

```

Here’s the parent component that contains the child component in its markup.

```

```

When you click the button in c:child, the parentAction action in the controller of c:parent is executed.

Instead of an Aura.Action attribute, you could use <aura:registerEvent> to register an onclick event in the child component. You’d have to define the event and create an action in the child’s controller to fire the event. This event-based approach requires a few extra steps but it’s more in line with standard practices for communicating between components.

#### See Also

-   [Framework-Specific Types](atlas.en-us.lightning.meta/lightning/ref_attr_types_aura.htm)

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

## Code Examples

```
Unable to set value for key 'c.passedAction'. Value provider does not implement 'set(key, value)'. : false
```

```
<!-- child.cmp -->
<aura:component>
    <aura:attribute name="onclick" type="Aura.Action"/>

    <p>Child component with Aura.Action attribute</p>
    <lightning:button label="Execute the passed action" onclick="{!v.onclick}"/>
</aura:component>
```

```
<!-- parent.cmp -->
<aura:component>
    <p>Parent component passes handler action to c:child</p>
    <c:child onclick="{!c.parentAction}"/>
</aura:component>
```

## Related Topics

- Framework-Specific Types (atlas.en-us.lightning.meta/lightning/ref_attr_types_aura.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
