---
title: "Working with Lightning Platform Canvas"
domain: service-cloud
topic: working-with-lightning-platform-canvas
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.763Z
keywords: [Working, Lightning, Platform, Canvas, Note, See]
---

# Working with Lightning Platform Canvas

# Working with Lightning Platform Canvas

To integrate the Salesforce Console with external applications that require authentication methods, such as signed requests or OAuth 2.0 protocols, Salesforce recommends you use Lightning Platform Canvas.

Lightning Platform Canvas and the Salesforce Console Integration Toolkit are similar—they’re a set of tools and JavaScript APIs that developers can use to add third-party systems to Salesforce. However, one of the benefits of Lightning Platform Canvas, is the ability to choose authentication methods. For more information, see the Lightning Platform Canvas Developer’s Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

For a canvas app to appear in a console, you must add it to the console as a custom console component.

When developing a canvas app, and you want to include functionality from the Salesforce Console Integration Toolkit, do the following:

1.  Include the console integration toolkit API in index.jsp.
2.  If your console has an allowlist for domains, add the domain of your canvas app to the allowlist.
3.  Call Sfdc.canvas.client.signedrequest() to store the signed request needed by the console integration toolkit API. For example, if the Lightning Platform Canvas method of authentication is a signed request, do the following:
    
    ```
    
    ```
    
    If the Lightning Platform Canvas method of authentication is OAuth, do the following in the callback function used to get the context as shown in “Getting Context in Your Canvas App” in the Lightning Platform Canvas Developer’s Guide:
    
    ```
    
    ```
    

Consider the following when working with the Salesforce Console Integration Toolkit and canvas apps:

-   The console integration toolkit API script depends on the signed request and should be added after the call to Sfdc.canvas.client.signedrequest() has executed. We recommend that you load the scripts dynamically.
-   To retrieve the entity ID of the record that is associated with the canvas sidebar component, do the following:
    
    ```
    
    ```
    
-   To retrieve the entityId for OAuth, do the following:
    
    ```
    
    ```
    
    To see an example on how to retrieve msg.payload, see the Lightning Platform Canvas Developer’s Guide.
    

#### See Also

-   [Salesforce Canvas Developer Guide: Getting Context in Your Canvas App](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/canvas_app_getting_context_code_example.htm "
    Salesforce Canvas Developer Guide: Getting Context in Your Canvas App
    - html (New Window)")
    
-   [*Salesforce Help*: Add Console Components to Apps in Salesforce Classic](https://help.salesforce.com/HTViewHelpDoc?id=console2_components_create_app.htm&language=en_US "Salesforce Help: Add Console Components to Apps in Salesforce
    Classic - HTML (New Window)")
    
-   [*Salesforce Help*: Allow Domains for a Salesforce Console in Salesforce](https://help.salesforce.com/apex/HTViewHelpDoc?id=console2_allow_domains.htm&language=en_US "Salesforce Help: Allow Domains for a Salesforce Console in
    Salesforce - HTML (New Window)")