---
title: "Adding JavaScript Remoting to a Visualforce Page"
domain: pages
topic: adding-javascript-remoting-to-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.766Z
estimatedTokens: 516
keywords: [Adding, JavaScript, Remoting, Visualforce, add, function, call]
---

# Adding JavaScript Remoting to a Visualforce Page

> To use JavaScript remoting in a Visualforce page, add the request as a JavaScript
    function call.

# Adding JavaScript Remoting to a Visualforce Page

To use JavaScript remoting in a Visualforce page, add the request as a JavaScript function call.

Add the Apex class as a custom controller or a controller extension to your page.

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pages)

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

The remote method call executes synchronously, but it doesn’t wait for the response to return. When the response returns, the callback function handles it asynchronously. See [Handling the Remote Response](atlas.en-us.pages.meta/pages/pages_js_remoting_handling_response.htm#pages_js_remoting_handling_response "Handle the response to a remote method call asynchronously in the remote method callback function.") for details.

## Code Examples

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

- Handling the Remote Response (atlas.en-us.pages.meta/pages/pages_js_remoting_handling_response.htm)
