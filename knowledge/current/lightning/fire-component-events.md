---
title: "Fire Component Events"
domain: lightning
topic: fire-component-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.862Z
estimatedTokens: 268
keywords: [Fire, Component, Events, event, communicate, data, another, handled, fired, containment, hierarchy, receives, Register]
---

# Fire Component Events

> Fire a component event to communicate data to another component. A component event can
  be handled by the component that fired the event or by a component in the containment hierarchy
  that receives the event.

# Fire Component Events

Fire a component event to communicate data to another component. A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.

## Register an Event

A component registers that it may fire an event by using <aura:registerEvent> in its markup. For example:

```

```

We’ll see how the value of the name attribute is used for firing and handling events.

## Fire an Event

To get a reference to a component event in JavaScript, use cmp.getEvent("evtName") where evtName matches the name attribute in <aura:registerEvent>.

Use fire() to fire the event from an instance of a component. For example, in an action function in a client-side controller:

```

```

#### See Also

-   [Fire Application Events](atlas.en-us.lightning.meta/lightning/events_application_fire.htm "Application events follow a traditional publish-subscribe model. An application event is fired from an instance of a component. All components that provide a handler for the event are notified.")

## Code Examples

```
<aura:registerEvent name="sampleComponentEvent" type="c:compEvent"/>
```

```
var compEvent = cmp.getEvent("sampleComponentEvent");
// Optional: set some data for the event (also known as event shape)
// A parameter’s name must match the name attribute
// of one of the event’s <aura:attribute> tags
// compEvent.setParams({"myParam" : myValue });
compEvent.fire();
```

## Related Topics

- Fire Application Events (atlas.en-us.lightning.meta/lightning/events_application_fire.htm)
