---
title: "AssortmentProduct"
domain: retail-api
topic: assortmentproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.623Z
estimatedTokens: 510
keywords: [AssortmentProduct, Associate, products, assortment, API, version, 47.0, later, Calls, Associated, Objects]
---

# AssortmentProduct

> Associate products to an assortment. This object is available in API
    version 47.0 and later.

# AssortmentProduct

Associate products to an assortment. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssortmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the related assortment. |
| DefaultOrderQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault quantity to order. |
| IsFavorite | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionTop-selling items of a store. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUser-defined name for the assortment. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of each product within the assortment. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[AssortmentProductFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed are available for the object.

[AssortmentProductHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- AssortmentProductFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- AssortmentProductHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
