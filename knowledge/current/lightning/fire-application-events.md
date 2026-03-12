---
title: "Fire Application Events"
domain: lightning
topic: fire-application-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.823Z
estimatedTokens: 455
keywords: [Fire, Application, Events, follow, traditional, publish-subscribe, model, event, fired, instance, component, components, provide, handler, notified]
---

# Fire Application Events

> Application events follow a traditional publish-subscribe model. An application event
    is fired from an instance of a component. All components that provide a handler for the event
    are notified.

# Fire Application Events

Application events follow a traditional publish-subscribe model. An application event is fired from an instance of a component. All components that provide a handler for the event are notified.

## Register an Event

A component registers that it may fire an application event by using <aura:registerEvent> in its markup. The name attribute is required but not used for application events. The name attribute is only relevant for component events. This example uses name="appEvent" but the value isn’t used anywhere.

```

```

## Fire an Event

Use $A.get("e.myNamespace:myAppEvent") in JavaScript to get an instance of the myAppEvent event in the myNamespace namespace.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The syntax to get an instance of an application event is different than the syntax to get a component event, which is cmp.getEvent("evtName").

Use fire() to fire the event.

```

```

## Events Fired on App Rendering

Some events are automatically fired when an app is rendering. For more information, see [Events Fired During the Rendering Lifecycle](atlas.en-us.lightning.meta/lightning/components_lifecycle.htm "A component is instantiated, rendered, and rerendered during its lifecycle. A component rerenders only when there’s a programmatic or value change that requires a rerender. For example, if a browser event triggers an action that updates the component’s data, the component rerenders.").

#### See Also

-   [Fire Component Events](atlas.en-us.lightning.meta/lightning/events_component_fire.htm "Fire a component event to communicate data to another component. A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.")

## Code Examples

```
<aura:registerEvent name="appEvent" type="c:appEvent"/>
```

```
var appEvent = $A.get("e.c:appEvent");
// Optional: set some data for the event (also known as event shape)
// A parameter’s name must match the name attribute
// of one of the event’s <aura:attribute> tags
//appEvent.setParams({ "myParam" : myValue });
appEvent.fire();
```

## Related Topics

- Events Fired During the Rendering Lifecycle (atlas.en-us.lightning.meta/lightning/components_lifecycle.htm)
- Fire Component Events (atlas.en-us.lightning.meta/lightning/events_component_fire.htm)
