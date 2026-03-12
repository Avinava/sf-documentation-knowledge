---
title: "Returning Errors from an Apex Server-Side Controller"
domain: lightning
topic: returning-errors-from-an-apex-server-side-controller
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.621Z
estimatedTokens: 655
keywords: [Returning, Errors, Apex, Server-Side, Controller, throw, System.AuraHandledException, custom, error, message, JavaScript]
---

# Returning Errors from an Apex Server-Side Controller

> Create and throw a System.AuraHandledException from your Apex controller to return a custom error
        message to a JavaScript controller.

# Returning Errors from an Apex Server-Side Controller

Create and throw a System.AuraHandledException from your Apex controller to return a custom error message to a JavaScript controller.

Errors happen. Sometimes they’re expected, such as invalid input from a user, or a duplicate record in a database. Sometimes they’re unexpected, such as... Well, if you’ve been programming for any length of time, you know that the range of unexpected errors is nearly infinite.

When your Apex controller code experiences an error, two things can happen. You can use a catch block and handle the error in Apex. Otherwise, the error is passed back in the controller’s response.

If you handle the error in Apex, you again have two ways you can go. You can process the error in a catch block, perhaps recovering from it, and return a normal response to the client. Or, you can create and throw an AuraHandledException.

The benefit of throwing AuraHandledException, instead of letting a system exception be returned, is that you have a chance to handle the exception more gracefully in your JavaScript controller code. System exceptions have important details stripped out for security purposes, and result in the dreaded “An internal server error has occurred…” message. Nobody likes that. When you use an AuraHandledException you have an opportunity to add some detail back into the response returned to your client-side code. More importantly, you can choose a better message to show your users.

Here’s an example of creating and throwing an AuraHandledException in response to bad input. However, the real benefit of using AuraHandledException comes when you use it in response to a system exception. For example, throw an AuraHandledException in response to catching a DML exception, instead of allowing the DML exception to propagate to your client component code.

```

```

This JavaScript controller code handles the AuraHandledException thrown by the Apex controller.

```

```

When an Apex controller throws an AuraHandledException, the response state in the JavaScript controller is set to ERROR and you can get the error message by processing response.getError().

This example simply logs the error to the console. To display an error prompt in the UI, use the lightning:notificationsLibrary component.

#### See Also

-   [*Salesforce Developers Blog*: Error Handling Best Practices for Lightning and Apex](https://developer.salesforce.com/blogs/2017/09/error-handling-best-practices-lightning-apex.html "Salesforce Developers Blog: Error Handling Best Practices for Lightning
    and Apex - HTML (New Window)")

## Code Examples

```apex
public with sharing class SimpleErrorController {

    static final List<String> BAD_WORDS = new List<String> {
        'bad',
        'words',
        'here'
    };
    
    @AuraEnabled
    public static String helloOrThrowAnError(String name) {

        // Make sure we're not seeing something naughty
        for(String badWordStem : BAD_WORDS) {
            if(name.containsIgnoreCase(badWordStem)) {
                // How rude! Gracefully return an error...
                throw new AuraHandledException('NSFW name detected.');
            }
        }
        
        // No bad word found, so...
        return ('Hello ' + name + '!');
    }
    
}
```

```
({
    "callServer" : function(cmp) {
        var action = cmp.get("c.helloOrThrowAnError");
        action.setParams({ name : "bad" });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("From server: " + response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        // log the error passed in to AuraHandledException
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });

        $A.enqueueAction(action);
    }
})
```
