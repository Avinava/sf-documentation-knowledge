---
title: "ProductCategoryDisqual"
domain: revenue-cloud
topic: productcategorydisqual
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.061Z
estimatedTokens: 920
keywords: [ProductCategoryDisqual, disqualification, rules, product, categories, determine, category, doesn’t, qualify, users, API, version, 60.0, later, Calls]
---

# ProductCategoryDisqual

> Represents disqualification rules for product categories. The rules determine
         when the product category doesn’t qualify to be displayed to users. This object is
      available in API version 60.0 and later.

# ProductCategoryDisqual

Represents disqualification rules for product categories. The rules determine when the product category doesn’t qualify to be displayed to users. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Product Catalog Management must be enabled to access this object.

## Fields

| Field | Details |
| --- | --- |
| CategoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product category associated with the product disqualification record.This field is a relationship field.Relationship NameCategoryRelationship TypeLookupRefers ToProductCategory |
| EffectiveFromDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date from which the disqualification rule for the product category comes into effect. |
| EffectiveToDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date to which the disqualification rule for the product category ceases to be in effect. |
| IsDisqualified | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the product category is disqualified (true) or not (false) based on the disqualification rules.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product category disqualification record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product category disqualification record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product category disqualification record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the product category disqualification record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Reason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason to disqualify the product category. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductCategoryDisqualFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductCategoryDisqualHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProductCategoryDisqualShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductCategoryDisqualFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- ProductCategoryDisqualHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- ProductCategoryDisqualShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
