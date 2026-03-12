---
title: "closeTab()"
domain: service-cloud
topic: closetab
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.150Z
estimatedTokens: 561
keywords: [closeTab, Closes, specified, primary, tab, subtab., Keep, mind, closing, first, closes, itself., only, API, version, 20.0, later., Syntax, Note, Arguments]
---

# closeTab()

> Closes a specified primary tab or subtab. Keep in mind that
            closing the first tab in a primary tab closes the primary tab itself. This method is only available in API version 20.0 or later.

# closeTab()

Closes a specified primary tab or subtab. Keep in mind that closing the first tab in a primary tab closes the primary tab itself. This method is only available in API version 20.0 or later.

## Syntax

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

The user interface and API behave different for pinned primary tabs. In the UI, when a primary tab is pinned, you can close subtabs using your mouse. However, in the API, if the primary tab is pinned, you can't close its subtabs.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | string | ID of the primary tab or subtab to close. |
| callback | function | For API version 35.0 or later, the JavaScript method that’s called upon completion of the method. |

## Sample Code API 20.0 or Later–Visualforce

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

To see this example in action, click the custom link on a case. For more information, see [Define Custom Buttons and Links](https://help.salesforce.com/s/articleView?id=defining_custom_links.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Response

None

## Sample Code API Version 35.0 or Later–Visualforce

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

To see this example in action, click the custom link on a case. For more information, see [Define Custom Buttons and Links](https://help.salesforce.com/s/articleView?id=defining_custom_links.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the tab was re-opened, false otherwise. |
| error | string | Error message if the tab couldn’t be closed. |

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_console)

#### Tip

When using Firefox, we recommend that you don't call closeTab() on a tab with an active alert box because the browser may not load properly.

## Code Examples

```
sforce.console.closeTab(id:String, (optional) callback:Function)
```

```
<apex:page standardController="Case">
    <A HREF="#" onClick="testCloseTab();return false">
           Click here to close this tab</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testCloseTab() {
            //First find the ID of the current tab to close it
            sforce.console.getEnclosingTabId(closeSubtab);
        }
        
        var closeSubtab = function closeSubtab(result) {
            //Now that we have the tab ID, we can close it
            var tabId = result.id;
            sforce.console.closeTab(tabId);
        };
    </script>
</apex:page>
```

```
<apex:page standardController="Case">
    <A HREF="#" onClick="testCloseTab();return false">
           Click here to close this tab</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
         var callback = function () {
             if (result.error) {
		        alert("Error message is " + result.error);
             }
         };
        function testCloseTab() {
            //First find the ID of the current tab to close it
            sforce.console.getEnclosingTabId(closeSubtab);
         }

        var closeSubtab = function closeSubtab(result) {
            //Now that we have the tab ID, we can close it
            var tabId = result.id;
            sforce.console.closeTab(tabId, callback);
        };
    </script>
</apex:page>
```
