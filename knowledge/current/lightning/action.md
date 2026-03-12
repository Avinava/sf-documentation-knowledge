---
title: "Action"
domain: lightning
topic: action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.602Z
estimatedTokens: 881
keywords: [Action, work, JavaScript, actions, communicate, Apex, classes]
---

# Action

> Action contains methods to work with JavaScript
  actions that you can use to communicate with Apex classes.

# Action

Action contains methods to work with JavaScript actions that you can use to communicate with Apex classes.

## Methods

-   **[getError()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getError.htm)**
    Returns an array of error objects for server-side actions only. Each error object has a message field. In any mode except PROD mode, each object also has a stack field, which is a list describing the execution stack when the error occurred.
-   **[getName()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getName.htm)**
    Returns the name of an action.
-   **[getParam()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getParam.htm)**
    Returns an action parameter value for a parameter name.
-   **[getParams()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getParams.htm)**
    Returns the collection of parameters for an action.
-   **[getReturnValue()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getReturnValue.htm)**
    Gets the return value of an Apex action. An Apex action can return any object containing serializable JSON data.
-   **[getState()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getState.htm)**
    Returns the current state of an action. Check the state of the action in the callback after an Apex action completes.
-   **[isBackground()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_isBackground.htm)**
    Returns true if the action is enqueued in the background, false if it’s enqueued in the foreground.
-   **[setAbortable()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_setAbortable.htm)**
    Sets an action as abortable. If the component is not valid, abortable actions are not sent to the server. A component is automatically destroyed and marked invalid by the framework when it is unrendered. Actions not marked abortable are always sent to the server regardless of the validity of the component.
-   **[setBackground()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_setBackground.htm)**
    Sets the action to run as a background action. This cannot be unset. Background actions are usually long running and lower priority actions. A background action is useful when you want your app to remain responsive to a user while it executes a low priority, long-running action. A rough guideline is to use a background action if it takes more than five seconds for the response to return from the server.
-   **[setCallback()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_setCallback.htm)**
    Sets the callback function that is executed after an Apex action returns.
-   **[setParam()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_setParam.htm)**
    Sets a single parameter for an action. Use parameters to pass data to an Apex action.
-   **[setParams()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_setParams.htm)**
    Sets parameters for an action. Use parameters to pass data to an Apex action.
-   **[setStorable()](atlas.en-us.lightning.meta/lightning/ref_jsapi_action_setStorable.htm)**
    Marks an Apex action as storable to have its response stored in the framework’s client-side cache . Enhance your component’s performance by marking actions as storable (cacheable) to quickly show cached data from client-side storage without waiting for a server trip. If the cached data is stale, the framework retrieves the latest data from the server. Caching is especially beneficial for users on high latency, slow, or unreliable connections such as 3G networks.

## Related Topics

- getError() (atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getError.htm)
- getName() (atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getName.htm)
- getParam() (atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getParam.htm)
- getParams() (atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getParams.htm)
- getReturnValue() (atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getReturnValue.htm)
- getState() (atlas.en-us.lightning.meta/lightning/ref_jsapi_action_getState.htm)
- isBackground() (atlas.en-us.lightning.meta/lightning/ref_jsapi_action_isBackground.htm)
- setAbortable() (atlas.en-us.lightning.meta/lightning/ref_jsapi_action_setAbortable.htm)
- setBackground() (atlas.en-us.lightning.meta/lightning/ref_jsapi_action_setBackground.htm)
- setCallback() (atlas.en-us.lightning.meta/lightning/ref_jsapi_action_setCallback.htm)
