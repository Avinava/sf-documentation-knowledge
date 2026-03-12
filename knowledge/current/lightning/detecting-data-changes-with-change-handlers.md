---
title: "Detecting Data Changes with Change Handlers"
domain: lightning
topic: detecting-data-changes-with-change-handlers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.052Z
estimatedTokens: 317
keywords: [Detecting, Data, Changes, Change, Handlers, Configure, component, automatically, invoke, handler, client-side, controller, action, component's, attributes]
---

# Detecting Data Changes with Change Handlers

> Configure a component to automatically invoke a change handler, which is a
        client-side controller action, when a value in one of the component's attributes changes.

# Detecting Data Changes with Change Handlers

Configure a component to automatically invoke a change handler, which is a client-side controller action, when a value in one of the component's attributes changes.

When the value changes, the valueChange.evt event is automatically fired. The event has type="VALUE".

In the component, define a handler with name="change".

```

```

The value attribute sets the component attribute that the change handler tracks.

The action attribute sets the client-side controller action to invoke when the attribute value changes.

A component can have multiple <aura:handler name="change"> tags to detect changes to different attributes.

In the controller, define the action for the handler.

```

```

The valueChange event gives you access to the previous value (oldValue) and the current value (value) in the handler action.

When a change occurs to a value that is represented by the change handler, the framework handles the firing of the event and rerendering of the component.

#### See Also

-   [Invoking Actions on Component Initialization](atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm "Use the init event to initialize a component or fire an event after component construction but before rendering.")

## Code Examples

```
<aura:handler name="change" value="{!v.numItems}" action="{!c.itemsChange}"/>
```

```
({
    itemsChange: function(cmp, evt) {
        console.log("numItems has changed");
        console.log("old value: " + evt.getParam("oldValue"));
        console.log("current value: " + evt.getParam("value"));
    }
})
```

## Related Topics

- Invoking Actions on Component Initialization (atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm)
