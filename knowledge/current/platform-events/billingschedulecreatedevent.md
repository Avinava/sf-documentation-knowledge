---
title: "BillingScheduleCreatedEvent"
domain: platform-events
topic: billingschedulecreatedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.358Z
estimatedTokens: 560
keywords: [BillingScheduleCreatedEvent, Notifies, subscribers, actions, API, version, 55.0, later, Calls, Subscription, Channel, Event, Delivery, Allocation, Enforced]
---

# BillingScheduleCreatedEvent

> Notifies subscribers when the /actions/standardCreateBillingScheduleFromOrderItem request is
			complete. This object is available in API version 55.0 and later.

# BillingScheduleCreatedEvent

Notifies subscribers when the /actions/standardCreateBillingScheduleFromOrderItem request is complete. This object is available in API version 55.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/billingschedulecreatedevent

## Event Delivery Allocation Enforced

No

## Special Access Rules

This object is available when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| BillSchdCreatedEventDetail | TypeBillSchdCreatedEventDetail[]PropertiesNillableDescriptionOne BillingScheduleCreatedEventDetail entry is created for each order item in the BillingScheduleCreatedEvent request. One BillSchdCreatedEventDetail is created for each error that occurred. |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionID returned in the CreateBillingScheduleFromOrderItem response. Use this ID to identify the BillingScheduleCreatedEvent for a specific request. |

-   **[BillSchdCreatedEventDetail](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_billingschedulecreateddtlevent.htm)**
    Contains information about each order item in the /actions/standardCreateBillingScheduleFromOrderItem request and any errors that occurred while processing the request. This object is included in an BillingScheduleCreatedEvent message. You can't subscribe to BillSchdCreatedEventDetail directly. This object is available in API version 55.0 and later.

## Related Topics

- BillSchdCreatedEventDetail[] (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_billingschedulecreateddtlevent.htm)
- BillSchdCreatedEventDetail (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_billingschedulecreateddtlevent.htm)
