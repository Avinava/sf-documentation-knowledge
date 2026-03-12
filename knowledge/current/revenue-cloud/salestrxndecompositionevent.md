---
title: "SalesTrxnDecompositionEvent"
domain: revenue-cloud
topic: salestrxndecompositionevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.495Z
estimatedTokens: 364
keywords: [SalesTrxnDecompositionEvent, Notifies, decomposition, process, status, changes., API, version, 66.0, later., Supported, Calls, Subscribers, Streaming, Subscription, Channel, Special, Access, Rules, Event]
---

# SalesTrxnDecompositionEvent

> Notifies when the decomposition process status changes. This object is
      available in API version 66.0 and later.

# SalesTrxnDecompositionEvent

Notifies when the decomposition process status changes. This object is available in API version 66.0 and later.

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

## Streaming API Subscription Channel

/event/SalesTrxnDecompositionEvent

## Special Access Rules

This object is available in orgs with Revenue Cloud.

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypestringPropertiesCreate, NillableDescriptionThe error code returned for a decomposition process failure. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SalesTransactionIdentifier | TypestringPropertiesCreate, NillableDescriptionThe sales transaction being decomposed. |
| Status | TypestringPropertiesCreate, NillableDescriptionThe status of the decomposition process. |
