---
title: "WebStoreUserCreatedEvent"
domain: platform-events
topic: webstoreusercreatedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.348Z
estimatedTokens: 476
keywords: [WebStoreUserCreatedEvent, Notifies, subscribers, creation, new, user, WebStore, API, version, 59.0, later, Calls, Subscription, Channel, Special]
---

# WebStoreUserCreatedEvent

> Notifies subscribers of the creation of a new user for a WebStore.
		This object is available in API version 59.0 and later.

# WebStoreUserCreatedEvent

Notifies subscribers of the creation of a new user for a WebStore. This object is available in API version 59.0 and later.

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

/event/WebStoreUserCreatedEvent

## Special Access Rules

WebStoreUserCreatedEvent is available only if the B2B or B2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| ActionSource | TypepicklistPropertiesRestricted picklistDescriptionThe source of the published event.Possible values are:InviteToReorderPortalOthersUserRegistration—Available in API version 64.0 and later. |
| AddedById | TypereferencePropertiesNillableDescriptionThe ID of the user who invited the new user to the WebStore.This field is a relationship field.Relationship NameAddedByRelationship TypeLookupRefers ToUser |
| AddedUserId | TypereferencePropertiesNillableDescriptionThe ID of the user created for the WebStore.This field is a relationship field.Relationship NameAddedUserRelationship TypeLookupRefers ToUser |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| WebStoreId | TypereferencePropertiesNillableDescriptionThe ID of the WebStore.This field is a relationship field.Relationship NameWebStoreRelationship TypeLookupRefers ToWebStore |
