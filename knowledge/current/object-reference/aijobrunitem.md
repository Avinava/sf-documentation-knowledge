---
title: "AiJobRunItem"
domain: object-reference
topic: aijobrunitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.183Z
estimatedTokens: 577
keywords: [AiJobRunItem, Stores, individual, item, associated, parent, AiJobRun, including, inputs, resulting, API, version, 63.0, later, Calls]
---

# AiJobRunItem

> Stores an individual item associated with a parent AiJobRun, including the
         inputs and resulting response.  This object is available in API version 63.0 and
      later.

# AiJobRunItem

Stores an individual item associated with a parent AiJobRun, including the inputs and resulting response. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AiJobRunId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionA required reference to the parent AiJobRun record that this item belongs to.This field is a relationship field.Relationship NameAiJobRunRefers ToAiJobRun |
| ErrorCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf processing for this item fails, this field contains a numeric code indicating the error. |
| ErrorMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains a detailed, human-readable message that explains the reason for the job run item failure. |
| Input | TypetextareaPropertiesCreate, UpdateDescriptionContains the input data for a single item within the job run. For example, in a PromptTemplate job, this is the JSON input for the prompt template. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA unique, system-generated identifier for the AiJobRunItem record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user or group that owns the AiJobRunItem record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PreprocessedInput | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores an intermediate version of the input data after the preprocessing step. For example, this field could be a hydrated JSON prompt. |
| Response | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionContains the generated response for the job item after processing is complete. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionTracks the status of the individual job item. Valid values are:Ready: The default value. The job run item is ready to start processing.Completed: Processing for the job run item is complete.Failed: Processing for the job run item failed. |
