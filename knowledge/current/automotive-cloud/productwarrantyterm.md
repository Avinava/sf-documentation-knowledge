---
title: "ProductWarrantyTerm"
domain: automotive-cloud
topic: productwarrantyterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.458Z
estimatedTokens: 623
keywords: [ProductWarrantyTerm, relationship, product, family, warranty, term, API, version, 56.0, later, Calls, Special, Access, Rules, Associated]
---

# ProductWarrantyTerm

> Defines the relationship between a product or product family and a
         warranty term. This object is available in API version 56.0 and later.

# ProductWarrantyTerm

Defines the relationship between a product or product family and a warranty term. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

## Special Access Rules

Automotive and Warranty Lifecycle Management must be enabled.

| Field | Details |
| --- | --- |
| CoveredProductFamily | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product family that the warranty term applies to.Possible value is:None |
| CoveredProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product that the warranty term applies to.This field is a relationship field.Relationship NameCoveredProductRelationship TypeLookupRefers ToProduct2 |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product warranty term was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product warranty term was last viewed. |
| ProductWarrantyTermNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe identifier for this product warranty term. |
| WarrantyTermId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated warranty term.This field is a relationship field.Relationship NameWarrantyTermRelationship TypeLookupRefers ToWarrantyTerm |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductWarrantyTermChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ProductWarrantyTermFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ProductWarrantyTermHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
