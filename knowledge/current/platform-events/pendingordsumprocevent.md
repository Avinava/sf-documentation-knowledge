---
title: "PendingOrdSumProcEvent"
domain: platform-events
topic: pendingordsumprocevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.055Z
estimatedTokens: 538
keywords: [PendingOrdSumProcEvent, Notifies, subscribers, PendingOrderSummary, record, processed, process, succeeded, OrderSummary, created, deleted, event, trigger, flows, order]
---

# PendingOrdSumProcEvent

> Notifies subscribers that a PendingOrderSummary record was processed. If the
      process succeeded, an OrderSummary was created and the PendingOrderSummary can be deleted. Use
      this event to trigger subscribers such as flows in your order workflow. This object is
    available in API version 56.0 and later.

# PendingOrdSumProcEvent

Notifies subscribers that a PendingOrderSummary record was processed. If the process succeeded, an OrderSummary was created and the PendingOrderSummary can be deleted. Use this event to trigger subscribers such as flows in your order workflow. This object is available in API version 56.0 and later.

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

/event/PendingOrdSumProcEvent

## Special Access Rules

PendingOrdSumProcEvent is available as part of Salesforce Order Management with the High Scale Orders feature.

## Event Delivery Allocation Enforced

No

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypestringPropertiesNillableDescriptionIf the OrderSummary creation returned an error, this field contains the error code. |
| ErrorMessage | TypestringPropertiesNillableDescriptionIf the OrderSummary creation returned an error, this field contains the error message. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| ExternalReferenceIdentifier | TypepicklistPropertiesDefaulted on createDescriptionUnique identifier copied from the PendingOrderSummary to the OrderSummary.This value is set to B2C realm ID + "_" + B2C instance ID + "@" + B2C Commerce catalog/domain ID + "@" + B2C Commerce order number. |
| IsSuccess | TypereferencePropertiesNillableDescriptionIndicates whether the OrderSummary was created. |
| OrderSummaryId | TypereferencePropertiesNillableDescriptionThe ID of the OrderSummary that was created from the PendingOrderSummary. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
