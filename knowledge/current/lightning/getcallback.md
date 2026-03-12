---
title: "getCallback()"
domain: lightning
topic: getcallback
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.733Z
estimatedTokens: 366
keywords: [getCallback, $A.getCallback, wrap, any, code, modifies, component, outside, normal, rerendering, lifecycle, setTimeout, call, ensures, framework]
---

# getCallback()

> Use $A.getCallback() to wrap
   any code that modifies a component outside the normal rerendering lifecycle, such as in a setTimeout() call. The $A.getCallback() call ensures that the framework rerenders the modified component and
   processes any enqueued actions.

# getCallback()

Use $A.getCallback() to wrap any code that modifies a component outside the normal rerendering lifecycle, such as in a setTimeout() call. The $A.getCallback() call ensures that the framework rerenders the modified component and processes any enqueued actions.

Don't use $A.getCallback() if your code is executed as part of the framework's call stack. For example, your code is handling an event or in the callback for an Apex controller action.

Run async operations with a $A.getCallback() wrapper. For example, use setTimeout() and setInterval() with $A.getCallback(). Use Promise resolve or reject handlers with $A.getCallback().

When using $A.getCallback(function callback) with a Promise, the function runs after the Promise resolves. For example:

```

```

## Signature

getCallback (function callback)

## Parameters

callback

Type: function

The method to call after establishing an Aura context.

## Sample Code

Use $A.getCallback() with component validity check.

```

```

Use Promise handling with Aura lifecycle management.

```

```

#### See Also

-   [Modifying Components Outside the Framework Lifecycle](atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm "Use $A.getCallback() to wrap any code that modifies a component outside the normal rerendering lifecycle, such as in a setTimeout() call. The $A.getCallback() call ensures that the framework rerenders the modified component and processes any enqueued actions.")

## Code Examples

```
({
    getUser : function(component, event, helper) {
        
        // Call helper to get the Promise object
        var userPromise = helper.fetchUserData();
        
        // Set the Promise object into an attribute (v.userPromise)
        component.set("v.userPromise", userPromise);
        
        // Use .then() with the Promise that's retrieved via component.get()
        // The Promise resolves and its result is passed to the function
        component.get("v.userPromise").then(
            
            $A.getCallback(function(result) { 
                
                // 'result' is returned object from the helper
                var userName = result.name; 
                var userId = result.id;
                
                // Use the data to update a component attribute
                component.set("v.userName", userName);
            })
        ).catch($A.getCallback(function(error) {
            // Handle any potential errors during the promise resolution
            component.set("v.userName", "Error fetching data.");
            console.error("Promise rejected:", error);
        }));
    }
})
```

```
window.setTimeout(
    $A.getCallback(function() {
        if(cmp.isValid())
        cmp.set("v.value", data);
    }), 5000
);
```

```
promise.then($A.getCallback(function(result) {
    if(cmp.isValid())
    helper.process(result); 
    }
));
```

## Related Topics

- Modifying Components Outside the Framework Lifecycle (atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm)
