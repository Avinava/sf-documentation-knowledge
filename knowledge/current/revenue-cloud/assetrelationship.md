---
title: "AssetRelationship"
domain: revenue-cloud
topic: assetrelationship
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:10.816Z
estimatedTokens: 1782
keywords: [AssetRelationship, non-hierarchical, relationship, assets, due, asset, modification, replacement, upgrade, circumstance, Revenue, Lifecycle, Management, grouped, bundle]
---

# AssetRelationship

> Represents a non-hierarchical relationship between assets due to an
			asset modification; for example, a replacement, upgrade, or other circumstance. In
			Revenue Lifecycle Management, this object represents an asset or assets grouped in a
			bundle or set. This object is available in API version 41.0 and later.

# AssetRelationship

Represents a non-hierarchical relationship between assets due to an asset modification; for example, a replacement, upgrade, or other circumstance. In Revenue Lifecycle Management, this object represents an asset or assets grouped in a bundle or set. This object is available in API version 41.0 and later.

Asset relationships appear in the Primary Assets and Related Assets related lists on asset records in the UI.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Some fields are available only in Revenue Cloud. Field availability is noted in the field detail column.

## Fields

| Field Name | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique identifier of the new asset, which is the asset that is taking the place of the existing asset.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| AssetRelationshipNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the asset relationship. |
| AssetRole | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDescribes the position of the main asset relative to the other assets in the relationship.This field is available in API version 58.0 and later. This field is available in orgs with Revenue Cloud.Possible values are:Add-on—The main asset is an add-on.Bundle—The main asset is the bundle parent.Set—The asset is the main asset in the set. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code associated with the asset. The default value is USD. |
| FromDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the new asset was installed. |
| GroupingKey | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionRead-only field used to indicate the bundle that an asset belongs to. For example, if two assets have the same GroupingKey value, then it means that the assets are bundled together.This field is available in API v.60.0 and later. This field is available in orgs with Revenue Cloud. |
| ProductRelationshipTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the record that describes the relationship between the main and associated assets.This field is available in API version 58.0 and later. This field is available in orgs with Revenue Cloud.This field is a relationship field.Relationship NameProductRelationshipTypeRelationship TypeLookupRefers ToProductRelationshipType |
| ProductRelatedComponent | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product related component that’s associated with the asset relationship.This field is a relationship field.This field is available in API 60.0 and later in Revenue Cloud.Relationship NameProductRelatedComponentRelationship TypeLookupRefers ToProductRelatedComponent |
| RelatedAssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe existing asset that is being modified.This field is a relationship field.Relationship NameRelatedAssetRelationship TypeLookupRefers ToAsset |
| RelatedAssetPricing | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies whether the price of the related asset is included in the bundle price. Valid values are:IncludedInBundlePriceNotIncludedInBundlePriceThis field is available in API version 59.0 and later in Revenue Cloud. |
| RelatedAssetQtyScaleMethod | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies how the quantity of the related asset changes relative to the quantity of the parent asset. Valid values are:ConstantProportionalThis field is available in API version 59.0 and later in Revenue Cloud. |
| RelatedAssetRole | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDescribes the position of the associated asset relative to other assets in the relationship.This field is available in API version 58.0 and later. This field is available in orgs with Revenue Cloud.Valid values are:Add-on—The main asset is an add-on.Bundle—The main asset is the bundle parent.Set—The asset is the main asset in the set.Simple—The asset is purchased individually and isn’t associated with variations.Variation Parent——The main asset is the variation parent. |
| RelationshipType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of relationship between the existing asset and the new asset. This field comes with three values—Replacement, Upgrade, and Crossgrade—, but you can create more values in Setup.Possible values are:Crossgrade—The new asset is a crossgrade of an existing asset. For example, changing a subscription to a plan with the same service, but that runs for a longer amount of time.Replacement—The new asset is replacing an existing asset. For example, a customer’s faulty widget that was under warranty is being replaced with a new one.Upgrade—The new asset is an upgrade of an existing asset. For example, upgrading a customer’s existing subscription plan to a new plan with more services.The default value is Replacement. |
| ToDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the modified asset is uninstalled. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssetRelationshipChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 62.0)

Change events are available for the object.

[AssetRelationshipFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AssetRelationshipHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[AssetRelationshipOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)") (API version 58.0)

Sharing rules are available for the object.

[AssetRelationshipShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)") (API version 58.0)

Sharing is available for the object.
