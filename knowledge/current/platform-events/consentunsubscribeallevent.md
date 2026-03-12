---
title: "ConsentUnsubscribeAllEvent"
domain: platform-events
topic: consentunsubscribeallevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.439Z
estimatedTokens: 353
keywords: [ConsentUnsubscribeAllEvent, Notifies, subscribers, user, unsubscribes, communications, preference, form, created, Manager, API, version, 60.0, later, Calls]
---

# ConsentUnsubscribeAllEvent

> Notifies subscribers when a user unsubscribes from all communications on a
         preference form created in Preference Manager. This object is available in API version
      60.0 and later.

# ConsentUnsubscribeAllEvent

Notifies subscribers when a user unsubscribes from all communications on a preference form created in Preference Manager. This object is available in API version 60.0 and later.

## Supported Calls

create(), describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/ConsentUnsubscribeAllEvent

## Event Delivery Allocation Enforced

Yes

## Special Access Rules

This object is available for users with the Privacy Center license and the Manage Preference Manager user permission.

## Fields

| Field | Details |
| --- | --- |
| EventDetails | TypetextareaPropertiesCreateDescriptionJSON text that contains the details for the unsubscribe all event, such as the timestamp for when the event happened. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
