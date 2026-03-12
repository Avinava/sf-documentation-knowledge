---
title: "AiJobRunStatusEvent"
domain: platform-events
topic: aijobrunstatusevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.190Z
estimatedTokens: 463
keywords: [AiJobRunStatusEvent, Notifies, subscribers, AiJobRun, changes, status, InProgress, Completed, Failed, API, version, 65.0, later, Calls, Special]
---

# AiJobRunStatusEvent

> Notifies subscribers when an AiJobRun object changes status to InProgress, Completed, or Failed. This object is available in API version 65.0
      and later.

# AiJobRunStatusEvent

Notifies subscribers when an AiJobRun object changes status to InProgress, Completed, or Failed. This object is available in API version 65.0 and later.

## Supported Calls

create(), describeSObjects()

## Special Access Rules

This object is available to users with access to the [AiJobRun](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_aijobrun.htm) and [AiJobRunItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_aijobrunitem.htm) standard objects.

## Fields

| Field | Details |
| --- | --- |
| AiJobRunIdentifier | TypestringPropertiesCreateDescriptionThe ID of the AiJobRun associated with this event. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| JobType | TypepicklistPropertiesCreate, Restricted picklistDescriptionThe method used to create the job run.Possible values are:GeneratePromptAsyncIA (Flow)PromptTemplate (Apex) |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| Status | TypepicklistPropertiesCreate, Restricted picklistDescriptionThe AiJobRunStatus that the job run changed to.Possible values are:InProgressCompletedFailed |
| Target | TypestringPropertiesCreate, NillableDescriptionRepresents the Target field in AiJobRun. A metadata field used to specify job-specific details, such as a PromptTemplateId, PromptTemplateName, or ModelId. |
