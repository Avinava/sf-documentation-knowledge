---
title: "AssessmentTask"
domain: psc-api
topic: assessmenttask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.073Z
estimatedTokens: 659
keywords: [AssessmentTask, Perform, tasks, inspections, capture, API, version, 47.0, later, Calls]
---

# AssessmentTask

> Perform tasks in inspections to capture information. This object is
    available in API version 47.0 and later.

# AssessmentTask

Perform tasks in inspections to capture information. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentTaskDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assessment task definition that is referenced for the task. This field is available in API version 48.0 and later. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of task that has to be performed at the store. |
| End Time | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime when the task was completed by the inspector. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicate whether a task must be completed to complete a visit. The default value is False. This field is available in API version 48.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identification of the task. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the assessment task record owner. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe visit associated with an assessment task. This field is available in API version 48.0 and later. |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence in which the tasks must be performed. This field is available in API version 48.0 and later. |
| Start Time | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime when the task was started by a inspector. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionView the status of a task. This field is available in API version 48.0 and later.Possible values are:CompletedInProgress—In ProgressNotStarted—Not Started |
| TaskType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionType of a task that an inspector can perform during the visit. |
