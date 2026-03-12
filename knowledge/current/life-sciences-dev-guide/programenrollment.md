---
title: "ProgramEnrollment"
domain: life-sciences-dev-guide
topic: programenrollment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:44.114Z
estimatedTokens: 1025
keywords: [ProgramEnrollment, enrollment, benefits, program, API, version, 57.0, later, Calls, Associated, Objects]
---

# ProgramEnrollment

> Represents details of enrollment for benefits in a program. This
      object is available in API version 57.0 and later.

# ProgramEnrollment

Represents details of enrollment for benefits in a program. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account that’s associated with an organization enrolled in the program.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ApplicationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the enrollee applied to the program. |
| CareProgramEnrolleeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care program enrollee associated with the program enrollment.This field is a relationship field.Relationship NameCareProgramEnrolleeRefers ToCareProgramEnrollee |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact that’s associated with an individual enrolled in the program.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the enrollment in the program. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the enrollment for the participant in the program is active (true) or not (false).The default value is false.This field is accessible if you enabled Data Protection and Privacy in Setup. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the program enrollment record. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe identifier of the program that's associated with the enrollee.This field is a relationship field.Relationship NameProgramRelationship TypeMaster-DetailRefers ToProgram |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the enrollment in the program. This field is accessible if you enabled Data Protection and Privacy in Setup. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe enrollment status of the enrollee for the program.This field is accessible if you enabled Data Protection and Privacy in Setup. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProgramEnrollmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ProgramEnrollmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ProgramEnrollmentOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

Sharing rules are available for the object.

[ProgramEnrollmentShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
