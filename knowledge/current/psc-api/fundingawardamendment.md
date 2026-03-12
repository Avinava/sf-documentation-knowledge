---
title: "FundingAwardAmendment"
domain: psc-api
topic: fundingawardamendment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.713Z
estimatedTokens: 690
keywords: [FundingAwardAmendment, modification, scope, finances, previously, approved, award, API, version, 57.0, later, Calls, Special, Access, Rules]
---

# FundingAwardAmendment

> Represents a modification to the scope or finances of a previously approved award. This object is available in API version 57.0 and later.

# FundingAwardAmendment

Represents a modification to the scope or finances of a previously approved award. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Funding Awards system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| AdjustedAwardAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual amount that's approved for adjustment in the funding award amount. |
| AdjustedEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual date of adjustment to the end date of the funding award. |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the approval status of the requested adjustment.Possible values are:ApprovedIn ReviewNewRejected |
| Comments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe comment about the approval or rejection of the adjustment request. |
| FundingAwardId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe funding award that's associated with the contract that's adjusted.This field is a relationship field.Relationship NameFundingAwardRelationship TypeLookupRefers ToFundingAward |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of amendment for the funding award. |
| ProposedAwardAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of adjustment requested in the award amount. |
| ProposedEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe requested change to the End Date of the funding award. |
| Reason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe reason for the adjustment requested in the contract. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the adjustment request.Possible values are:ApprovedDraftRejectedSubmitted |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of adjustment.Possible values are:AdministrativeAmountScopeTimeline |
