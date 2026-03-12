---
title: "AuthFormRequestRecord"
domain: financial-services-cloud-object-reference
topic: authformrequestrecord
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:29.548Z
estimatedTokens: 780
keywords: [AuthFormRequestRecord, Junction, Authorization, Salesforce, record, authorized, actual, financial, records, shared, third, parties, any, result, consent]
---

# AuthFormRequestRecord

> Junction between an Authorization Request and the Salesforce record that is
         being authorized. For example. the actual financial Salesforce records shared with third
         parties or any Salesforce record being shared as a result of the consent request. This
      object is available in API version 52.0 and later.

# AuthFormRequestRecord

Junction between an Authorization Request and the Salesforce record that is being authorized. For example. the actual financial Salesforce records shared with third parties or any Salesforce record being shared as a result of the consent request. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| InfoAuthRequestFormId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLink to the Information Authorization Request Form related to this record.This is a relationship field.Relationship NameInfoAuthRequestFormRelationship TypeLookupRefers ToInfoAuthRequestForm |
| InfoAuthorizationRequestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLink to the Information Authorization Request related to this record.This is a relationship field.Relationship NameInfoAuthorizationRequestRelationship TypeLookupRefers ToInfoAuthorizationRequest |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the authorization form request record. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionLink to the Salesforce Record related to this record.This is a relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToAccount, BusinessMilestone, Campaign, Case, Claim, ClaimItem, Contact, Contract, DocumentChecklistItem, FinServ__AccountAccountRelation__c, FinServ__Alert__c, FinServ__AssetsAndLiabilities__c, FinServ__B2CLeadCompanyNameConfig__c, FinServ__BillingStatement__c, FinServ__Card__c, FinServ__ChargesAndFees__c, FinServ__ContactContactRelation__c, FinServ__Education__c, FinServ__Employment__c, FinServ__FinancialAccountRole__c, FinServ__FinancialAccountTransaction__c, FinServ__FinancialAccount__c, FinServ__FinancialGoal__c, FinServ__FinancialHolding__c, FinServ__IdentificationDocument__c, FinServ__IndustriesAppConfig__c, FinServ__IndustriesSettings__c, FinServ__LifeEvent__c, FinServ__NextLastInteractionSettings__c, FinServ__PolicyPaymentMethod__c, FinServ__ReciprocalRole__c, FinServ__Record_Rollup_Configuration__c, FinServ__Revenue__c, FinServ__RollupByLookupConfig__c, FinServ__RollupByLookupFilterCriteria__c, FinServ__Securities__c, FinServ__UsePersonAccount__c, FinServ__WealthAppConfig__c, FinServ__individualExcludedFields__c, InsurancePolicyCoverage, Lead, Opportunity, OpportunityLineItem, Order, OrderItem, PersonLifeEvent, Quote, QuoteLineItem, ResidentialLoanApplication, Task |
