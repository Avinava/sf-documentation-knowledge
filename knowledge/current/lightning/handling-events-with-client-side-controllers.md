---
title: "Handling Events with Client-Side Controllers"
domain: lightning
topic: handling-events-with-client-side-controllers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.109Z
estimatedTokens: 1243
keywords: [Handling, Events, Client-Side, Controllers, controller, handles, component, It’s, JavaScript, resource, functions, component’s, actions, Creating, Calling]
---

# Handling Events with Client-Side Controllers

> A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all
        of the component’s actions.

# Handling Events with Client-Side Controllers

A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.

A client-side controller is a JavaScript object in object-literal notation containing a map of name-value pairs. Each name corresponds to a client-side action. Its value is the function code associated with the action. Client-side controllers are surrounded by parentheses and curly braces. Separate action handlers with commas (as you would with any JavaScript map).

```

```

Each action function takes in three parameters:

1.  cmp—The component to which the controller belongs.
2.  event—The event that the action is handling.
3.  helper—The component’s helper, which is optional. A helper contains functions that can be reused by any JavaScript code in the component bundle.

## Creating a Client-Side Controller

A client-side controller is part of the component bundle. It is auto-wired via the naming convention, componentNameController.js.

To create a client-side controller using the Developer Console, click **CONTROLLER** in the sidebar of the component.

## Calling Client-Side Controller Actions

The following example component creates two buttons to contrast an HTML button with <lightning:button>, which is a standard Lightning component. Clicking on these buttons updates the text component attribute with the specified values. target.get("v.label") refers to the label attribute value on the button.

**Component source**

```

```

If you know some JavaScript, you might be tempted to write something like the first "Flawed" button because you know that HTML tags are first-class citizens in the framework. However, the "Flawed" button won't work because arbitrary JavaScript, such as the alert() call, in the component is ignored.

The framework has its own event system. DOM events are mapped to Lightning events, since HTML tags are mapped to Lightning components.

Any browser DOM element event starting with on, such as onclick or onkeypress, can be wired to a controller action. You can only wire browser events to controller actions.

The "Framework" button wires the onclick attribute in the <lightning:button> component to the handleClick action in the controller.

**Client-side controller source**

```

```

The handleClick action uses event.getSource() to get the source component that fired this component event. In this case, the source component is the <lightning:button> in the markup.

The code then sets the value of the text component attribute to the value of the button’s label attribute. The text component attribute is defined in the <aura:attribute> tag in the markup.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=lightning)

#### Tip

Use unique names for client-side and server-side actions in a component. A JavaScript function (client-side action) with the same name as an Apex method (server-side action ) can lead to hard-to-debug issues. In debug mode, the framework logs a browser console warning about the clashing client-side and server-side action names.

## Handling Framework Events

Handle framework events using actions in client-side component controllers. Framework events for common mouse and keyboard interactions are available with out-of-the-box components.

## Accessing Component Attributes

In the handleClick function, notice that the first argument to every action is the component to which the controller belongs. One of the most common things you'll want to do with this component is look at and change its attribute values.

cmp.get("v.attributeName") returns the value of the attributeName attribute.

cmp.set("v.attributeName", "attribute value") sets the value of the attributeName attribute.

## Invoking Another Action in the Controller

To call an action method from another method, put the common code in a helper function and invoke it using helper.someFunction(cmp).

#### See Also

-   [Sharing JavaScript Code in a Component Bundle](atlas.en-us.lightning.meta/lightning/js_helper.htm "Put functions that you want to reuse in the component’s helper. Helper functions also enable specialization of tasks, such as processing data and queueing server-side actions. Helper functions are local to a component, improve code reuse, and move the heavy lifting of JavaScript logic away from the client-side controller, where possible.")

-   [Event Handling Lifecycle](atlas.en-us.lightning.meta/lightning/events_overview.htm)

-   [Creating Server-Side Logic with Controllers](atlas.en-us.lightning.meta/lightning/controllers_server_intro.htm "The framework supports client-side (JavaScript) and server-side (Apex) controllers. An event is always wired to a client-side controller action, which can in turn call an Apex controller action. For example, a client-side controller might handle an event and call an Apex controller action to persist a record.")

## Code Examples

```
({
    myAction : function(cmp, event, helper) {
        // add code for the action
    },

    anotherAction : function(cmp, event, helper) {
        // add code for the action
    }
})
```

```
<aura:component>
    <aura:attribute name="text" type="String" default="Just a string. Waiting for change."/>
    <input type="button" value="Flawed HTML Button"
        onclick="alert('this will not work')"/>
    <br/>
    <lightning:button label="Framework Button" onclick="{!c.handleClick}"/>
    <br/>
    {!v.text}
</aura:component>
```

```
({
    handleClick : function(cmp, event) {
        var attributeValue = cmp.get("v.text");
        console.log("current text: " + attributeValue);

        var target = event.getSource();
        cmp.set("v.text", target.get("v.label"));
    }
})
```

## Related Topics

- Sharing JavaScript Code in a Component Bundle (atlas.en-us.lightning.meta/lightning/js_helper.htm)
- Event Handling Lifecycle (atlas.en-us.lightning.meta/lightning/events_overview.htm)
- Creating Server-Side Logic with Controllers (atlas.en-us.lightning.meta/lightning/controllers_server_intro.htm)
