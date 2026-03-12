---
title: "Deviation"
domain: financial-services-cloud-object-reference
topic: deviation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.934Z
estimatedTokens: 606
keywords: [Deviation, rules, API, version, 61.0, later, Digital, Lending, permission, Calls, Special, Access]
---

# Deviation

> Represents the information about the deviation from set rules.  This
      object is available in API version 61.0 and later. Available with Digital Lending permission
      set.

# Deviation

Represents the information about the deviation from set rules. This object is available in API version 61.0 and later. Available with Digital Lending permission set.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the approval status of the deviation.Possible values are:ApprovedPendingRejectedSubmitted |
| Code | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code for the deviation. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description about the deviation. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the deviation is active (true) or (not).The default value is false. |
| IsApprovalRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an approval is required (true) or not (false) for the deviation.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MinimumApproverLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the minimum level of the approver who can approve the deviation.Possible values are:L1L2L3 |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the deviation record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of deviation.Possible values are:CreditDebt to IncomeLoan To ValueSanction Terms |
