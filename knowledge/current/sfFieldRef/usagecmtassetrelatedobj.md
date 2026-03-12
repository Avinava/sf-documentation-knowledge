---
title: "UsageCmtAssetRelatedObj"
domain: sfFieldRef
topic: usagecmtassetrelatedobj
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.696Z
estimatedTokens: 352
keywords: [UsageCmtAssetRelatedObj, relation, asset, commitment-based, usage, product, account, contract, custom, API, version, 64.0, later]
---

# UsageCmtAssetRelatedObj

> Represents the relation between an asset for the commitment-based
         usage product and an asset, account, contract, or custom object. This object is
      available in API version 64.0 and later.

# UsageCmtAssetRelatedObj

Represents the relation between an asset for the commitment-based usage product and an asset, account, contract, or custom object. This object is available in API version 64.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see UsageCmtAssetRelatedObj in the Usage Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetId | Asset ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveEndDateTime | Effective End Date Time | datetime |  |  |  |  |
| EffectiveStartDateTime | Effective Start Date Time | datetime |  |  |  |  |
| Id | Usage Commitment Asset Related Object ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| RelatedObjectId | Related Object ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageCmtAssetRelatedObjNumber | Name | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
