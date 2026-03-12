---
title: "ProgramTermApplnTimeline"
domain: edu-cloud-dev-guide
topic: programtermapplntimeline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.758Z
estimatedTokens: 763
keywords: [ProgramTermApplnTimeline, junction, Academic, Term, Application, Timeline, Learning, Program, objects, API, version, 57.0, later, Calls]
---

# ProgramTermApplnTimeline

> Represents a junction between Academic Term, Application Timeline, and
         Learning Program objects. This object is available in API version 57.0 and later.

# ProgramTermApplnTimeline

Represents a junction between Academic Term, Application Timeline, and Learning Program objects. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicTermId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated Academic Term for which the program is being offered.This field is a relationship field.Relationship NameAcademicTermRelationship TypeLookupRefers ToAcademicTerm |
| ActionPlanTemplateVersionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe action plan template version associated with the Program Term Application Timeline.Relationship NameActionPlanTemplateVersionRelationship TypeLookupRefers ToActionPlanTemplateVersion |
| ApplicationTimelineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated Application Timeline that determines when admissions to the program for this term are open.This field is a relationship field.Relationship NameApplicationTimelineRelationship TypeLookupRefers ToApplicationTimeline |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearningProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated Learning Program which is accepting students for admission.This field is a relationship field.Relationship NameLearningProgramRelationship TypeLookupRefers ToLearningProgram |
| LearningProgramPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Learning Program Plan associated with the timeline.This field is a relationship field.Relationship NameLearningProgramPlanRefers ToLearningProgramPlan |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
