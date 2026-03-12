---
title: "fireOnCallLogSaved()"
domain: service-cloud
topic: fireoncalllogsaved
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.439Z
estimatedTokens: 281
keywords: [fireOnCallLogSaved, Calls, eventHandler, function, registered, onCallLogSaved, send, interaction, log, custom, console, component, API, version, 31.0]
---

# fireOnCallLogSaved()

> Calls the eventHandler function
            registered with onCallLogSaved(). Use to get information or send
            information between an interaction log and a custom console component.. This method is
            only available in API version 31.0 or later.

# fireOnCallLogSaved()

Calls the eventHandler function registered with [onCallLogSaved()](atlas.en-us.api_console.meta/api_console/sforce_api_console_oncalllogsaved.htm "Registers a function that is fired when an interaction log saves a call log. Use to get information or send information between an interaction log and a custom console component. This method is only available in API version 31.0 or later."). Use to get information or send information between an interaction log and a custom console component.. This method is only available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | string | The object ID of the saved call log. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if firing the event is successful, false otherwise. |

## Code Examples

```
sforce.console.cti.fireOnCallLogSaved( id:String, (optional)callback:Function )
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">

        var MyCallback = function (result) {
             alert('fireOnCallLogSaved was thrown: ' + result.success);
        };

        function testFireOnCallLogSaved() {
             // Simulates that a call log was saved by passing the task object Id as input.
             sforce.console.cti.fireOnCallLogSaved('00Txx000003qf8u', myCallback);
        }

        var callback = function (result) {
            alert('Call Log was saved! Object Id saved is : ' + result.id);
        };

        sforce.console.cti.onCallLogSaved(callback);
    </script>
    <a href="#" onClick="testFireOnCallLogSaved();return false">
        Test fireOnCallLogSaved API!</a>
</apex:page>
```

## Related Topics

- onCallLogSaved() (atlas.en-us.api_console.meta/api_console/sforce_api_console_oncalllogsaved.htm)
