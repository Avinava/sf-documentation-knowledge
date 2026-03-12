---
title: "Calling a Server-Side Action"
domain: lightning
topic: calling-a-server-side-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.583Z
estimatedTokens: 1656
keywords: [Calling, Server-Side, Action, Call, controller, client-side, callback, completed, any, containing, serializable, JSON, data]
---

# Calling a Server-Side Action

> Call a server-side controller action from a client-side
controller. In the client-side controller, you set a callback, which
is called after the server-side action is completed. A server-side
action can return any object containing serializable JSON data.

# Calling a Server-Side Action

Call a server-side controller action from a client-side controller. In the client-side controller, you set a callback, which is called after the server-side action is completed. A server-side action can return any object containing serializable JSON data.

A client-side controller is a JavaScript object in object-literal notation containing a map of name-value pairs.

Let’s say that you want to trigger a server-call from a component. The following component contains a button that’s wired to a client-side controller echo action. SimpleServerSideController contains a method that returns a string passed in from the client-side controller.

```

```

This client-side controller includes an echo action that executes a serverEcho method on a server-side controller.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=lightning)

#### Tip

Use unique names for client-side and server-side actions in a component. A JavaScript function (client-side action) with the same name as an Apex method (server-side action ) can lead to hard-to-debug issues. In debug mode, the framework logs a browser console warning about the clashing client-side and server-side action names.

```

```

In the client-side controller, we use the value provider of c to invoke a server-side controller action. We also use the c syntax in markup to invoke a client-side controller action.

The cmp.get("c.serverEcho") call indicates that we’re calling the serverEcho method in the server-side controller. The method name in the server-side controller must match everything after the c. in the client-side call. In this case, that’s serverEcho.

The implementation of the serverEcho Apex method is shown in [Apex Server-Side Controller Overview](atlas.en-us.lightning.meta/lightning/controllers_server_apex.htm "Create a server-side controller in Apex and use the @AuraEnabled annotation to enable access to the controller method.").

Use action.setParams() to set data to be passed to the server-side controller. The following call sets the value of the firstName argument on the server-side controller’s serverEcho method based on the firstName attribute value.

```

```

action.setCallback() sets a callback action that is invoked after the server-side action returns.

```

```

The server-side action results are available in the response variable, which is the argument of the callback.

response.getState() gets the state of the action returned from the server.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

You don’t need a cmp.isValid() check in the callback in a client-side controller when you reference the component associated with the client-side controller. The framework automatically checks that the component is valid.

response.getReturnValue() gets the value returned from the server. In this example, the callback function alerts the user with the value returned from the server.

$A.enqueueAction(action) adds the server-side controller action to the queue of actions to be executed. Actions that are enqueued will run at the end of the event loop. Rather than sending a separate request for each individual action, the framework processes the event chain and batches the queued actions into fewer, more efficient requests.

Actions are sent to the server asynchronously, and can execute and return in any order. Action callbacks are also asynchronous, and can execute in a different order than the actions themselves. See [Batching of Server-side Actions](atlas.en-us.lightning.meta/lightning/controllers_server_actions_batching.htm "Multiple queued actions are batched together into a group, and then sent to the server in a single request (XHR) to minimize network round trips. The batching of actions is also known as boxcar’ing, similar to a train that couples boxcars together.").

-   **[Passing Data to an Apex Controller](atlas.en-us.lightning.meta/lightning/controllers_server_apex_pass_data.htm)**
    Use action.setParams() in JavaScript to set data to pass to an Apex controller.
-   **[Returning Data from an Apex Server-Side Controller](atlas.en-us.lightning.meta/lightning/controllers_server_apex_returning_data.htm)**
    Return results from a server-side controller to a client-side controller using the return statement. Results data must be serializable into JSON format.
-   **[Returning Errors from an Apex Server-Side Controller](atlas.en-us.lightning.meta/lightning/controllers_server_apex_custom_errors.htm)**
    Create and throw a System.AuraHandledException from your Apex controller to return a custom error message to a JavaScript controller.
-   **[Action States](atlas.en-us.lightning.meta/lightning/controllers_server_actions_states.htm)**
    Call a server-side controller action from a client-side controller. The action can have different states during processing.

#### See Also

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

-   [Passing Data to an Apex Controller](atlas.en-us.lightning.meta/lightning/controllers_server_apex_pass_data.htm "Use action.setParams() in JavaScript to set data to pass to an Apex controller.")

-   [Queuing of Server-Side Actions](atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm "The framework queues up actions before sending them to the server. Actions are grouped together into batches, and then sent to the server together. This process enables the framework to reduce network traffic by batching multiple actions into fewer, more efficient requests.")

-   [Action States](atlas.en-us.lightning.meta/lightning/controllers_server_actions_states.htm "Call a server-side controller action from a client-side controller. The action can have different states during processing.")

-   [Checking Component Validity](atlas.en-us.lightning.meta/lightning/js_cmp_isvalid.htm "If you navigate elsewhere in the UI while asynchronous code is executing, the framework unrenders and destroys the component that made the asynchronous request. You can still have a reference to that component, but it is no longer valid. The cmp.isValid() call returns false for an invalid component.")

-   [Action Limits and Considerations](atlas.en-us.lightning.meta/lightning/controllers_server_actions_limits.htm "Keep the following limits and other considerations in mind when using server-side actions.")

## Code Examples

```
<aura:component controller="SimpleServerSideController">
    <aura:attribute name="firstName" type="String" default="world"/>
    <lightning:button label="Call server" onclick="{!c.echo}"/>
</aura:component>
```

```
({
    "echo" : function(cmp) {
        // create a one-time use instance of the serverEcho action
        // in the server-side controller
        var action = cmp.get("c.serverEcho");
        action.setParams({ firstName : cmp.get("v.firstName") });

        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Alert the user with the value returned 
                // from the server
                alert("From server: " + response.getReturnValue());

                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
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

        // optionally set storable, abortable, background flag here

        // A client-side action could cause multiple events, 
        // which could trigger other events and 
        // other server-side action calls.
        // $A.enqueueAction adds the server-side action to the queue.
        $A.enqueueAction(action);
    }
})
```

```
action.setParams({ firstName : cmp.get("v.firstName") });
```

```
action.setCallback(this, function(response) { ... });
```

## Related Topics

- Apex Server-Side Controller Overview (atlas.en-us.lightning.meta/lightning/controllers_server_apex.htm)
- Batching of Server-side Actions (atlas.en-us.lightning.meta/lightning/controllers_server_actions_batching.htm)
- Passing Data to an Apex Controller (atlas.en-us.lightning.meta/lightning/controllers_server_apex_pass_data.htm)
- Returning Data from an Apex Server-Side Controller (atlas.en-us.lightning.meta/lightning/controllers_server_apex_returning_data.htm)
- Returning Errors from an Apex Server-Side Controller (atlas.en-us.lightning.meta/lightning/controllers_server_apex_custom_errors.htm)
- Action States (atlas.en-us.lightning.meta/lightning/controllers_server_actions_states.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- Queuing of Server-Side Actions (atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm)
- Checking Component Validity (atlas.en-us.lightning.meta/lightning/js_cmp_isvalid.htm)
- Action Limits and Considerations (atlas.en-us.lightning.meta/lightning/controllers_server_actions_limits.htm)
