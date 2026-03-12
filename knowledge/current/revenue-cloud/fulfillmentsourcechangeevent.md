---
title: "FulfillmentSourceChangeEvent"
domain: revenue-cloud
topic: fulfillmentsourcechangeevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.287Z
estimatedTokens: 328
keywords: [FulfillmentSourceChangeEvent, Notifies, updates, sources, orchestrated, Dynamic, Revenue, Orchestrator, order, product, fulfillment, product., API, version, 66.0, later., Supported, Calls, Subscribers, Streaming]
---

# FulfillmentSourceChangeEvent

> Notifies updates to the sources orchestrated by Dynamic Revenue Orchestrator
         like order product or fulfillment order product. This object is available in API
      version 66.0 and later.

# FulfillmentSourceChangeEvent

Notifies updates to the sources orchestrated by Dynamic Revenue Orchestrator like order product or fulfillment order product. This object is available in API version 66.0 and later.

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
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| RecordIdentifier | TypestringPropertiesCreate, NillableDescriptionThe identifier of the source record that has been updated. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
