---
title: "Modifying DOM Elements Managed by"
domain: lightning
topic: modifying-dom-elements-managed-by
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.145Z
estimatedTokens: 735
keywords: [Modifying, DOM, Elements, Managed, framework, creates, manages, owned, component, want, modify, created, handler, component’s, render]
---

# Modifying DOM Elements Managed by

> The framework creates and manages the DOM elements owned by a component. If you want to
    modify these DOM elements created by the framework, modify the DOM elements in the handler for
    the component’s render event or in a custom renderer.
    Otherwise, the framework will override your changes when the component is
    rerendered.

# Modifying DOM Elements Managed by

The framework creates and manages the DOM elements owned by a component. If you want to modify these DOM elements created by the framework, modify the DOM elements in the handler for the component’s render event or in a custom renderer. Otherwise, the framework will override your changes when the component is rerendered.

For example, if you modify DOM elements directly from a client-side controller, the changes may be overwritten when the component is rendered.

You can read from the DOM outside a render event handler or a custom renderer.

The simplest approach is to leave DOM updates to the framework. Update a component’s attribute and use an expression in the markup. The framework’s rendering service takes care of the DOM updates.

You can modify CSS classes for a component outside a renderer by using the $A.util.addClass(), $A.util.removeClass(), and $A.util.toggleClass() methods.

There are some use cases where you want to perform post-processing on the DOM or react to rendering or rerendering of a component. For these use cases, there are a few options.

-   **[Handle the render Event Event](atlas.en-us.lightning.meta/lightning/js_render_handler.htm)**
    When a component is rendered or rerendered, the aura:valueRender event, also known as the render event, is fired. Handle this event to perform post-processing on the DOM or react to component rendering or rerendering. The event is preferred and easier to use than the alternative of creating a custom renderer.
-   **[Create a Custom Renderer](atlas.en-us.lightning.meta/lightning/js_renderers.htm)**
    The framework’s rendering service takes in-memory component state and creates and manages the DOM elements owned by the component. If you want to modify DOM elements created by the framework for a component, you can modify the DOM elements in the component’s renderer. Otherwise, the framework will override your changes when the component is rerendered.

#### See Also

-   [Modifying DOM Elements Managed by External Libraries](atlas.en-us.lightning.meta/lightning/js_dom_modify_external.htm "You can use different libraries, such as a charting library, to create and manage DOM elements. You don’t have to modify these DOM elements within the render event handler or a renderer because they are managed by the external library.")

-   [Using Expressions](atlas.en-us.lightning.meta/lightning/expr_overview.htm "Expressions allow you to make calculations and access property values and other data within component markup. Use expressions for dynamic output or passing values into components by assigning them to attributes.")

-   [Dynamically Showing or Hiding Markup](atlas.en-us.lightning.meta/lightning/js_cb_show_hide_markup.htm "You can use CSS to toggle markup visibility. However, <aura:if> is the preferred approach because it defers the creation and rendering of the enclosed element tree until needed.")

## Related Topics

- Handle the render Event Event (atlas.en-us.lightning.meta/lightning/js_render_handler.htm)
- Create a Custom Renderer (atlas.en-us.lightning.meta/lightning/js_renderers.htm)
- Modifying DOM Elements Managed by External Libraries (atlas.en-us.lightning.meta/lightning/js_dom_modify_external.htm)
- Using Expressions (atlas.en-us.lightning.meta/lightning/expr_overview.htm)
- Dynamically Showing or Hiding Markup (atlas.en-us.lightning.meta/lightning/js_cb_show_hide_markup.htm)
