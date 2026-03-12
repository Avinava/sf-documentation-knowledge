---
title: "focusPrimaryTabByName()"
domain: service-cloud
topic: focusprimarytabbyname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.456Z
estimatedTokens: 281
keywords: [focusPrimaryTabByName, Focuses, browser, primary, tab, already, open, API, version, 22.0, later, Arguments, Sample, Code–Visualforce]
---

# focusPrimaryTabByName()

> Focuses the browser on a primary tab that is
            already open with the specified name. This
                method is only available in API version 22.0 or later.

# focusPrimaryTabByName()

Focuses the browser on a primary tab that is already open with the specified name. This method is only available in API version 22.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| name | string | Name of the primary tab to go to. |
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
| success | boolean | true if going to the primary tab was successful; false if going to the primary tab wasn't successful. |

## Code Examples

```
sforce.console.focusPrimaryTabByName(name:String, (optional)callback:Function)
```

```
<apex:page standardController="Case">

     <A HREF="#" onClick="testFocusPrimaryTabByName();return false">
         Click here to go to a primary tab by name</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testFocusPrimaryTabByName() {
            //Get the value for 'myPrimaryTab' from the openPrimaryTab method
            //This value is for example purposes only
            var primaryTabName = 'myPrimaryTab';
            sforce.console.focusPrimaryTabByName(primaryTabName, focusSuccess);
        }
        
        var focusSuccess = function focusSuccess(result) {
            //Report whether going to the primary tab was successful
            if (result.success == true) {
                alert('Going to the primary tab was successful');
            } else {
                alert('Going to the Primary tab was not successful');
            }
        };
        
  </script>

</apex:page>
```
