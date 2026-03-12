---
title: "$A namespace"
domain: lightning
topic: a-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.712Z
estimatedTokens: 925
keywords: [entry, point, framework, JavaScript, code]
---

# $A namespace

> The $A namespace is the entry point for using
  the framework in JavaScript code.

# $A namespace

The $A namespace is the entry point for using the framework in JavaScript code.

## Methods

-   **[createComponent()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_createComponent.htm)**
    Create a component from a type and a set of attributes. This method accepts the name of a type of component, a map of attributes, and a callback to notify the caller.
-   **[createComponents()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_createComponents.htm)**
    Create an array of components from a list of types and attributes. This method accepts a list of component names and attribute maps, and a callback to notify the caller.
-   **[enqueueAction()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_enqueueAction.htm)**
    Queue a call to an Apex action . The framework queues up actions before sending them to the server. This mechanism is largely transparent to you when you’re writing code but it enables the framework to minimize network traffic by batching multiple actions into one request (XHR).
-   **[error()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_error.htm)**
    Deprecated. For a serious error that has no recovery path, throw a standard JavaScript error instead by using throw new Error(msg).
-   **[get()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_get.htm)**
    Returns a value from the specified global value provider using property syntax.
-   **[getCallback()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_getCallback.htm)**
    Use $A.getCallback() to wrap any code that modifies a component outside the normal rerendering lifecycle, such as in a setTimeout() call. The $A.getCallback() call ensures that the framework rerenders the modified component and processes any enqueued actions.
-   **[getComponent()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_getComponent.htm)**
    Gets an instance of a component from either a global ID or a DOM element that was created by a rendered component.
-   **[getReference()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_getReference.htm)**
    Returns a live reference to the global value requested using property syntax.
-   **[getRoot()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_getRoot.htm)**
    Gets the root component or application. For example, $A.getRoot().get("v.attrName") returns the value of the attrName attribute from the root component.
-   **[getToken()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_getToken.htm)**
    Returns an application configuration token referenced by name. A tokens file is configured with the tokens attribute in the <aura:application> tag.
-   **[log()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_log.htm)**
    Deprecated. Logs to the browser's JavaScript console, if it is available. This method doesn't log in production or debug modes so it’s only useful for internal usage by the framework.
-   **[reportError()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_reportError.htm)**
    Report an error to the server after handling it. Note that the method should be used only if the try-catch mechanism of error handling is not desired or not functional, such as in nested promises.
-   **[run()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_run.htm)**
    Deprecated. Use getCallback() instead.
-   **[set()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_set.htm)**
    Sets a value on the specified global value provider using property syntax.
-   **[warning()](atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_warning.htm)**
    Deprecated. Logs a warning to the browser's JavaScript console, if it is available.

## Related Topics

- createComponent() (atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_createComponent.htm)
- createComponents() (atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_createComponents.htm)
- enqueueAction() (atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_enqueueAction.htm)
- error() (atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_error.htm)
- get() (atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_get.htm)
- getCallback() (atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_getCallback.htm)
- getComponent() (atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_getComponent.htm)
- getReference() (atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_getReference.htm)
- getRoot() (atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_getRoot.htm)
- getToken() (atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_getToken.htm)
