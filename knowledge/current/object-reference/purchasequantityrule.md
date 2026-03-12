---
title: "PurchaseQuantityRule"
domain: object-reference
topic: purchasequantityrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.738Z
estimatedTokens: 529
keywords: [PurchaseQuantityRule, rule, restricts, quantity, product, purchased, increment, minimum, maximum, API, version, 52.0, later, Calls, Special]
---

# PurchaseQuantityRule

> Represents a rule that restricts the quantity of a product that can be purchased.
   The rule can be an increment, minimum, or maximum rule. This object is available in API
  version 52.0 and later.

# PurchaseQuantityRule

Represents a rule that restricts the quantity of a product that can be purchased. The rule can be an increment, minimum, or maximum rule. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The PurchaseQuantityRule object is available only if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency that’s specified on the buyer’s account. Default value is USD.Possible values are:EUR—EuroUSD—U.S. Dollar |
| Increment | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionQuantity of product that can be added with each increase. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Maximum | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMaximum quantity that can be purchased. |
| Minimum | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMinimum quantity that can be purchased. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the purchase quantity rule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the creator of this object.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
