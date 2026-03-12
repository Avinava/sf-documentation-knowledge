---
title: "Dynamically Adding Event Handlers To a Component"
domain: lightning
topic: dynamically-adding-event-handlers-to-a-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.070Z
estimatedTokens: 812
keywords: [Dynamically, Adding, Event, Handlers, Component, add, handler, fires]
---

# Dynamically Adding Event Handlers To a Component

> You can dynamically add a handler for an event that a component fires.

# Dynamically Adding Event Handlers To a Component

You can dynamically add a handler for an event that a component fires.

The addEventHandler() method in the Component object replaces the deprecated addHandler() method.

To add an event handler to a component dynamically, use the addEventHandler() method.

```

```

event

The first argument is the name of the event that triggers the handler. You can’t force a component to start firing events that it doesn’t fire, so make sure that this argument corresponds to an event that the component fires. The <aura:registerEvent> tag in a component’s markup advertises an event that the component fires.

-   For a component event, set this argument to match the name attribute of the <aura:registerEvent> tag.
-   For an application event, set this argument to match the event descriptor in the format namespace:eventName.

handler

The second argument is the action that handles the event. The format is similar to the value you would put in the action attribute in the <aura:handler> tag if the handler was statically defined in the markup. There are two options for this argument.

-   To use a controller action, use the format: cmp.getReference("c.actionName").
-   To use an anonymous function, use the format:

    ```

    ```


For a description of the other arguments, see the [JavaScript API](http://documentation.auraframework.org/auradocs#reference "HTML (New Window)") in the Aura Reference app.

You can also add an event handler to a component that is created dynamically in the callback function of $A.createComponent(). For more information, see [Dynamically Creating Components](atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm "Create a component dynamically in your client-side JavaScript code by using the $A.createComponent() method. To create multiple components, use $A.createComponents().").

## Example

This component has buttons to fire and handle a component event and an application event.

```

```

Here’s the client-side controller.

```

```

Notice the first parameter of the addEventHandler() calls. The syntax for a component event is:

```

```

The syntax for an application event is:

```

```

For either a component or application event, you can use an anonymous function as a handler instead of using cmp.getReference() for a controller action.

For example, the application event handler could be:

```

```

#### See Also

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

-   [Handling Component Events](atlas.en-us.lightning.meta/lightning/events_component_handling_intro.htm "A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.")

-   [Lightning Component Library](atlas.en-us.lightning.meta/lightning/component_library.htm "The Lightning Component Library is your hub for component reference information, including the Component Reference with live examples, and tools for Lightning Web Security and Lightning Locker.")

## Code Examples

```
addEventHandler(String event, Function handler, String phase, String includeFacets)
```

```
function(auraEvent) {
    // handling logic here
}
```

```
<!--c:dynamicHandler-->
<aura:component >
    <aura:registerEvent name="compEvent" type="c:sampleEvent"/>
    <aura:registerEvent name="appEvent" type="c:appEvent"/>
    <h1>Add dynamic handler for event</h1>
    <p>
        <lightning:button label="Fire component event" onclick="{!c.fireEvent}" />
        <lightning:button label="Add dynamic event handler for component event" onclick="{!c.addEventHandler}" />
    </p>
    <p>
        <lightning:button label="Fire application event" onclick="{!c.fireAppEvent}" />
        <lightning:button label="Add dynamic event handler for application event" onclick="{!c.addAppEventHandler}" />
    </p>

</aura:component>
```

```
/* dynamicHandlerController.js */
({
    fireEvent : function(cmp, event) {
        // Get the component event by using the
        // name value from <aura:registerEvent> tag
        var compEvent = cmp.getEvent("compEvent");
        compEvent.fire();
        console.log("Fired a component event");
    },
    
    addEventHandler : function(cmp, event) {
        // First param matches name attribute in <aura:registerEvent> tag
        cmp.addEventHandler("compEvent", cmp.getReference("c.handleEvent"));
        console.log("Added handler for component event");
    },

    handleEvent : function(cmp, event) {
        alert("Handled the component event");
    },

    fireAppEvent : function(cmp, event) {
        var appEvent = $A.get("e.c:appEvent");
        appEvent.fire();
        console.log("Fired an application event");
    },
    
    addAppEventHandler : function(cmp, event) {
        // Can use cmp.getReference() or anonymous function for handler
        // First param is event descriptor, "c:appEvent", for application events
        cmp.addEventHandler("c:appEvent", cmp.getReference("c.handleAppEvent"));
        // Can alternatively use anonymous function for handler
        //cmp.addEventHandler("c:appEvent", function(auraEvent) {
            // console.log("Handled the application event in anonymous function");
        //});
        console.log("Added handler for application event");
    },

    handleAppEvent : function(cmp, event) {
        alert("Handled the application event");
    }         
})
```

```
cmp.addEventHandler("compEvent", cmp.getReference("c.handleEvent"));
```

## Related Topics

- Dynamically Creating Components (atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- Handling Component Events (atlas.en-us.lightning.meta/lightning/events_component_handling_intro.htm)
- Lightning Component Library (atlas.en-us.lightning.meta/lightning/component_library.htm)
