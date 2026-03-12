---
title: "refreshSubtabById()"
domain: service-cloud
topic: refreshsubtabbyid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.379Z
estimatedTokens: 346
keywords: [refreshSubtabById, Refreshes, subtab, known, URL, can't, refresh, external, Visualforce, API, version, 22.0, later, Arguments, Sample]
---

# refreshSubtabById()

> Refreshes a subtab with the last known URL with a
            specified ID. This method can't refresh a subtab if the last known URL is an external
            page or a Visualforce page. This
                method is only available in API version 22.0 or later.

# refreshSubtabById()

Refreshes a subtab with the last known URL with a specified ID. This method can't refresh a subtab if the last known URL is an external page or a Visualforce page. This method is only available in API version 22.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | string | ID of the subtab to refresh. |
| activate | boolean | If true, the refreshed subtab displays immediately. If false, the refreshed subtab displays in the background. |
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
sforce.console.refreshSubtabById(id:String, activate:Boolean, (optional)callback:Function, (optional)fullRefresh:Boolean)
```

```
<apex:page standardController="Case">

     <A HREF="#" onClick="testRefreshSubtabById();return false">
         Click here to refresh a subtab by id</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testRefreshSubtabById() {
            //Set the name of the tab by using the openSubtab method
            //This value is for example purposes only
            var subtabId = 'scc-st-0';
            sforce.console.refreshSubtabById(subtabId, true, refreshSuccess);
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
