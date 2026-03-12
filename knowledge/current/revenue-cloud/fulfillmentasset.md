---
title: "FulfillmentAsset"
domain: revenue-cloud
topic: fulfillmentasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.381Z
estimatedTokens: 807
keywords: [FulfillmentAsset, instance, technical, product, provide, customer, asset, API, version, 61.0, later, Calls, Associated, Objects]
---

# FulfillmentAsset

> Represents an instance of a technical product used to provide a
         customer asset. This object is available in API version 61.0 and later.

# FulfillmentAsset

Represents an instance of a technical product used to provide a customer asset. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the account.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortFor internal use only. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortFor internal use only. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the fulfillment asset. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFor internal use only.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe identifier of the corresponding product.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFor internal use only. |
| ScopeIdentifierText | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, SortDescriptionThe scope in which this fulfillment asset record is created. This field is available in API version 65.0 and later. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the fulfillment asset.Valid values are:ActiveInActive |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe unit of measure for the asset quantity such as, unit, gallon, ton, or case. This field is available in API version 63.0 and later.This field is a relationship field.Relationship NameUnitOfMeasureRefers ToUnitOfMeasure |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FulfillmentAssetHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object starting API version 65.0.

[FulfillmentAssetShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FulfillmentAssetHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- FulfillmentAssetShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
