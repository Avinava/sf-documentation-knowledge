---
title: "StoreProduct"
domain: retail-api
topic: storeproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.802Z
estimatedTokens: 911
keywords: [StoreProduct, Associate, product, retail, store, specific, in-store, location, API, version, 47.0, later, Calls, Associated, Objects]
---

# StoreProduct

> Associate a product to a retail store or to a specific in-store location.
    This object is available in API version 47.0 and later.

# StoreProduct

Associate a product to a retail store or to a specific in-store location. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the record. This field is available in API versions 52.0 and later.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| DefaultOrderQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault quantity to order. |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSequence in which a product must be displayed for a retail store. This field is available in API version 53.0 and later. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFinal date when the association of product to an in-store location, store, store group, or account is applicable. |
| InStoreLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the in-store location to which the product is associated. |
| IsFavorite | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicator for top-selling products. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the association of a store and product. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the store product record owner. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the product associated with the retail store. |
| RetailStoreId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the retail store with which the product is associated. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionFirst date that the association of product to an in-store location, store, store group, or account is applicable. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[StoreProductFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feeds are available for the object.

[StoreProductHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[StoreProductShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- StoreProductFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- StoreProductHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- StoreProductShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
