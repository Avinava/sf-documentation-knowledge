---
title: "Working with Events in JavaScript"
domain: lightning
topic: working-with-events-in-javascript
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.152Z
estimatedTokens: 1293
keywords: [Working, Events, JavaScript, useful, common, patterns, Fire, Event, Current, Phase, Source, Component, Pause, Prevent, Execution]
---

# Working with Events in JavaScript

> These are useful and common patterns for working with events in
        JavaScript.

# Working with Events in JavaScript

These are useful and common patterns for working with events in JavaScript.

Events communicate data across components. Events can contain attributes with values set before the event is fired and read when the event is handled.

## Fire an Event

Fire a component event or an application event that’s registered on a component.

```

```

For more information, see:

-   [Fire Component Events](atlas.en-us.lightning.meta/lightning/events_component_fire.htm "Fire a component event to communicate data to another component. A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.")
-   [Fire Application Events](atlas.en-us.lightning.meta/lightning/events_application_fire.htm "Application events follow a traditional publish-subscribe model. An application event is fired from an instance of a component. All components that provide a handler for the event are notified.")

## Get an Event Name

To get the name of the event that’s fired:

```

```

## Get an Event Parameter

To get an attribute that’s passed into an event:

```

```

## Get Parameters on an Event

To get all attributes that are passed into an event:

```

```

event.getParams() returns an object containing all event parameters.

## Get the Current Phase of an Event

To get the current phase of an event:

```

```

If the event hasn’t been fired, event.getPhase() returns undefined. Possible return values for component and application events are capture, bubble, and default. Value events return default. For more information, see:

-   [Component Event Propagation](atlas.en-us.lightning.meta/lightning/events_component_propagation.htm "The framework supports capture and bubble phases for the propagation of component events. These phases are similar to DOM handling patterns and provide an opportunity for interested components to interact with an event and potentially control the behavior for subsequent handlers.")
-   [Application Event Propagation](atlas.en-us.lightning.meta/lightning/events_application_propagation.htm "The framework supports capture, bubble, and default phases for the propagation of application events. The capture and bubble phases are similar to DOM handling patterns and provide an opportunity for interested components to interact with an event and potentially control the behavior for subsequent handlers. The default phase preserves the framework’s original handling behavior.")

## Get the Source Component

To get the component that fired the event:

```

```

To retrieve an attribute on the component that fired the event:

```

```

## Pause the Event

To pause the fired event:

```

```

If paused, the event is not handled until event.resume() is called. You can pause an event in the capture or bubble phase only. For more information, see:

-   [Handling Bubbled or Captured Component Events](atlas.en-us.lightning.meta/lightning/events_component_bubbling.htm "Event propagation rules determine which components in the containment hierarchy can handle events by default in the bubble or capture phases. Learn about the rules and how to handle events in the bubble or capture phases.")
-   [Handling Bubbled or Captured Application Events](atlas.en-us.lightning.meta/lightning/events_application_handling_phases.htm "Event propagation rules determine which components in the containment hierarchy can handle events by default in the bubble or capture phases. Learn about the rules and how to handle events in the bubble or capture phases.")

## Prevent the Default Event Execution

To cancel the default action on the event:

```

```

For example, you can prevent a lightning:button component from submitting a form when it’s clicked.

## Resume a Paused Event

To resume event handling for a paused event:

```

```

You can resume a paused event in the capture or bubble phase only. For more information, see:

-   [Handling Bubbled or Captured Component Events](atlas.en-us.lightning.meta/lightning/events_component_bubbling.htm "Event propagation rules determine which components in the containment hierarchy can handle events by default in the bubble or capture phases. Learn about the rules and how to handle events in the bubble or capture phases.")
-   [Handling Bubbled or Captured Application Events](atlas.en-us.lightning.meta/lightning/events_application_handling_phases.htm "Event propagation rules determine which components in the containment hierarchy can handle events by default in the bubble or capture phases. Learn about the rules and how to handle events in the bubble or capture phases.")

## Set a Value for an Event Parameter

To set a value for an event parameter:

```

```

If the event has already been fired, setting a parameter value has no effect on the event.

## Set Values for Event Parameters

To set values for parameters on an event:

```

```

If the event has already been fired, setting the parameter values has no effect on the event.

## Stop Event Propagation

To prevent further propagation of an event:

```

```

You can stop event propagation in the capture or bubble phase only.

## Code Examples

```
//Fire a component event
var compEvent = cmp.getEvent("sampleComponentEvent");
compEvent.fire();

//Fire an application event
var appEvent = $A.get("e.c:appEvent");
appEvent.fire();
```

```
event.getSource().getName();
```

```
event.getParam("value");
```

```
event.getParams();
```

```
event.getPhase();
```

## Related Topics

- Fire Component Events (atlas.en-us.lightning.meta/lightning/events_component_fire.htm)
- Fire Application Events (atlas.en-us.lightning.meta/lightning/events_application_fire.htm)
- Component Event Propagation (atlas.en-us.lightning.meta/lightning/events_component_propagation.htm)
- Application Event Propagation (atlas.en-us.lightning.meta/lightning/events_application_propagation.htm)
- Handling Bubbled or Captured Component Events (atlas.en-us.lightning.meta/lightning/events_component_bubbling.htm)
- Handling Bubbled or Captured Application Events (atlas.en-us.lightning.meta/lightning/events_application_handling_phases.htm)
