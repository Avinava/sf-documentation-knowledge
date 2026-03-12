---
title: "Apex in AJAX"
domain: apex-guide
topic: apex-in-ajax
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.243Z
estimatedTokens: 526
keywords: [Apex, AJAX, toolkit, includes, built-in, support, invoking, anonymous, blocks, webservice]
---

# Apex in AJAX

> The AJAX toolkit includes built-in support for invoking Apex through anonymous blocks
        or public webservice methods.

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

## Code Examples

```
<script src="/soap/ajax/66.0/connection.js" type="text/javascript"></script>
<script src="/soap/ajax/66.0/apex.js" type="text/javascript"></script>
```

```apex
global class myClass { 
  webservice static Id makeContact(String lastName, Account a) { 
        Contact c = new Contact(LastName = lastName, AccountId = a.Id); 
        return c.id; 
    }
}
```

```
var account = sforce.sObject("Account");
var id = sforce.apex.execute("myClass","makeContact",
                             {lastName:"Smith",
                              a:account});
```

```apex
global class myClass{ 
   webservice static String getContextUserName() {
        return UserInfo.getFirstName();
   }
}
```

```
var contextUser = sforce.apex.execute("myClass", "getContextUserName", {});
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_invoking_javascript_remoting.htm)
