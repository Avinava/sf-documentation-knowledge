---
title: "PrivacyHoldReason"
domain: object-reference
topic: privacyholdreason
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.080Z
estimatedTokens: 377
keywords: [PrivacyHoldReason, business, legal, purpose, why, record, Privacy, Hold, API, version, 59.0, later, Calls, Special, Access]
---

# PrivacyHoldReason

> Represents the business or legal purpose for why a record has a Privacy
         Hold. This object is available in API version 59.0 and later.

# PrivacyHoldReason

Represents the business or legal purpose for why a record has a Privacy Hold. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available for users with the Privacy Center license and the Manage Privacy Hold user permission.

## Fields

| Field | Details |
| --- | --- |
| Detail | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe details of the Privacy Hold Reason, such as the business or legal purpose for the hold. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Privacy Hold Reason. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the account associated with this customer.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
