---
title: "AttributeCategoryAttribute"
domain: revenue-cloud
topic: attributecategoryattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.897Z
estimatedTokens: 821
keywords: [AttributeCategoryAttribute, relationship, attribute, category, definition, API, version, 60.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# AttributeCategoryAttribute

> Represents a relationship between an attribute category and the attribute
         definition. This object is available in API version 60.0 and later.

# AttributeCategoryAttribute

Represents a relationship between an attribute category and the attribute definition. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Product Catalog Management must be enabled to access this object.

## Fields

| Field | Details |
| --- | --- |
| AttributeCategoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the attribute category that the attribute is associated with. The ID is unique within the organization.This field is a relationship field.Relationship NameAttributeCategoryRelationship TypeLookupRefers ToAttributeCategory |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the attribute definition associated with the attribute category. The ID is unique within the organization.This field is a relationship field.Relationship NameAttributeDefinitionRelationship TypeLookupRefers ToAttributeDefinition |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the attribute category attribute was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the attribute category attribute was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA unique name for the attribute. The maximum length is 80 characters (of any type). |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the attribute category attribute.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AttributeCategoryAttributeFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AttributeCategoryAttributeHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AttributeCategoryAttributeShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AttributeCategoryAttributeFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- AttributeCategoryAttributeHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- AttributeCategoryAttributeShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
