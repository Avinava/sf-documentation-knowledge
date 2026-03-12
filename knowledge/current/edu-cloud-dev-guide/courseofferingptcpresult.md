---
title: "CourseOfferingPtcpResult"
domain: edu-cloud-dev-guide
topic: courseofferingptcpresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.074Z
estimatedTokens: 796
keywords: [CourseOfferingPtcpResult, outcome, student's, participation, course, API, version, 57.0, later, Calls]
---

# CourseOfferingPtcpResult

> Represents the outcome of a student's participation in a course. This
      object is available in API version 57.0 and later.

# CourseOfferingPtcpResult

Represents the outcome of a student's participation in a course. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CourseOfferingParticipantId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Course Offering Participant associated with the Course Offering Participant Result.This field is a relationship field.Relationship NameCourseOfferingParticipantRelationship TypeLookupRefers ToCourseOfferingParticipant |
| DurationUnit | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe unit of measurement for completion of the course.Possible values are:Clock HoursContinuing Education UnitsCredit HoursNo CreditOther |
| EvaluatorContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Contact that assigns the result associated with the Course Offering Participant Result.This field is a relationship field.Relationship NameEvaluatorContactRelationship TypeLookupRefers ToContact |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LetterGrade | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe letter grade awarded to the participant for completing the course. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionCourse Offering Participant Result auto-generated name. |
| NumericGrade | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value that's assigned to a Letter Grade. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParticipantResultStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type or status of the participant's result. For example, Pass or Fail.Possible values are:Fail—FailedIncompletePass—PassedWithdraw—Withdrew |
| UnitsEarned | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUnits of value awarded for completing the course. |
