---
title: "isCustomConsoleComponentPoppedOut()"
domain: service-cloud
topic: iscustomconsolecomponentpoppedout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.536Z
estimatedTokens: 210
keywords: [isCustomConsoleComponentPoppedOut, Determines, custom, console, component, popped, browser., multi-monitor, components, must, turned, on., only, API, version, 30.0, later., Syntax, Arguments, Sample]
---

# isCustomConsoleComponentPoppedOut()

> Determines if a custom console component
      is popped out from a browser. To use this method,
        multi-monitor components must be turned on. This method is only available in API version
        30.0 or later.

# isCustomConsoleComponentPoppedOut()

Determines if a custom console component is popped out from a browser. To use this method, multi-monitor components must be turned on. This method is only available in API version 30.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if returning the component’s pop out status was successful; false otherwise. |
| poppedOut | boolean | true if the component is popped out; false otherwise. |

## Code Examples

```
sforce.console.isCustomConsoleComponentPoppedOut (callback:Function)
```

```
<apex:page>

    <A HREF="#" onClick="checkPoppedOut(); return false;">
         Is this component popped out?</A> <BR/>

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function checkResult(result) {
          if (result.success) {
            alert('Is this component popped out: ' + result.poppedOut);
          } else {
            alert('Error invoking this method. Check the browser developer console for more information.');
          }
        }
        function checkPoppedOut() {
          sforce.console.isCustomConsoleComponentPoppedOut(checkResult);
        }
    </script>
</apex:page>
```
