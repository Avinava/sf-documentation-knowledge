---
title: "PlaceOrderCompletedEvent"
domain: platform-events
topic: placeordercompletedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.099Z
estimatedTokens: 470
keywords: [PlaceOrderCompletedEvent, Notifies, subscribers, order, created, updated, invoking, Place, API, Sales, Transaction, version, 63.0, later, Calls]
---

# PlaceOrderCompletedEvent

> Notifies subscribers of an order being created or updated by invoking
			the Place Order API or the Place Sales Transaction API. This object is available in
		API version 63.0 and later.

# PlaceOrderCompletedEvent

Notifies subscribers of an order being created or updated by invoking the Place Order API or the Place Sales Transaction API. This object is available in API version 63.0 and later.

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

/event/PlaceOrderCompletedEvent

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| AppUsageTypes | TypestringPropertiesNillableDescriptionTag that represents the application that's using the order and determines how an order is processed. For example, the AppUsageTypes field value for Revenue Cloud orders is RevenueLifecycleManagement. |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| HasErrors | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether errors occurred when creating or updating the order (true) or not (false).The default value is false. |
| OrderId | TypereferencePropertiesNillableDescriptionID of the order record.This field is a relationship field.Relationship NameOrderRefers ToOrder |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionID of the request that triggered the event. |
