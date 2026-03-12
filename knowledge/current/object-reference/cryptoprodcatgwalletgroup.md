---
title: "CryptoProdCatgWalletGroup"
domain: object-reference
topic: cryptoprodcatgwalletgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.597Z
estimatedTokens: 534
keywords: [CryptoProdCatgWalletGroup, CryptoWalletGroup, allowlist, airdrop, ProductCategory, custom, adding, API, version, 58.0, later, Calls, Special, Access, Rules]
---

# CryptoProdCatgWalletGroup

> Specifies if CryptoWalletGroup is in the allowlist or airdrop for the
         ProductCategory. A custom object between ProductCategory and CryptoWalletGroup adding the
         CryptoWalletGroup to allowlist or airdrop. This object is available in API version
      58.0 and later.

# CryptoProdCatgWalletGroup

Specifies if CryptoWalletGroup is in the allowlist or airdrop for the ProductCategory. A custom object between ProductCategory and CryptoWalletGroup adding the CryptoWalletGroup to allowlist or airdrop. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object has read, create, update, delete, modify all, and view all access.

## Fields

| Field | Details |
| --- | --- |
| CryptoWalletGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe CryptoWalletGroup ID.This field is a relationship field.Relationship NameCryptoWalletGroupRelationship TypeLookupRefers ToCryptoWalletGroup |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| ProductCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the category.This field is a relationship field.Relationship NameProductCategoryRelationship TypeLookupRefers ToProductCategory |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies if CryptoProdCatgWalletGroup is active and functional, or inactive and disabled.Possible values are:ActiveInactive |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines whether the list of wallets is for minting allowlist or for executing an airdrop.Possible values are:AirdropAllowlist |
