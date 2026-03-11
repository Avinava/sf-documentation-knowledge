---
title: "RecordAlert"
domain: omnistudio
topic: recordalert
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.121Z
keywords: [RecordAlert, Supported, Calls, Fields, Associated, Objects]
---

# RecordAlert

# RecordAlert

Represents an alert message about a specific record and tracks the status and active period of the alert. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA detailed description of the alert. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time that the alert was generated or became active. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the alert is still active (true) or has been dismissed (false).The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record alert. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record alert.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user, account, or contact associated with the alert.This is a polymorphic relationship field.Relationship NameParentRelationship TypeLookupRefers ToAccount, Case, Contact, DisputeConfig__c, FinServ__AccountAccountRelation__c, FinServ__Alert__c, FinServ__AssetsAndLiabilities__c, FinServ__B2CLeadCompanyNameConfig__c, FinServ__BillingStatement__c, FinServ__Card__c, FinServ__ChargesAndFees__c, FinServ__ContactContactRelation__c, FinServ__Education__c, FinServ__Employment__c, FinServ__FinancialAccountRole__c, FinServ__FinancialAccountTransaction__c, FinServ__FinancialAccount__c, FinServ__FinancialGoal__c, FinServ__FinancialHolding__c, FinServ__IdentificationDocument__c, FinServ__IndustriesAppConfig__c, FinServ__IndustriesSettings__c, FinServ__LifeEvent__c, FinServ__NextLastInteractionSettings__c, FinServ__PolicyPaymentMethod__c, FinServ__ReciprocalRole__c, FinServ__Record_Rollup_Configuration__c, FinServ__Revenue__c, FinServ__RollupByLookupConfig__c, FinServ__RollupByLookupFilterCriteria__c, FinServ__Securities__c, FinServ__UsePersonAccount__c, FinServ__WealthAppConfig__c, FinServ__individualExcludedFields__c, FinancialTransactionDisputeInfo__c, Lead, LoanApplicant, LoanApplicantEmployment, LoanApplicantIncome, LoanApplicationAsset, LoanApplicationFinancial, LoanApplicationLiability, LoanApplicationProperty, Opportunity, ResidentialLoanApplication, ServiceRequest__c, TestCM__c, User, Vehicle__c, vlocity_lwc27__CardFrameworkConfiguration__c, vlocity_lwc27__DRBatchQueue__c, vlocity_lwc27__DRBulkData__c, vlocity_lwc27__DREncryption__c, vlocity_lwc27__DRWorker__c, vlocity_lwc27__Interface_DRGeneric__c, vlocity_lwc27__TestResult__c, vlocity_lwc27__TriggerSetup__c, vlocity_lwc27__UISettings__c, vlocity_lwc27__VlocityDataPack__c, vlocity_lwc27__VlocityDocuSignTemplate__c, vlocity_lwc27__VlocityErrorLogEntry__c, vlocity_lwc27__VlocityScheduledJob__c, vlocity_lwc27__VlocityTrackingEntry__c |
| RecordAlertCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category for the alert.This is a relationship field.Relationship NameRecordAlertCategoryRelationship TypeLookupRefers ToRecordAlertCategory |
| Severity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe severity of the alert, which can be pulled from the Record Alert Category or overridden.Possible Education Cloud values are:HighLowMediumPossible Financial Service Cloud values are:ErrorInfoMinorWarning |
| SnoozeUntilDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the alert is delivered. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier for the alert in an external system. |
| Subject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA short description of the alert. |
| ValidUntilDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the alert becomes invalid. |
| WhatId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record that the alert pertains to.This is a polymorphic relationship field.Relationship NameWhatRelationship TypeLookupRefers ToAccount, Asset, BusinessMilestone, Case, Claim, Contact, Contract, DisputeConfig__c, FinServ__AccountAccountRelation__c, FinServ__Alert__c, FinServ__AssetsAndLiabilities__c, FinServ__B2CLeadCompanyNameConfig__c, FinServ__BillingStatement__c, FinServ__Card__c, FinServ__ChargesAndFees__c, FinServ__ContactContactRelation__c, FinServ__Education__c, FinServ__Employment__c, FinServ__FinancialAccountRole__c, FinServ__FinancialAccountTransaction__c, FinServ__FinancialAccount__c, FinServ__FinancialGoal__c, FinServ__FinancialHolding__c, FinServ__IdentificationDocument__c, FinServ__IndustriesAppConfig__c, FinServ__IndustriesSettings__c, FinServ__LifeEvent__c, FinServ__NextLastInteractionSettings__c, FinServ__PolicyPaymentMethod__c, FinServ__ReciprocalRole__c, FinServ__Record_Rollup_Configuration__c, FinServ__Revenue__c, FinServ__RollupByLookupConfig__c, FinServ__RollupByLookupFilterCriteria__c, FinServ__Securities__c, FinServ__UsePersonAccount__c, FinServ__WealthAppConfig__c, FinServ__individualExcludedFields__c, FinancialTransactionDisputeInfo__c, InsurancePolicy, InsurancePolicyCoverage, Lead, LoanApplicant, LoanApplicantEmployment, LoanApplicantIncome, LoanApplicationAsset, LoanApplicationFinancial, LoanApplicationLiability, LoanApplicationProperty, Opportunity, PersonLifeEvent, ResidentialLoanApplication, ServiceRequest__c, TestCM__c, Vehicle__c, vlocity_lwc27__CardFrameworkConfiguration__c, vlocity_lwc27__DRBatchQueue__c, vlocity_lwc27__DRBulkData__c, vlocity_lwc27__DREncryption__c, vlocity_lwc27__DRWorker__c, vlocity_lwc27__Interface_DRGeneric__c, vlocity_lwc27__TestResult__c, vlocity_lwc27__TriggerSetup__c, vlocity_lwc27__UISettings__c, vlocity_lwc27__VlocityDataPack__c, vlocity_lwc27__VlocityDocuSignTemplate__c, vlocity_lwc27__VlocityErrorLogEntry__c, vlocity_lwc27__VlocityScheduledJob__c, vlocity_lwc27__VlocityTrackingEntry__c |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RecordAlertChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change Event is available for the object.

[RecordAlertFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[RecordAlertHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[RecordAlertShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.