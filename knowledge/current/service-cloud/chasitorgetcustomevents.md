---
title: "chasitor.getCustomEvents()"
domain: service-cloud
topic: chasitorgetcustomevents
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.133Z
estimatedTokens: 344
keywords: [chasitor.getCustomEvents, Retrieves, list, custom, events, received, chat, window, during, session., API, version, 29.0, later., Syntax, Sample, Code–Visualforce, Response]
---

# chasitor.getCustomEvents()

> Retrieves a list of custom events that have been received in this chat window during
        this chat session. Available in API version 29.0 or
            later.

# chasitor.getCustomEvents()

Retrieves a list of custom events that have been received in this chat window during this chat session. Available in API version 29.0 or later.

## Syntax

```

```

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following methods and properties:

| Name | Type | Description |
| --- | --- | --- |
| events | Array of event objects | An array of event objects. Each object represents a custom event that has occurred in this chat. Data on each message object can be accessed by the following methods:getType()getData()getSource()getDate() |
| getType | method | Accesses the type of the custom event that was sent to this chat window. Returns the type argument of the sforce.console.chat.sendCustomEvent() method used to send this event. |
| getData | method | Accesses the data of the custom event that was sent to this chat window. Returns the data argument of the sforce.console.chat.sendCustomEvent() method used to send this event. |
| getSource | method | Accesses the source of the custom event that was sent to this chat window—for example, agent or chat visitor. |
| getDate | method | Accesses the date of the custom event that was sent to this chat window. Returns the date and time the event was received. |

## Code Examples

```
liveagent.chasitor.getCustomEvents()
```

```
<a href="#" onClick="testGetCustomEvents();">Get Custom Events</a>

<script type="text/javascript">
        function testGetCustomEvents() {
            events = liveagent.chasitor.getCustomEvents();
            eventsCount = events.length;
            alert('The following number of custom events have occurred: ' + eventsCount);
        };
</script>
```
