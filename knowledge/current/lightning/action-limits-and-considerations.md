---
title: "Action Limits and Considerations"
domain: lightning
topic: action-limits-and-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:48.590Z
estimatedTokens: 511
keywords: [Action, Limits, Considerations, Keep, mind, server-side, actions, Client, Payload, Data, Limit, Boxcar, Component, Lifecycle]
---

# Action Limits and Considerations

> Keep the following limits and other considerations in mind when using server-side
  actions.

# Action Limits and Considerations

Keep the following limits and other considerations in mind when using server-side actions.

## Client Payload Data Limit

Use action.setParams() to set data for an action to be passed to a server-side controller.

The framework batches the actions in the queue into one server request. The request payload includes all of the actions and their data serialized into JSON. The request payload limit is 4 MB.

## Action Limit in a Boxcar Request

The framework returns a 413 HTTP response status code if there are more than 250 actions in a boxcar request. If a user sees this rare error, consider redesigning your custom component to follow best practices and reduce the number of actions in a request.

## Actions and the Component Lifecycle

If your action isn’t executing, make sure that you’re not executing code outside the framework’s normal rendering lifecycle. For example, if you use window.setTimeout() in an event handler to execute some logic after a time delay, wrap your code in $A.getCallback().

You don't need to use $A.getCallback() if your code is executed as part of the framework's call stack; for example, your code is handling an event or in the callback for a server-side controller action.

#### See Also

-   [Events Fired During the Rendering Lifecycle](atlas.en-us.lightning.meta/lightning/components_lifecycle.htm "A component is instantiated, rendered, and rerendered during its lifecycle. A component rerenders only when there’s a programmatic or value change that requires a rerender. For example, if a browser event triggers an action that updates the component’s data, the component rerenders.")

-   [Modifying Components Outside the Framework Lifecycle](atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm "Use $A.getCallback() to wrap any code that modifies a component outside the normal rerendering lifecycle, such as in a setTimeout() call. The $A.getCallback() call ensures that the framework rerenders the modified component and processes any enqueued actions.")

## Related Topics

- Events Fired During the Rendering Lifecycle (atlas.en-us.lightning.meta/lightning/components_lifecycle.htm)
- Modifying Components Outside the Framework Lifecycle (atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm)
