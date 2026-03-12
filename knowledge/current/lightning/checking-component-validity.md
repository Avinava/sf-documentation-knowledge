---
title: "Checking Component Validity"
domain: lightning
topic: checking-component-validity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.120Z
estimatedTokens: 926
keywords: [Checking, Component, Validity, navigate, elsewhere, asynchronous, code, executing, framework, unrenders, destroys, made, longer, cmp.isValid, call]
---

# Checking Component Validity

> If you navigate elsewhere in the UI while asynchronous code is executing, the framework
  unrenders and destroys the component that made the asynchronous request. You can still have a
  reference to that component, but it is no longer valid. The cmp.isValid() call returns false for an
  invalid component.

# Checking Component Validity

If you navigate elsewhere in the UI while asynchronous code is executing, the framework unrenders and destroys the component that made the asynchronous request. You can still have a reference to that component, but it is no longer valid. The cmp.isValid() call returns false for an invalid component.

If you call cmp.get() on an invalid component, cmp.get() returns null.

If you call cmp.set() on an invalid component, nothing happens and no error occurs. It’s essentially a no op.

In many scenarios, the cmp.isValid() call isn’t necessary because a null check on a value retrieved from cmp.get() is sufficient. The main reason to call cmp.isValid() is if you’re making multiple calls against the component and you want to avoid a null check for each result.

## Inside the Framework Lifecycle

You don’t need a cmp.isValid() check in the callback in a client-side controller when you reference the component associated with the client-side controller. The framework automatically checks that the component is valid. Similarly, you don’t need a cmp.isValid() check during event handling or in a framework lifecycle hook, such as the init event.

Let’s look at a sample client-side controller.

```

```

The component wired to the client-side controller is passed into the doSomething action as the cmp parameter. When cmp.get("v.displayResult) is called, we don’t need a cmp.isValid() check.

However, if you hold a reference to another component that may not be valid despite your component being valid, you might need a cmp.isValid() check for the other component. Let’s look at another example of a component that has a reference to another component with a local ID of child.

```

```

This line in the previous example without the child component:

```

```

changed to:

```

```

You don’t need a child.isValid() call here as child.get("v.displayResult) will return null if the child component is invalid. Add a child.isValid() check only if you’re making multiple calls against the child component and you want to avoid a null check for each result.

## Outside the Framework Lifecycle

If you reference a component in asynchronous code, such as setTimeout() or setInterval(), or when you use Promises, a cmp.isValid() call checks that the component is still valid before processing the results of the asynchronous request. In many scenarios, the cmp.isValid() call isn’t necessary because a null check on a value retrieved from cmp.get() is sufficient. The main reason to call cmp.isValid() is if you’re making multiple calls against the component and you want to avoid a null check for each result.

For example, you don’t need a cmp.isValid() check within this setTimeout() call as the cmp.set() call doesn’t do anything when the component is invalid.

```

```

#### See Also

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

-   [Invoking Actions on Component Initialization](atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm "Use the init event to initialize a component or fire an event after component construction but before rendering.")

-   [Modifying Components Outside the Framework Lifecycle](atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm "Use $A.getCallback() to wrap any code that modifies a component outside the normal rerendering lifecycle, such as in a setTimeout() call. The $A.getCallback() call ensures that the framework rerenders the modified component and processes any enqueued actions.")

## Code Examples

```
({
    "doSomething" : function(cmp) {
        var action = cmp.get("c.serverEcho");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                if (cmp.get("v.displayResult)) {
                    alert("From server: " + response.getReturnValue());
                }
            }
            // other state handling omitted for brevity
        });

        $A.enqueueAction(action);
    }
})
```

```
({
    "doSomething" : function(cmp) {
        var action = cmp.get("c.serverEcho");
        var child = cmp.find("child");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                if (child.get("v.displayResult)) {
                    alert("From server: " + response.getReturnValue());
                }
            }
            // other state handling omitted for brevity
        });

        $A.enqueueAction(action);
    }
})
```

```
if (cmp.get("v.displayResult)) {
```

```
if (child.get("v.displayResult)) {
```

```
window.setTimeout(
    $A.getCallback(function() {
        cmp.set("v.visible", true);
    }), 5000
);
```

## Related Topics

- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- Invoking Actions on Component Initialization (atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm)
- Modifying Components Outside the Framework Lifecycle (atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm)
