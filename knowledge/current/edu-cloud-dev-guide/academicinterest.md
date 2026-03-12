---
title: "AcademicInterest"
domain: edu-cloud-dev-guide
topic: academicinterest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.743Z
estimatedTokens: 1329
keywords: [AcademicInterest, person's, academic, interest, API, version, 62.0, later, Calls, Associated, Objects]
---

# AcademicInterest

> Represents a person's academic interest. This object is available in API version 62.0 and later.

# AcademicInterest

Represents a person's academic interest. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicTermId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Academic Term associated with the Academic Interest.This field is a relationship field.Relationship NameAcademicTermRefers ToAcademicTerm |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Account associated with the Academic Interest.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Contact associated with the Academic Interest.This field is a relationship field.Relationship NameContactRefers ToContact |
| ContactRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Contact Request associated with the Academic Interest.This field is a relationship field.Relationship NameContactRequestRefers ToContactRequest |
| EducationalInfoRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEducational Info Request associated with the Academic Interest.This field is a relationship field.Relationship NameEducationalInfoRequestRefers ToEducationalInfoRequest |
| IndividualApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Individual Application associated with the Academic Interest.This field is a relationship field.Relationship NameIndividualApplicationRefers ToIndividualApplication |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LeadId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lead for the person who expressed the Academic Interest.This field is a relationship field.Relationship NameLeadRefers ToLead |
| LearningProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Learning Program associated with the Academic Interest.This field is a relationship field.Relationship NameLearningProgramRefers ToLearningProgram |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated string or number assigned to the Academic Interest. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Opportunity associated with the Academic Interest.This field is a relationship field.Relationship NameOpportunityRefers ToOpportunity |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReceivedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the interest from the person was received. |
| Source | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the source from where the Academic Interest was sent. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the Academic Interest. |
| Subscription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subscription that the person is requesting. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AcademicInterestHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AcademicInterestOwnerSharingRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AcademicInterestShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AcademicInterestHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- AcademicInterestOwnerSharingRule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- AcademicInterestShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
