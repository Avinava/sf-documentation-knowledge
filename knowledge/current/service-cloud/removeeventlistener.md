---
title: "removeEventListener()"
domain: service-cloud
topic: removeeventlistener
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.341Z
estimatedTokens: 260
keywords: [removeEventListener, Removes, listener, custom, event, standard, type., removes, types, API, version, 25.0, later, 30.0, later., Syntax, Arguments, Sample, Code, Version]
---

# removeEventListener()

> Removes a listener for a custom event type or a
            standard event type. This method removes a listener for custom event types in API
            version 25.0 or later; it removes a listener for standard event types in API version
            30.0 or later.

# removeEventListener()

Removes a listener for a custom event type or a standard event type. This method removes a listener for custom event types in API version 25.0 or later; it removes a listener for standard event types in API version 30.0 or later.

For the list of standard events, see [Methods for Console Events](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_events.htm).

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventType | string | Event type for which eventListener is removed. |
| eventListener | function | Event listener to remove. |
| additionalParams | object | Optional parameters accepted by this method. The supported properties on this object are tabId: The ID of the tab to remove the listener for the specified event.This argument is only available in API version 30.0 or later. |

## Sample Code API Version 25.0 or Later–Visualforce

```

```

## Response

None

## Sample Code API Version 30.0 or Later–Visualforce

```

```

## Response

None

## Code Examples

```
sforce.console.removeEventListener( eventType: String, eventListener:Function, (optional)additionalParams:Object )
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
         <A HREF="#" onClick="testRemoveEventListener(); return false;">
              Click here to remove an event listener for the 'SampleEvent' event type</A>

    <script type="text/javascript">
        var listener = function (result) {
            alert('Message received from event: ' + result.message);
        };
        //Add a listener for the 'SampleEvent' event type
        sforce.console.addEventListener('SampleEvent', listener);

        function testRemoveEventListener() {
            sforce.console.removeEventListener('SampleEvent', listener);
        }
    </script>
</apex:page>
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
         <A HREF="#" onClick="testRemoveEventListener(); return false;">
              Click here to remove an event listener for the console 'CLOSE_TAB' event type</A>

    <script type="text/javascript">
        var tabId;

        var onEnclosingPrimaryTabClose = function (result) {
            alert('The enclosing primary tab is about to be closed. Tab ID: ' + result.id + ',
                    Object ID: ' + (result.objectId ? result.objectId : 'not available'));
        };

        //Add a listener to handle the closing of the enclosing primary tab
        sforce.console.getEnclosingPrimaryTabId(function (result) {
            if (result.id) {
                tabId = result.id;
                sforce.console.addEventListener(sforce.console.ConsoleEvent.CLOSE_TAB,
    onEnclosingPrimaryTabClose, { tabId : tabId });
            } else {
                alert('Could not find an enclosing primary TAB!');
            }
        });

        function testRemoveEventListener() {
            sforce.console.removeEventListener(sforce.console.ConsoleEvent.CLOSE_TAB,
                           onEnclosingPrimaryTabClose, { tabId : tabId });
        }
    </script>
</apex:page>
```

## Related Topics

- Methods for Console Events (atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_events.htm)
