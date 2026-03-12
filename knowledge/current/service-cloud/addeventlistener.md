---
title: "addEventListener()"
domain: service-cloud
topic: addeventlistener
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.231Z
estimatedTokens: 544
keywords: [addEventListener, Adds, listener, custom, event, standard, fired, API, version, 25.0, later, 30.0, Arguments, Sample, Code]
---

# addEventListener()

> Adds a listener for a custom event type or a standard
            event type when the event is fired. This method adds a listener for custom event types
            in API version 25.0 or later; it adds a listener for standard event types in API version
            30.0 or later.

# addEventListener()

Adds a listener for a custom event type or a standard event type when the event is fired. This method adds a listener for custom event types in API version 25.0 or later; it adds a listener for standard event types in API version 30.0 or later.

For the list of standard events, see [Methods for Console Events](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_events.htm).

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventType | string | Custom event type for which eventListener listens. |
| eventListener | function | JavaScript method called when an eventType is fired. |
| additionalParams | object | Optional parameters accepted by this method. The supported properties on this object are tabId: The ID of the tab to listen for the specified event.This argument is only available in API version 30.0 or later. |

## Sample Code API Version 25.0 or Later–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| message | string | The message which is sent with the fired event.If the response is from a custom keyboard shortcut, the message includes the following information on which the browser is focused, in this order:Object ID of the primary tabID of the primary tabObject ID of the subtabID of the subtab |

## Sample Code API Version 30.0 or Later–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| message | string | The message which is sent with the fired event.If the response is from a console event, the message includes payload details as described in Methods for Console Events.If the response is from a custom keyboard shortcut, the message includes the following information on which the browser is focused, in this order:Object ID of the primary tabID of the primary tabObject ID of the subtabID of the subtab |

## Code Examples

```
sforce.console.addEventListener( eventType: String, eventListener:Function, (optional)additionalParams:Object )
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">

        var listener = function (result) {
            alert('Message received from event: ' + result.message);
        };
        //Add a listener for the 'SampleEvent' event type
        sforce.console.addEventListener('SampleEvent', listener);
    </script>
</apex:page>
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">

        var onEnclosingPrimaryTabClose = function (result) {
            alert('The enclosing primary tab is about to be closed. Tab ID: ' + result.id + ', Object ID: ' + (result.objectId ? result.objectId : 'not available'));
        };

        //Add a listener to handle the closing of the enclosing primary tab 
        sforce.console.getEnclosingPrimaryTabId(function (result) { 
            if (result.id) {
                sforce.console.addEventListener(sforce.console.ConsoleEvent.CLOSE_TAB,
                onEnclosingPrimaryTabClose, { tabId : result.id });
            } else {
                alert('Could not find an enclosing primary TAB!');
            }
        });
    </script>
</apex:page>
```

## Related Topics

- Methods
                    for Console Events (atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_events.htm)
- Methods for Console Events (atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_events.htm)
