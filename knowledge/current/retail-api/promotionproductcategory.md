---
title: "PromotionProductCategory"
domain: retail-api
topic: promotionproductcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.656Z
estimatedTokens: 482
keywords: [PromotionProductCategory, Associate, promotional, activity, product, category, API, version, 47.0, later, Calls, Associated, Objects]
---

# PromotionProductCategory

> Associate a promotional activity with a product category. This object is
    available in API version 47.0 and later.

# PromotionProductCategory

Associate a promotional activity with a product category. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the association of a product category and a promotion. |
| ProductCategoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the product category with which the promotion is associated. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the promotion with which the product category is associated. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[PromotionProductCategoryFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed are available for the object.

[PromotionProductCategoryHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- PromotionProductCategoryFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- PromotionProductCategoryHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
