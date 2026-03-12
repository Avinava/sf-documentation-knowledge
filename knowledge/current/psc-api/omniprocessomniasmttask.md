---
title: "OmniProcessOmniAsmtTask"
domain: psc-api
topic: omniprocessomniasmttask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.057Z
estimatedTokens: 398
keywords: [OmniProcessOmniAsmtTask, junction, omni, process, assessment, task, API, version, 63.0, later, Calls]
---

# OmniProcessOmniAsmtTask

> Represents a junction between an omni process and an omni assessment
         task. This object is available in API version 63.0 and later.

# OmniProcessOmniAsmtTask

Represents a junction between an omni process and an omni assessment task. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the omni process omni assessment task record. |
| OmniAssessmentTaskId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe omni assessment task record associated with the omni process.This field is a relationship field.Relationship NameOmniAssessmentTaskRefers ToOmniAssessmentTask |
| OmniProcessId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe omni process record associated with the omni assessment task when it is executed.This field is a relationship field.Relationship NameOmniProcessRefers ToOmniProcess |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the omni process omni assessment task record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
