---
title: "Consumer Sales Platform Event Object"
domain: comms-developer-guide
topic: consumer-sales-platform-event-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.120Z
estimatedTokens: 198
keywords: [Consumer, Sales, Platform, Event, Communications, Cloud, publishes, standard, events, action, occurred, org, report, errors, subscribe]
---

# Consumer Sales Platform Event Object

> Communications Cloud publishes standard platform events in response to an action that
    occurred in the org or to report errors. You can subscribe to a standard platform event using
    the subscription mechanism that the event supports.

# Consumer Sales Platform Event Object

Communications Cloud publishes standard platform events in response to an action that occurred in the org or to report errors. You can subscribe to a standard platform event using the subscription mechanism that the event supports.

-   **[CartToOrderCompletedEvent](atlas.en-us.comms_developer_guide.meta/comms_developer_guide/sforce_api_objects_carttoordercompletedevent.htm)**
    Each row represents information that notifies subscribers when the /actions/standard/createOrderFromCart REST request is complete. If the request is successful, use this event to learn about the Order record. If the request isn’t successful, use this event to learn about the errors associated with the request. This object is available in API version 66.0 and later.

## Related Topics

- CartToOrderCompletedEvent (atlas.en-us.comms_developer_guide.meta/comms_developer_guide/sforce_api_objects_carttoordercompletedevent.htm)
