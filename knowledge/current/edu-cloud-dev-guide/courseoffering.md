---
title: "CourseOffering"
domain: edu-cloud-dev-guide
topic: courseoffering
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.050Z
estimatedTokens: 733
keywords: [CourseOffering, instance, training, course, location, date, courses, API, version, 57.0, later, Calls]
---

# CourseOffering

> Represents an instance of a training course with location and date details of
         training courses. This object is available in API version 57.0 and later.

# CourseOffering

Represents an instance of a training course with location and date details of training courses. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicSessionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Academic Session associated with the Course Offering.This field is a relationship field.Relationship NameAcademicSessionRelationship TypeLookupRefers ToAcademicSession |
| EnrolleeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe current number of enrollees in the Course Offering. |
| EnrollmentCapacity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of students that are allowed to enroll for the Course Offering. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Course Offering is active (true) or not (false).The default value is false. |
| IsWaitlistActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the course offering has an active waitlist (true) or not (false).The default value is false.This field is a calculated field. |
| LearningCourseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Learning Course record associated with the Course Offering.This field is a relationship field.Relationship NameLearningCourseRelationship TypeLookupRefers ToLearningCourse |
| PrimaryFacultyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Contact associated with the Course Offering as lead instructor.This field is a relationship field.Relationship NamePrimaryFacultyRelationship TypeLookupRefers ToContact |
| SectionNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDifferentiates a Course Offering from other sections in an academic term. |
| WaitlistCapacity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of students that can be waitlisted for the Course Offering. |
| WaitlistCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe current number of people on the waitlist for the Course Offering. |
| WaitlistStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the waitlist associated with the course offering.Possible values are:CanceledInactiveOpenProcessing OnlyProcessing Paused |

For more information, see [CourseOffering in Public Sector Solutions](https://developer.salesforce.com/docs/atlas.en-us.260.0.psc_api.meta/psc_api/sforce_api_objects_courseoffering.htm "HTML (New Window)").
