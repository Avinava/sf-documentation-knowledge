---
title: "MultipartyInfoAuthRequest"
domain: financial-services-cloud-object-reference
topic: multipartyinfoauthrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.055Z
estimatedTokens: 1473
keywords: [MultipartyInfoAuthRequest, Tracks, multiple, parties, authorization, Data, Purpose, consent, requests, share, documents, open, joint, financial, account]
---

# MultipartyInfoAuthRequest

> Tracks a request for multiple parties of authorization on a Data Use Purpose.
         For example, consent requests to share the required documents to open a joint financial
         account or share mortgage disclosures to loan applicants (borrower + co-borrower).
      This object is available in API version 53.0 and later.

# MultipartyInfoAuthRequest

Tracks a request for multiple parties of authorization on a Data Use Purpose. For example, consent requests to share the required documents to open a joint financial account or share mortgage disclosures to loan applicants (borrower + co-borrower). This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AuthorizationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe number of parties needed for consent- all parties must accept / majority parties need to consent or at least one party must consent.Possible values are:AllAnyHalfOrMajority—Half or MajorityMajorityThe default value is 'All'. |
| DataUsePurposeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the purpose of this request.This is a relationship field.Relationship NameDataUsePurposeRelationship TypeLookupRefers ToDataUsePurpose |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the info authorization request record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the relationship record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ResponseStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe consentees' aggregate response to this request, based on the authorization type.Possible values are:NewRejectedSeenSignedThe default value is 'New'. |
| SourceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record from which this consent request is created.This is a relationship field.Relationship NameSourceRecordRelationship TypeLookupRefers ToAccount, BusinessMilestone, Campaign, Case, Claim, ClaimItem, Contact, Contract, DocumentChecklistItem, FinServ__AccountAccountRelation__c, FinServ__Alert__c, FinServ__AssetsAndLiabilities__c, FinServ__B2CLeadCompanyNameConfig__c, FinServ__BillingStatement__c, FinServ__Card__c, FinServ__ChargesAndFees__c, FinServ__ContactContactRelation__c, FinServ__Education__c, FinServ__Employment__c, FinServ__FinancialAccountRole__c, FinServ__FinancialAccountTransaction__c, FinServ__FinancialAccount__c, FinServ__FinancialGoal__c, FinServ__FinancialHolding__c, FinServ__IdentificationDocument__c, FinServ__IndustriesAppConfig__c, FinServ__IndustriesSettings__c, FinServ__LifeEvent__c, FinServ__NextLastInteractionSettings__c, FinServ__PolicyPaymentMethod__c, FinServ__ReciprocalRole__c, FinServ__Record_Rollup_Configuration__c, FinServ__Revenue__c, FinServ__RollupByLookupConfig__c, FinServ__RollupByLookupFilterCriteria__c, FinServ__Securities__c, FinServ__UsePersonAccount__c, FinServ__WealthAppConfig__c, FinServ__individualExcludedFields__c, InsurancePolicyCoverage, Lead, Opportunity, OpportunityLineItem, Order, OrderItem, PersonLifeEvent, Quote, QuoteLineItem, ResidentialLoanApplication, Task |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MultipartyInfoAuthRequestChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[MultipartyInfoAuthRequestFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MultipartyInfoAuthRequestHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[MultipartyInfoAuthRequestShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- MultipartyInfoAuthRequestChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- MultipartyInfoAuthRequestFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- MultipartyInfoAuthRequestHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- MultipartyInfoAuthRequestShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
