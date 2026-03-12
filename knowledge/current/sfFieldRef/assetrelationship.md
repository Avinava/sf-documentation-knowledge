---
title: "AssetRelationship"
domain: sfFieldRef
topic: assetrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.736Z
estimatedTokens: 484
keywords: [AssetRelationship, non-hierarchical, relationship, assets, due, asset, modification, replacement, upgrade, circumstance, Revenue, Lifecycle, Management, grouped, bundle]
---

# AssetRelationship

> Represents a non-hierarchical relationship between assets due to an
			asset modification; for example, a replacement, upgrade, or other circumstance. In
			Revenue Lifecycle Management, this object represents an asset or assets grouped in a
			bundle or set. This object is available in API version 41.0 and later.

# AssetRelationship

Represents a non-hierarchical relationship between assets due to an asset modification; for example, a replacement, upgrade, or other circumstance. In Revenue Lifecycle Management, this object represents an asset or assets grouped in a bundle or set. This object is available in API version 41.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AssetRelationship](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_assetrelationship.htm "HTML (New Window)") in the Field Service Developer Guide, Object Reference for the Salesforce Platform, and Transaction Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetId | Asset ID | reference |  | 18 |  |  |
| AssetRelationshipNumber | Asset Relationship Number | string |  | 255 |  |  |
| AssetRole | Asset Role | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FromDate | From Date | datetime |  |  |  |  |
| Id | Asset Relationship ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| RelatedAssetId | Asset ID | reference |  | 18 |  |  |
| RelatedAssetRole | Related Asset Role | picklist |  | 255 |  |  |
| RelationshipType | Relationship Type | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ToDate | To Date | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
