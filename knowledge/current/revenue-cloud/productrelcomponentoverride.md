---
title: "ProductRelComponentOverride"
domain: revenue-cloud
topic: productrelcomponentoverride
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:12.218Z
estimatedTokens: 1291
keywords: [ProductRelComponentOverride, cardinality, overrides, product, components, bundle, API, version, 60.0, later, Calls, Special, Access, Rules, Associated]
---

# ProductRelComponentOverride

> Represents the cardinality overrides for product components in a bundle.
      This object is available in API version 60.0 and later.

# ProductRelComponentOverride

Represents the cardinality overrides for product components in a bundle. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Product Catalog Management must be enabled to access this object.

## Fields

| Field | Details |
| --- | --- |
| DoesBundlePriceIncludeChild | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the bundle price includes the associated child component's price (true) or not (false).The default value is false. |
| IsComponentRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the component is a required component in the product bundle.The default value is false. |
| IsDefaultComponent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this component is included in the product component group by default.The default value is false. |
| IsExcluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the bundle excludes the component (true) or not (false).The default value is false. |
| IsQuantityEditable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product component quantity can be edited (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product related component override record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product related component override record was last viewed. |
| MaxQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum quantity for the product component in the product bundle. |
| MinQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum quantity for the product component in the product bundle |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product related component override. The maximum length is 255 characters (of any type). |
| OverrideContextId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID associated with the root product in a bundle.This field is a polymorphic relationship field.Relationship NameOverrideContextRelationship TypeLookupRefers ToProduct2 |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner ID of the product related component override record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductRelatedComponentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID associated with the product related component record.This field is a relationship field.Relationship NameProductRelatedComponentRelationship TypeLookupRefers ToProductRelatedComponent |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe default number of child product related components. |
| QuantityScaleMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe scaling method that determines how the child product quantity changes as the quantity of the parent product changes in the runtime cart.Possible values are:ConstantProportionalThe default value is Proportional. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductRelComponentOverrideFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductRelComponentOverrideHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProductRelComponentOverrideShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductRelComponentOverrideFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- ProductRelComponentOverrideHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- ProductRelComponentOverrideShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
