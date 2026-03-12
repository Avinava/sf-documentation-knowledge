---
title: "Create an Event with an EventUuid Field"
domain: platform-events
topic: create-an-event-with-an-eventuuid-field
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.070Z
estimatedTokens: 213
keywords: [Event, EventUuid, uniquely, identifies, message, match, events, callback, result, publish, call, system, generate, SObjectType.newSObject, recordTypeId]
---

# Create an Event with an EventUuid Field

> The EventUuid field uniquely identifies an event
  message and is used to match the events returned in the callback result with the events in the
  publish call. To have the system generate an EventUuid field
  value in each event object, use the SObjectType.newSObject(recordTypeId, loadDefaults) Apex method to create the event
  object.

# Create an Event with an EventUuid Field

The EventUuid field uniquely identifies an event message and is used to match the events returned in the callback result with the events in the publish call. To have the system generate an EventUuid field value in each event object, use the SObjectType.newSObject(recordTypeId, loadDefaults) Apex method to create the event object.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

If you aren’t interested in correlating the events in the publish call with the publish results, you don’t need the EventUuid value in the created event. In this case, you can create the event by using the event API name directly, which doesn’t include the EventUuid value in the event object. For example: Order\_Event\_\_e event = new Order\_Event\_\_e();.

## Code Examples

```apex
Order_Event__e event = (Order_Event__e)Order_Event__e.sObjectType.newSObject(null, true);

// The EventUuid value is returned after object creation
System.debug('EventUuid: ' + event.EventUuid);

// Debug output
// EventUuid: 19bd382e-8964-43de-ac01-d5d82dd0bf78
```
