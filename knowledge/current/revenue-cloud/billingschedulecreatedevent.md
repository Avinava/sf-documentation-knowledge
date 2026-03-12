---
title: "BillingScheduleCreatedEvent"
domain: revenue-cloud
topic: billingschedulecreatedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.778Z
estimatedTokens: 573
keywords: [BillingScheduleCreatedEvent, Notifies, subscribers, commerce, invoicing, billing-schedules, actions, create, request, complete., API, version, 63.0, later., Supported, Calls, Subscribers, Subscription, Channel, Event]
---

# BillingScheduleCreatedEvent

> Notifies subscribers when the /commerce/invoicing/billing-schedules/actions/create request is complete.
      This object is available in API version 63.0 and later.

# BillingScheduleCreatedEvent

Notifies subscribers when the /commerce/invoicing/billing-schedules/actions/create request is complete. This object is available in API version 63.0 and later.

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

This object is available when Billing is enabled.

## Fields

| Field | Details |
| --- | --- |
| BillingScheduleCreatedEventDetail | TypeBillSchdCreatedEventDetailPropertiesNillableDescriptionOne BillingScheduleCreatedEventDetail entry is created for each order item in the BillingScheduleCreatedEvent request. One BillSchdCreatedEventDetail entry is created for each error that occurred. |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionID returned in the CreateBillingScheduleFromOrderItem response. Use this ID to identify the BillingScheduleCreatedEvent for a specific request. |

-   **[BillSchdCreatedEventDetail](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_billschdcreatedeventdetail.htm)**
    Contains details about each order item in the /commerce/invoicing/billing-schedules/actions/create request and any errors that occurred while processing the request. This object is included in an BillingScheduleCreatedEvent message. You can't subscribe to the BillSchdCreatedEventDetail platform event directly. This object is available in API version 63.0 and later.

## Related Topics

- BillSchdCreatedEventDetail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_billschdcreatedeventdetail.htm)
