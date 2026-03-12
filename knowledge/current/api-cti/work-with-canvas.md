---
title: "Work with Canvas"
domain: api-cti
topic: work-with-canvas
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.671Z
estimatedTokens: 649
keywords: [Work, Canvas, integrate, Open, CTI, external, applications, require, authentication, signed, requests, OAuth, 2.0, protocols, Salesforce]
---

# Work with Canvas

> To integrate Open CTI with external applications that require authentication methods,
    such as signed requests or OAuth 2.0 protocols, Salesforce recommends that you use
    Canvas.

# Work with Canvas

To integrate Open CTI with external applications that require authentication methods, such as signed requests or OAuth 2.0 protocols, Salesforce recommends that you use Canvas.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_cti)

#### Important

Open CTI for Lightning Experience doesn’t support Canvas.

Canvas and Open CTI are similar—they’re a set of tools and JavaScript APIs that developers can use to add third-party systems to Salesforce. However, one of the benefits of Canvas, is the ability to choose authentication methods.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

For a canvas app to appear in a Salesforce console, you must add it to the console as a custom console component. For more information, see the Canvas Developer Guide.

When developing a canvas app, and you want to include functionality from Open CTI, do the following:

1.  Include the Open CTI API in index.jsp.
2.  Call Sfdc.canvas.client.signedrequest() to store the signed request needed by the console integration toolkit API. For example, if the Canvas method of authentication is a signed request, do the following:

    ```

    ```

    If the Canvas method of authentication is OAuth, do the following in the callback function used to get the context, as shown in the Canvas Developer Guide:

    ```

    ```


Consider the following when working with Open CTI and canvas apps:

-   The Open CTI API script depends on the signed request and should be added after the call to Sfdc.canvas.client.signedrequest() has executed. We recommend that you load the scripts dynamically.
-   To retrieve the entity ID of the record that is associated with the canvas sidebar component, do the following:

    ```

    ```

-   To retrieve the entityId for OAuth, do the following:

    ```

    ```

    To see an example on how to retrieve msg.payload, see the Canvas Developer Guide.


#### See Also

-   [Salesforce Canvas Developer Guide: Getting Context in Your Canvas App](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/canvas_app_getting_context_code_example.htm "
    Salesforce Canvas Developer Guide: Getting Context in Your Canvas App
    - html (New Window)")

-   [*Salesforce Help*: Add Console Components to Apps in Salesforce Classic](https://help.salesforce.com/HTViewHelpDoc?id=console2_components_create_app.htm&language=en_US "Salesforce Help: Add Console Components to Apps in Salesforce
    Classic - HTML (New Window)")

## Code Examples

```
Sfdc.canvas.client.signedrequest('<%=signedRequest%>')
```

```
Sfdc.canvas.client.signedrequest(msg)
```

```
// Get signedRequest
var signedRequest = Sfdc.canvas.client.signedrequest();
var parsedRequest = JSON.parse(signedRequest);
// get the entity Id that is associated with this canvas sidebar component.
var entityId = parsedRequest.context.environment.parameters.entityId;
```

```
var entityId = msg.payload.environment.parameters.entityId;
```
