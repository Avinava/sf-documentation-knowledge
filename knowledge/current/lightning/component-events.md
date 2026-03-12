---
title: "Component Events"
domain: lightning
topic: component-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.842Z
estimatedTokens: 657
keywords: [Component, Events, event, fired, instance, handled, containment, hierarchy, receives]
---

# Component Events

> A component event is fired from an instance of a component. A component event can be
    handled by the component that fired the event or by a component in the containment hierarchy
    that receives the event.

# Component Events

A component event is fired from an instance of a component. A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.

-   **[Component Event Propagation](atlas.en-us.lightning.meta/lightning/events_component_propagation.htm)**
    The framework supports capture and bubble phases for the propagation of component events. These phases are similar to DOM handling patterns and provide an opportunity for interested components to interact with an event and potentially control the behavior for subsequent handlers.
-   **[Create Custom Component Events](atlas.en-us.lightning.meta/lightning/events_component_create.htm)**
    Create a custom component event using the <aura:event> tag in a .evt resource. Events can contain attributes that can be set before the event is fired and read when the event is handled.
-   **[Fire Component Events](atlas.en-us.lightning.meta/lightning/events_component_fire.htm)**
    Fire a component event to communicate data to another component. A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.
-   **[Handling Component Events](atlas.en-us.lightning.meta/lightning/events_component_handling_intro.htm)**
    A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.

#### See Also

-   [aura:method](atlas.en-us.lightning.meta/lightning/ref_tag_method.htm "Use <aura:method> to define a method as part of a component's API. This enables you to directly call a method in a component’s client-side controller instead of firing and handling a component event. Using <aura:method> simplifies the code needed for a parent component to call a method on a child component that it contains.")

-   [Application Events](atlas.en-us.lightning.meta/lightning/events_application.htm "Application events follow a traditional publish-subscribe model. An application event is fired from an instance of a component. All components that provide a handler for the event are notified.")

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

-   [Advanced Events Example](atlas.en-us.lightning.meta/lightning/events_demo.htm)

-   [What is Inherited?](atlas.en-us.lightning.meta/lightning/oo_whats_inherited.htm)

## Related Topics

- Component Event Propagation (atlas.en-us.lightning.meta/lightning/events_component_propagation.htm)
- Create Custom Component Events (atlas.en-us.lightning.meta/lightning/events_component_create.htm)
- Fire Component Events (atlas.en-us.lightning.meta/lightning/events_component_fire.htm)
- Handling Component Events (atlas.en-us.lightning.meta/lightning/events_component_handling_intro.htm)
- aura:method (atlas.en-us.lightning.meta/lightning/ref_tag_method.htm)
- Application Events (atlas.en-us.lightning.meta/lightning/events_application.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- Advanced Events Example (atlas.en-us.lightning.meta/lightning/events_demo.htm)
- What is Inherited? (atlas.en-us.lightning.meta/lightning/oo_whats_inherited.htm)
