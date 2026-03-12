---
title: "fireOnCallEnd()"
domain: service-cloud
topic: fireoncallend
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.434Z
estimatedTokens: 261
keywords: [fireOnCallEnd, Fires, event, notifies, call, ended, send, interaction, log, custom, console, component, executes, fireOnCallBegin, API]
---

# fireOnCallEnd()

> Fires an event that notifies a call has ended. Use to get information or send information between an interaction
                log and a custom console component. This method executes when fireOnCallBegin() is called first. This method is only available in API version 31.0 or
        later.

# fireOnCallEnd()

Fires an event that notifies a call has ended. Use to get information or send information between an interaction log and a custom console component. This method executes when fireOnCallBegin() is called first. This method is only available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callObjectId | string | The object ID of the call. |
| callDuration | number | Number specifying the duration of the call. |
| callDisposition | string | String representing the call’s disposition, such as call successful, left voicemail, or disconnected. |
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
sforce.console.cti.fireOnCallEnd( callObjectId:String, callDuration:Number, callDisposition:String, (optional)callback:Function )
```

```
<apex:page>
    <A HREF="#" onClick="testFireOnCallEnd();return false">
             Click here to end a call</A>

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">

        function testFireOnCallEnd() {
            //Here, 'call.1' refers to a call that is in progress.
            sforce.console.cti.fireOnCallEnd('call.1', 60, 'Set Appointment');
        }

    </script>
</apex:page>
```
