---
title: "ApplicationTimeline"
domain: edu-cloud-dev-guide
topic: applicationtimeline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.910Z
estimatedTokens: 872
keywords: [ApplicationTimeline, milestone, dates, application, process, API, version, 57.0, later, Calls]
---

# ApplicationTimeline

> Represents the milestone dates in the application process. This object
      is available in API version 57.0 and later.

# ApplicationTimeline

Represents the milestone dates in the application process. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the category of the application based on the admission decision period.Possible values are:Early DecisionRegular Decision |
| ApplicationCloseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last date when domestic applicants can apply for admission. |
| ApplicationOpenDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when applicants can start to apply for admission. |
| DecisionReleaseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application decision is announced. |
| EarlyActionCloseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last date when applicants can apply for early action admission. |
| EarlyActionOpenDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when applicants can start to apply for early action admission. |
| EarlyApplicationCloseDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last date when applicants can apply early for admission. |
| EarlyApplicationOpenDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when applicants can start to apply early for admission. |
| EarlyApplnDecisionRelDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application decision for early applicants is announced. |
| GraduationApplnDeadline | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last date for the students to apply for graduation. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of application timeline.Possible values are:Admissions |
