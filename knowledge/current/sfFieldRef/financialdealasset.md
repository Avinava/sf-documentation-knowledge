---
title: "FinancialDealAsset"
domain: sfFieldRef
topic: financialdealasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.007Z
estimatedTokens: 398
keywords: [FinancialDealAsset, assets, included, financial, deal]
---

# FinancialDealAsset

> Represents the assets included in the financial deal.

# FinancialDealAsset

Represents the assets included in the financial deal.

For more information, see FinancialDealAsset in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Address | Address | address |  |  |  |  |
| AssetId | Asset ID | reference |  | 18 |  |  |
| AssetType | Asset Type | picklist |  | 40 |  |  |
| City | City | string |  | 40 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FinancialDealId | Financial Deal ID | reference |  | 18 |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 255 |  |  |
| Id | Financial Deal Asset ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| Longitude | Longitude | double |  |  | 18 | 15 |
| Name | Name | string |  | 255 |  |  |
| PostalCode | Postal Code | string |  | 20 |  |  |
| State | State | string |  | 80 |  |  |
| Street | Street | textarea |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitCount | Unit Count | double |  |  | 18 | 0 |
| UnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
