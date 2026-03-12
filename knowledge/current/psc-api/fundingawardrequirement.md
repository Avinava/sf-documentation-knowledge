---
title: "FundingAwardRequirement"
domain: psc-api
topic: fundingawardrequirement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.731Z
estimatedTokens: 907
keywords: [FundingAwardRequirement, deliverable, milestone, needed, award, either, approved, closed, API, version, 57.0, later, Calls, Special, Access]
---

# FundingAwardRequirement

> Represents a deliverable or milestone that is needed for the award to either be approved or closed. This object is available in API version 57.0 and later.

# FundingAwardRequirement

Represents a deliverable or milestone that is needed for the award to either be approved or closed. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Funding Awards system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the approval status the information that's submitted against the requirements.Possible values are:ApprovedIn ReviewNewRejected |
| AssignedContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the person who is responsible for submitting the requirement.This field is a relationship field.Relationship NameAssignedContactRelationship TypeLookupRefers ToContact |
| AssignedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who submits the funding requirement.This field is a relationship field.Relationship NameAssignedUserRelationship TypeLookupRefers ToUser |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the funding requirement. |
| DueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date and time of submitting the requirement. |
| FundingAwardId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe funding award that's associated with the funding requirement.This field is a relationship field.Relationship NameFundingAwardRelationship TypeLookupRefers ToFundingAward |
| FundingDisbursementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe funding disbursement that's associated with the requirement. The funds are disbursed only after the requirements are fulfilled.This field is a relationship field.Relationship NameFundingDisbursementRelationship TypeLookupRefers ToFundingDisbursement |
| IsApproved | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the information submitted matches the requirement (true) or not (false).The default value is false. |
| IsReadOnlyExternalAccess | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the requirement is submitted (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the funding requirement. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the funding requirement.Possible values are:ApprovedDelayedIn ProgressOpenRejectedSubmitted |
| SubmittedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual date and time when the requirement was submitted. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of funding requirement.Possible values are:Combined ReportContractFinancial ReportNarrative Report |
