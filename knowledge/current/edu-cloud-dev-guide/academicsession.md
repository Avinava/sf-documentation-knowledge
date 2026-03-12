---
title: "AcademicSession"
domain: edu-cloud-dev-guide
topic: academicsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.760Z
estimatedTokens: 1041
keywords: [AcademicSession, Records, course, offering, period, time, periods, institution’s, calendar, whether, semesters, quarters, trimesters, terms, API]
---

# AcademicSession

> Records course offering period. Specifies time periods based on an
         institution’s calendar whether that is semesters, quarters, trimesters, or other
         terms. This object is available in API version 57.0 and later.

# AcademicSession

Records course offering period. Specifies time periods based on an institution’s calendar whether that is semesters, quarters, trimesters, or other terms. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicTermId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Academic Term associated with the Academic Session.This field is a relationship field.Relationship NameAcademicTermRelationship TypeLookupRefers ToAcademicTerm |
| AddDropDeadline | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date when a student can add or drop a course, without a record of registration on their academic period. |
| AuditDueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date for a student to audit a course and take it without seeking a grade or credit. |
| ClassEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when classes end for the Academic Session. |
| ClassStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when classes start for the Academic Session. |
| CourseWithdrawDeadline | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when withdraw from a course is recorded on the student’s academic record. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the Academic Session. |
| ExamEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when exams for the Academic Session end. |
| ExamStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when exams for the Academic Session start. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Academic Session is active (true) or not (false).The default value is false. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ResultAvailabilityDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the result of the course offering is announced. |
| ResultDueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date to submit the result of a course offering, such as grades. |
| Season | Typerestricted picklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the season related to the Academic Session.Possible values are:FallSpringSummerWinter |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the type of Academic Session.Possible values are:First SemesterMini TermOthersQuarterSecond SemesterSemesterTerm 1Term 2Term 3Term 4Trimester |
