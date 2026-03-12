---
title: "IntegrationProviderDcsnRqmt"
domain: financial-services-cloud-object-reference
topic: integrationproviderdcsnrqmt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.817Z
estimatedTokens: 826
keywords: [IntegrationProviderDcsnRqmt, decision, requirement, integration, provider, records, API, version, 61.0, later, Calls]
---

# IntegrationProviderDcsnRqmt

> Represents a decision requirement used to create integration provider
         records. This object is available in API version 61.0 and later.

# IntegrationProviderDcsnRqmt

Represents a decision requirement used to create integration provider records. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IntegrationProviderDefId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe integration definition associated with the integration provider decision requirement.This field is a relationship field.Relationship NameIntegrationProviderDefRefers ToIntegrationProviderDef |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the party credit profile record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RelatedObject | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe object for which integration provider decision requirement is defined.Possible values are:ApplicantApplicationActionItem—Application Action ItemApplicationForm—Application FormApplicationFormProduct—Application Form ProductApplicationFormProductDev—Application Form Product DeviationApplicationFormSellerItem—Application Form Seller ItemDeviationInformationVerification—Information VerificationPartyExpense—Party ExpensePartyFinancialAsset—Party Financial AssetPartyFinancialLiability—Party Financial LiabilityPartyIdentityVerification—Party Identity VerificationPartyIdentityVerificationStep—Party Identity Verification StepPartyIncome—Party IncomePartyProfile—Party ProfilePartyScreeningStep—Party Screening StepPartyScreeningSummary—Party Screening SummaryPersonEmployment—Person EmploymentProduct2—Productdevopsimpkg11__DRBatchQueue__c—Vlocity Omnistudio Data Mapper Batch Queuedevopsimpkg11__DRBulkData__c—Omnistudio Data Mapper Bulk Datadevopsimpkg11__DocumentTemplateSetting__mdt—Document Template Settingdevopsimpkg11__Interface_DRGeneric__c—Vlocity Omnistudio Data Mapper Object Interfacedevopsimpkg11__PDFTronEncryptionKey__mdt—PDFTron Encryption Keydevopsimpkg11__TestResult__c—Test Resultdevopsimpkg11__VlocityDataPack__c—Vlocity DataPack Objectdevopsimpkg11__VlocityDocuSignTemplate__c—Vlocity DocuSign Templatedevopsimpkg11__VlocityErrorLogEntry__c—Vlocity Error Log Entrydevopsimpkg11__VlocityScheduledJob__c—Vlocity Scheduled Jobdevopsimpkg11__VlocityTrackingEntry__c—Vlocity Tracking Entry |
| RunAsUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user associated with the integration provider decision requirement.This field is a relationship field.Relationship NameRunAsUserRefers ToUser |
