---
title: "Apex in AJAX"
domain: apex-guide
topic: apex-in-ajax
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.272Z
keywords: [Apex, AJAX, Note]
---

# Apex in AJAX

# Apex in AJAX

The AJAX toolkit includes built-in support for invoking Apex through anonymous blocks or public webservice methods.

To invoke Apex through anonymous blocks or public webservice methods, include the following lines in your AJAX code:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

For AJAX buttons, use the alternate forms of these includes.

To invoke Apex, use one of the following two methods:

-   Execute anonymously via sforce.apex.executeAnonymous (script). This method returns a result similar to the API's result type, but as a JavaScript structure.
-   Use a class WSDL. For example, you can call the following Apex class:
    
    ```
    
    ```
    
    By using the following JavaScript code:
    
    ```
    
    ```
    
    The execute method takes primitive data types, sObjects, and lists of primitives or sObjects.
    
    To call a webservice method with no parameters, use {} as the third parameter for sforce.apex.execute. For example, to call the following Apex class:
    
    ```
    
    ```
    
    Use the following JavaScript code:
    
    ```
    
    ```
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)
    
    #### Note
    
    If a namespace has been defined for your organization, you must include it in the JavaScript code when you invoke the class. For example, to call the myClass class, the JavaScript code from above would be rewritten as follows:
    
    ```
    
    ```
    
    To verify whether your organization has a namespace, log in to your Salesforce organization and from Setup, enter Packages in the Quick Find box, then select **Packages**. If a namespace is defined, it’s listed under Developer Settings.
    
    For more information on the return datatypes, see [Data Types in AJAX Toolkit](https://developer.salesforce.com/docs/atlas.en-us.260.0.ajax.meta/ajax/sforce_api_ajax_datatypes.htm)
    

Use the following line to display a window with debugging information:

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_invoking_javascript_remoting.htm "JavaScript Remoting")