---
title: "Using JavaScript Promises"
domain: lightning
topic: using-javascript-promises
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.176Z
estimatedTokens: 1149
keywords: [JavaScript, Promises, ES6, code, simplify, handles, success, failure, asynchronous, calls, chains, together, multiple, Promise, Chaining]
---

# Using JavaScript Promises

> You can use ES6 Promises in JavaScript code. Promises can simplify code that handles the
  success or failure of asynchronous calls, or code that chains together multiple asynchronous
  calls.

# Using JavaScript Promises

You can use ES6 Promises in JavaScript code. Promises can simplify code that handles the success or failure of asynchronous calls, or code that chains together multiple asynchronous calls.

If the browser doesn’t provide a native version, the framework uses a polyfill so that promises work in all browsers supported for Lightning Experience.

We assume that you are familiar with the fundamentals of promises. For a great introduction to promises, see [https://web.dev/articles/promises](https://web.dev/articles/promises "HTML (New Window)").

Promises are an optional feature. Some people love them, some don’t. Use them if they make sense for your use case.

## Create a Promise

This firstPromise function returns a Promise.

```

```

The promise constructor determines the conditions for calling resolve() or reject() on the promise.

## Chaining Promises

When you need to coordinate or chain together multiple callbacks, promises can be useful. The generic pattern is:

```

```

The then() method chains multiple promises. In this example, each resolve handler returns another promise.

then() is part of the Promises API. It takes two arguments:

1.  A callback for a fulfilled promise (resolve handler)
2.  A callback for a rejected promise (reject handler)

The first callback, function(result), is called when resolve() is called in the promise constructor. The result object in the callback is the object passed as the argument to resolve().

The second callback, function(error), is called when reject() is called in the promise constructor. The error object in the callback is the object passed as the argument to reject().

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The two callbacks are wrapped by $A.getCallback() in our example. What’s that all about? Promises execute their resolve and reject functions asynchronously so the code is outside the Lightning event loop and normal rendering lifecycle. If the resolve or reject code makes any calls to the Lightning Component framework, such as setting a component attribute, use $A.getCallback() to wrap the code. For more information, see [Modifying Components Outside the Framework Lifecycle](atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm "Use $A.getCallback() to wrap any code that modifies a component outside the normal rerendering lifecycle, such as in a setTimeout() call. The $A.getCallback() call ensures that the framework rerenders the modified component and processes any enqueued actions.").

## Always Use catch() or a Reject Handler

The reject handler in the first then() method returns a promise with errorRecoveryPromise(). Reject handlers are often used "midstream" in a promise chain to trigger an error recovery mechanism.

The Promises API includes a catch() method to optionally catch unhandled errors. Always include a reject handler or a catch() method in your promise chain.

Throwing an error in a promise doesn’t trigger window.onerror, which is where the framework configures its global error handler. If you don't have a catch() method, keep an eye on your browser’s console during development for reports about uncaught errors in a promise. To show an error message in a catch() method, use $A.reportError(). The syntax for catch() is:

```

```

For more information on catch(), see the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch "HTML (New Window)").

## Don’t Use Storable Actions in Promises

The framework stores the response for storable actions in client-side cache. This stored response can dramatically improve the performance of your app and allow offline usage for devices that temporarily don’t have a network connection. Storable actions are only suitable for read-only actions.

Storable actions might have their callbacks invoked more than once: first with cached data, then with updated data from the server. The multiple invocations don't align well with promises, which are expected to resolve or reject only once.

#### See Also

-   [Storable Actions](atlas.en-us.lightning.meta/lightning/controllers_server_storable_actions.htm "Enhance your component’s performance by marking actions as storable (cacheable) to quickly show cached data from client-side storage without waiting for a server trip. If the cached data is stale, the framework retrieves the latest data from the server. Caching is especially beneficial for users on high latency, slow, or unreliable connections such as 3G networks.")

## Code Examples

```
firstPromise : function() {
    return new Promise($A.getCallback(function(resolve, reject) {
      // do something
    
      if (/* success */) {
        resolve("Resolved");
      }
      else {
        reject("Rejected");
      }
    }));
}
```

```
firstPromise()
    .then(
        // resolve handler
        $A.getCallback(function(result) {
            return anotherPromise();
        }),

        // reject handler
        $A.getCallback(function(error) {
            console.log("Promise was rejected: ", error);
            return errorRecoveryPromise();
        })
    )
    .then(
        // resolve handler
        $A.getCallback(function() {
            return yetAnotherPromise();
        })
    );
```

```
promise.then(...)
    .catch(function(error) {
        $A.reportError("error message here", error);
    });
```

## Related Topics

- Modifying Components Outside the Framework Lifecycle (atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm)
- Storable Actions (atlas.en-us.lightning.meta/lightning/controllers_server_storable_actions.htm)
