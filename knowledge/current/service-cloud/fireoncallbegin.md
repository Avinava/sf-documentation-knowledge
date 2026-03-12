---
title: "fireOnCallBegin()"
domain: service-cloud
topic: fireoncallbegin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.430Z
estimatedTokens: 260
keywords: [fireOnCallBegin, Fires, event, notifies, call, begun, send, interaction, log, custom, console, component, API, version, 31.0]
---

# fireOnCallBegin()

> Fires an event that notifies a call has begun. Use to get information or send information between an interaction
                log and a custom console component.
            This method is only available in API version 31.0 or
        later.

# fireOnCallBegin()

Fires an event that notifies a call has begun. Use to get information or send information between an interaction log and a custom console component. This method is only available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callObjectId | string | The object ID of the call. |
| callType | string | String that specifies the call type, which must be internal, inbound or outbound. |
| callLabel | string | String that specifies a call as it appears in the Attach Call drop-down button. For example, Call Label — Inbound Call 12:52:31 PM. |
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
sforce.console.cti.fireOnCallBegin( callObjectId:String, callType:String, callLabel:String, (optional)callback:Function )
```

```
<apex:page>
    <A HREF="#" onClick="testFireOnCallBegin();return false">
             Click here to start a call</A>

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">

        function testFireOnCallBegin() {
            sforce.console.cti.fireOnCallBegin('call.794937' , 'outbound' , 'label 1');
        }

    </script>
</apex:page>
```
