---
title: "PreliminaryApplicationRef"
domain: eu-developer-guide
topic: preliminaryapplicationref
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.318Z
estimatedTokens: 976
keywords: [PreliminaryApplicationRef, saved, applications, pre-screening, forms, API, version, 49.0, later, Calls, Associated, Objects]
---

# PreliminaryApplicationRef

> Represents the saved applications and pre-screening forms. This object is
    available in API version 49.0 and later.

# PreliminaryApplicationRef

Represents the saved applications and pre-screening forms. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert(),

## Fields

| Field | Details |
| --- | --- |
| ApplicationName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the preliminary application. |
| ApplicationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of application.Possible values are:BusinessLicenseApplication—Business License ApplicationBusinessPrescreening—License Requirement AssessmentIndividualApplication—Individual Application |
| ApplicationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the application.Possible values are:ApprovedIncompleteMore Info RequestedRejectedUnder Review |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the preliminary application. |
| DynamicAttribute | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe details of the equipment included in the project. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Program associated with the preliminary application.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |
| RejectionReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason the customer's application is rejected.Possible values are:Application Not SignedGaps Not addressedInspection Not Passed |
| Score | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority score of the application. |
| BusinessAccountNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the business account related to the application. |
| IsSubmitted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the application was submitted. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the preliminary application. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner who owns the record. |
| SavedApplicationUrl | TypeurlPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRelative path of the saved application. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PreliminaryApplicationRefFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed is available for the object.

[PreliminaryApplicationRefHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for the object.

[PreliminaryApplicationRefOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PreliminaryApplicationRefShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Share is available for the object.
