---
title: "Handle the  render Event Event"
domain: lightning
topic: handle-the-render-event-event
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.180Z
estimatedTokens: 484
keywords: [Handle, render, Event, component, rendered, rerendered, aura, valueRender, known, fired, perform, post-processing, DOM, react, rendering]
---

# Handle the  render Event Event

> When a component is rendered or rerendered, the aura:valueRender event, also known as the render event, is fired. Handle this event to perform
      post-processing on the DOM or react to component rendering or rerendering. The event is
      preferred and easier to use than the alternative of creating a custom
    renderer.

# Handle the render Event Event

When a component is rendered or rerendered, the aura:valueRender event, also known as the render event, is fired. Handle this event to perform post-processing on the DOM or react to component rendering or rerendering. The event is preferred and easier to use than the alternative of creating a custom renderer.

The render event is fired after all methods in a custom renderer are invoked. For more details on the sequence in the rendering or rerendering lifecycles, see [Create a Custom Renderer](atlas.en-us.lightning.meta/lightning/js_renderers.htm "The framework’s rendering service takes in-memory component state and creates and manages the DOM elements owned by the component. If you want to modify DOM elements created by the framework for a component, you can modify the DOM elements in the component’s renderer. Otherwise, the framework will override your changes when the component is rerendered.").

Handling the aura:valueRender event is similar to handling the init hook. Add a handler to your component's markup.

```

```

In this example, the onRender action in your client-side controller handles initial rendering and rerendering of the component. You can choose any name for the action attribute.

#### See Also

-   [Invoking Actions on Component Initialization](atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm "Use the init event to initialize a component or fire an event after component construction but before rendering.")

-   [Create a Custom Renderer](atlas.en-us.lightning.meta/lightning/js_renderers.htm "The framework’s rendering service takes in-memory component state and creates and manages the DOM elements owned by the component. If you want to modify DOM elements created by the framework for a component, you can modify the DOM elements in the component’s renderer. Otherwise, the framework will override your changes when the component is rerendered.")

## Code Examples

```
<aura:handler name="render" value="{!this}" action="{!c.onRender}"/>
```

## Related Topics

- Create a Custom Renderer (atlas.en-us.lightning.meta/lightning/js_renderers.htm)
- Invoking Actions on Component Initialization (atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm)
