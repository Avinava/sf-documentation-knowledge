---
title: "IndividualApplication"
domain: psc-api
topic: individualapplication
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:33.887Z
estimatedTokens: 2297
keywords: [IndividualApplication, application, form, submitted, individual, organization, API, version, 50.0, later, Calls, Associated, Objects]
---

# IndividualApplication

> Represents an application form submitted by an individual or
         organization. This object is available in API version 50.0 and later.

# IndividualApplication

Represents an application form submitted by an individual or organization. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the applicant’s account.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ApplicationCaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a case that relates to this application.This is a relationship field.Relationship NameApplicationCaseRelationship TypeLookupRefers ToCase |
| ApplicationChangeOverview | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe Einstein-generated historical overview of the changes between application versions.Available in API versions 62.0 and later. Einstein Generative AI for Public Sector Solutions must be enabled. |
| ApplicationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescriptive name for the application. This field is available if you enabled Public Sector Solutions or Grantmaking in Setup.Available from API version 57.0 and later. |
| ApplicationOverview | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe Einstein-generated historical overview of application stages, data changes, and processing actions.Available in API versions 62.0 and later. Einstein Generative AI for Public Sector Solutions must be enabled. |
| ApplicationReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe custom reference number assigned to the application. This field is available if you enabled Health Cloud, Public Sector Solutions, or Grantmaking in Setup. |
| ApplicationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the application.Possible values are:Change Of Circumstance—Available in API versions 62.0 and later with Public Sector Solutions.ChangeOfCircumstance—Available in API versions 60.0 and 61.0 with Public Sector Solutions.NewRecertification—Available in API version 60.0 and later with Public Sector Solutions.Renewal |
| AppliedDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date on which the application was received from the applicant. |
| ApprovedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the application was approved. |
| BudgetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe budget associated with the individual application. This field is available if you enabled Public Sector Solutions or Grantmaking in Setup.Available from API version 57.0 and later.This field is a relationship field.Relationship NameBudgetRelationship TypeLookupRefers ToBudget |
| Category | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service category of the application.Possible values are:LicensePermitGrant ApplicationLetter of Intent |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the individual application.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText description provided by the applicant. |
| FundingOpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe funding opportunity associated with the individual application. This field is available if you enabled Public Sector Solutions or Grantmaking in Setup.Available in API version 57.0 and later.This field is a relationship field.Relationship NameFundingOpportunityRelationship TypeLookupRefers ToFundingOpportunity |
| FundingRequestPurpose | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of what the individual application funds are used for. This field is available if you enabled Public Sector Solutions or Grantmaking in Setup.Available in API version 57.0 and later. |
| InternalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the individual application in Salesforce CRM.Available in API version 57.0 and later.Possible values are:InvitedIn ProgressSubmittedApplication AcceptedRevision RequestedIn ReviewApprovedDenied |
| IsOwnerEditable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the owner ID of this record can be changed.The default value is 'false'. |
| IsSubmitted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the individual application has been submitted. This field is available if you enabled Public Sector Solutions or Grantmaking in Setup.Available in API version 58.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated unique ID for this application. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user that owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record associated to the application.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| RequestedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount requested in the individual application. This field is available if you enabled Public Sector Solutions or Grantmaking in Setup.Available in API version 57.0 and later. |
| RequirementsCompleteDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the applicant fulfilled all the requirements for approval. |
| SavedApplicationRefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference Id of the saved application.This is a relationship field.Relationship NameSavedApplicationRefRelationship TypeLookupRefers ToPreliminaryApplicationRef |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe submission and approval status of the application.Possible values are:InvitedIn ProgressSubmittedApplication AcceptedRevision RequestedIn ReviewApprovedDenied |
| WasReturned | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether a submitted application was sent back to the applicant due to errors.The default value is 'false'. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IndividualApplicationChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 55.0)

Change events are available for the object.

[IndividualApplicationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[IndividualApplicationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[IndividualApplicationOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[IndividualApplicationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

## Related Topics

- IndividualApplicationChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
