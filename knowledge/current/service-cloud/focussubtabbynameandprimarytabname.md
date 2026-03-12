---
title: "focusSubtabByNameAndPrimaryTabName()"
domain: service-cloud
topic: focussubtabbynameandprimarytabname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.350Z
estimatedTokens: 305
keywords: [focusSubtabByNameAndPrimaryTabName, Focuses, browser, subtab, already, open, specified, name, primary, tab, name., only, API, version, 22.0, later., Syntax, Arguments, Sample, Code–Visualforce]
---

# focusSubtabByNameAndPrimaryTabName()

> Focuses the browser on a subtab that
            is already open with the specified name and primary tab name. This
                method is only available in API version 22.0 or later.

# focusSubtabByNameAndPrimaryTabName()

Focuses the browser on a subtab that is already open with the specified name and primary tab name. This method is only available in API version 22.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| name | string | Name of the subtab to go to. |
| primaryTabName | string | Name of the primary tab in which the subtab opened. |
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
sforce.console.focusSubtabByNameAndPrimaryTabName(name:String, primaryTabName:String,(optional)callback:Function)
```

```
<apex:page standardController="Case">

     <A HREF="#" onClick="testFocusSubtabByNameAndPrimaryTabName();return false">
         Click here to go to a subtab by name and primary tab name</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testFocusSubtabByNameAndPrimaryTabName() {
            //Get the value for 'mySubtab' and 'myPrimaryTab' from the openSubtab method
            //These values are for example purposes only
            var subtabName = 'mySubtab';
            var primaryTabName = 'myPrimaryTab';
            sforce.console.focusSubtabByNameAndPrimaryTabName(subtabName, primaryTabName, focusSuccess);
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
