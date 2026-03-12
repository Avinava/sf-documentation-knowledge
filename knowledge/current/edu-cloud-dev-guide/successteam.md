---
title: "SuccessTeam"
domain: edu-cloud-dev-guide
topic: successteam
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.816Z
estimatedTokens: 718
keywords: [SuccessTeam, Records, success, team, Salesforce, Scheduler, API, version, 57.0, later, Calls]
---

# SuccessTeam

> Records details about a success team in Salesforce Scheduler. This
      object is available in API version 57.0 and later.

# SuccessTeam

Records details about a success team in Salesforce Scheduler. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the success team.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| CanSelfSchedule | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the success team can be self scheduled (true) or not (false).The default value is false. |
| CaseRecordTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe case record type associated with the success team.This field is a relationship field.Relationship NameCaseRecordTypeRelationship TypeLookupRefers ToRecordType |
| DefaultUnassignedCaseTeam | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe case team associated with the success team. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the success team is active (true) or not (false).The default value is false. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the success team. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ResourceAssignmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of resource assignment for appointment scheduling.Possible values are:AutomaticBothManualThe default value is Manual. |
