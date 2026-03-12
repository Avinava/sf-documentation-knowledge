---
title: "OrderStatusChangedEvent"
domain: platform-events
topic: orderstatuschangedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.028Z
estimatedTokens: 891
keywords: [OrderStatusChangedEvent, Notifies, subscribers, changes, status, order, record, event, trigger, flows, processes, workflow, API, version, 51.0]
---

# OrderStatusChangedEvent

> Notifies subscribers of changes to the status of an order record.
			Use this event to trigger flows and processes in your order workflow. This object
		is available in API version 51.0 and later.

# OrderStatusChangedEvent

Notifies subscribers of changes to the status of an order record. Use this event to trigger flows and processes in your order workflow. This object is available in API version 51.0 and later.

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

/event/OrderStatusChangedEvent

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. The order status's correlation identifier related to this event. This field is available in API version 55.0 and later. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| NewStatus | TypepicklistPropertiesRestricted picklistDescriptionThe order's status after the status change.Possible values are:ActivatedDraftSuperseded—This value is applicable only to Revenue Cloud Advanced users and is available in API version 64.0 and later. |
| NewStatusCode | TypepicklistPropertiesRestricted picklistDescriptionThe order StatusCode after the status change.Possible values are:ActivatedDraftSuperseded—This value is applicable only to Revenue Cloud Advanced users and is available in API version 64.0 and later. |
| OldStatus | TypepicklistPropertiesRestricted picklistDescriptionThe order's status before the status change.Possible values are:ActivatedDraftSuperseded—This value is applicable only to Revenue Cloud Advanced users and is available in API version 64.0 and later. |
| OldStatusCode | TypepicklistPropertiesRestricted picklistDescriptionThe order StatusCode before the status change.Possible values are:ActivatedDraftSuperseded—This value is applicable only to Revenue Cloud Advanced users and is available in API version 64.0 and later. |
| OrderId | TypereferencePropertiesNillableDescriptionID of the order whose status was changed. Used only if the order is an Original Order. |
| RelatedOrderId | TypereferencePropertiesNillableDescriptionID of the order whose status was changed. Used only if the order isn't an Original Order. |
| RelatedOrderType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe type of related order. Shown only if the order with the changed status isn't an OriginalOrder.Possible values are:Change OrderReduction Order |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. ID of the request that triggered the event. This field is available in API version 55.0 and later. |

## Usage

To use OrderStatusChangedEvent, Enable Order Events must be enabled in the Order Settings page.

When an order is created and activated in one transaction, OldStatus is Draft and NewStatus is Activated.

When an order's status is updated multiple times in one transaction, OldStatus is the status at the beginning of the transaction before any changes. NewStatus is the final status after all updates.
