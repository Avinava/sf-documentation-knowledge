---
title: "Component Event Propagation"
domain: lightning
topic: component-event-propagation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.878Z
estimatedTokens: 577
keywords: [Component, Event, Propagation, framework, supports, capture, bubble, phases, events, similar, DOM, handling, patterns, provide, opportunity]
---

# Component Event Propagation

> The framework supports capture and
        bubble phases for the propagation of component events. These phases are similar
      to DOM handling patterns and provide an opportunity for interested components to interact with
      an event and potentially control the behavior for subsequent handlers.

# Component Event Propagation

The framework supports capture and bubble phases for the propagation of component events. These phases are similar to DOM handling patterns and provide an opportunity for interested components to interact with an event and potentially control the behavior for subsequent handlers.

The component that fires an event is known as the source component. The framework allows you to handle the event in different phases. These phases give you flexibility for how to best process the event for your application.

The phases are:

Capture

The event is captured and trickles down from the application root to the source component. The event can be handled by a component in the containment hierarchy that receives the captured event.

Event handlers are invoked in order from the application root down to the source component that fired the event.

Any registered handler in this phase can stop the event from propagating, at which point no more handlers are called in this phase or the bubble phase.

Bubble

The component that fired the event can handle it. The event then bubbles up from the source component to the application root. The event can be handled by a component in the containment hierarchy that receives the bubbled event.

Event handlers are invoked in order from the source component that fired the event up to the application root.

Any registered handler in this phase can stop the event from propagating, at which point no more handlers are called in this phase.

Here’s the sequence of component event propagation.

1.  **Event fired**—A component event is fired.
2.  **Capture phase**—The framework executes the capture phase from the application root to the source component until all components are traversed. Any handling event can stop propagation by calling stopPropagation() on the event.
3.  **Bubble phase**—The framework executes the bubble phase from the source component to the application root until all components are traversed or stopPropagation() is called.

#### See Also

-   [*Salesforce Developers Blog:* An In-Depth Look at Lightning Component Events](https://developer.salesforce.com/blogs/2017/08/depth-look-lightning-component-events "Salesforce Developers Blog: An In-Depth Look at Lightning Component
    Events - HTML (New Window)")
