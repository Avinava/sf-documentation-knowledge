---
title: "Event Handling in Lightning Base Components"
domain: lightning
topic: event-handling-in-lightning-base-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.233Z
estimatedTokens: 1097
keywords: [Event, Handling, Lightning, Base, Components, lightweight, closely, resemble, HTML, markup, They, follow, standard, practices, providing]
---

# Event Handling in Lightning Base Components

> Base components are lightweight and closely resemble HTML markup. They follow standard
        HTML practices by providing event handlers as attributes, such as onfocus, instead of registering and firing Lightning
        component events, like components in the ui namespace.

# Event Handling in Lightning Base Components

Base components are lightweight and closely resemble HTML markup. They follow standard HTML practices by providing event handlers as attributes, such as onfocus, instead of registering and firing Lightning component events, like components in the ui namespace.

Because of their markup, you might expect to access DOM elements for base components via event.target or event.currentTarget. However, this type of access breaks encapsulation because it provides access to another component’s DOM elements, which are subject to change.

Use the methods described here to make your code compliant with Lightning Locker.

We recommend binding your value to an attribute. For example, bind the value for lightning:input to a textvalue attribute.

```

```

In your client-side controller, use the event handler to get the textvalue attribute value.

```

```

Alternatively, to retrieve the component that fired the event, use event.getSource().

```

```

For an event fired by a custom component or a base component, use event.getSource(). For events fired by standard HTML elements, you can use event.currentTarget and event.target. For example, event.target returns null when the lightning:button component in the example is clicked.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

If [Lightning Web Security](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/lws-intro.html "HTML (New Window)") is enabled in your org, event.currentTarget and event.target return the corresponding elements. For example, in the lightning:button example, both properties return the <button\> element.

Retrieve a component attribute that’s passed to the event by using this syntax.

```

```

## Reusing Event Handlers

event.getSource() helps you determine which component fired an event. Let’s say you have several buttons that reuse the same onclick handler. To retrieve the name of the button that fired the event, use event.getSource().get("v.name").

```

```

```

```

## Retrieving the Active Component Using the onactive Handler

When working with tabs, you want to know which one is active. The lightning:tab component enables you to obtain a reference to the target component when it becomes active using the onactive handler. Clicking the component multiple times invokes the handler one time only.

```

```

```

```

## Retrieving the ID and Value Using the onselect Handler

Some components provide event handlers to pass in events to child components, such as the onselect event handler on the following components.

-   lightning:buttonMenu
-   lightning:tabset

Although the event.detail syntax continues to be supported, we recommend that you update your JavaScript code to use the following patterns for the onselect handler as we plan to deprecate event.detail in a future release.

-   event.getParam("id")
-   event.getParam("value")

For example, you want to retrieve the value of a selected menu item in a lightning:buttonMenu component from a client-side controller.

```

```

Similarly, to retrieve the ID of a selected tab in a lightning:tabset component:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

If you need a reference to the target component, use the onactive event handler instead.

## Base Components Limitations for Native HTML Events

All supported event handlers on a base component are listed in the [Specification tab of the component reference](https://developer.salesforce.com/docs/component-library/bundle/lightning-input/specification). The event handler names start with on, for example, onchange.

Base components generally don’t support native HTML events, unlike their [Lightning web component counterparts](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.migrate_base_components). You might encounter unexpected behavior if you try to handle an HTML event on a base component. Let’s say you want to handle the onkeydown HTML event on lightning:input.

```

```

Since onkeydown is not a supported event handler based on the [lightning:input specifications](https://developer.salesforce.com/docs/component-library/bundle/lightning-input/specification), event.getParam("value") and event.detail return undefined.

## Code Examples

```
<aura:component>
    <aura:attribute name="textvalue" type="String" default="Initial value"/>
    <lightning:input value="{!v.textvalue}" onchange="{!c.handleInputChange}"/>
</aura:component>
```

```
({
     handleInputChange : function(component, event) {
        let val = component.get("v.textvalue");
    }
})
```

```
<aura:component>
    <lightning:button name="myButton" label="Click me" onclick="{!c.doSomething}"/>
</aura:component>
```

```
({
    doSomething: function(cmp, event, helper) {
        var button = event.getSource();

        //Don’t use the following patterns for events
        //that are fired by another component 
        //or a base Lightning component        
        var el = event.target;
        var currentEl = event.currentTarget;
    }
})
```

```
<aura:component>
    <lightning:button label="New Record" name="new" onclick="{!c.handleClick}"/>
    <lightning:button label="Edit" name="edit" onclick="{!c.handleClick}"/>
    <lightning:button label="Delete" name="delete" onclick="{!c.handleClick}"/>
</aura:component>
```
