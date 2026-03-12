---
title: "BindingObjectCustomExt"
domain: revenue-cloud
topic: bindingobjectcustomext
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.839Z
estimatedTokens: 335
keywords: [BindingObjectCustomExt, Represents, external, custom, target, that's, bound, entitlements, granted, sellable, product., API, version, 64.0, later., Supported, Calls, Special, Access, Rules]
---

# BindingObjectCustomExt

> Represents the external or custom target object that's bound to the
         entitlements granted with the sellable product. This object is available in API
      version 64.0 and later.

# BindingObjectCustomExt

Represents the external or custom target object that's bound to the entitlements granted with the sellable product. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   This object is available in Revenue Cloud when Rate Management is enabled.

-   Users with any Rate Management permission set (Admin, Manager, Designtime, Runtime) can view records. Only Admins can create, edit, and delete records.


## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the binding custom object record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the product usage grant.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
