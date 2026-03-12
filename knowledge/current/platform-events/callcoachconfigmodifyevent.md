---
title: "CallCoachConfigModifyEvent"
domain: platform-events
topic: callcoachconfigmodifyevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.391Z
estimatedTokens: 368
keywords: [CallCoachConfigModifyEvent, Notifies, subscribers, Conversation, Insights, configuration, change, API, version, 49.0, later, Calls, Subscription, Channel, Event]
---

# CallCoachConfigModifyEvent

> Notifies subscribers of a Conversation Insights configuration
			change. This object is available in API version 49.0 and later.

# CallCoachConfigModifyEvent

Notifies subscribers of a Conversation Insights configuration change. This object is available in API version 49.0 and later.

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

/event/CallCoachConfigModifyEvent

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| ChangeType | TypepicklistPropertiesCreate, Restricted picklistDescriptionThe type of configuration change made.Possible values are:FEATUREOTHERPROVIDERUSER |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. Available in API version 52.0 and later. |
| OrganizationId | TypestringPropertiesCreateDescriptionThe ID of the Salesforce org with the related change. |
| ProviderIdChange | TypestringPropertiesCreate, NillableDescriptionThe ID of the provider related to the change. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
