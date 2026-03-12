---
title: "DataObjectMetadataChgEvent"
domain: platform-events
topic: dataobjectmetadatachgevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.530Z
estimatedTokens: 524
keywords: [DataObjectMetadataChgEvent, Notifies, subscribers, metadata, change, Data, Cloud, objects, Lake, Model, Calculated, Insight, API, version, 53.0]
---

# DataObjectMetadataChgEvent

> Notifies subscribers of a metadata change within Data Cloud for these
			objects: Data Lake, Data Model, and Calculated Insight. This object is available in
		API version 53.0 and later.

# DataObjectMetadataChgEvent

Notifies subscribers of a metadata change within Data Cloud for these objects: Data Lake, Data Model, and Calculated Insight. This object is available in API version 53.0 and later.

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

/event/DataObjectMetadataChgEvent

## Special Access Rules

DataObjectMetadataChgEvent is available only if Data Cloud is enabled.

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| CurrentValue | TypetextareaPropertiesNillableDescriptionThe serialized schema of the current metadata. |
| EventCreationDate | TypedateTimePropertiesNillableDescriptionThe date and time when the event occurred. |
| EventPublishDate | TypedateTimePropertiesNillableDescriptionThe date and time when the event published. |
| EventType | TypestringPropertiesNillableDescriptionThe type of event that occurred. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| PreviousValue | TypetextareaPropertiesNillableDescriptionThe serialized schema of the metadata before the change. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SchemaVersion | TypestringPropertiesNillableDescriptionThe version of the event schema. |
| SourceTableDeveloperName | TypestringPropertiesNillableDescriptionThe source entity name on which the metadata change has occurred. |
| Trigger | TypestringPropertiesNillableDescriptionThe trigger data definition language type that caused the event. Examples: DELETE, INSERT, or UPDATE |
