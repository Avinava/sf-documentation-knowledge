---
title: "Create a Custom Renderer"
domain: lightning
topic: create-a-custom-renderer
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.187Z
estimatedTokens: 2276
keywords: [Custom, Renderer, framework’s, rendering, service, in-memory, component, state, creates, manages, DOM, elements, owned, want, modify]
---

# Create a Custom Renderer

> The framework’s rendering service takes in-memory
            component state and creates and manages the DOM elements owned by the component. If
        you want to modify DOM elements created by the framework for a component, you can modify the
        DOM elements in the component’s renderer. Otherwise, the framework will override your
        changes when the component is rerendered.

# Create a Custom Renderer

The framework’s rendering service takes in-memory component state and creates and manages the DOM elements owned by the component. If you want to modify DOM elements created by the framework for a component, you can modify the DOM elements in the component’s renderer. Otherwise, the framework will override your changes when the component is rerendered.

The DOM is the language-independent model for representing and interacting with objects in HTML and XML documents. The framework automatically renders your components so you don’t have to know anything more about rendering unless you need to customize the default rendering behavior for a component.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

It’s preferred and easier to [handle the render event](atlas.en-us.lightning.meta/lightning/js_render_handler.htm "When a component is rendered or rerendered, the aura:valueRender event, also known as the render event, is fired. Handle this event to perform post-processing on the DOM or react to component rendering or rerendering. The event is preferred and easier to use than the alternative of creating a custom renderer.") rather than the alternative of creating a custom renderer.

## Base Component Rendering

The base component in the framework is aura:component. Every component extends this base component.

The renderer for aura:component is in componentRenderer.js. This renderer has base implementations for the four phases of the rendering and rerendering cycles:

-   render()
-   rerender()
-   afterRender()
-   unrender()

The framework calls these functions as part of the rendering and rerendering lifecycles and we will learn more about them soon. You can override the base rendering functions in a custom renderer.

## Rendering Lifecycle

The rendering lifecycle happens once in the lifetime of a component unless the component gets explicitly unrendered. When you create a component:

1.  The framework fires an init event, enabling you to update a component or fire an event after component construction but before rendering.
2.  The render() method is called to render the component’s body.
3.  The afterRender() method is called to enable you to interact with the DOM tree after the framework’s rendering service has inserted DOM elements.
4.  The framework fires a render event, enabling you to interact with the DOM tree after the framework’s rendering service has inserted DOM elements. Handling the render event is preferred to creating a custom renderer and overriding afterRender().

## Rerendering Lifecycle

The rerendering lifecycle automatically handles rerendering of components whenever the underlying data changes. Here is a typical sequence.

1.  A browser event triggers one or more Lightning events.
2.  Each Lightning event triggers one or more actions that can update data. The updated data can fire more events.
3.  The rendering service tracks the stack of events that are fired.
4.  The framework rerenders all the components that own modified data by calling each component’s rerender() method.
5.  The framework fires a render event, enabling you to interact with the DOM tree after the framework rerenders a component. Handling the render event is preferred to creating a custom renderer and overriding rerender().

The component rerendering lifecycle repeats whenever the underlying data changes as long as the component is valid and not explicitly unrendered.

For more information, see [Events Fired During the Rendering Lifecycle](atlas.en-us.lightning.meta/lightning/components_lifecycle.htm "A component is instantiated, rendered, and rerendered during its lifecycle. A component rerenders only when there’s a programmatic or value change that requires a rerender. For example, if a browser event triggers an action that updates the component’s data, the component rerenders.").

## Custom Renderer

You don’t normally have to write a custom renderer, but it’s useful when you want to interact with the DOM tree after the framework’s rendering service has inserted DOM elements. If you want to customize rendering behavior and you can’t do it in markup or by using the init event, you can create a client-side renderer.

A renderer file is part of the component bundle and is auto-wired if you follow the naming convention, <componentName>Renderer.js. For example, the renderer for sample.cmp would be in sampleRenderer.js.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

These guidelines are important when you customize rendering.

-   Only modify DOM elements that are part of the component. Never break component encapsulation by reaching in to another component and changing its DOM elements, even if you are reaching in from the parent component.
-   Never fire an event as it can trigger new rendering cycles. An alternative is to use an init event instead.
-   Don’t set attribute values on other components as these changes can trigger new rendering cycles.
-   Move as much of the UI concerns, including positioning, to CSS.

## Customize Component Rendering

Customize rendering by creating a render() function in your component’s renderer to override the base render() function, which updates the DOM.

The render() function returns a DOM node, an array of DOM nodes, or nothing. The base HTML component expects DOM nodes when it renders a component.

You generally want to extend default rendering by calling superRender() from your render() function before you add your custom rendering code. Calling superRender() creates the DOM nodes specified in the markup.

This code outlines a custom render() function.

```

```

## Rerender Components

When an event is fired, it may trigger actions to change data and call rerender() on affected components. The rerender() function enables components to update themselves based on updates to other components since they were last rendered. This function doesn’t return a value.

If you update data in a component, the framework automatically calls rerender().

You generally want to extend default rerendering by calling superRerender() from your renderer() function before you add your custom rerendering code. Calling superRerender() chains the rerendering to the components in the body attribute.

This code outlines a custom rerender() function.

```

```

## Access the DOM After Rendering

The afterRender() function enables you to interact with the DOM tree after the framework’s rendering service has inserted DOM elements. It’s not necessarily the final call in the rendering lifecycle; it’s simply called after render() and it doesn’t return a value.

You generally want to extend default after rendering by calling superAfterRender() function before you add your custom code.

This code outlines a custom afterRender() function.

```

```

## Unrender Components

The base unrender() function deletes all the DOM nodes rendered by a component’s render() function. It is called by the framework when a component is being destroyed. Customize this behavior by overriding unrender() in your component’s renderer. This method can be useful when you are working with third-party libraries that are not native to the framework.

You generally want to extend default unrendering by calling superUnrender() from your unrender() function before you add your custom code.

This code outlines a custom unrender() function.

```

```

#### See Also

-   [Modifying the DOM](atlas.en-us.lightning.meta/lightning/js_dom_access.htm "The Document Object Model (DOM) is the language-independent model for representing and interacting with objects in HTML and XML documents. It’s important to know how to modify the DOM safely so that the framework’s rendering service doesn’t stomp on your changes and give you unexpected results.")

-   [Invoking Actions on Component Initialization](atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm "Use the init event to initialize a component or fire an event after component construction but before rendering.")

-   [Component Bundles](atlas.en-us.lightning.meta/lightning/components_bundle.htm "A component bundle contains a component or an app and all its related resources.")

-   [Modifying Components Outside the Framework Lifecycle](atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm "Use $A.getCallback() to wrap any code that modifies a component outside the normal rerendering lifecycle, such as in a setTimeout() call. The $A.getCallback() call ensures that the framework rerenders the modified component and processes any enqueued actions.")

-   [Sharing JavaScript Code in a Component Bundle](atlas.en-us.lightning.meta/lightning/js_helper.htm "Put functions that you want to reuse in the component’s helper. Helper functions also enable specialization of tasks, such as processing data and queueing server-side actions. Helper functions are local to a component, improve code reuse, and move the heavy lifting of JavaScript logic away from the client-side controller, where possible.")

## Code Examples

```
render : function(cmp, helper) {
    var ret = this.superRender();
    // do custom rendering here
    return ret;
},
```

```
rerender : function(cmp, helper){
    this.superRerender();
    // do custom rerendering here
}
```

```
afterRender: function (component, helper) {
    this.superAfterRender();
    // interact with the DOM here
},
```

```
unrender: function () {
    this.superUnrender();
    // do custom unrendering here
}
```

## Related Topics

- handle the render event (atlas.en-us.lightning.meta/lightning/js_render_handler.htm)
- Events Fired During the Rendering Lifecycle (atlas.en-us.lightning.meta/lightning/components_lifecycle.htm)
- Modifying the DOM (atlas.en-us.lightning.meta/lightning/js_dom_access.htm)
- Invoking Actions on Component Initialization (atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm)
- Component Bundles (atlas.en-us.lightning.meta/lightning/components_bundle.htm)
- Modifying Components Outside the Framework Lifecycle (atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm)
- Sharing JavaScript Code in a Component Bundle (atlas.en-us.lightning.meta/lightning/js_helper.htm)
