---
title: "ProgramEnrollment"
domain: psc-api
topic: programenrollment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:34.260Z
estimatedTokens: 1778
keywords: [ProgramEnrollment, enrollment, benefits, program, API, version, 57.0, later, Calls, Associated, Objects]
---

# ProgramEnrollment

> Represents details of enrollment for benefits in a program. This
      object is available in API version 57.0 and later.

# ProgramEnrollment

Represents details of enrollment for benefits in a program. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account that’s associated with an individual or an organization enrolled in the program.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ApplicationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the enrollee applied to the program. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact that’s associated with an individual enrolled in the program.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| CurrentMonthDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefits disbursed to the enrollee in the current month. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| CurrentYearDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefits disbursed to the enrollee in the current year. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| EligibilityLastVerifiedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the enrollee's program eligibility status was last verified. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the enrollment in the program. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the enrollment for the participant in the program is active (true) or not (false).The default value is false. |
| IsAnonymous | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the participant enrolled to the program anonymously (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the program enrollment record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PreviousMonthDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefit disbursed to the enrollee in the previous month. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| PreviousYearDisbCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe count of benefits disbursed to the enrollee in the previous year. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe identifier of the program that's associated with the enrollee.This field is a relationship field.Relationship NameProgramRelationship TypeMaster-DetailRefers ToProgram |
| SessionsAbsentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of benefit sessions for the program that were scheduled for the participant but not attended.This field is available from API version 65.0 and later. |
| SessionsAttendanceRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of scheduled benefit sessions for the program that the participant attended.The value of this field is calculated by a formula: (Attended Sessions Count) / (Attended Sessions Count + Absent Sessions Count)This field is available from API version 65.0 and later. |
| SessionsAttendedCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of benefit sessions for the program that were scheduled for and attended by the participant.This field is available from API version 65.0 and later. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the enrollment in the program. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe enrollment status of the enrollee for the program.Possible values are:AppliedCompletedDeniedIn ProgressWaitlistedWithdrawnThe default value is Applied. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProgramEnrollmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ProgramEnrollmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ProgramEnrollmentOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

Sharing rules are available for the object.

[ProgramEnrollmentShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
