---
title: "Return Result for Asynchronous Code"
domain: lightning
topic: return-result-for-asynchronous-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.131Z
estimatedTokens: 1012
keywords: [Result, Asynchronous, Code, aura, executes, synchronously, statement, synchronous, JavaScript, calls, server-side, action, continue, execute, can’t]
---

# Return Result for Asynchronous Code

> aura:method executes synchronously. Use the return statement to return a value from synchronous
        JavaScript code. JavaScript code that calls a server-side action is asynchronous.
        Asynchronous code can continue to execute after it returns. You can’t use the return statement to return the result of an
        asynchronous call because the aura:method returns
        before the asynchronous code completes. For asynchronous code, use a callback instead of a
            return statement.

# Return Result for Asynchronous Code

aura:method executes synchronously. Use the return statement to return a value from synchronous JavaScript code. JavaScript code that calls a server-side action is asynchronous. Asynchronous code can continue to execute after it returns. You can’t use the return statement to return the result of an asynchronous call because the aura:method returns before the asynchronous code completes. For asynchronous code, use a callback instead of a return statement.

## Step 1: Define aura:method in Markup

Let’s look at an echo aura:method that uses a callback. We’ll use the c:auraMethodCallerWrapper.app and components outlined in [Calling Component Methods](atlas.en-us.lightning.meta/lightning/js_cmp_methods.htm "Use <aura:method> to define a method as part of a component's API. This enables you to directly call a method in a component’s client-side controller instead of firing and handling a component event. Using <aura:method> simplifies the code needed for a parent component to call a method on a child component that it contains."). Here’s the echo aura:method in the c:auraMethod component.

```

```

The echo aura:method has an aura:attribute with a name of callback. This attribute enables you to set a callback that’s invoked by the aura:method after execution of the server-side action in SimpleServerSideController.

## Step 2: Implement aura:method Logic in Controller

The echo aura:method invokes echo() in auraMethodController.js. Let’s look at the source.

```

```

echo() calls the serverEcho() server-side controller action, which we’ll create next.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

You can’t return the result with a return statement. The aura:method returns before the asynchronous server-side action call completes. Instead, we invoke the callback passed into the aura:method and set the result as a parameter in the callback.

## Step 3: Create Apex Server-Side Controller

The echo aura:method calls a server-side controller action called serverEcho. Here’s the source for the server-side controller.

```

```

The serverEcho() method returns a String.

## Step 4: Call aura:method from Parent Controller

Here’s the controller for c:auraMethodCaller. It calls the echo aura:method in its child component, c:auraMethod.

```

```

callAuraMethodServerTrip() finds the child component, c:auraMethod, and calls its echo aura:method. echo() passes a callback function into the aura:method.

The callback configured in auraMethodCallerController.js logs the result.

```

```

## Step 5: Add Button to Initiate Call to aura:method

The c:auraMethodCaller markup contains a lightning:button that invokes callAuraMethodServerTrip() in auraMethodCallerController.js. We use this button to initiate the call to the aura:method in the child component.

Here’s the markup for c:auraMethodCaller.

```

```

#### See Also

-   [Return Result for Synchronous Code](atlas.en-us.lightning.meta/lightning/js_cmp_methods_sync.htm "aura:method executes synchronously. A synchronous method finishes executing before it returns. Use the return statement to return a value from synchronous JavaScript code.")

-   [Calling Component Methods](atlas.en-us.lightning.meta/lightning/js_cmp_methods.htm "Use <aura:method> to define a method as part of a component's API. This enables you to directly call a method in a component’s client-side controller instead of firing and handling a component event. Using <aura:method> simplifies the code needed for a parent component to call a method on a child component that it contains.")

-   [aura:method](atlas.en-us.lightning.meta/lightning/ref_tag_method.htm "Use <aura:method> to define a method as part of a component's API. This enables you to directly call a method in a component’s client-side controller instead of firing and handling a component event. Using <aura:method> simplifies the code needed for a parent component to call a method on a child component that it contains.")

## Code Examples

```
<!-- c:auraMethod -->
<aura:component controller="SimpleServerSideController">
    <aura:method name="echo"
      description="Sample method with server-side call">
        <aura:attribute name="callback" type="Function" />
    </aura:method>
    
    <p>This component has an aura:method definition.</p>
</aura:component>
```

```
/* auraMethodController.js */
({
    echo : function(cmp, event) {
        var params = event.getParam('arguments');
        var callback;
        if (params) {
            callback = params.callback;
        }

        var action = cmp.get("c.serverEcho");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("From server: " + response.getReturnValue());
                // return doesn't work for async server action call
                //return response.getReturnValue();
                // call the callback passed into aura:method
                if (callback) callback(response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +
                          errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
})
```

```apex
public with sharing class SimpleServerSideController {
    @AuraEnabled
    public static String serverEcho() {
        return ('Hello from the server');
    }
}
```

```
/* auraMethodCallerController.js */
({    
    callAuraMethodServerTrip : function(component, event, helper) {
        var childCmp = component.find("child");
        // call the aura:method in the child component
        childCmp.echo(function(result) {
            console.log("callback for aura:method was executed");
            console.log("result: " + result);
        });
    },
})
```

```
function(result) {
    console.log("callback for aura:method was executed");
    console.log("result: " + result);
}
```

## Related Topics

- Calling Component Methods (atlas.en-us.lightning.meta/lightning/js_cmp_methods.htm)
- Return Result for Synchronous Code (atlas.en-us.lightning.meta/lightning/js_cmp_methods_sync.htm)
- aura:method (atlas.en-us.lightning.meta/lightning/ref_tag_method.htm)
