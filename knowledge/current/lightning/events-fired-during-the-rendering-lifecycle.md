---
title: "Events Fired During the Rendering Lifecycle"
domain: lightning
topic: events-fired-during-the-rendering-lifecycle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.304Z
estimatedTokens: 1565
keywords: [Events, Fired, Rendering, Lifecycle, component, instantiated, rendered, rerendered, rerenders, there’s, programmatic, change, requires, rerender, browser]
---

# Events Fired During the Rendering Lifecycle

> A component is instantiated, rendered, and rerendered during its lifecycle. A component
    rerenders only when there’s a programmatic or value change that requires a rerender. For
    example, if a browser event triggers an action that updates the component’s data, the component
    rerenders.

# Events Fired During the Rendering Lifecycle

A component is instantiated, rendered, and rerendered during its lifecycle. A component rerenders only when there’s a programmatic or value change that requires a rerender. For example, if a browser event triggers an action that updates the component’s data, the component rerenders.

## Component Creation

The component lifecycle starts when the client sends an HTTP request to the server and the component configuration data is returned to the client. No server trip is made if the component definition is already on the client from a previous request and the component has no server dependencies.

Let’s look at an app with several nested components. The framework instantiates the app and goes through the children of the v.body facet to create each component. First, it creates the component definition, its entire parent hierarchy, and then creates the facets within those components. The framework also creates any component dependencies on the server, including definitions for attributes, interfaces, controllers, and actions.

The following image lists the order of component creation.

![Component definitions and their dependencies are created on the server.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fcomponent_creation.png&folder=lightning)

After creating a component instance, the framework sends the serialized component definitions and instances down to the client. Definitions are cached but not the instance data. The client deserializes the response to create the JavaScript objects or maps, resulting in an instance tree that’s used to render the component instance. When the component tree is ready, the init event is fired for all the components, starting from the child components and finishing in the parent component.

## Component Rendering

The rendering lifecycle happens once in the lifetime of a component unless the component gets explicitly unrendered. When you create a component:

1.  The component service that constructs the components fires the init event to signal that initialization has completed.

    ```

    ```

    You can customize the init handler and add your own controller logic before the component starts rendering. For more information, see [Invoking Actions on Component Initialization](atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm "Use the init event to initialize a component or fire an event after component construction but before rendering.").
2.  For each component in the tree, the base implementation of render() or your custom renderer is called to start component rendering. For more information, see [Create a Custom Renderer](atlas.en-us.lightning.meta/lightning/js_renderers.htm "The framework’s rendering service takes in-memory component state and creates and manages the DOM elements owned by the component. If you want to modify DOM elements created by the framework for a component, you can modify the DOM elements in the component’s renderer. Otherwise, the framework will override your changes when the component is rerendered."). Similar to the component creation process, rendering starts at the root component, its child components and their super components, if any, and finally the subchild components.
3.  After your components are rendered to the DOM, afterRender() is called to signal that rendering is completed for each of these component definitions. It enables you to interact with the DOM tree after the framework rendering service has created the DOM elements.
4.  To indicate that the client is done waiting for a response to the server request XHR, the aura:doneWaiting event is fired. You can handle this event by adding a handler wired to a client-side controller action.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

    #### Note

    The aura:doneWaiting event is deprecated. The aura:doneWaiting application event is fired for every server response, even for responses from other components in your app. Unless your component is running in complete isolation in a standalone app and not included in Lightning Experience or the Salesforce mobile app, the container app may trigger your event handler multiple times. This behavior makes it difficult to handle each event appropriately.

5.  The framework fires a render event, enabling you to interact with the DOM tree after the framework’s rendering service has inserted DOM elements. Handling the render event is preferred to creating a custom renderer and overriding afterRender(). For more information, see [Handle the render Event Event](atlas.en-us.lightning.meta/lightning/js_render_handler.htm "When a component is rendered or rerendered, the aura:valueRender event, also known as the render event, is fired. Handle this event to perform post-processing on the DOM or react to component rendering or rerendering. The event is preferred and easier to use than the alternative of creating a custom renderer.").
6.  Finally, the aura:doneRendering event is fired at the end of the rendering lifecycle.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

    #### Note

    The aura:doneRendering event is deprecated. Unless your component is running in complete isolation in a standalone app and not included in complex apps, such as Lightning Experience or the Salesforce mobile app, the container app may trigger your event handler multiple times. This behavior makes it difficult to handle each event appropriately.


## Rendering Nested Components

Let’s say that you have an app myApp.app that contains a component myCmp.cmp with a nested component.

During initialization, the init() event is fired in this order: the nested component, myCmp.cmp, and myApp.app.

#### See Also

-   [Create a Custom Renderer](atlas.en-us.lightning.meta/lightning/js_renderers.htm "The framework’s rendering service takes in-memory component state and creates and manages the DOM elements owned by the component. If you want to modify DOM elements created by the framework for a component, you can modify the DOM elements in the component’s renderer. Otherwise, the framework will override your changes when the component is rerendered.")

## Code Examples

```
<aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
```

## Related Topics

- Invoking Actions on Component Initialization (atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm)
- Create a Custom Renderer (atlas.en-us.lightning.meta/lightning/js_renderers.htm)
- Handle the render Event Event (atlas.en-us.lightning.meta/lightning/js_render_handler.htm)
