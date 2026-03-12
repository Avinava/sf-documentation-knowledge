---
title: "FundingDisbursement"
domain: psc-api
topic: fundingdisbursement
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:33.750Z
estimatedTokens: 660
keywords: [FundingDisbursement, payment, made, scheduled, funding, recipient, API, version, 57.0, later, Calls, Special, Access, Rules]
---

# FundingDisbursement

> Represents a payment that has been made or scheduled to be made to a funding recipient. This object is available in API version 57.0 and later.

# FundingDisbursement

Represents a payment that has been made or scheduled to be made to a funding recipient. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Funding Awards system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount that's disbursed to the awardee. |
| DisbursementDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual date and time of funds disbursement. |
| FundingAwardId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe funding award that's associated with the funding disbursement.This field is a relationship field.Relationship NameFundingAwardRelationship TypeLookupRefers ToFundingAward |
| IsApproved | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the funding disbursement is approved (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescription |
| OwnerId | TypePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PaymentMethodType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the payment method for funds disbursement.Possible values are:CashCheckEFTWire |
| PaymentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe unique identifier of the payment related to the funds disbursement. |
| ScheduledDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe scheduled date and time to disburse the funds. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the approval status of the funds disbursement.Possible values are:ApprovedCancelledPaidPending ApprovalProcessingReturnedScheduled |
