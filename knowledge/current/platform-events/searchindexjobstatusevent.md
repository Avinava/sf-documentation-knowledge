---
title: "SearchIndexJobStatusEvent"
domain: platform-events
topic: searchindexjobstatusevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.244Z
estimatedTokens: 509
keywords: [SearchIndexJobStatusEvent, Notifies, subscribers, changes, status, Data, Cloud, search, index, job, refresh, run-time, API, version, 60.0]
---

# SearchIndexJobStatusEvent

> Notifies subscribers of changes to the status of the Data Cloud search index
         job, such as index refresh status and index run-time status. This object is available
      in API version 60.0 and later.

# SearchIndexJobStatusEvent

Notifies subscribers of changes to the status of the Data Cloud search index job, such as index refresh status and index run-time status. This object is available in API version 60.0 and later.

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

/event/SearchIndexJobStatusEvent

## Event Delivery Allocation Enforced

Yes

## Special Access Rules

SearchIndexJobStatusEvent is available only if Data Cloud is enabled.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesNillableDescriptionThe search index API name. |
| ErrorCode | TypestringPropertiesNillableDescriptionReference code for the type of error that occurred. |
| EventCreationDate | TypedateTimePropertiesNillableDescriptionThe date and time when the event occurred. |
| EventPublishDate | TypedateTimePropertiesNillableDescriptionThe date and time when the event was published. |
| EventType | TypestringPropertiesNillableDescriptionThe type of event that occurred. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| IndexRefreshedOn | TypedateTimePropertiesNillableDescriptionThe date and time of the last refresh on the index. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RuntimeStatus | TypestringPropertiesNillableDescriptionThe last run status of the search index such as Ready, In Progress, or Failed. |
| SchemaVersion | TypestringPropertiesNillableDescriptionThe version of the event schema. |
