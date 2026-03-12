---
title: "BatchJobStatusChangedEvent"
domain: channel-revenue-management-dev-guide
topic: batchjobstatuschangedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.310Z
estimatedTokens: 367
keywords: [BatchJobStatusChangedEvent, Notifies, subscribers, batch, job, completed, flow, API, version, 51.0, later, Calls]
---

# BatchJobStatusChangedEvent

> Notifies subscribers of when a batch job is completed in a
			flow. This object is available in API version 51.0 and later.

# BatchJobStatusChangedEvent

Notifies subscribers of when a batch job is completed in a flow. This object is available in API version 51.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Flows |  |

## Fields

| Field | Details |
| --- | --- |
| BatchJob | TypestringDescriptionThe unique identifier of the batch job. |
| BatchJobDefinition | TypestringPropertiesNillableDescriptionThe unique identifier of the batch job's definition. |
| EndDateTime | TypedateTimePropertiesNillableDescriptionThe timestamp for when the batch job execution is complete. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| StartDateTime | TypedateTimePropertiesNillableDescriptionThe timestamp for when the batch job execution is started. |
| Status | TypepicklistPropertiesRestricted picklistDescriptionThe status of the batch job.Possible values are:Canceled—CanceledFailureSuccess |
