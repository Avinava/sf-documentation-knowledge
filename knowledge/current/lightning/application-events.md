---
title: "Application Events"
domain: lightning
topic: application-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.809Z
estimatedTokens: 704
keywords: [Application, Events, follow, traditional, publish-subscribe, model, event, fired, instance, component, components, provide, handler, notified]
---

# Application Events

> Application events follow a traditional
            publish-subscribe model. An application event is fired from an instance of a component.
            All components that provide a handler for the event are notified.

# Application Events

Application events follow a traditional publish-subscribe model. An application event is fired from an instance of a component. All components that provide a handler for the event are notified.

![Fires an event that's handled by B, D, and E](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Flightning_components_events_app.png&folder=lightning)

-   **[Application Event Propagation](atlas.en-us.lightning.meta/lightning/events_application_propagation.htm)**
    The framework supports capture, bubble, and default phases for the propagation of application events. The capture and bubble phases are similar to DOM handling patterns and provide an opportunity for interested components to interact with an event and potentially control the behavior for subsequent handlers. The default phase preserves the framework’s original handling behavior.
-   **[Create Custom Application Events](atlas.en-us.lightning.meta/lightning/events_application_create.htm)**
    Create a custom application event using the <aura:event> tag in a .evt resource. Events can contain attributes that can be set before the event is fired and read when the event is handled.
-   **[Fire Application Events](atlas.en-us.lightning.meta/lightning/events_application_fire.htm)**
    Application events follow a traditional publish-subscribe model. An application event is fired from an instance of a component. All components that provide a handler for the event are notified.
-   **[Handling Application Events](atlas.en-us.lightning.meta/lightning/events_application_handling.htm)**
    Use <aura:handler> in the markup of the handler component.

#### See Also

-   [Component Events](atlas.en-us.lightning.meta/lightning/events_component.htm "A component event is fired from an instance of a component. A component event can be handled by the component that fired the event or by a component in the containment hierarchy that receives the event.")

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

-   [Application Event Propagation](atlas.en-us.lightning.meta/lightning/events_application_propagation.htm "The framework supports capture, bubble, and default phases for the propagation of application events. The capture and bubble phases are similar to DOM handling patterns and provide an opportunity for interested components to interact with an event and potentially control the behavior for subsequent handlers. The default phase preserves the framework’s original handling behavior.")

-   [Advanced Events Example](atlas.en-us.lightning.meta/lightning/events_demo.htm)

## Related Topics

- Application Event Propagation (atlas.en-us.lightning.meta/lightning/events_application_propagation.htm)
- Create Custom Application Events (atlas.en-us.lightning.meta/lightning/events_application_create.htm)
- Fire Application Events (atlas.en-us.lightning.meta/lightning/events_application_fire.htm)
- Handling Application Events (atlas.en-us.lightning.meta/lightning/events_application_handling.htm)
- Component Events (atlas.en-us.lightning.meta/lightning/events_component.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- Advanced Events Example (atlas.en-us.lightning.meta/lightning/events_demo.htm)
