---
title: "Handling Component Events"
domain: lightning
topic: handling-component-events
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.872Z
estimatedTokens: 694
keywords: [Handling, Component, Events, event, handled, fired, containment, hierarchy, receives, Phases, Source]
---

# Handling Component Events

> A component event can be handled by the component that fired the event or by a
    component in the containment hierarchy that receives the event.

# Handling Component Events

A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.

Use <aura:handler> in the markup of the handler component. For example:

```

```

The name attribute in <aura:handler> must match the name attribute in the <aura:registerEvent> tag in the component that fires the event.

The action attribute of <aura:handler> sets the client-side controller action to handle the event.

The event attribute specifies the event being handled. The format is namespace:eventName.

In this example, when the event is fired, the handleComponentEvent client-side controller action is called.

## Event Handling Phases

Component event handlers are associated with the bubble phase by default. To add a handler for the capture phase instead, use the phase attribute.

```

```

## Get the Source of an Event

In the client-side controller action for an <aura:handler> tag, use evt.getSource() to find out which component fired the event, where evt is a reference to the event. To retrieve the source element, use evt.getSource().getElement().

-   **[Component Handling Its Own Event](atlas.en-us.lightning.meta/lightning/events_component_handling_itself.htm)**
    A component can handle its own event by using the <aura:handler> tag in its markup.
-   **[Handle Component Event of Instantiated Component](atlas.en-us.lightning.meta/lightning/events_component_handling_child.htm)**
    A parent component can set a handler action when it instantiates a child component in its markup.
-   **[Handling Bubbled or Captured Component Events](atlas.en-us.lightning.meta/lightning/events_component_bubbling.htm)**
    Event propagation rules determine which components in the containment hierarchy can handle events by default in the bubble or capture phases. Learn about the rules and how to handle events in the bubble or capture phases.
-   **[Handling Component Events Dynamically](atlas.en-us.lightning.meta/lightning/events_component_handling_dynamic.htm)**
    A component can have its handler bound dynamically via JavaScript. This is useful if a component is created in JavaScript on the client-side.

#### See Also

-   [Component Event Propagation](atlas.en-us.lightning.meta/lightning/events_component_propagation.htm "The framework supports capture and bubble phases for the propagation of component events. These phases are similar to DOM handling patterns and provide an opportunity for interested components to interact with an event and potentially control the behavior for subsequent handlers.")

-   [Handling Application Events](atlas.en-us.lightning.meta/lightning/events_application_handling.htm "Use <aura:handler> in the markup of the handler component.")

## Code Examples

```
<aura:handler name="sampleComponentEvent" event="c:compEvent"
    action="{!c.handleComponentEvent}"/>
```

```
<aura:handler name="sampleComponentEvent" event="ns:eventName"
    action="{!c.handleComponentEvent}" phase="capture" />
```

## Related Topics

- Component Handling Its Own Event (atlas.en-us.lightning.meta/lightning/events_component_handling_itself.htm)
- Handle Component Event of Instantiated Component (atlas.en-us.lightning.meta/lightning/events_component_handling_child.htm)
- Handling Bubbled or Captured Component Events (atlas.en-us.lightning.meta/lightning/events_component_bubbling.htm)
- Handling Component Events Dynamically (atlas.en-us.lightning.meta/lightning/events_component_handling_dynamic.htm)
- Component Event Propagation (atlas.en-us.lightning.meta/lightning/events_component_propagation.htm)
- Handling Application Events (atlas.en-us.lightning.meta/lightning/events_application_handling.htm)
