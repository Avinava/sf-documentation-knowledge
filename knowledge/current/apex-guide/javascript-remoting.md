---
title: "JavaScript Remoting"
domain: apex-guide
topic: javascript-remoting
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.596Z
estimatedTokens: 660
keywords: [JavaScript, Remoting, Visualforce, call, Apex, controllers, pages, complex, dynamic, behavior, isn’t, possible, standard, AJAX, components]
---

# JavaScript Remoting

> Use JavaScript remoting in Visualforce to call methods in Apex controllers from
        JavaScript. Create pages with complex, dynamic behavior that isn’t possible with the
        standard Visualforce AJAX components.

# JavaScript Remoting

Use JavaScript remoting in Visualforce to call methods in Apex controllers from JavaScript. Create pages with complex, dynamic behavior that isn’t possible with the standard Visualforce AJAX components.

Features implemented using JavaScript remoting require three elements:

-   The remote method invocation you add to the Visualforce page, written in JavaScript.
-   The remote method definition in your Apex controller class. This method definition is written in Apex, but there are some important differences from normal action methods.
-   The response handler callback function you add to or include in your Visualforce page, written in JavaScript.

In your controller, your Apex method declaration is preceded with the @RemoteAction annotation like this:

```

```

Apex @RemoteAction methods must be static and either global or public.

Add the Apex class as a custom controller or a controller extension to your page.

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

Adding a controller or controller extension grants access to all @RemoteAction methods in that Apex class, even if those methods aren’t used in the page. Anyone who can view the page can execute all @RemoteAction methods and provide fake or malicious data to the controller.

Then, add the request as a JavaScript function call. A simple JavaScript remoting invocation takes the following form.

```

```

| Element | Description |
| --- | --- |
| namespace | The namespace of the controller class. The namespace element is required if your organization has a namespace defined, or if the class comes from an installed package. |
| MyController, MyExtension | The name of your Apex controller or extension. |
| method | The name of the Apex method you’re calling. |
| parameters | A comma-separated list of parameters that your method takes. |
| callbackFunction | The name of the JavaScript function that handles the response from the controller. You can also declare an anonymous function inline. callbackFunction receives the status of the method call and the result as parameters. |
| configuration | Configures the handling of the remote call and response. Use this element to change the behavior of a remoting call, such as whether or not to escape the Apex method’s response. |

For more information, see JavaScript Remoting for Apex Controllers in the Visualforce Developer's Guide.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_pages.htm "Visualforce Classes")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_and_ajax.htm "Apex in AJAX")

## Code Examples

```apex
@RemoteAction
global static String getItemId(String objectName) { ... }
```

```
<apex:page controller="MyController" extension="MyExtension">
```

```
[namespace.]MyController.method(
    [parameters...,]
    callbackFunction,
    [configuration]
);
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_pages.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_and_ajax.htm)
