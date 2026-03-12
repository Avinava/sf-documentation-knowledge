---
title: "OrderSumStatusChangedEvent"
domain: platform-events
topic: ordersumstatuschangedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.039Z
estimatedTokens: 587
keywords: [OrderSumStatusChangedEvent, Notifies, subscribers, changes, status, order, summary, record, event, trigger, flows, workflow, API, version, 48.0]
---

# OrderSumStatusChangedEvent

> Notifies subscribers of changes to the status of an order summary record. Use
      this event to trigger subscribers such as flows in your order workflow. This object is
    available in API version 48.0 and later.

# OrderSumStatusChangedEvent

Notifies subscribers of changes to the status of an order summary record. Use this event to trigger subscribers such as flows in your order workflow. This object is available in API version 48.0 and later.

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

/event/OrderSumStatusChangedEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

OrderSumStatusChangedEvent is available as part of Salesforce Order Management.

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| NewStatus | TypepicklistPropertiesDefaulted on create, NillableDescriptionRequired. The new value of the Status field on the OrderSummary.Possible values are based on the OrderSummary statuses defined in your org. The default value is Created. |
| OldStatus | TypepicklistPropertiesDefaulted on create, NillableDescriptionRequired. The previous value of the Status field on the OrderSummary.Possible values are based on the OrderSummary statuses defined in your org. The default value is Created. |
| OrderId | TypereferencePropertiesNillableDescriptionID of the original order associated with the OrderSummary.This field is a relationship field.Relationship NameOrderRelationship TypeLookupRefers ToOrder |
| OrderSummaryId | TypereferencePropertiesNillableDescriptionThe ID of the OrderSummary that changed.This value is functionally required, but is nillable because order summary records can be deleted to comply with data protection and privacy requirements.This field is a relationship field.Relationship NameOrderSummaryRelationship TypeLookupRefers ToOrderSummary |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
