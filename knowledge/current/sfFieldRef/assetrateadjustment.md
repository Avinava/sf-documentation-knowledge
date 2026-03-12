---
title: "AssetRateAdjustment"
domain: sfFieldRef
topic: assetrateadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.723Z
estimatedTokens: 363
keywords: [AssetRateAdjustment, Stores, tier, rate, adjustments, asset, card, entries, API, version, 62.0, later]
---

# AssetRateAdjustment

> Stores the tier rate adjustments for the asset rate card
         entries. This object is available in API version 62.0 and later.

# AssetRateAdjustment

Stores the tier rate adjustments for the asset rate card entries. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AssetRateAdjustment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_assetrateadjustment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentType | Adjustment Type | picklist |  | 255 |  |  |
| AdjustmentValue | Adjustment Value | double |  |  | 18 | 6 |
| AssetRateCardEntryId | Asset Rate Card Entry ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Asset Rate Adjustment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LowerBound | Lower Bound | double |  |  | 18 | 6 |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UpperBound | Upper Bound | double |  |  | 18 | 6 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
