---
title: "WorkTypeGroupRole"
domain: edu-cloud-dev-guide
topic: worktypegrouprole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.834Z
estimatedTokens: 439
keywords: [WorkTypeGroupRole, grouping, work, roles, categorize, appointments, Salesforce, Scheduler, API, version, 57.0, later, Calls]
---

# WorkTypeGroupRole

> Represents a grouping of work types by roles, used to categorize types of
         appointments available in Salesforce Scheduler. This object is available in API
      version 57.0 and later.

# WorkTypeGroupRole

Represents a grouping of work types by roles, used to categorize types of appointments available in Salesforce Scheduler. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CaseTeamRole | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe role of the case team. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for the work type group role. |
| WorkTypeGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe work type group associated with this work type group role.This field is a relationship field.Relationship NameWorkTypeGroupRelationship TypeLookupRefers ToWorkTypeGroup |
