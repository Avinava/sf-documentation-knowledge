---
title: "ApplicationForm"
domain: financial-services-cloud-object-reference
topic: applicationform
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.408Z
estimatedTokens: 1382
keywords: [ApplicationForm, high, level, application, that's, submitted, product, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# ApplicationForm

> Represents the high level information of an application that's submitted for
         the product. This object is available in API version 59.0 and later.

# ApplicationForm

Represents the high level information of an application that's submitted for the product. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The Usage Type field has to be populated when using the Application Form object. The picklist values for Usage Type are Onboarding, Loan Origination, and Other. The picklist values are fixed and you can't add more values.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that's associated with the application.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| BranchUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the branch unit that owns the application.This field is a relationship field.Relationship NameBranchUnitRelationship TypeLookupRefers ToBranchUnit |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LeadId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the lead associated with the application.This field is a relationship field.Relationship NameLeadRelationship TypeLookupRefers ToLead |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the application. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the opportunity associated with the application.This field is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Stage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stage in the approval process of the application.Possible values are:ApprovedBook to CoreDDEIn ProgressIn ReviewInitiatedIntakeNegotiationOperationsRejectedSubmittedUnderwriting |
| SubmissionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the application is submitted. |
| ThirdPartyLoanProviderAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the third party loan provider account associated with the application.This field is a relationship field.Relationship NameThirdPartyLoanProviderAccountRelationship TypeLookupRefers ToAccount |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage of application.Possible values are:OnboardingLoan OriginationOther |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationFormChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 60.0 and later.

[ApplicationFormFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ApplicationFormHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ApplicationFormShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ApplicationFormChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ApplicationFormFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ApplicationFormHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ApplicationFormShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
