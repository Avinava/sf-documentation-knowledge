---
title: "RecordAlert"
domain: life-sciences-dev-guide
topic: recordalert
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:44.126Z
estimatedTokens: 1414
keywords: [RecordAlert, alert, message, specific, record, tracks, status, active, period, API, version, 65.0, later, Calls]
---

# RecordAlert

> Represents an alert message about a specific record and tracks the
         status and active period of the alert. This object is available in API version 65.0 and
         later.

# RecordAlert

Represents an alert message about a specific record and tracks the status and active period of the alert. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional details of the message that are communicated in the alert. This field contains information such as the tag, alert action, URL, or color. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe detailed description of the alert. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time that the alert was generated or became active. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the alert is still active (true) or has been dismissed (false).The default value is false. |
| IsSilent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the alert is silent or not.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record alert. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the record alert.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user, account, or contact associated with the alert.This field is a polymorphic relationship field.Relationship NameParentRefers ToAccount, ApplicationForm, Asset, BenefitAssignment, BenefitDisbursement, BenefitManagementRecertification__c, BusinessMilestone, Case, Claim, Contact, Contract, GoalAssignment, IndividualApplication, InsurancePolicy, InsurancePolicyCoverage, Lead, LoanApplicant, LoanApplicantEmployment, LoanApplicantIncome, LoanApplicationAsset, LoanApplicationFinancial, LoanApplicationLiability, LoanApplicationProperty, Opportunity, PersonLifeEvent, ResidentialLoanApplication, User, lsc4ce__Foo__c, omnistudio__CardFrameworkConfiguration__c, omnistudio__DRBatchQueue__c, omnistudio__DRBulkData__c, omnistudio__DREncryption__c, omnistudio__DRWorker__c, omnistudio__Interface_DRGeneric__c, omnistudio__TestResult__c, omnistudio__TriggerSetup__c, omnistudio__UISettings__c, omnistudio__VlocityDataPack__c, omnistudio__VlocityDocuSignTemplate__c, omnistudio__VlocityErrorLogEntry__c, omnistudio__VlocityScheduledJob__c, omnistudio__VlocityTrackingEntry__c |
| RecordAlertCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category for the alert.This field is a relationship field.Relationship NameRecordAlertCategoryRefers ToRecordAlertCategory |
| Severity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe severity of the alert.Possible values are:ErrorInfoWarning |
| SnoozeUntilDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date until which the alert is snoozed. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| Subject | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subject of the alert. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the alert type.Possible values are:GuidedActionNotificationRecommendation |
| ValidUntilDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the alert becomes invalid. |
| WhatId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record that the alert pertains to.This field is a polymorphic relationship field.Relationship NameWhatRefers ToAccount, AccountPlan, AccountPlanObjective, ActionPlan, ApplicationForm, ApplicationFormProduct, AssessmentTask, Asset, BenefitAssignment, BenefitDisbursement, BenefitManagementRecertification__c, BusinessMilestone, Case, Claim, Contact, Contract, Event, GoalAssignment, IndividualApplication, InsurancePolicy, InsurancePolicyCoverage, Lead, LifeScienceEmail, LoanApplicant, LoanApplicantEmployment, LoanApplicantIncome, LoanApplicationAsset, LoanApplicationFinancial, LoanApplicationLiability, LoanApplicationProperty, MedicalInsight, OmniScriptSavedSession, Opportunity, Order, PartyRelationshipGroup, PersonLifeEvent, Presentation, ResidentialLoanApplication, User, Visit, lsc4ce__Foo__c, omnistudio__CardFrameworkConfiguration__c, omnistudio__DRBatchQueue__c, omnistudio__DRBulkData__c, omnistudio__DREncryption__c, omnistudio__DRWorker__c, omnistudio__Interface_DRGeneric__c, omnistudio__TestResult__c, omnistudio__TriggerSetup__c, omnistudio__UISettings__c, omnistudio__VlocityDataPack__c, omnistudio__VlocityDocuSignTemplate__c, omnistudio__VlocityErrorLogEntry__c, omnistudio__VlocityScheduledJob__c, omnistudio__VlocityTrackingEntry__c |
