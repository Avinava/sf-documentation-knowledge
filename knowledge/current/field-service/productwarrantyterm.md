---
title: "ProductWarrantyTerm"
domain: field-service
topic: productwarrantyterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.390Z
estimatedTokens: 407
keywords: [ProductWarrantyTerm, Defines, relationship, between, product, family, warranty, term., API, version, 50.0, later., Supported, Calls, Fields, Associated, Objects]
---

# ProductWarrantyTerm

> Defines the relationship between a product or product family and warranty term.
     This object is available in API version 50.0 and later.

# ProductWarrantyTerm

Defines the relationship between a product or product family and warranty term. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CoveredProductFamily | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product family that the warranty term applies to. |
| CoveredProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product that the warranty term applies to. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product warranty term was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product warranty term was last viewed. |
| ProductWarrantyTermNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe identifier for this product warranty term. |
| WarrantyTermId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the warranty term. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ProductWarrantyTermChangeEvent (API version 62.0)

Change events are available for the object.
