---
title: "CourseOfferingSchedule"
domain: edu-cloud-dev-guide
topic: courseofferingschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.091Z
estimatedTokens: 1228
keywords: [CourseOfferingSchedule, schedule, defined, Course, Offering, API, version, 57.0, later, Calls]
---

# CourseOfferingSchedule

> Represents information about the schedule defined for a Course Offering.
      This object is available in API version 57.0 and later.

# CourseOfferingSchedule

Represents information about the schedule defined for a Course Offering. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CourseOfferingId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Course Offering that's associated with the Course Offering Schedule.This field is a relationship field.Relationship NameCourseOfferingRelationship TypeLookupRefers ToCourseOffering |
| CourseOfferingScheduleTmplId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Course Offering Schedule Template associated with the Course Offering Schedule. If a Course Offering Schedule Template is specified, the StartTime, EndTime and Days from the Course Offering Schedule Template are used.This field is a relationship field.Relationship NameCourseOfferingScheduleTmplRelationship TypeLookupRefers ToCourseOfferingScheduleTmpl |
| Description | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe description of the Course Offering Schedule Template. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the course offering schedule. |
| EndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time of day when the Course Offering meeting ends. |
| IsFriday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the Course Offering occurs on Friday.The default value is false. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| IsMonday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the Course Offering occurs on Monday.The default value is false. |
| IsSaturday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the Course Offering occurs on Saturday.The default value is false. |
| IsSunday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the Course Offering occurs on Sunday.The default value is false. |
| IsThursday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the Course Offering occurs on Thursday.The default value is false. |
| IsTuesday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the Course Offering occurs on Tuesday.The default value is false. |
| IsWednesday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the Course Offering occurs on Wednesday.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe education facility Location that's associated with the Course Offering Schedule.This field is a relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for this record. |
| RecurrencePattern | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe RRULE that describes the recurrence pattern for the course offering schedule. Supports a subset of the RFC 5545 standard for internet calendaring and scheduling. For example, a recurrence pattern of every day for five days would be RRULE:FREQ=DAILY;INTERVAL=1;COUNT=5. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the course offering schedule, which is required when there is a recurrence pattern. |
| StartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time of day when the Course Offering meeting starts. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of course offering schedule, such as class, lab, or exam. |
