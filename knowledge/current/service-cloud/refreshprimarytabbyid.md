---
title: "refreshPrimaryTabById()"
domain: service-cloud
topic: refreshprimarytabbyid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.313Z
estimatedTokens: 349
keywords: [refreshPrimaryTabById, Refreshes, primary, tab, specified, including, its, subtabs., can't, refresh, subtabs, URLs, external, pages, Visualforce, pages., only, API, version, 22.0]
---

# refreshPrimaryTabById()

> Refreshes a primary tab specified by ID, including
            its subtabs. This method can't refresh subtabs with URLs to external pages or
            Visualforce pages. This
                method is only available in API version 22.0 or later.

# refreshPrimaryTabById()

Refreshes a primary tab specified by ID, including its subtabs. This method can't refresh subtabs with URLs to external pages or Visualforce pages. This method is only available in API version 22.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | string | ID of the primary tab to refresh. |
| activate | boolean | If true, the refreshed primary tab displays immediately. If false, the refreshed primary tab displays in the background. |
| callback | function | JavaScript method that’s called upon completion of the method. |
| fullRefresh | boolean | Enables a full refresh of the entire case feed. |

## Sample Code–Visualforce

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

To see this example in action, click the custom link on a case. For more information, see [Define Custom Buttons and Links](https://help.salesforce.com/s/articleView?id=defining_custom_links.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the primary tab refreshed successfully; false if the primary tab didn't refresh. |

## Code Examples

```
sforce.console.refreshPrimaryTabById(id:String, activate:Boolean, (optional)callback:Function, (optional)fullRefresh:Boolean)
```

```
<apex:page standardController="Case">

     <A HREF="#" onClick="testRefreshPrimaryTabById();return false">
         Click here to refresh a primary tab by id</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testRefreshPrimaryTabById() {
            //Get the value for 'scc-pt-0' from the openPrimaryTab method
            //This value is for example purposes only
            var primaryTabId = 'scc-pt-0';
            sforce.console.refreshPrimaryTabById(primaryTabId, true, refreshSuccess);
        }
        
        var refreshSuccess = function refreshSuccess(result) {
            //Report whether refreshing the primary tab was successful
            if (result.success == true) {
                alert('Primary tab refreshed successfully');
            } else {
                alert('Primary did not refresh');
            }
        };
        
  </script>

</apex:page>
```
