---
title: "AcademicTermEnrollment"
domain: edu-cloud-dev-guide
topic: academictermenrollment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.784Z
estimatedTokens: 1654
keywords: [AcademicTermEnrollment, student's, enrollment, Academic, Term, API, version, 57.0, later, Calls, Associated, Objects]
---

# AcademicTermEnrollment

> Represents information about a student's enrollment in an Academic Term.
      This object is available in API version 57.0 and later.

# AcademicTermEnrollment

Represents information about a student's enrollment in an Academic Term. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicStanding | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe learner's performance and progress for the term.Possible values are:Academic DismissalAcademic ProbationAcademic WarningGood StandingHonors/Dean's ListReinstatement StatusRequired Withdrawal |
| AcademicTermId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Academic Term associated with the Academic Term Enrollment.This field is a relationship field.Relationship NameAcademicTermRelationship TypeLookupRefers ToAcademicTerm |
| AcademicTermRegstrnTimelineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Academic Term Registration Timeline associated with the Academic Term Enrollment.This field is a relationship field.Relationship NameAcademicTermRegstrnTimelineRefers ToAcademicTermRegstrnTimeline |
| CumulativeGradePointAverage | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe learner's cumulative grade point average, that is the average of all grade points achieved. |
| EnrollmentDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that the student enrolled in the Academic Term. |
| EnrollmentReason | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe reason the student enrolled in the Academic Term.Possible values are:ContinuingFirst TimeRe-admitTransfer in |
| EnrollmentStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the status of a student's enrollment in the Academic Term.Possible values are:ActiveDropoutExpelledGraduatedNo showOtherTransferredWithdrawn |
| ExitDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the student left the institution. |
| ExitReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason that the student left the institution. |
| HoursAttempted | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of credit hours or contact hours attempted by a student during the Academic Term. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearnerAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Account of the person associated with the Academic Term Enrollment.This field is a relationship field.Relationship NameLearnerAccountRelationship TypeLookupRefers ToAccount |
| LearnerContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Contact person associated with the Academic Term Enrollment.This field is a relationship field.Relationship NameLearnerContactRelationship TypeLookupRefers ToContact |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for this record. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Opportunity associated with the Academic Term Enrollment.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| StudentAcademicLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the student's applicable point in the education process.Possible values are:Adult EducationDoctoralElementaryGraduateHigh SchoolMiddle SchoolPost-Baccalaureate CertificatePre-K/PreschoolProfessional EducationUndergraduate |
| StudyYearClassification | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the student's year of study classification.Possible values are:FreshmanJuniorSeniorSophomore |
| TermGradePointAverage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe learner's grade point average for the Academic Term. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AcademicTermEnrollmentFeed](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AcademicTermEnrollmentHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AcademicTermEnrollmentShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AcademicTermEnrollmentFeed (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- AcademicTermEnrollmentHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- AcademicTermEnrollmentShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
