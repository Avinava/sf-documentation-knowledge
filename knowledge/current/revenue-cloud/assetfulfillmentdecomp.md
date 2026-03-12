---
title: "AssetFulfillmentDecomp"
domain: revenue-cloud
topic: assetfulfillmentdecomp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.493Z
estimatedTokens: 836
keywords: [AssetFulfillmentDecomp, Represents, relationship, between, ordered, asset, its, corresponding, fulfillment, asset., API, version, 62.0, later., Supported, Calls, Fields, Associated, Objects]
---

# AssetFulfillmentDecomp

> Represents the relationship between an ordered asset and its
         corresponding fulfillment asset. This object is available in API version 62.0 and
      later.

# AssetFulfillmentDecomp

Represents the relationship between an ordered asset and its corresponding fulfillment asset. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FulfillmentSourceAssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe identifier of the relationship between an asset and a fulfillment asset.This field is a polymorphic relationship field.Relationship NameFulfillmentSourceAssetRefers ToAsset, FulfillmentAsset |
| FulfillmentTargetAssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe identifier of the target asset that's being fulfilled.This field is a relationship field.Relationship NameFulfillmentTargetAssetRefers ToFulfillmentAsset |
| IsUsedForFulfmtAssetActivation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if internal jobs are allowed to activate the related fulfillment asset. The default value is true.This field is available in API version 6.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the asset that's being fulfilled. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the request record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RelationshipType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of relationship between an asset and a fulfillment asset.Valid values are:SourceBundleRootSourceLineItem |
| SegmentIdentifier | TypestringPropertiesCreate, Group, Nillable, Sort,DescriptionThe ID of the ramp segment associated with the asset state period.This field is available in API version 63.0 and later in orgs that have Revenue Cloud when the Ramp Deals setting is enabled. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the fulfillment asset.Valid values are:ActiveInactive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssetFulfillmentDecompHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object starting API version 65.0.

[AssetFulfillmentDecompShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AssetFulfillmentDecompHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- AssetFulfillmentDecompShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
