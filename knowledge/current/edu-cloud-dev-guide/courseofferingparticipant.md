---
title: "CourseOfferingParticipant"
domain: edu-cloud-dev-guide
topic: courseofferingparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.064Z
estimatedTokens: 1687
keywords: [CourseOfferingParticipant, student's, enrollment, Course, Offering, API, version, 57.0, later, Calls, Associated, Objects]
---

# CourseOfferingParticipant

> Represents information about a student's enrollment in a Course
         Offering. This object is available in API version 57.0 and later.

# CourseOfferingParticipant

Represents information about a student's enrollment in a Course Offering. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicTermEnrollmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Academic Term associated with the Course Offering Participant.This field is a relationship field.Relationship NameAcademicTermEnrollmentRelationship TypeLookupRefers ToAcademicTermEnrollment |
| AddedToWaitlist | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the course offering participant is added to the waitlist. |
| CourseOfferingId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Course Offering associated with the Course Offering Participant.This field is a relationship field.Relationship NameCourseOfferingRelationship TypeLookupRefers ToCourseOffering |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency related to the course offering participant.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| DroppedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the student registered for the course.This field is available in API version 64.0 and later. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the participant's involvement in the course ended. |
| EnrollmentOfferDeclined | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the course offering participant declines an enrollment offer. |
| EnrollmentOfferExpiration | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the enrollment offer expires. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| IsRepeatAttempt | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the participant has previously taken the course (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParticipantAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Account associated with the Course Offering Participant.This field is a relationship field.Relationship NameParticipantAccountRelationship TypeLookupRefers ToAccount |
| ParticipantAffiliation | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe participant's role in the course.Possible values are:AideStudentTeacher |
| ParticipantContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Contact record associated with the Course Offering Participant.This field is a relationship field.Relationship NameParticipantContactRelationship TypeLookupRefers ToContact |
| ParticipationStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the participation status of the participant in the course.Possible values are:AuditCompletedDeclined WaitlistDroppedEligible to Enroll from WaitlistEnrolledExpired Waitlist Enrollment OfferFacilitatingFailedIn CartOn HoldRemoved from WaitlistTransfer CreditWaitlist Enrollment Offer in CartWaitlistedWithdrew |
| RegistrationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the student removed the course from the registration.This field is available in API version 64.0 and later. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the participant's involvement in the course began. |
| Summary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe summary associated with the Course Offering Participant. |
| WaitlistScore | TypeintPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe weighted value that determines the position of the course offering participant on the waitlist. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CourseOfferingParticipantFeed](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CourseOfferingParticipantHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CourseOfferingParticipantShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CourseOfferingParticipantFeed (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- CourseOfferingParticipantHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- CourseOfferingParticipantShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
