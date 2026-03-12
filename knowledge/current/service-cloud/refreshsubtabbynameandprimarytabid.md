---
title: "refreshSubtabByNameAndPrimaryTabId()"
domain: service-cloud
topic: refreshsubtabbynameandprimarytabid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.329Z
estimatedTokens: 376
keywords: [refreshSubtabByNameAndPrimaryTabId, Refreshes, subtab, last, known, URL, specified, name, primary, tab, ID., can't, refresh, external, page, Visualforce, page., only, API, version]
---

# refreshSubtabByNameAndPrimaryTabId()

> Refreshes a subtab with the last
            known URL with the specified name and primary tab ID. This method can't refresh a subtab
            if the last known URL is an external page or a Visualforce page. This
                method is only available in API version 22.0 or later.

# refreshSubtabByNameAndPrimaryTabId()

Refreshes a subtab with the last known URL with the specified name and primary tab ID. This method can't refresh a subtab if the last known URL is an external page or a Visualforce page. This method is only available in API version 22.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| name | string | Name of the subtab to refresh. |
| primaryTabId | string | ID of the primary tab in which the subtab opened. |
| active | boolean | If true, the refreshed subtab displays immediately. If false, the refreshed subtab displays in the background. |
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
| success | boolean | true if the subtab refreshed successfully; false if the subtab didn't refresh. |

## Code Examples

```
sforce.console.refreshSubtabByNameAndPrimaryTabId(name:String, primaryTabId:String, active:Boolean, (optional)callback:Function, (optional)fullRefresh:Boolean)
```

```
<apex:page standardController="Case">

     <A HREF="#" onClick="testRefreshSubtabByNameAndPrimaryTabId();return false">
         Click here to refresh a subtab by name and primary tab ID</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testRefreshSubtabByNameAndPrimaryTabId() {
            //Get the value for 'mySubtab' and 'scc-pt-0' from the openSubtab method
            //These values are for example purposes only
            var subtabName = 'mySubtab';
            var primaryTabId = 'scc-pt-0';
            sforce.console.refreshSubtabByNameAndPrimaryTabId(subtabName, primaryTabId, true, refreshSuccess);
        }
        
        var refreshSuccess = function refreshSuccess(result) {
            //Report whether refreshing the subtab was successful
            if (result.success == true) {
                alert('Subtab refreshed successfully');
            } else {
                alert('Subtab did not refresh');
            }
        };
        
  </script>

</apex:page>
```
