---
title: "DelegatedAccount"
domain: object-reference
topic: delegatedaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.131Z
estimatedTokens: 651
keywords: [DelegatedAccount, external, managed, account, API, version, 49.0, later, Calls, Special, Access, Rules]
---

# DelegatedAccount

> Represents the external managed account. This object is
      available in API version 49.0 and later.

# DelegatedAccount

Represents the external managed account. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

You must have a Partner or Customer Community Plus license. You can't edit the visibility of DelegatedAccount metadata on user profiles.

## Fields

| Field | Details |
| --- | --- |
| AccessBuyFor | TypebooleanPropertiesCreate, Filter, UpdateDescriptionThe access that an admin authorizes for an external user to buy for other accounts. This field is available in API version 50.0 and later. A B2B Commerce license is required to use AccessBuyFor. |
| AccessManageUsers | TypebooleanPropertiesCreate, Filter, UpdateDescriptionThe access that an admin authorizes for an external user to manage external users on other accounts. This includes managing permission sets, membership, passwords, and activation. This field is available in API version 50.0 and later. Delegated External User Administrator permission is required to use AccessManageUsers. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| ManagedById | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the managing user.This is a relationship field.Relationship NameManagedByRelationship TypeLookupRefers ToUser |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the external managed account. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the managing users account. This field is available in API version 50.0 and later.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToAccount |
| TargetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the account being managed.This is a relationship field.Relationship NameTargetRelationship TypeLookupRefers ToAccount |
