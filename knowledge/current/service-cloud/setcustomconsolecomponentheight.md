---
title: "setCustomConsoleComponentHeight()"
domain: service-cloud
topic: setcustomconsolecomponentheight
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.430Z
estimatedTokens: 242
keywords: [setCustomConsoleComponentHeight, window, height, application-level, custom, console, component, that’s, page., API, version, 32.0, later., Note, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setCustomConsoleComponentHeight()

> Sets the window height of an application-level
      custom console component that’s on a page. This method is available in API version 32.0 or
      later.

# setCustomConsoleComponentHeight()

Sets the window height of an application-level custom console component that’s on a page. This method is available in API version 32.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

If this method is called from a popped out component in a Salesforce console where multi-monitor components is turned on, nothing will happen.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| height | number | The new height in pixels. |
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
sforce.console.setCustomConsoleComponentHeight( height:number, (optional)callback:Function)
```

```
<apex:page>

    <A HREF="#" onClick="testSetCustomConsoleComponentHeight();return false">
         Click here to set the custom console component height to 100px</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testSetCustomConsoleComponentHeight() {
        // Set the custom console component height
            sforce.console.setCustomConsoleComponentHeight(100);
        }
    </script>
</apex:page>
```
