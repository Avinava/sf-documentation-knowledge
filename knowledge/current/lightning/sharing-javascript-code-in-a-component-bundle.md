---
title: "Sharing JavaScript Code in a Component Bundle"
domain: lightning
topic: sharing-javascript-code-in-a-component-bundle
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.157Z
estimatedTokens: 915
keywords: [Sharing, JavaScript, Code, Component, Bundle, Put, functions, want, reuse, component’s, helper, enable, specialization, tasks, processing]
---

# Sharing JavaScript Code in a Component Bundle

> Put functions that you want to reuse in the component’s helper. Helper functions also
        enable specialization of tasks, such as processing data and queueing server-side actions.
        Helper functions are local to a component, improve code reuse, and move the heavy lifting of
        JavaScript logic away from the client-side controller, where possible.

# Sharing JavaScript Code in a Component Bundle

Put functions that you want to reuse in the component’s helper. Helper functions also enable specialization of tasks, such as processing data and queueing server-side actions. Helper functions are local to a component, improve code reuse, and move the heavy lifting of JavaScript logic away from the client-side controller, where possible.

A helper function can be called from any JavaScript code in a component’s bundle, such as from a client-side controller or renderer.

Helper functions are similar to client-side controller functions in shape, surrounded by parentheses and curly braces to denote a JavaScript object in object-literal notation containing a map of name-value pairs. A helper function can pass in any arguments required by the function, such as the component it belongs to, a callback, or any other objects.

```

```

To call another function in the same helper, use the syntax: this.*methodName*, where this is a reference to the helper itself. For example, helperMethod2 calls helperMethod3 with this code.

```

```

## Creating a Helper

A helper resource is part of the component bundle and is auto-wired via the naming convention, <componentName>Helper.js.

To create a helper using the Developer Console, click **HELPER** in the sidebar of the component. This helper file is valid for the scope of the component to which it’s auto-wired.

## Using a Helper in a Controller

Add a helper argument to a controller function to enable the function to use the helper. Specify (component, event, helper) in the controller. These are standard parameters and you don't have to access them in the function.

This controller code calls an updateItem helper function.

```

```

Here’s the helper that contains the updateItem function called by the controller.

```

```

The updateItem function accepts three parameters.

1.  component—The component to which the helper belongs.
2.  item—An item that’s set as an item parameter for the saveItem Apex action.
3.  callback—An optional callback to call after the saveItem Apex action returns. In our example, the newItemEvent controller method passes in only two arguments so there’s no callback.

## Using a Helper in a Renderer

Add a helper argument to a renderer function to enable the function to use the helper. In the renderer, specify (component, helper) as parameters in a function signature to enable the function to access the component's helper. These are standard parameters and you don't have to access them in the function. The following code shows an example on how you can override the afterRender() function in the renderer and call open in the helper method.

**detailsRenderer.js**

```

```

**detailsHelper.js**

```

```

#### See Also

-   [Create a Custom Renderer](atlas.en-us.lightning.meta/lightning/js_renderers.htm "The framework’s rendering service takes in-memory component state and creates and manages the DOM elements owned by the component. If you want to modify DOM elements created by the framework for a component, you can modify the DOM elements in the component’s renderer. Otherwise, the framework will override your changes when the component is rerendered.")

-   [Component Bundles](atlas.en-us.lightning.meta/lightning/components_bundle.htm "A component bundle contains a component or an app and all its related resources.")

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

## Code Examples

```
({
    helperMethod1 : function() {
        // logic here
    },

    helperMethod2 : function(component) {
        // logic here
        this.helperMethod3(var1, var2);
    },

     helperMethod3 : function(var1, var2) {
         // do something with var1 and var2 here
    }
})
```

```
this.helperMethod3(var1, var2);
```

```
/* controller */
({
    newItemEvent: function(component, event, helper) {
        helper.updateItem(component, event.getParam("item"));
    }
})
```

```
/* helper */
({
    updateItem : function(component, item, callback) {
        // Update the items via a server-side action
        var action = component.get("c.saveItem");
        action.setParams({"item" : item});
        // Set any optional callback and enqueue the action
        if (callback) {
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
    }
})
```

```
({
    afterRender : function(component, helper){
        helper.open(component, null, "new");
    }
})
```

## Related Topics

- Create a Custom Renderer (atlas.en-us.lightning.meta/lightning/js_renderers.htm)
- Component Bundles (atlas.en-us.lightning.meta/lightning/components_bundle.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
