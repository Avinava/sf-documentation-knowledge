---
title: "setCustomConsoleComponentVisible()"
domain: service-cloud
topic: setcustomconsolecomponentvisible
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.438Z
estimatedTokens: 212
keywords: [setCustomConsoleComponentVisible, window, visibility, application-level, custom, console, component, that’s, page., API, version, 32.0, later., 31.0, earlier, called, setCustomConsoleComponentWindowVisible, Syntax, Arguments, Sample]
---

# setCustomConsoleComponentVisible()

> Sets the window visibility of an
   application-level custom console component that’s on a page. This method is available in
   API version 32.0 and later. In API version 31.0 and earlier, this method was called setCustomConsoleComponentWindowVisible().

# setCustomConsoleComponentVisible()

Sets the window visibility of an application-level custom console component that’s on a page. This method is available in API version 32.0 and later. In API version 31.0 and earlier, this method was called setCustomConsoleComponentWindowVisible().

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| visible | boolean | true to make the custom console component window visible, false to hide the custom console component window. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if setting the button window visibility was successful; false if setting the button window visibility wasn't successful. |

## Code Examples

```
sforce.console.setCustomConsoleComponentVisible(visible:Boolean, (optional)callback:Function)
```

```
<apex:page>

    <A HREF="#" onClick="testSetCustomConsoleComponentVisible();return false">
         Click here to make the custom console component window visible</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testSetCustomConsoleComponentVisible() {
        // Make the custom console component window visible
            sforce.console.setCustomConsoleComponentVisible(true);
        }
    </script>
</apex:page>
```
