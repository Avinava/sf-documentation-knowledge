---
title: "setCustomConsoleComponentPopoutable()"
domain: service-cloud
topic: setcustomconsolecomponentpopoutable
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.434Z
estimatedTokens: 237
keywords: [setCustomConsoleComponentPopoutable, custom, console, component, popped, browser., multi-monitor, components, must, turned, on., only, API, version, 30.0, later., Syntax, Arguments, Sample, Code–Visualforce]
---

# setCustomConsoleComponentPopoutable()

> Sets a custom console component to be
      popped out or popped into a browser. To use this method,
        multi-monitor components must be turned on. This method is only available in API version
        30.0 or later.

# setCustomConsoleComponentPopoutable()

Sets a custom console component to be popped out or popped into a browser. To use this method, multi-monitor components must be turned on. This method is only available in API version 30.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| popoutable | boolean | If true, the component can be popped out or popped into a browser. If false, the component cannot be popped out or popped into a browser. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if enabling pop out or pop in functionality for the component was successful; false otherwise. |

## Code Examples

```
sforce.console.setCustomConsoleComponentPopoutable(popoutable:Boolean, (optional)callback:Function)
```

```
<apex:page>

    <A HREF="#" onClick="enablePopout(); return false;">
         Click here to enable pop out or pop in functionality</A> <BR/> 
    <A HREF="#" onClick="disablePopout(); return false;">
         Click here to disable pop out or pop in functionality</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function checkResult(result) {
          if (result.success) { 
            alert('The method was successfully invoked.');
          } else {
            alert('Error while invoking this method. Check the browser developer console for more information.');
          }
        }

        function enablePopout() {
          sforce.console.setCustomConsoleComponentPopoutable(true, checkResult);
        }

        function disablePopout() {
          sforce.console.setCustomConsoleComponentPopoutable(false, checkResult);
        }
    </script>
</apex:page>
```
