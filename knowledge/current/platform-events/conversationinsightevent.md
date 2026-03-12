---
title: "ConversationInsightEvent"
domain: platform-events
topic: conversationinsightevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.447Z
estimatedTokens: 514
keywords: [ConversationInsightEvent, Notifies, subscribers, whenever, Einstein, Insight, rule, triggered, API, version, 60.0, later, Calls, Subscription, Channel]
---

# ConversationInsightEvent

> Notifies subscribers whenever an Einstein Insight rule is
			triggered. This object is available in API version 60.0 and later.

# ConversationInsightEvent

Notifies subscribers whenever an Einstein Insight rule is triggered. This object is available in API version 60.0 and later.

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

/event/ConversationInsightEvent

## Special Access Rules

Users with CallCoachingUser, AutomaticActivityCapture, or HighVelocitySalesUser permissions have read access.

## Fields

| Field | Details |
| --- | --- |
| Detail | TypestringPropertiesNillableDescriptionThe core activity identifier which is a lookup to the unified activity object details. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| InsightChannelType | TypepicklistPropertiesRestricted picklistDescriptionThe insight channel type.Possible values are:EMAILVIDEOVOICE |
| InsightKeywords | TypejsonPropertiesNillableDescriptionThe keywords associated with the insight. |
| InsightOwner | TypestringPropertiesNillableDescriptionThe user ID of the owner of the triggering insight event. |
| InsightParticipants | TypejsonPropertiesNillableDescriptionThe participants associated with the insight. |
| InsightTypeKey | TypestringPropertiesNillableDescriptionThe insight type key (or ID of the type in SIQ). |
| InsightTypeName | TypestringPropertiesNillableDescriptionThe name of the insight type. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| UnifiedActivity | TypestringPropertiesNillableDescriptionThe activity ID of the unified activity object that generated the event. |
