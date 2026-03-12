---
title: "SrcPredJobStatusChgEvent"
domain: platform-events
topic: srcpredjobstatuschgevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.290Z
estimatedTokens: 582
keywords: [SrcPredJobStatusChgEvent, Notifies, subscribers, Data, Cloud, prediction, job’s, status, changed, API, version, 50.0, later, Calls, Subscription]
---

# SrcPredJobStatusChgEvent

> Notifies subscribers that the Data Cloud prediction job’s status is
			changed. This object is available in API version 50.0 and later.

# SrcPredJobStatusChgEvent

Notifies subscribers that the Data Cloud prediction job’s status is changed. This object is available in API version 50.0 and later.

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

/event/srcpredjobstatuschgevent

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypestringPropertiesNillableDescriptionIf the event’s status is an error, contains the error code. |
| EventCreationDate | TypedateTimePropertiesNillableDescriptionThe date and time when the event occurred. |
| EventPublishDate | TypedateTimePropertiesNillableDescriptionThe date and time when the event published. |
| EventType | TypestringPropertiesNillableDescriptionThe type of event that occurred. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| LastRefreshDate | TypedateTimePropertiesNillableDescriptionThe date and time when the prediction job was last changed. |
| LastRunStatus | TypestringPropertiesNillableDescriptionThe status of the prediction job’s last run. |
| LastRunTime | TypedateTimePropertiesNillableDescriptionThe date and time when the prediction job was last run. |
| OutputDloName | TypestringPropertiesNillableDescriptionThe developer name of the DLO containing the prediction job’s output. |
| PredictionApiName | TypestringPropertiesNillableDescriptionThe API name of the prediction job. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RowsProcessed | TypelongPropertiesNillableDescriptionThe number of rows processed during the prediction. |
| RowsUpdated | TypelongPropertiesNillableDescriptionThe number of rows updated during the prediction. |
| SchemaVersion | TypestringPropertiesNillableDescriptionThe version of the event schema. |
