---
title: "Throwing and Handling Errors"
domain: lightning
topic: throwing-and-handling-errors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.195Z
estimatedTokens: 515
keywords: [Throwing, Handling, Errors, framework, gives, flexibility, unrecoverable, recoverable, app, JavaScript, code, throw, callback, error, server-side]
---

# Throwing and Handling Errors

> The framework gives you flexibility in handling unrecoverable and recoverable app
        errors in JavaScript code. For example, you can throw these errors in a callback when
        handling an error in a server-side response.

# Throwing and Handling Errors

The framework gives you flexibility in handling unrecoverable and recoverable app errors in JavaScript code. For example, you can throw these errors in a callback when handling an error in a server-side response.

Don’t depend on the internals of a Lightning base component for error handling as its internals can change in future releases. Errors that are recoverable can change into unrecoverable errors and vice versa. If you encounter an unexpected error, you can sometimes get more information by [enabling debug mode](https://help.salesforce.com/articleView?id=sf.aura_debug_mode.htm&language=en_US "HTML (New Window)")

## Unrecoverable Errors

Use throw new Error("error message here") for unrecoverable errors, such as an error that prevents your app from starting successfully. The error message is displayed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

$A.error() is deprecated. Throw the native JavaScript Error object instead by using throw new Error().

This example shows you the basics of throwing an unrecoverable error in a JavaScript controller.

```

```

Here is the client-side controller source.

```

```

## Recoverable Errors

To handle recoverable errors, use a component, such as ui:message, to tell users about the problem.

This sample shows you the basics of throwing and catching a recoverable error in a JavaScript controller.

```

```

Here is the client-side controller source.

```

```

The controller code always throws an error and catches it in this example. The message in the error is displayed to the user in a dynamically created ui:message component. The body of the ui:message is a ui:outputText component containing the error text.

#### See Also

-   [Dynamically Creating Components](atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm "Create a component dynamically in your client-side JavaScript code by using the $A.createComponent() method. To create multiple components, use $A.createComponents().")

## Code Examples

```
<!--c:unrecoverableError-->
<aura:component>
    <lightning:button label="throw error" onclick="{!c.throwError}"/>
</aura:component>
```

```
/*unrecoverableErrorController.js*/
({
    throwError : function(component, event){
        throw new Error("I can’t go on. This is the end.");
    }
})
```

```
<!--c:recoverableError-->
<aura:component>
    <p>Click the button to trigger the controller to throw an error.</p>
    <div aura:id="div1"></div>

    <lightning:button label="Throw an Error" onclick="{!c.throwErrorForKicks}"/>
</aura:component>
```

```
/*recoverableErrorController.js*/
({
    throwErrorForKicks: function(cmp) {
        // this sample always throws an error to demo try/catch
        var hasPerm = false;
        try {
            if (!hasPerm) {
                throw new Error("You don't have permission to edit this record.");
            }
        }
        catch (e) {
            $A.createComponents([
                ["ui:message",{
                    "title" : "Sample Thrown Error",
                    "severity" : "error",
                }],
                ["lightning:formattedText",{
                    "value" : e.message
                }]
                ],
                function(components, status, errorMessage){
                    if (status === "SUCCESS") {
                        var message = components[0];
                        var outputText = components[1];
                        // set the body of the ui:message to be the ui:outputText
                        message.set("v.body", outputText);
                        var div1 = cmp.find("div1");
                        // Replace div body with the dynamic component
                        div1.set("v.body", message);
                    }
                    else if (status === "INCOMPLETE") {
                        console.log("No response from server or client is offline.")
                        // Show offline error
                    }
                    else if (status === "ERROR") {
                        console.log("Error: " + errorMessage);
                        // Show error message
                    }
                }
            );
        }
    }
})
```

## Related Topics

- Dynamically Creating Components (atlas.en-us.lightning.meta/lightning/js_cb_dynamic_cmp_async.htm)
