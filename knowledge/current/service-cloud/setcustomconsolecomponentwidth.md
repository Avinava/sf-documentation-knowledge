---
title: "setCustomConsoleComponentWidth()"
domain: service-cloud
topic: setcustomconsolecomponentwidth
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:36:50.894Z
estimatedTokens: 241
keywords: [Arguments, setCustomConsoleComponentWidth, window, width, application-level, console, that’s, API, 32.0, Sample, Code–Visualforce]
---

> Sets the window width of an
   application-level custom console component that’s on a page. This method is available in API
   version 32.0 or later.

# setCustomConsoleComponentWidth()

Sets the window width of an application-level custom console component that’s on a page. This method is available in API version 32.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

If this method is called from a popped out component in a Salesforce console where multi-monitor components is turned on, nothing will happen.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| width | number | The new width in pixels. |
| callback | function | Javascript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the method call was successful; false otherwise. |

## Code Examples

```
sforce.console.setCustomConsoleComponentWidth( width:number, callback:Function)
```

```
<apex:page>

    <A HREF="#" onClick="testSetCustomConsoleComponentWidth();return false">
         Click here to set the custom console component width to 100px</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testSetCustomConsoleComponentWidth() {
        // Set the custom console component width
            sforce.console.setCustomConsoleComponentWidth(100);
        }
    </script>
</apex:page>
```
