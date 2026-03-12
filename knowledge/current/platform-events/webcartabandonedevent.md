---
title: "WebCartAbandonedEvent"
domain: platform-events
topic: webcartabandonedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.341Z
estimatedTokens: 520
keywords: [WebCartAbandonedEvent, Notifies, subscribers, abandoned, cart, API, version, 63.0, later, Calls, Subscription, Channel, Event, Delivery, Allocation]
---

# WebCartAbandonedEvent

> Notifies subscribers of an abandoned cart. This object is
		available in API version 63.0 and later.

# WebCartAbandonedEvent

Notifies subscribers of an abandoned cart. This object is available in API version 63.0 and later.

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

/event/WebCartAbandonedEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

WebCartAbandonedEvent is available only if the B2B or B2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| ContactDetails | TypetextareaPropertiesNillableDescriptionThe contact details of the shopper in JSON format. Contains email address, contact ID, and device ID properties.ExampleRegistered shopper:{ "emailAddress" : "user@example.com" , "contactId" : "003XXXXXXXXXXXX" , "deviceId" : null }Guest shopper:{ "emailAddress" : "user@example.com" , "contactId" : null , "deviceId" : "e8fd7b07-463a-4658-b440-9ef3e4b5fa91" } |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| Individual | TypestringPropertiesNillableDescriptionThe individual ID of the shopper. For registered shoppers, it's stored as contactId in contactDetails.contactId. For guest shoppers, it's stored as guestUuid in contactDetails.deviceId. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| WebCartId | TypereferencePropertiesNillableDescriptionThe ID of the cart.This field is a relationship field.Relationship NameWebCartRefers ToWebCart |
| WebStoreId | TypereferencePropertiesNillableDescriptionThe ID of the store.This field is a relationship field.Relationship NameWebStoreRefers ToWebStore |
