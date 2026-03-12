---
title: "IndividualApplication"
domain: eu-developer-guide
topic: individualapplication
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.245Z
estimatedTokens: 2987
keywords: [IndividualApplication, application, form, submitted, individual, API, version, 50.0, later, Calls, Associated, Objects]
---

# IndividualApplication

> Represents an application form submitted by an individual. This object
      is available in API version 50.0 and later.

# IndividualApplication

Represents an application form submitted by an individual. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the applicant’s account.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AmountPaid | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount paid by the applicant. |
| ApplicationCaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a case that relates to this application.This is a relationship field.Relationship NameApplicationCaseRelationship TypeLookupRefers ToCase |
| ApplicationCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCategorizes the ways an application can be processed.Possible values are:BasicSpecial |
| ApplicationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescriptive name for the application. This field is available if you enabled Public Sector Solutions or Grantmaking in Setup.This field is available from API version 57.0 and later. |
| ApplicationReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe custom reference number assigned to the application. This field is available if you enabled Health Cloud, Public Sector Solutions, or Grantmaking in Setup. |
| ApplicationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the application.Possible values are:Change of LocationChange of OwnershipNew Salon |
| AppliedDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date on which the application was received from the applicant. |
| ApprovedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the application was approved. |
| ApplicationFormTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Application Form Template associated with the application.This field is a relationship field.Relationship NameApplicationFormTemplateRelationship TypeLookupRefers ToApplicationFormTemplate |
| ExternalProject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID assigned to the project by an external data source. |
| IsApprovalRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an application requires approval before it is accepted.The default value is false. |
| IsSubmittedByThirdParty | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the application is submitted by a third party.The default value is false. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the application.Possible values are:Application IncompleteApprovedCancelledIn ReviewRejectedSchedule AppointmentSubmitted |
| SubmittedByAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that submitted the application.Relationship NameSubmittedByAccountRelationship TypeLookupRefers ToAccount |
| SubmittedByContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact that submitted the application.Relationship NameSubmittedByContactRelationship TypeLookupRefers ToContact |
| ParentApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent application for a program that has separate applications for multiple measures.This field is a relationship field.Relationship NameParentApplicationRelationship TypeLookupRefers ToIndividualApplication |
| RejectionReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason that the customer's application is rejected.Possible values are:Application Not SignedGaps Not addressedInspection Not Passed |
| ServiceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of service in the application.Possible values are:ElectricNatural GasWater |
| BudgetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe budget associated with the individual application. This field is available if you enabled Public Sector Solutions or Grantmaking in Setup.This field is available from API version 57.0 and later.This field is a relationship field.Relationship NameBudgetRelationship TypeLookupRefers ToBudget |
| BusinessTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of individual business activity for this application.This is a relationship field.Relationship NameBusinessTypeRelationship TypeLookupRefers ToBusinessType |
| Category | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service category of the application.Possible values are:LicensePermit |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the individual application.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText description provided by the applicant. |
| FundingOpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe funding opportunity associated with the individual application. This field is available if you enabled Public Sector Solutions or Grantmaking in Setup.This field is available in API version 57.0 and later.This field is a relationship field.Relationship NameFundingOpportunityRelationship TypeLookupRefers ToFundingOpportunity |
| FundingRequestPurpose | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of what the individual application funds are used for. This field is available if you enabled Public Sector Solutions or Grantmaking in Setup.This field is available in API version 57.0 and later. |
| Given_Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe given name of the applicant. |
| InternalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the individual application in Salesforce CRM.This field is available in API version 57.0 and later.Possible values are:Application AcceptedApprovedDeniedIn ProgressIn ReviewInvitedRevision RequestedSubmitted |
| IsOwnerEditable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the owner ID of this record can be changed.The default value is 'false'. |
| IsSubmitted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the individual application has been submitted. This field is available if you enabled Public Sector Solutions or Grantmaking in Setup.This field is available in API version 58.0 and later.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LicensePermitNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe emergency service authorization that will be granted if this application is approved.This is a relationship field.Relationship NameLicensePermitNameRelationship TypeLookupRefers ToBusinessLicense |
| LicenseTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of emergency service that the applicant will provide.This is a relationship field.Relationship NameLicenseTypeRelationship TypeLookupRefers ToRegulatoryAuthorizationType |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated unique ID for this application. |
| Nationality__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe nationality of the applicant.Possible values are:INDIAUNITED STATES OF AMERICA |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user that owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Passport_Number__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe passport ID of the applicant. |
| PaymentDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time at which payment was received from the applicant. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record associated to the application.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| RequestedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount requested in the individual application. This field is available if you enabled Public Sector Solutions or Grantmaking in Setup.This field is available in API version 57.0 and later. |
| RequirementsCompleteDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the applicant fulfilled all the requirements for approval. |
| SavedApplicationRefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference Id of the saved application.This is a relationship field.Relationship NameSavedApplicationRefRelationship TypeLookupRefers ToPreliminaryApplicationRef |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe submission and approval status of the application.Possible values are:Approved and IssuedDeclinedIn ReviewReturnedSubmittedVerification Phase |
| Surname__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last name of the applicant. |
| WasReturned | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether a submitted application was sent back to the applicant due to errors.The default value is 'false'. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IndividualApplicationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[IndividualApplicationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[IndividualApplicationOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[IndividualApplicationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
