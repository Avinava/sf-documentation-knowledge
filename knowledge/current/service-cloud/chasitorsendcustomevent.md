---
title: "chasitor.sendCustomEvent()"
domain: service-cloud
topic: chasitorsendcustomevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.278Z
estimatedTokens: 131
keywords: [chasitor.sendCustomEvent, custom, event, agent, console, currently, chatting, customer, API, version, 29.0, later, Arguments, Sample, Code–Visualforce]
---

# chasitor.sendCustomEvent()

> Sends a custom event to the agent console of the agent who is currently chatting with
        a customer. Available in API version 29.0 or
            later.

# chasitor.sendCustomEvent()

Sends a custom event to the agent console of the agent who is currently chatting with a customer. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| type | string | The name of the custom event to send to the agent console. |
| data | string | Additional data you want to send to the agent console along with the custom event. |

## Sample Code–Visualforce

```

```

## Response

This method returns no responses.

## Code Examples

```
liveagent.chasitor.sendCustomEvent(type:String, data:String)
```

```
<a href="#" onClick="testSendCustomEvent();">Send Custom Event</a>

<script type="text/javascript">
        function testSendCustomEvent() {
            type = 'myCustomEventType';
            data = 'myCustomEventData';
            liveagent.chasitor.sendCustomEvent(type, data);
            alert('The custom event has been sent');
        };
</script>
```
