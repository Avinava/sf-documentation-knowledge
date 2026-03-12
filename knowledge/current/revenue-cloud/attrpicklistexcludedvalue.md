---
title: "AttrPicklistExcludedValue"
domain: revenue-cloud
topic: attrpicklistexcludedvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.914Z
estimatedTokens: 828
keywords: [AttrPicklistExcludedValue, excluded, picklist, product, classification, attribute, definition, API, version, 61.0, later, Calls, Special, Access, Rules]
---

# AttrPicklistExcludedValue

> Represents the excluded picklist values for a product classification
         attribute or a product attribute definition. This object is available in API version
      61.0 and later.

# AttrPicklistExcludedValue

Represents the excluded picklist values for a product classification attribute or a product attribute definition. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Product Catalog Management must be enabled to access this object.

## Fields

| Field | Details |
| --- | --- |
| AttributeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the product classification attribute or the product attribute definition of the picklist data type.This field is a polymorphic relationship field.Relationship NameAttributeRelationship TypeLookupRefers ToProductAttributeDefinition, ProductClassificationAttr |
| AttributePicklistValueId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the attribute picklist value that’s excluded in the product classification attribute or product attribute definition.This field is a relationship field.Relationship NameAttributePicklistValueRelationship TypeLookupRefers ToAttributePicklistValue |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the excluded attribute picklist value was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the excluded attribute picklist value was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the excluded attribute picklist value. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the excluded attribute picklist value.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AttrPicklistExcludedValueFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AttrPicklistExcludedValueHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AttrPicklistExcludedValueShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AttrPicklistExcludedValueFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- AttrPicklistExcludedValueHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- AttrPicklistExcludedValueShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
