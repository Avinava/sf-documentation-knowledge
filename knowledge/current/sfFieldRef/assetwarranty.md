---
title: "AssetWarranty"
domain: sfFieldRef
topic: assetwarranty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.780Z
estimatedTokens: 579
keywords: [AssetWarranty, warranty, terms, applicable, asset, along, any, exclusions, extensions, API, version, 50.0, later]
---

# AssetWarranty

> Defines the warranty terms applicable to an asset along with any exclusions and
      extensions. This object is available in API version 50.0 and later.

# AssetWarranty

Defines the warranty terms applicable to an asset along with any exclusions and extensions. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AssetWarranty](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_assetwarranty.htm "HTML (New Window)") in the Automotive Cloud Developer Guide, Field Service Developer Guide, Manufacturing Cloud Developer Guide, Object Reference for the Salesforce Platform, and Transaction Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetId | Asset ID | reference |  | 18 |  |  |
| AssetWarrantyNumber | Asset Warranty Number | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | End Date | date |  |  |  |  |
| ExchangeType | Exchange Type | picklist |  | 40 |  |  |
| Exclusions | Exclusions | textarea |  | 32000 |  |  |
| ExpensesCovered | Expenses Covered | percent |  |  | 5 | 2 |
| ExpensesCoveredEndDate | Expenses Covered End Date | date |  |  |  |  |
| Id | Asset Warranty ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsTransferable | Transferable | boolean |  |  |  |  |
| LaborCovered | Labor Covered | percent |  |  | 5 | 2 |
| LaborCoveredEndDate | Labor Covered End Date | date |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| PartsCovered | Parts Covered | percent |  |  | 5 | 2 |
| PartsCoveredEndDate | Parts Covered End Date | date |  |  |  |  |
| Pricebook2Id | Price Book ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WarrantyTermId | Warranty Term ID | reference |  | 18 |  |  |
| WarrantyType | Warranty Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
