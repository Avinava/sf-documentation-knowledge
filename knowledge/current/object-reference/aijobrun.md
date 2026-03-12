---
title: "AiJobRun"
domain: object-reference
topic: aijobrun
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.176Z
estimatedTokens: 636
keywords: [AiJobRun, execution, instance, job, tracks, overall, status, manages, lifecycle, initiation, completion, API, version, 63.0, later]
---

# AiJobRun

> Represents an execution instance of an AI job. This object tracks the overall
         status and manages the lifecycle of the job from initiation to completion. This object
      is available in API version 63.0 and later.

# AiJobRun

Represents an execution instance of an AI job. This object tracks the overall status and manages the lifecycle of the job from initiation to completion. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time when the job run ends. |
| ErrorCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the job run fails, this field indicates the specific error that occurred. |
| ErrorMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains a detailed, human-readable message that explains the reason for the job run failure. |
| JobType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the job's logic.Possible values are:PromptTemplate |
| Label | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA user-defined name or label for the job run, which can be used for identification and tracking. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA unique, system-generated identifier for the AiJobRun record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user group that owns the AiJobRun record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| StartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time when the job run's status changes to InProgress. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionTracks the lifecycle of the job run. Valid values are:New: The job run has been created.ReadyToStart: The job run is ready for the user to initiate processing.Queued: The job run is queued to start.InProgress: The job run is currently processing.Completed: The job run completed.Failed: The job run failed.Aborted: The job run was aborted by the user.Archived: The job run was archived by the user. |
| Target | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA metadata field used to specify job-specific details, such as a PromptTemplateId, PromptTemplateName, or ModelId. This provides further context for the job execution. |
