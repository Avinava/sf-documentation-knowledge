---
title: "Handling Application Events"
domain: lightning
topic: handling-application-events
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.826Z
estimatedTokens: 478
keywords: [Handling, Application, Events, <aura, handler>, markup, handler, component, Event, Phases, Source]
---

# Handling Application Events

> Use <aura:handler> in the markup of the handler
    component.

# Handling Application Events

Use <aura:handler> in the markup of the handler component.

For example:

```

```

The event attribute specifies the event being handled. The format is namespace:eventName.

The action attribute of <aura:handler> sets the client-side controller action to handle the event.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The handler for an application event won’t work if you set the name attribute in <aura:handler>. Use the name attribute only when you’re handling component events.

In this example, when the event is fired, the handleApplicationEvent client-side controller action is called.

## Event Handling Phases

The framework allows you to handle the event in different phases. These phases give you flexibility for how to best process the event for your application.

Application event handlers are associated with the default phase. To add a handler for the capture or bubble phases instead, use the phase attribute.

## Get the Source of an Event

In the client-side controller action for an <aura:handler> tag, use evt.getSource() to find out which component fired the event, where evt is a reference to the event. To retrieve the source element, use evt.getSource().getElement().

-   **[Handling Bubbled or Captured Application Events](atlas.en-us.lightning.meta/lightning/events_application_handling_phases.htm)**
    Event propagation rules determine which components in the containment hierarchy can handle events by default in the bubble or capture phases. Learn about the rules and how to handle events in the bubble or capture phases.

#### See Also

-   [Handling Component Events](atlas.en-us.lightning.meta/lightning/events_component_handling_intro.htm "A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.")

## Code Examples

```
<aura:handler event="c:appEvent" action="{!c.handleApplicationEvent}"/>
```

## Related Topics

- Handling Bubbled or Captured Application Events (atlas.en-us.lightning.meta/lightning/events_application_handling_phases.htm)
- Handling Component Events (atlas.en-us.lightning.meta/lightning/events_component_handling_intro.htm)
