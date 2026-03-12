---
title: "Actions and Events"
domain: lightning
topic: actions-and-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.802Z
estimatedTokens: 952
keywords: [Actions, Events, framework, uses, communicate, data, components, usually, triggered, user, action]
---

# Actions and Events

> The framework uses events to communicate data between components. Events are usually
    triggered by a user action.

# Actions and Events

The framework uses events to communicate data between components. Events are usually triggered by a user action.

Actions

User interaction with an element on a component or app. User actions trigger events, but events aren’t always explicitly triggered by user actions. This type of action is *not* the same as a client-side JavaScript controller, which is sometimes known as a controller action. The following button is wired up to a browser onclick event in response to a button click.

```

```

Clicking the button invokes the handleClick method in the component’s client-side controller.

Events

A notification by the browser regarding an action. Browser events are handled by client-side JavaScript controllers, as shown in the previous example. A browser event is not the same as a framework *component event* or *application event*, which you can create and fire in a JavaScript controller to communicate data between components. For example, you can wire up the click event of a checkbox to a client-side controller, which fires a component event to communicate relevant data to a parent component.

Another type of event, known as a *system event*, is fired automatically by the framework during its lifecycle, such as during component initialization, change of an attribute value, and rendering. Components can handle a system event by registering the event in the component markup.

The following diagram describes what happens when a user clicks a button that requires the component to retrieve data from the server.

![Events can be triggered by actions or other events.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2FactionsNevents.png&folder=lightning)

1.  User clicks a button or interacts with a component, triggering a browser event. For example, you want to save data from the server when the button is clicked.
2.  The button click invokes a client-side JavaScript controller, which provides some custom logic before invoking a helper function.
3.  The JavaScript controller invokes a helper function. A helper function improves code reuse but it’s optional for this example.
4.  The helper function calls an Apex controller method and queues the action.
5.  The Apex method is invoked and data is returned.
6.  A JavaScript callback function is invoked when the Apex method completes.
7.  The JavaScript callback function evaluates logic and updates the component’s UI.
8.  User sees the updated component.

#### See Also

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

-   [Detecting Data Changes with Change Handlers](atlas.en-us.lightning.meta/lightning/js_cb_data_change.htm "Configure a component to automatically invoke a change handler, which is a client-side controller action, when a value in one of the component's attributes changes.")

-   [Calling a Server-Side Action](atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm "Call a server-side controller action from a client-side controller. In the client-side controller, you set a callback, which is called after the server-side action is completed. A server-side action can return any object containing serializable JSON data.")

-   [Events Fired During the Rendering Lifecycle](atlas.en-us.lightning.meta/lightning/components_lifecycle.htm "A component is instantiated, rendered, and rerendered during its lifecycle. A component rerenders only when there’s a programmatic or value change that requires a rerender. For example, if a browser event triggers an action that updates the component’s data, the component rerenders.")

## Code Examples

```
<lightning:button label = "Click Me" onclick = "{!c.handleClick}" />
```

## Related Topics

- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- Detecting Data Changes with Change Handlers (atlas.en-us.lightning.meta/lightning/js_cb_data_change.htm)
- Calling a Server-Side Action (atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm)
- Events Fired During the Rendering Lifecycle (atlas.en-us.lightning.meta/lightning/components_lifecycle.htm)
