---
title: "FulfillOrdItemQtyChgEvent"
domain: platform-events
topic: fulfillorditemqtychgevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.644Z
estimatedTokens: 481
keywords: [FulfillOrdItemQtyChgEvent, Notifies, subscribers, changes, quantity, fulfillment, order, line, item, record, event, trigger, flows, processes, workflow]
---

# FulfillOrdItemQtyChgEvent

> Notifies subscribers of changes to the quantity of a fulfillment order line
      item record. Use this event to trigger flows and processes in your order workflow. This
    object is available in API version 53.0 and later.

# FulfillOrdItemQtyChgEvent

Notifies subscribers of changes to the quantity of a fulfillment order line item record. Use this event to trigger flows and processes in your order workflow. This object is available in API version 53.0 and later.

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

/event/FulfillOrdItemQtyChgEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

FulfillOrdItemQtyChgEvent is available as part of Salesforce Order Management.

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| FulfillmentOrderLineItemId | TypereferencePropertiesNillableDescriptionID of the FulfillmentOrderLineItem whose quantity changed.This value is functionally required, but is nillable because fulfillment order line item records can be deleted to comply with data protection and privacy requirements. |
| NewQuantity | TypedoublePropertiesNoneDescriptionRequired. The new value of the Quantity field on the FulfillmentOrderLineItem. |
| OldQuantity | TypedoublePropertiesNoneDescriptionThe previous value of the Quantity field on the FulfillmentOrderLineItem. |
| OrderItemSummaryId | TypereferencePropertiesNillableDescriptionID of the OrderItemSummary associated with the FulfillmentOrderLineItem. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
