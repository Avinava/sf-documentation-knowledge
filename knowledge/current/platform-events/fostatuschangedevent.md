---
title: "FOStatusChangedEvent"
domain: platform-events
topic: fostatuschangedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.637Z
estimatedTokens: 711
keywords: [FOStatusChangedEvent, Notifies, subscribers, changes, status, fulfillment, order, record, event, trigger, flows, processes, workflow, API, version]
---

# FOStatusChangedEvent

> Notifies subscribers of changes to the status of a fulfillment order record.
      Use this event to trigger flows and processes in your order workflow. This object is
    available in API version 48.0 and later.

# FOStatusChangedEvent

Notifies subscribers of changes to the status of a fulfillment order record. Use this event to trigger flows and processes in your order workflow. This object is available in API version 48.0 and later.

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

/event/FOStatusChangedEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

FOStatusChangedEvent is available as part of Salesforce Order Management.

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| FulfillmentOrderId | TypereferencePropertiesNillableDescriptionID of the FulfillmentOrder whose status changed.This value is functionally required, but is nillable because fulfillment order records can be deleted to comply with data protection and privacy requirements. |
| NewStatus | TypepicklistPropertiesNoneDescriptionRequired. The new value of the Status field on the FulfillmentOrder.Possible values are defined by the Status field picklist on the FulfillmentOrder object. Default available values are:AllocatedAssignedCanceledDraftFulfilledPack Complete This value is available in API v57.0 and later.Pick CompletePickpackPrintedRejected |
| NewStatusCategory | TypepicklistPropertiesRestricted picklistDescriptionRequired. The new value of the StatusCategory field on the FulfillmentOrder.Possible values are:ActivatedCanceledClosedDraftFulfillingRejected |
| OldStatus | TypepicklistPropertiesNillableDescriptionThe previous value of the Status field on the FulfillmentOrder.Possible values are defined by the Status field picklist on the FulfillmentOrder object. Default available values are:AllocatedAssignedCanceledDraftFulfilledPack Complete This value is available in API v57.0 and later.Pick CompletePickpackPrintedRejected |
| OldStatusCategory | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe previous value of the StatusCategory field on the FulfillmentOrder.Possible values are:ActivatedCancelledClosedDraftFulfillingRejected |
| OrderSummaryId | TypereferencePropertiesNillableDescriptionID of the OrderSummary associated with the FulfillmentOrder. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
