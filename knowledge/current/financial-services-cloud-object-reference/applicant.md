---
title: "Applicant"
domain: financial-services-cloud-object-reference
topic: applicant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.375Z
estimatedTokens: 1876
keywords: [Applicant, individual, group, applying, API, version, 59.0, later, Calls, Associated, Objects]
---

# Applicant

> Represents information about the individual or group that are applying.
      This object is available in API version 59.0 and later.

# Applicant

Represents information about the individual or group that are applying. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account ID associated with the applicant.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ApplicationFormId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe application that's submitted for a product request.This field is a relationship field.Relationship NameApplicationFormRelationship TypeLookupRefers ToApplicationForm |
| BirthDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of birth of the applicant. |
| BusinessEntityName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe registered name of the business entity associated with the applicant. |
| BusinessEntityPrimCtctId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary contact for the business entity associated with the applicant.This field is a polymorphic relationship field.Relationship NameBusinessEntityPrimaryCtctRelationship TypeLookupRefers ToApplicant, Contact |
| BusinessEntityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the business entity associated with the applicant.Possible values are:Locally Incorporated CompanySole ProprietorshipForeign CompanyLimited PartnershipGeneral PartnershipFoundationsTrusts |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related contact ID assocaited with the account.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Email | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email address of the applicant. |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first name of the applicant. |
| GroupExposure | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all existing loans an applicant has with the financial institution to which they’re applying for a new loan. |
| LastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last name of the applicant. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MiddleName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe middle name of the applicant. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA unique number that represents the applicant. |
| PartyProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party profile requesting a product with the application form.This field is a relationship field.Relationship NamePartyProfileRelationship TypeLookupRefers ToPartyProfile |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe applicant's phone number. |
| PhoneType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of phone number provided by the applicant.Possible values are:HomeMobile |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the role of the applicant.Possible values are:Co-ApplicantCo-SignerGuarantorPrimary Applicant |
| Salutation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe applicant's salutation.Possible values are:Dr.Mr.Mrs.Ms.Prof. |
| Stage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the stage of the application for a product that is submitted by the applicant.Possible values are:ApprovedIn ReviewOn HoldRejected |
| Suffix | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe suffix of the applicant. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the applicant.Possible values are:BusinessIndividual |
| UniqueReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe customer reference number of the applicant. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicantChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ApplicantFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ApplicantHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ApplicantOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ApplicantShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ApplicantChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ApplicantFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ApplicantHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ApplicantOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ApplicantShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
