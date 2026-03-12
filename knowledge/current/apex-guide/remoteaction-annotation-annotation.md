---
title: "RemoteAction Annotation Annotation"
domain: apex-guide
topic: remoteaction-annotation-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.493Z
estimatedTokens: 723
keywords: [RemoteAction, Annotation, support, Apex, Visualforce, via, JavaScript, process, often, referred, remoting]
---

# RemoteAction Annotation Annotation

> The RemoteAction annotation
      provides support for Apex methods used in Visualforce to be called via JavaScript. This
      process is often referred to as JavaScript remoting.

# RemoteAction Annotation Annotation

The RemoteAction annotation provides support for Apex methods used in Visualforce to be called via JavaScript. This process is often referred to as JavaScript remoting.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Methods with the RemoteAction annotation must be static and either global or public.

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
| configuration | Configures the handling of the remote call and response. Use this element to change the behavior of a remoting call, such as whether to escape the Apex method’s response. |

In your controller, your Apex method declaration is preceded with the @RemoteAction annotation like this:

```

```

Apex @RemoteAction methods must be static and either global or public.

Your method can take Apex primitives, collections, typed and generic sObjects, and user-defined Apex classes and interfaces as arguments. Generic sObjects must have an ID or sobjectType value to identify actual type. Interface parameters must have an apexType to identify actual type. Your method can return Apex primitives, sObjects, collections, user-defined Apex classes and enums, SaveResult, UpsertResult, DeleteResult, SelectOption, or PageReference.

For more information, see “JavaScript Remoting for Apex Controllers” in the Visualforce Developer's Guide.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_ReadOnly.htm "ReadOnly Annotation Annotation")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_SuppressWarnings.htm "SuppressWarnings Annotation Annotation")

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

```apex
@RemoteAction
global static String getItemId(String objectName) { ... }
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_ReadOnly.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_SuppressWarnings.htm)
