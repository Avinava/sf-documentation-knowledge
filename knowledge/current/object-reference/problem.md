---
title: "Problem"
domain: object-reference
topic: problem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.138Z
estimatedTokens: 1134
keywords: [Problem, Problems, represent, root, cause, data, incidents, documenting, history, detection, closure, API, version, 53.0, later]
---

# Problem

> Problems represent the root cause data of one or more incidents. This object
         contains all the details of a problem, documenting the history of the problem from
         detection to closure. This object is available in API version 53.0 and later.

# Problem

Problems represent the root cause data of one or more incidents. This object contains all the details of a problem, documenting the history of the problem from detection to closure. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of problem. Administrators set field values. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the problem. This field can store up to 32 KB of data, but only the first 255 characters appear in reports. |
| Impact | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe problem's impact.Possible values are:HighLowMediumThe default value is 'High'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time (in UTC) when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time (in UTC) when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view. (LastReferencedDate) but not viewed it. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis is a polymorphic relationship field that represents the user or group assigned to resolve the problem.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentProblemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a problem above one or more related problems in a problem hierarchy.This is a relationship field.Relationship NameParentProblemRelationship TypeLookupRefers ToProblem |
| Priority | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe impact and urgency of the problem.Possible values are:CriticalHighLowModerateThe default value is 'Critical'. |
| PriorityOverrideReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason why the priority should be changed or edited. |
| ProblemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique, system-generated problem number. |
| ResolutionDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time (in UTC) when the problem was resolved. |
| ResolutionSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the steps needed to resolve the incident. |
| ResolvedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the user who resolved the problem.This is a relationship field.Relationship NameResolvedByRelationship TypeLookupRefers ToUser |
| RootCauseSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the problem resolution or root cause. This field can store up to 32 KB of data, but only the first 255 characters display in reports. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAny custom or granular stages customers wants to track. This will be a dependent picklist.Possible values are:ClosedFix in ProgressKnown ErrorNewOpenPending ChangeResolvedRoot Cause AnalysisWork In ProgressThe default value is 'New'. |
| StatusCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the problem.Possible values are:ClosedFixInProgressKnownErrorNewOpenPendingChangeResolvedRootCauseAnalysisWorkInProgressThe default value is 'New'. |
| SubCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of problem. One level deeper than Category. Administrators set field values. |
| Subject | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA brief description of the problem. |
| Urgency | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionA measure of how long a resolution can be delayed until an incident, problem, or change has a significant business impact.Possible values are:HighLowMediumThe default value is 'High'. |
