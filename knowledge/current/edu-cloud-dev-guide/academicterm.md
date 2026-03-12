---
title: "AcademicTerm"
domain: edu-cloud-dev-guide
topic: academicterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.770Z
estimatedTokens: 790
keywords: [AcademicTerm, academic, period, may, hold, defined, time, periods, specific, reporting, offerings, API, version, 57.0, later]
---

# AcademicTerm

> Defines an academic period which may hold other more defined time periods
         within it to create a specific time for reporting and offerings. This object is
      available in API version 57.0 and later.

# AcademicTerm

Defines an academic period which may hold other more defined time periods within it to create a specific time for reporting and offerings. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicYearId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe academic year that's associated with the Academic Term.This field is a relationship field.Relationship NameAcademicYearRelationship TypeLookupRefers ToAcademicYear |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the Academic Term. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the Academic Term ends. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Academic Term is active (true) or not (false).The default value is false. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LateRegistrationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from when the applications are considered as late submissions. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RegistrationCloseDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date for the students to register for the Academic Term. |
| RegistrationOpenDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from when the students can begin to register for the Academic Term. |
| Season | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the season related to the Academic Term.Possible values are:FallSpringSummerWinter |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the Academic Term starts. |
