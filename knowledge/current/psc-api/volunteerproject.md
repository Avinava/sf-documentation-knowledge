---
title: "VolunteerProject"
domain: psc-api
topic: volunteerproject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.637Z
estimatedTokens: 670
keywords: [VolunteerProject, activities, carried, certain, time, frame, location, volunteers, Calls]
---

# VolunteerProject

> Represents information about activities that must be carried out
      within a certain time frame, at a specified location, by one or more
    volunteers.

# VolunteerProject

Represents information about activities that must be carried out within a certain time frame, at a specified location, by one or more volunteers.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CancelationReason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe reason why this volunteer opportunity was canceled. |
| CanceledById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionLookup to the user, person account, or contact who canceled this volunteer project. |
| CanceledTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the volunteer opportunity was canceled. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the volunteer project. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The date and time when the volunteer project ended. |
| ExternalDescription | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description that appears when this volunteer project is published on the community. |
| IsPublishedOnWeb | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the volunteer project is published on the community. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user accessed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the location of this volunteer project. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the volunteer project. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionLookup to the user who owns this volunteer project. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The date and time when the volunteer project starts. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The current status of the volunteer project.Possible values are:ActiveCanceledCompleted |
| VolunteersRequired | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The number of volunteers required for the volunteer project. |
