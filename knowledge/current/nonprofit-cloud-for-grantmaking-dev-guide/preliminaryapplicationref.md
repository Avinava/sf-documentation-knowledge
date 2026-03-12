---
title: "PreliminaryApplicationRef"
domain: nonprofit-cloud-for-grantmaking-dev-guide
topic: preliminaryapplicationref
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.111Z
estimatedTokens: 978
keywords: [PreliminaryApplicationRef, saved, applications, pre-screening, forms, API, version, 49.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# PreliminaryApplicationRef

> Represents the saved applications and pre-screening forms. This object is available in
      API version 49.0 and later.

# PreliminaryApplicationRef

Represents the saved applications and pre-screening forms. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Application system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ApplicantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the applicant for the application.This field is a relationship field.Relationship NameApplicantRelationship TypeLookupRefers ToContact |
| ApplicationCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category of the application |
| ApplicationName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the preliminary application. |
| ApplicationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of application.Possible values are:BusinessLicenseApplication—Business License ApplicationBusinessPrescreening—License Requirement AssessmentIndividualApplication—Individual Application |
| BusinessAccountNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the account related to the application.This field is a relationship field.Relationship NameBusinessAccountNameRelationship TypeLookupRefers ToAccount |
| IsSubmitted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the application was submitted.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the preliminary application. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| SavedApplicationUrl | TypeurlPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRelative path of the saved application. |
| SubmissionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application was submitted. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PreliminaryApplicationRefFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[PreliminaryApplicationRefHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[PreliminaryApplicationRefOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PreliminaryApplicationRefShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
