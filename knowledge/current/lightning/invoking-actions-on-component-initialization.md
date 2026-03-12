---
title: "Invoking Actions on Component Initialization"
domain: lightning
topic: invoking-actions-on-component-initialization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.087Z
estimatedTokens: 616
keywords: [Invoking, Actions, Component, Initialization, init, event, initialize, fire, construction, rendering]
---

# Invoking Actions on Component Initialization

> Use the init event to initialize a component or
        fire an event after component construction but before rendering.

# Invoking Actions on Component Initialization

Use the init event to initialize a component or fire an event after component construction but before rendering.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The init event is fired only once per lifecycle of the component. The init event doesn’t get fired if the component is served from cache. To execute JavaScript code every time a component is rendered, use the render event instead.

Let’s look at an example.

```

```

The magic happens in this line.

```

```

This code registers an init event handler for the component. init is a predefined event sent to every component. Setting value="{!this}" marks this as a value event. You should always use this setting for an init event.

After the component is initialized, the doInit action is called in the component’s controller.

```

```

The doInit action sets an attribute value, but it could do something more interesting, such as firing an event.

If a component is contained in another component or app, the inner component is initialized first.

#### See Also

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

-   [Handle the render Event Event](atlas.en-us.lightning.meta/lightning/js_render_handler.htm "When a component is rendered or rerendered, the aura:valueRender event, also known as the render event, is fired. Handle this event to perform post-processing on the DOM or react to component rendering or rerendering. The event is preferred and easier to use than the alternative of creating a custom renderer.")

-   [Component Attributes](atlas.en-us.lightning.meta/lightning/components_attributes.htm "Component attributes are like member variables on a class in Apex. They are typed fields that are set on a specific instance of a component, and can be referenced from within the component's markup using an expression syntax. Attributes enable you to make components more dynamic.")

-   [Detecting Data Changes with Change Handlers](atlas.en-us.lightning.meta/lightning/js_cb_data_change.htm "Configure a component to automatically invoke a change handler, which is a client-side controller action, when a value in one of the component's attributes changes.")

## Code Examples

```
<!--initCmp.cmp-->
<aura:component>
    <aura:attribute name="setMeOnInit" type="String" default="default value" />
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
    
    <p>This value is set in the controller after the component initializes and before rendering.</p>
    <p><b>{!v.setMeOnInit}</b></p>
    
</aura:component>
```

```
<aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
```

```
// initCmp.js
({
    doInit: function(cmp) {
        // Set the attribute value. 
        // You could also fire an event here instead.
        cmp.set("v.setMeOnInit", "controller init magic!");
    }
})
```

## Related Topics

- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- Handle the render Event Event (atlas.en-us.lightning.meta/lightning/js_render_handler.htm)
- Component Attributes (atlas.en-us.lightning.meta/lightning/components_attributes.htm)
- Detecting Data Changes with Change Handlers (atlas.en-us.lightning.meta/lightning/js_cb_data_change.htm)
