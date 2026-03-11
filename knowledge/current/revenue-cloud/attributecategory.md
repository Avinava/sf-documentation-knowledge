---
title: "AttributeCategory"
domain: revenue-cloud
topic: attributecategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.642Z
keywords: [AttributeCategory, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# AttributeCategory

# AttributeCategory

Represents a logical grouping of attributes that can be reused while defining products. Attribute Categories are used for searching and managing product attributes. For example, the "Mobile Handset Properties" category has color, storage and make model, and size attributes. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Product Catalog Management must be enabled to access this object.

## Fields

| Field | Details |
| --- | --- |
| Code | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique code for the attribute category. The maximum size is 80 alphanumeric characters. The code can include the following special characters: @ ! - < > * ? + = % # ( ) / \ & ‘ £ € $ ”. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the attribute category that's used only during design time. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the attribute category was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the attribute category was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique name of the attribute category. The maximum length is 80 characters (of any type). |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the attribute category.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AttributeCategoryFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AttributeCategoryHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AttributeCategoryShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.