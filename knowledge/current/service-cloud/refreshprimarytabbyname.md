---
title: "refreshPrimaryTabByName()"
domain: service-cloud
topic: refreshprimarytabbyname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.319Z
estimatedTokens: 350
keywords: [refreshPrimaryTabByName, Refreshes, primary, tab, specified, name, including, its, subtabs., can't, refresh, subtabs, URLs, external, pages, Visualforce, pages., only, API, version]
---

# refreshPrimaryTabByName()

> Refreshes a primary tab specified by name,
            including its subtabs. This method can't refresh subtabs with URLs to external pages or
            Visualforce pages. This
                method is only available in API version 22.0 or later.

# refreshPrimaryTabByName()

Refreshes a primary tab specified by name, including its subtabs. This method can't refresh subtabs with URLs to external pages or Visualforce pages. This method is only available in API version 22.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| name | string | Name of the primary tab to refresh. |
| active | boolean | If true, the refreshed primary tab displays immediately. If false, the refreshed primary tab displays in the background. |
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
sforce.console.refreshPrimaryTabByName(name:String, active:Boolean, (optional)callback:Function), (optional)fullRefresh:Boolean)
```

```
<apex:page standardController="Case">

     <A HREF="#" onClick="testRefreshPrimaryTabByName();return false">
         Click here to refresh a primary tab by name</A>

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testRefreshPrimaryTabByName() {
            //Set the name of the tab by using the openPrimaryTab method
            //This value is for example purposes only
            var primaryTabName = 'myPrimaryTab';
            sforce.console.refreshPrimaryTabByName(primaryTabName, true, refreshSuccess);
        }
        
        var refreshSuccess = function refreshSuccess(result) {
            //Report whether refreshing the primary tab was successful
            if (result.success == true) {
                alert('Primary tab refreshed successfully');
            } else {
                alert('Primary tab did not refresh');
            }
        };
        
  </script>

</apex:page>
```
