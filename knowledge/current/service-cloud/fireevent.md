---
title: "fireEvent()"
domain: service-cloud
topic: fireevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.301Z
estimatedTokens: 187
keywords: [fireEvent, Fires, custom, event., only, API, version, 25.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# fireEvent()

> Fires a custom event. This method is only available in API version 25.0 or
                later.

# fireEvent()

Fires a custom event. This method is only available in API version 25.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventType | string | The type of custom event to fire. |
| message | string | The message which is sent with the fired event. |
| callback | function | JavaScript method called when the custom event is fired. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if firing the event is successful, false if firing the event wasn’t successful. |

## Code Examples

```
sforce.console.fireEvent( eventType:String, message:String, (optional)callback:Function )
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">

        <A HREF="#" onClick="testFireEvent(); return false;">
            Click here to fire an event of type 'SampleEvent'</A>

        var callback = function(result) { 
            if (result.success) { 
                   alert('The custom event is fired!');
            } else { 
                   alert('The custom event could not be fired!');
            } 
         };

        function testFireEvent() { 
         //Fire an event of type 'SampleEvent'
         sforce.console.fireEvent('SampleEvent', 'EventMessage', callback);
         }
    </script>
</apex:page>
```
