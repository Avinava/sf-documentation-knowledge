---
title: "AssetShare"
domain: sfFieldRef
topic: assetshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.752Z
estimatedTokens: 264
keywords: [AssetShare, sharing, entry, Asset, API, version, 33.0, later]
---

# AssetShare

> Represents a sharing entry on an Asset. This object is available
      in API version 33.0 and later.

# AssetShare

Represents a sharing entry on an Asset. This object is available in API version 33.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AssetShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_assetshare.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Transaction Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetAccessLevel | Asset Access | picklist |  | 40 |  |  |
| AssetId | Asset ID | reference |  | 18 |  |  |
| Id | Asset Share ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| RowCause | Row Cause | picklist |  | 40 |  |  |
| UserOrGroupId | User/Group ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
