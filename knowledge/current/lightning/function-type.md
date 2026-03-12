---
title: "Function Type"
domain: lightning
topic: function-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.416Z
estimatedTokens: 330
keywords: [Function, attribute, aura, corresponding, JavaScript, pass, component, can’t]
---

# Function Type

> An attribute of an aura:method can have a
                type corresponding to a JavaScript function so that you can pass a function into the
                method. An attribute of a component can’t have a type corresponding to a JavaScript
                function.

# Function Type

An attribute of an aura:method can have a type corresponding to a JavaScript function so that you can pass a function into the method. An attribute of a component can’t have a type corresponding to a JavaScript function.

For an example of using a function type with aura:method, see [Return Result for Asynchronous Code](atlas.en-us.lightning.meta/lightning/js_cmp_methods_async.htm "aura:method executes synchronously. Use the return statement to return a value from synchronous JavaScript code. JavaScript code that calls a server-side action is asynchronous. Asynchronous code can continue to execute after it returns. You can’t use the return statement to return the result of an asynchronous call because the aura:method returns before the asynchronous code completes. For asynchronous code, use a callback instead of a return statement.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Don’t send attributes with type="Function" to the server. These attributes are intended to only be used on the client side.

The most robust way to communicate between components is to use an event. If you get an error in a component with an attribute of type Function, fire an event in the child component instead and handle it in the parent component.

## Related Topics

- Return Result for Asynchronous Code (atlas.en-us.lightning.meta/lightning/js_cmp_methods_async.htm)
