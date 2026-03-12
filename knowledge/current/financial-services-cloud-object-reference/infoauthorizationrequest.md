---
title: "InfoAuthorizationRequest"
domain: financial-services-cloud-object-reference
topic: infoauthorizationrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:30.478Z
estimatedTokens: 1812
keywords: [InfoAuthorizationRequest, Tracks, authorization, Data, Purpose, consent, share, documents, open, financial, account, loan, rate, lock, disclosure]
---

# InfoAuthorizationRequest

> Tracks a request for authorization on a Data Use Purpose. For example,
         consent request to share the documents required to open a financial account and share loan
         rate lock disclosure to the external customer.  This object is available in API
      version 52.0 and later.

# InfoAuthorizationRequest

Tracks a request for authorization on a Data Use Purpose. For example, consent request to share the documents required to open a financial account and share loan rate lock disclosure to the external customer. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CommunicationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe medium of which this request was sent.Possible values are:EmailMailPaperPhoneWebThe default value is 'Paper'. |
| ConsenterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external (communities) account who is consenting to this request.This is a polymorphic relationship field.Relationship NameConsenterRelationship TypeLookupRefers ToAccount, Contact, User |
| DataUsePurposeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the purpose of this request.This is a relationship field.Relationship NameDataUsePurposeRelationship TypeLookupRefers ToDataUsePurpose |
| ExpirationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expiration date of this request. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Locale | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe locale of the request (used to find Auth Form Texts that match the locale). |
| MultipartyInfoAuthRequestId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the related multiparty info authorization request record.This is a relationship field.Relationship NameMultipartyInfoAuthRequestRelationship TypeLookupRefers ToMultipartyInfoAuthRequest |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the info authorization request record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the relationship record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PertainsToId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe person to whom this request pertains.This is a polymorphic relationship field.Relationship NamePertainsToRelationship TypeLookupRefers ToAccount, Contact, User |
| RequestedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date time that this request was sent. |
| RequesterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party that initiated the request.This is a polymorphic relationship field.Relationship NameRequesterRelationship TypeLookupRefers ToAccount, Contact, User |
| ResponseStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe consentee's response to this request.Possible values are:NewRejectedSeenSignedThe default value is 'New'. |
| SourceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record from which this consent request is created.This is a relationship field.Relationship NameSourceRecordRelationship TypeLookupRefers ToAccount, BusinessMilestone, Campaign, Case, Claim, ClaimItem, Contact, Contract, DocumentChecklistItem, FinServ__AccountAccountRelation__c, FinServ__Alert__c, FinServ__AssetsAndLiabilities__c, FinServ__B2CLeadCompanyNameConfig__c, FinServ__BillingStatement__c, FinServ__Card__c, FinServ__ChargesAndFees__c, FinServ__ContactContactRelation__c, FinServ__Education__c, FinServ__Employment__c, FinServ__FinancialAccountRole__c, FinServ__FinancialAccountTransaction__c, FinServ__FinancialAccount__c, FinServ__FinancialGoal__c, FinServ__FinancialHolding__c, FinServ__IdentificationDocument__c, FinServ__IndustriesAppConfig__c, FinServ__IndustriesSettings__c, FinServ__LifeEvent__c, FinServ__NextLastInteractionSettings__c, FinServ__PolicyPaymentMethod__c, FinServ__ReciprocalRole__c, FinServ__Record_Rollup_Configuration__c, FinServ__Revenue__c, FinServ__RollupByLookupConfig__c, FinServ__RollupByLookupFilterCriteria__c, FinServ__Securities__c, FinServ__UsePersonAccount__c, FinServ__WealthAppConfig__c, FinServ__individualExcludedFields__c, InsurancePolicyCoverage, Lead, Opportunity, OpportunityLineItem, Order, OrderItem, PersonLifeEvent, Quote, QuoteLineItem, ResidentialLoanApplication, Task |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InfoAuthorizationRequestChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[InfoAuthorizationRequestFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InfoAuthorizationRequestHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InfoAuthorizationRequestShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InfoAuthorizationRequestChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InfoAuthorizationRequestFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InfoAuthorizationRequestHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- InfoAuthorizationRequestShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
