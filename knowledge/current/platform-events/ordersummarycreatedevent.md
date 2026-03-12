---
title: "OrderSummaryCreatedEvent"
domain: platform-events
topic: ordersummarycreatedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.033Z
estimatedTokens: 367
keywords: [OrderSummaryCreatedEvent, Notifies, subscribers, creation, order, summary, record, event, trigger, flows, processes, workflow, API, version, 48.0]
---

# OrderSummaryCreatedEvent

> Notifies subscribers of the creation of an order summary record. Use this event
      to trigger flows and processes in your order workflow. This object is available in API
    version 48.0 and later.

# OrderSummaryCreatedEvent

Notifies subscribers of the creation of an order summary record. Use this event to trigger flows and processes in your order workflow. This object is available in API version 48.0 and later.

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

/event/OrderSummaryCreatedEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

OrderSummaryCreatedEvent is available as part of Salesforce Order Management.

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| OrderId | TypereferencePropertiesNillableDescriptionID of the original order associated with the created OrderSummary. |
| OrderSummaryId | TypereferencePropertiesNillableDescriptionID of the created OrderSummary |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
