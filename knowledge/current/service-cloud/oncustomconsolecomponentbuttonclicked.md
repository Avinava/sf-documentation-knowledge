---
title: "onCustomConsoleComponentButtonClicked()"
domain: service-cloud
topic: oncustomconsolecomponentbuttonclicked
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.313Z
estimatedTokens: 234
keywords: [onCustomConsoleComponentButtonClicked, Registers, function, call, button, clicked, application-level, custom, console, component, API, version, 25.0, later, Arguments]
---

# onCustomConsoleComponentButtonClicked()

> Registers a function to call when
            a button is clicked on an application-level custom console component. This method is only available in API version 25.0 or
                later.

# onCustomConsoleComponentButtonClicked()

Registers a function to call when a button is clicked on an application-level custom console component. This method is only available in API version 25.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method called when a button is clicked on a custom console component. |

## Sample Code–Visualforce

```

```

## Event Handler Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The ID of the custom console component which includes the page. |
| windowHidden | boolean | true if the custom console component window is hidden after the button is clicked; false if the custom console component window is visible after the button is clicked. |

## Code Examples

```
sforce.console.onCustomConsoleComponentButtonClicked(eventHandler:Function)
```

```
<apex:page>

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
             var eventHandler = function (result) {
                 alert('The Custom Console Component button is clicked. The component ID is: ' + result.id + 
                 ' and the component window is: ' + (result.windowHidden ? 'hidden' : 'visible'));
        };
        
        sforce.console.onCustomConsoleComponentButtonClicked(eventHandler);
    </script>

</apex:page>
```
