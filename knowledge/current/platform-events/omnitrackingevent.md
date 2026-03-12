---
title: "OmniTrackingEvent"
domain: platform-events
topic: omnitrackingevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:29.019Z
estimatedTokens: 638
keywords: [OmniTrackingEvent, Notifies, subscribers, user, interaction, FlexCard, OmniScript, that's, tracked, OmniAnalytics, API, version, 60.0, later, Calls]
---

# OmniTrackingEvent

> Notifies subscribers about a user interaction with a FlexCard or OmniScript
         that's tracked for OmniAnalytics. This object is available in API version 60.0 and
      later.

# OmniTrackingEvent

Notifies subscribers about a user interaction with a FlexCard or OmniScript that's tracked for OmniAnalytics. This object is available in API version 60.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

This platform event is part of OmniStudio Standard, not OmniStudio for Vlocity.

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

/event/OmniTrackingEvent

## Special Access Rules

Using OmniAnalytics requires having an OmniStudio license and enabling OmniAnalytics in Setup.

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| ActionContainerName | TypestringPropertiesNillableDescriptionThe full name of the FlexCard or OmniScript for which user interactions are tracked. |
| ComponentType | TypepicklistPropertiesRestricted picklistDescriptionRequired.The type of component for which user interactions are tracked.Possible values are:Flexcard—A context-sensitive display of Salesforce data and clickable actions.Omniscript—A multi-page wizard that guides a user through a business process. |
| EventName | TypestringPropertiesNoneDescriptionRequired. The name of the user interaction or user inferface response, such as Card Load, Card Unload, or UI Action. |
| EventPayload | TypetextareaPropertiesNoneDescriptionRequired. The request payload sent for the user interaction, which typically includes data from the FlexCard or OmniScript. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| Timestamp | TypedateTimePropertiesNoneDescriptionRequired. The timestamp indicating when the event occurred. |
| TrackingCategory | TypestringPropertiesNoneDescriptionRequired. A category for this event and other events with a similar business purpose. |
| TrackingGroup | TypestringPropertiesNoneDescriptionRequired. The name of the related OmniTrackingGroup object. |
