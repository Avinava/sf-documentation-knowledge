---
title: "Application Event Propagation"
domain: lightning
topic: application-event-propagation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.835Z
estimatedTokens: 1175
keywords: [Application, Event, Propagation, framework, supports, capture, bubble, phases, events, similar, DOM, handling, patterns, provide, opportunity]
---

# Application Event Propagation

> The framework supports capture,
        bubble, and default phases for the propagation of application
      events. The capture and bubble phases are similar to DOM handling patterns and provide an
      opportunity for interested components to interact with an event and potentially control the
      behavior for subsequent handlers. The default phase preserves the framework’s original
      handling behavior.

# Application Event Propagation

The framework supports capture, bubble, and default phases for the propagation of application events. The capture and bubble phases are similar to DOM handling patterns and provide an opportunity for interested components to interact with an event and potentially control the behavior for subsequent handlers. The default phase preserves the framework’s original handling behavior.

A component can publish an application-level event. When the event is fired, any component or application that has subscribed to the event invokes its handler within a Lightning page. To communicate across the DOM within a Lightning page, or across multiple pages between Visualforce, Lightning pages, and Lightning web components (LWC), use [Lightning Message Service](atlas.en-us.lightning.meta/lightning/message_channel_intro.htm "Use Lightning message service to communicate across the DOM within a Lightning page. Communicate between Visualforce pages embedded in the same Lightning page, Aura components, and Lightning web components, including components in a utility bar and pop-out utilities. Choose whether a component subscribes to messages from the entire application, or from only the active area.") instead.

The component that fires an event is known as the source component. The framework allows you to handle the event in different phases. These phases give you flexibility for how to best process the event for your application.

The phases are:

Capture

The event is captured and trickles down from the application root to the source component. The event can be handled by a component in the containment hierarchy that receives the captured event.

Event handlers are invoked in order from the application root down to the source component that fired the event.

Any registered handler in this phase can stop the event from propagating, at which point no more handlers are called in this phase or the bubble phase. If a component stops the event propagation using event.stopPropagation(), the component becomes the root node used in the default phase.

Any registered handler in this phase can cancel the default behavior of the event by calling event.preventDefault(). This call prevents execution of any of the handlers in the default phase.

Bubble

The component that fired the event can handle it. The event then bubbles up from the source component to the application root. The event can be handled by a component in the containment hierarchy that receives the bubbled event.

Event handlers are invoked in order from the source component that fired the event up to the application root.

Any registered handler in this phase can stop the event from propagating, at which point no more handlers will be called in this phase. If a component stops the event propagation using event.stopPropagation(), the component becomes the root node used in the default phase.

Any registered handler in this phase can cancel the default behavior of the event by calling event.preventDefault(). This call prevents execution of any of the handlers in the default phase.

Default

Event handlers are invoked in a non-deterministic order from the root node through its subtree. The default phase doesn’t have the same propagation rules related to component hierarchy as the capture and bubble phases. The default phase can be useful for handling application events that affect components in different sub-trees of your app.

If the event’s propagation wasn’t stopped in a previous phase, the root node defaults to the application root. If the event’s propagation was stopped in a previous phase, the root node is set to the component whose handler invoked event.stopPropagation().

Here is the sequence of application event propagation.

1.  **Event fired**—An application event is fired. The component that fires the event is known as the source component.
2.  **Capture phase**—The framework executes the capture phase from the application root to the source component until all components are traversed. Any handling event can stop propagation by calling stopPropagation() on the event.
3.  **Bubble phase**—The framework executes the bubble phase from the source component to the application root until all components are traversed or stopPropagation() is called.
4.  **Default phase**—The framework executes the default phase from the root node unless preventDefault() was called in the capture or bubble phases. If the event’s propagation wasn’t stopped in a previous phase, the root node defaults to the application root. If the event’s propagation was stopped in a previous phase, the root node is set to the component whose handler invoked event.stopPropagation().

## Related Topics

- Lightning Message Service (atlas.en-us.lightning.meta/lightning/message_channel_intro.htm)
