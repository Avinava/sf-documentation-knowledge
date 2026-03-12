---
title: "focusSubtabByNameAndPrimaryTabId()"
domain: service-cloud
topic: focussubtabbynameandprimarytabid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.345Z
estimatedTokens: 303
keywords: [focusSubtabByNameAndPrimaryTabId, Focuses, browser, subtab, already, open, specified, name, primary, tab, ID., only, API, version, 22.0, later., Syntax, Arguments, Sample, Code–Visualforce]
---

# focusSubtabByNameAndPrimaryTabId()

> Focuses the browser on a subtab that is
            already open with the specified name and primary tab ID. This
                method is only available in API version 22.0 or later.

# focusSubtabByNameAndPrimaryTabId()

Focuses the browser on a subtab that is already open with the specified name and primary tab ID. This method is only available in API version 22.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| name | string | Name of the subtab to go to. |
| primaryTabId | string | ID of the primary tab in which the subtab opened. |
| callback | function | JavaScript method that’s called upon completion of the method. |

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
| success | boolean | true if going to the subtab was successful; false if going to the subtab wasn't successful. |

## Code Examples

```
sforce.console.focusSubtabByNameAndPrimaryTabId(name:String, primaryTabId:String,(optional)callback:Function)
```

```
<apex:page standardController="Case">

     <A HREF="#" onClick="testFocusSubtabByNameAndPrimaryTabId();return false">
         Click here to go to a subtab by name and primary tab ID</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testFocusSubtabByNameAndPrimaryTabId() {
            //Get the values for 'mySubtab' and 'scc-pt-0' from the openSubtab method
            //These values are for example purposes only
            var subtabName = 'mySubtab';
            var primaryTabId = 'scc-pt-0';
            sforce.console.focusSubtabByNameAndPrimaryTabId(subtabName, primaryTabId, focusSuccess);
        }
        
        var focusSuccess = function focusSuccess(result) {
            //Report whether going to the subtab was successful
            if (result.success == true) {
                alert('Going to the subtab was successful');
            } else {
                alert('Going to the subtab was not successful');
            }
        };
        
  </script>

</apex:page>
```
