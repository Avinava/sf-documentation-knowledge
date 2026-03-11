---
title: "ContextPersistenceEvent"
domain: omnistudio
topic: contextpersistenceevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.925Z
keywords: [ContextPersistenceEvent, Supported, Calls, Subscribers, Streaming, API, Subscription, Channel, Special, Access, Rules, Fields]
---

# ContextPersistenceEvent

# ContextPersistenceEvent

Notifies subscribers when the Context Persistence event, initiated by the Context Persistence API has completed its execution. This event is designed to inform customers/clients about the success or failure of their Context Persistence request. This object is available in API version 59.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Streaming API (CometD) |  |

## Streaming API Subscription Channel

/event/ContextPersistenceEvent

## Special Access Rules

The ContextPersistenceEvent is available when IndustriesContextService Org permission is enabled.

## Fields

| Field | Details |
| --- | --- |
| Correlation Id | TypestringPropertiesNillableDescriptionThe unique identifier of the parent request that this request belongs to. |
| EventUuid | TypestringPropertiesCreateDescriptionRequired. A universally unique identifier (UUID) that identifies a platform event message. |
| HasErrors | TypebooleanPropertiesNillableDescriptionIndicates whether the context persistence service is a failure (true) or a success (false). |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| Request Identifier | TypestringPropertiesNillableDescriptionThe identifier of asynchronous or synchronous request associated with the event. |