---
title: "Communicating with Events"
domain: lightning
topic: communicating-with-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.895Z
estimatedTokens: 1163
keywords: [Communicating, Events, framework, uses, event-driven, programming, write, handlers, respond, they, occur, may, triggered, user, interaction]
---

# Communicating with Events

> The framework uses event-driven programming. You write handlers that respond to
    interface events as they occur. The events may or may not have been triggered by user
    interaction.

# Communicating with Events

The framework uses event-driven programming. You write handlers that respond to interface events as they occur. The events may or may not have been triggered by user interaction.

In the Aura Components programming model, events are fired from JavaScript controller actions. Events can contain attributes that can be set before the event is fired and read when the event is handled.

Events are declared by the aura:event tag in a .evt resource, and they can have one of two types: component or application.

Component Events

A component event is fired from an instance of a component. A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.

Application Events

Application events follow a traditional publish-subscribe model. An application event is fired from an instance of a component. All components that provide a handler for the event are notified.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Always try to use a component event instead of an application event, if possible. Component events can only be handled by components above them in the containment hierarchy so their usage is more localized to the components that need to know about them. Application events are best used for something that should be handled at the application level, such as navigating to a specific record. Application events allow communication between components that are in separate parts of the application and have no direct containment relationship.

-   **[Actions and Events](atlas.en-us.lightning.meta/lightning/events_and_actions.htm)**
    The framework uses events to communicate data between components. Events are usually triggered by a user action.
-   **[Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)**
    A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.
-   **[Component Events](atlas.en-us.lightning.meta/lightning/events_component.htm)**
    A component event is fired from an instance of a component. A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.
-   **[Application Events](atlas.en-us.lightning.meta/lightning/events_application.htm)**
    Application events follow a traditional publish-subscribe model. An application event is fired from an instance of a component. All components that provide a handler for the event are notified.
-   **[Event Handler Behavior for Active Components](atlas.en-us.lightning.meta/lightning/event_handler_active_components.htm)**
    To prevent active event handlers on cached pages from causing problems, add a workaround to your code to check if the component is still visible. To avoid this scenario and the workaround, use Lightning message service instead to communicate across the DOM within a Lightning page. The default scope used by Lightning message service channels publishes only to active components.
-   **[Event Handling Lifecycle](atlas.en-us.lightning.meta/lightning/events_overview.htm)**

-   **[Advanced Events Example](atlas.en-us.lightning.meta/lightning/events_demo.htm)**

-   **[Firing Events from Non-Aura Code](atlas.en-us.lightning.meta/lightning/events_external.htm)**
    You can fire Aura events from JavaScript code outside an Aura app. For example, your Aura app might need to call out to some non-Aura code, and then have that code communicate back to your Aura app once it's done.
-   **[Events Best Practices](atlas.en-us.lightning.meta/lightning/events_best_practices.htm)**
    Here are some best practices for working with events.
-   **[Events Fired During the Rendering Lifecycle](atlas.en-us.lightning.meta/lightning/components_lifecycle.htm)**
    A component is instantiated, rendered, and rerendered during its lifecycle. A component rerenders only when there’s a programmatic or value change that requires a rerender. For example, if a browser event triggers an action that updates the component’s data, the component rerenders.
-   **[Events Handled in the Salesforce Mobile App and Lightning Experience](atlas.en-us.lightning.meta/lightning/events_one.htm)**
    The Salesforce mobile app and Lightning Experience handle some events, which you can fire in your Aura component.
-   **[System Events](atlas.en-us.lightning.meta/lightning/events_system.htm)**
    The framework fires several system events during its lifecycle.

## Related Topics

- Actions and Events (atlas.en-us.lightning.meta/lightning/events_and_actions.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- Component Events (atlas.en-us.lightning.meta/lightning/events_component.htm)
- Application Events (atlas.en-us.lightning.meta/lightning/events_application.htm)
- Event Handler Behavior for Active Components (atlas.en-us.lightning.meta/lightning/event_handler_active_components.htm)
- Event Handling Lifecycle (atlas.en-us.lightning.meta/lightning/events_overview.htm)
- Advanced Events Example (atlas.en-us.lightning.meta/lightning/events_demo.htm)
- Firing Events from Non-Aura Code (atlas.en-us.lightning.meta/lightning/events_external.htm)
- Events Best Practices (atlas.en-us.lightning.meta/lightning/events_best_practices.htm)
- Events Fired During the Rendering Lifecycle (atlas.en-us.lightning.meta/lightning/components_lifecycle.htm)
