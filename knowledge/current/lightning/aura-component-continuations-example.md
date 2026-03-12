---
title: "Aura Component Continuations Example"
domain: lightning
topic: aura-component-continuations-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.920Z
estimatedTokens: 274
keywords: [Aura, Component, Continuations, Here’s, markup, button, starts, process, calling, continuation]
---

# Aura Component Continuations Example

> Here’s the markup for a component with a button that starts the process of calling a
  continuation.

# Aura Component Continuations Example

Here’s the markup for a component with a button that starts the process of calling a continuation.

The component is wired to the Apex class that uses a continuation by setting the controller attribute in the <aura:component\> tag.

```

```

Here’s the component’s JavaScript controller. The code calls the startRequest Apex method that uses a Continuation object. The response.getReturnValue() value for a successful response in the JavScript controller corresponds to the value returned by the Apex callback method defined in the Continuation object.

```

```

This JavaScript controller code is similar to any other component that calls an Apex method.

#### See Also

-   [Make Long-Running Callouts with Continuations](atlas.en-us.lightning.meta/lightning/apex_continuations.htm "Use the Continuation class in Apex to make a long-running request to an external web service. Process the response in a callback method. Continuations are the preferred way to manage callouts because they can provide substantial improvements to the user experience.")

## Code Examples

```
<aura:component controller="SampleContinuationClass">
    <lightning:button label="Call Continuation" onclick="{!c.callContinuation}"/>
</aura:component>
```

```
({
    callContinuation : function(cmp) {
        var action = cmp.get("c.startRequest");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("From server: "
                  + response.getReturnValue()
                  + '
' + JSON.stringify(response.getReturnValue()));
            }
            else if (state === "INCOMPLETE") {
                alert("Continuation action is INCOMPLETE");
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
        // Enqueue action that returns a continuation
        $A.enqueueAction(action);
    }
})
```

## Related Topics

- Make Long-Running Callouts with Continuations (atlas.en-us.lightning.meta/lightning/apex_continuations.htm)
