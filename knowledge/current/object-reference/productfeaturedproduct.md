---
title: "ProductFeaturedProduct"
domain: object-reference
topic: productfeaturedproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.354Z
estimatedTokens: 696
keywords: [ProductFeaturedProduct, user-defined, collection, featured, products, meant, cross-sell, upsell, product, API, version, 64.0, later, Calls, Special]
---

# ProductFeaturedProduct

> Represents the user-defined collection of featured products that are meant to
         cross-sell or upsell with your product. This object is available in API version 64.0
      and later.

# ProductFeaturedProduct

Represents the user-defined collection of featured products that are meant to cross-sell or upsell with your product. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| FeatrProdtRelaType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines how the featured product is related to the product.Possible values are:Complete the LookFeatured ProductsNew ArrivalsTop Seller |
| FeaturedProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the featured product that is linked to the product.This field is a relationship field.Relationship NameFeaturedProductRefers ToProduct2 |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the user-defined collection of featured products. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the product that your company sells.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| Sequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the order in which featured products are displayed. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductFeaturedProductChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- ProductFeaturedProductChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
