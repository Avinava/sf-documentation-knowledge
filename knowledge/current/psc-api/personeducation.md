---
title: "PersonEducation"
domain: psc-api
topic: personeducation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.184Z
estimatedTokens: 1110
keywords: [PersonEducation, professional, education, person, Calls, Associated, Objects]
---

# PersonEducation

> Represents information about the professional education for a person.

# PersonEducation

Represents information about the professional education for a person.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CompletionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEducation's completion date. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the person who earned the degree and is listed as a contact. |
| EducationLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLevel of education achieved. Example values:Undergraduate degreeMedical schoolInternshipResidencyFellowship |
| GraduationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionGraduation date from institution. |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person in a provider role whose education details are represented by this record.This field is a relationship field.Relationship NameHealthcareProviderRelationship TypeLookupRefers ToHealthcareProvider |
| Identifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID issued to the recipient by the educational institution. |
| IdentifierIssuer | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEducational institution's name. |
| IndividualId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the person who earned the degree and is listed as an individual. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the degree earned. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEducation's start date. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionCurrent status of education. Valid values:InactiveRevokedDraftVerifiedThe default value is Inactive. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the person who earned the degree and is listed as a user. |
| VerificationStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionCurrent educational status. Valid values:AuthorizedNoneThe default value is None. |
| VerifiedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEducation was validated on this date. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PersonEducationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[PersonEducationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[PersonEducationOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[PersonEducationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
