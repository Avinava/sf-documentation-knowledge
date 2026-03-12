---
title: "ProgramCohort"
domain: nonprofit-cloud
topic: programcohort
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.977Z
estimatedTokens: 826
keywords: [ProgramCohort, participants, program, cohort, API, version, 61.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ProgramCohort

> Represents information about the participants of a program cohort. This
      object is available in API version 61.0 and later.

# ProgramCohort

Represents information about the participants of a program cohort. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Advanced Program Management license is enabled, Program Cohorts are enabled, and the Advanced Program Management system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| CurrentMemberCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of members that are actively participating in the cohort.This is a roll-up summary field. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the program cohort. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the program cohort. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MaximumMemberCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of members that can be active in a cohort. Add custom validation to enforce this maximum count. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the program cohort. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe program associated with the cohort.This field is a relationship field.Relationship NameProgramRelationship TypeMaster-detailRefers ToProgram (the master object) |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the program cohort. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the program cohort.Possible values are:ActiveCanceledCompletedPlanned |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProgramCohortFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[ProgramCohortHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.
