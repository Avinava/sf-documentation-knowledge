---
title: "AssetAction"
domain: sfFieldRef
topic: assetaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.636Z
estimatedTokens: 777
keywords: [AssetAction, change, made, lifecycle-managed, asset, can’t, edited, API, version, 50.0, later]
---

# AssetAction

> Represents a change made to a lifecycle-managed asset. The fields can’t be
         edited. This object is available in API version 50.0 and later.

# AssetAction

Represents a change made to a lifecycle-managed asset. The fields can’t be edited. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AssetAction](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_assetaction.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Transaction Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionDate | Action Date | datetime |  |  |  |  |
| ActualTaxChange | Change in Actual Tax | currency |  |  | 18 | 2 |
| AdjustmentAmountChange | Change in Adjustment Amount | currency |  |  | 18 | 2 |
| Amount | Amount | currency |  |  | 18 | 2 |
| AssetActionNumber | Name | string |  | 255 |  |  |
| AssetId | Asset ID | reference |  | 18 |  |  |
| CategoryEnum | Business Category | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EstimatedTaxChange | Change in Estimated Tax | currency |  |  | 18 | 2 |
| Id | Asset Action ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MrrChange | Change in Monthly Recurring Revenue | currency |  |  | 18 | 2 |
| ProductAmountChange | Change in Product Amount | currency |  |  | 18 | 2 |
| QuantityChange | Change in Quantity | double |  |  | 14 | 2 |
| SubtotalChange | Change in Subtotal | currency |  |  | 18 | 2 |
| Subtype | Subtype | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAmount | Total Amount | currency |  |  | 18 | 2 |
| TotalCancellationsAmount | Total Cancellations Amount | currency |  |  | 18 | 2 |
| TotalCrossSellsAmount | Total Cross-Sells Amount | currency |  |  | 18 | 2 |
| TotalDowngradesAmount | Total Downgrades Amount | currency |  |  | 18 | 2 |
| TotalDownsellsAmount | Total Downsells Amount | currency |  |  | 18 | 2 |
| TotalInitialSaleAmount | Total Initial Sale Amount | currency |  |  | 18 | 2 |
| TotalMrr | Total Monthly Recurring Revenue | currency |  |  | 18 | 2 |
| TotalOtherAmount | Total Other Amount | currency |  |  | 18 | 2 |
| TotalQuantity | Total Quantity | double |  |  | 14 | 2 |
| TotalRenewalsAmount | Total Renewals Amount | currency |  |  | 18 | 2 |
| TotalSwapsAmount | Total Swaps Amount | currency |  |  | 18 | 2 |
| TotalTermsAndConditionsAmount | Total Terms And Conditions Changes Amount | currency |  |  | 18 | 2 |
| TotalTransfersAmount | Total Transfers Amount | currency |  |  | 18 | 2 |
| TotalUpgradesAmount | Total Upgrades Amount | currency |  |  | 18 | 2 |
| TotalUpsellsAmount | Total Upsells Amount | currency |  |  | 18 | 2 |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
