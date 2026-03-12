---
title: "disableTabClose()"
domain: service-cloud
topic: disabletabclose
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.309Z
estimatedTokens: 477
keywords: [disableTabClose, Prevents, user, closing, tab, subtab, doesn’t, specify, enclosing, re-enable, disabled, API, version, 36.0, later]
---

# disableTabClose()

> Prevents a user from closing a tab or a subtab.
            If the ID parameter doesn’t specify a tab, the enclosing tab is used. You can also use
            this method to re-enable a tab that has been disabled. Available in API version
        36.0 or later.

# disableTabClose()

Prevents a user from closing a tab or a subtab. If the ID parameter doesn’t specify a tab, the enclosing tab is used. You can also use this method to re-enable a tab that has been disabled. Available in API version 36.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

-   If you disable subtabs from closing, the primary tab is also disabled from closing.
-   If a record is deleted whose primary tab is disabled, the tab is forcibly closed.
-   If a record is deleted whose subtab is disabled, the subtab is not closed.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| disable | boolean | Specifies whether to disable the tab. If true, the user can’t close the tab. If false, the user can close the tab. |
| tabId | string | The tabId for the tab to enable or disable. Use false to automatically select the enclosing tab or subtab without needing to specify a tabId. The enclosing tabId can’t be inferred when this call is made from outside a sidebar component. For example, if you call this method from a footer widget, specify the tabId. If the tabId is for a “Details” subtab of a primary tab, the primary tabId is used instead. |
| callback | function | JavaScript method that’s called upon completion of the method. The callback is passed a response object. See response information below. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the action completed successfully, false otherwise. |
| message | string | If the action completed successfully, message contains the affected tabId. If the action failed, message contains the error message. |

## Code Examples

```
sforce.console.disableTabClose(disable:boolean, (optional) tabId:String, (optional) callback:Function)
```

```
<apex:page >
<html>
  <head>
    <title>Disable close Tab on Load</title>

    <!-- Service Console integration API library -->
    <script src="/support/console/66.0/integration.js"></script>

    <!-- Callback functions to handle tab events -->
    <script type="text/javascript">

      function displayResultsCallback(result){
        var resDiv = document.getElementById("eventResults");
        resDiv.innerHTML = JSON.stringify(result);
      }

      // For use within a tab's sidebar (you don't need tab ID)

      function testDisableTabCloseTrueWithoutId() {
        sforce.console.disableTabClose(true, false, displayResultsCallback);
      }

      function testDisableTabCloseFalseWithoutId() {
        sforce.console.disableTabClose(false, false, displayResultsCallback);
      }

      // For use anywhere (you need the tab ID)

      // Note: Your tab ID might be different than the one used here. 
      //       You can get the tab ID many different ways,
      //       including sforce.console.getEnclosingTabId().
      //       See the documentation for details.
      function testDisableTabCloseTrueWithId() {
        var tabId = window.prompt("Enter the tab ID","scc-pt-0");
        sforce.console.disableTabClose(true, tabId, displayResultsCallback);
      }

      function testDisableTabCloseFalseWithId() {
        var tabId = window.prompt("Enter the tab ID","scc-pt-0");
        sforce.console.disableTabClose(false, tabId, displayResultsCallback);
      }
     
    </script>
  </head>

  <body>
    <h1>Disable Tab Close Examples</h1>
    <br/><br/>
     
    <h2>API Callback Result</h2>
    <br/>
    
    <code><div id="eventResults" /></code>
    <br/>

    <h2>With No Tab ID</h2>
    <p>The tab ID will be auto-detected by context, or the event will fail.</p>

    <ul>
    <li><a href="#" onClick="testDisableTabCloseTrueWithoutId();return false;">
    Disable closing for the enclosing tab</a></li>

    <li><a href="#" onClick="testDisableTabCloseFalseWithoutId();return false;">
    Re-enable closing for the enclosing tab</a></li>
    </ul>
     
    <h2>With Tab ID Provided</h2>
    <p>When the event context doesn't have a detectable tab ID, you can 
    supply it yourself.</p>

    <ul>
    <li><a href="#" onClick="testDisableTabCloseTrueWithId();return false;">
    Disable closing for a specific tab (via tab ID)</a></li>

    <li><a href="#" onClick="testDisableTabCloseFalseWithId();return false;">
    Re-enable closing for a specific tab (via tab ID)</a></li>
    </ul>

  </body>
</html>
</apex:page>
```
