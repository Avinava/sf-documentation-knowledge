---
title: "setCustomConsoleComponentButtonText()"
domain: service-cloud
topic: setcustomconsolecomponentbuttontext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.426Z
estimatedTokens: 176
keywords: [setCustomConsoleComponentButtonText, text, button, used, launch, application-level, custom, console, component, that’s, page., only, API, version, 25.0, later., Syntax, Arguments, Sample, Code–Visualforce]
---

# setCustomConsoleComponentButtonText()

> Sets the text on a button used to
            launch an application-level custom console component that’s on a page. This method is only available in API version 25.0 or
                later.

# setCustomConsoleComponentButtonText()

Sets the text on a button used to launch an application-level custom console component that’s on a page. This method is only available in API version 25.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| text | string | Text that’s displayed on a button used to launch a custom console component. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if setting the button text was successful; false if setting the button text wasn't successful. |

## Code Examples

```
sforce.console.setCustomConsoleComponentButtonText(text:String, (optional)callback:Function)
```

```
<apex:page>

    <A HREF="#" onClick="testSetCustomConsoleComponentButtonText();return false">
         Click here to set the text on a button used to launch a custom console component</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testSetCustomConsoleComponentButtonText() {
        //Change the custom console component button text to 'Hello World'
            sforce.console.setCustomConsoleComponentButtonText('Hello World');
        }
    </script>
</apex:page>
```
