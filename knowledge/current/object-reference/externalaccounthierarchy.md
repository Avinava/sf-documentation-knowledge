---
title: "ExternalAccountHierarchy"
domain: object-reference
topic: externalaccounthierarchy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.886Z
estimatedTokens: 620
keywords: [ExternalAccountHierarchy, external, account, hierarchy, works, role-based, allow, partner, customer, users, share, data, accounts, their, hierarchy.This]
---

# ExternalAccountHierarchy

> Represents the external account hierarchy, which works like a
         role-based hierarchy.  Use ExternalAccountHierarchy to allow partner and customer users to
         share data with other external accounts in their hierarchy.This object is available in
      API version 49.0 and later.

# ExternalAccountHierarchy

Represents the external account hierarchy, which works like a role-based hierarchy. Use ExternalAccountHierarchy to allow partner and customer users to share data with other external accounts in their hierarchy.This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You must have a Partner or Customer Community Plus license.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the account in the external account hierarchy. |
| CurrencyISOCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:GBP— British PoundUSD— U.S. DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the external account hierarchy. |
| HierarchyType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionPossible values are:CustomerPortal — CustomerPartnerThe default value is Partner. |
| IsAccessibleToParent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAllows data to be shared with parent account in the account hierarchy. The default value is true. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhen true, the hierarchy is turned on. The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the external account hierarchy. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the account owner. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent account. |
