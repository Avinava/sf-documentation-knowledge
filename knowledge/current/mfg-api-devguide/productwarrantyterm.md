---
title: "ProductWarrantyTerm"
domain: mfg-api-devguide
topic: productwarrantyterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.124Z
estimatedTokens: 378
keywords: [ProductWarrantyTerm, relationship, product, family, warranty, term, Manufacturing, Cloud, API, version, 55.0, later, Calls]
---

# ProductWarrantyTerm

> Defines the relationship between a product or product family and a
         warranty term. This object is available in Manufacturing Cloud in API version 55.0 and
      later.

# ProductWarrantyTerm

Defines the relationship between a product or product family and a warranty term. This object is available in Manufacturing Cloud in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CoveredProductFamily | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product family that the warranty term applies to.Possible value is:None |
| CoveredProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product that the warranty term applies to.This field is a relationship field.Relationship NameCoveredProductRelationship TypeLookupRefers ToProduct2 |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product warranty term was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product warranty term was last viewed. |
| ProductWarrantyTermNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe identifier for this product warranty term. |
| WarrantyTermId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated warranty term.This field is a relationship field.Relationship NameWarrantyTermRelationship TypeLookupRefers ToWarrantyTerm |
