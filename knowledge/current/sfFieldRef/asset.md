---
title: "Asset"
domain: sfFieldRef
topic: asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.606Z
estimatedTokens: 1011
keywords: [Asset, item, commercial, product, sold, company, competitor, customer, purchased]
---

# Asset

> Represents an item of commercial value, such as a product sold by your company or a competitor, that a customer has purchased.

# Asset

Represents an item of commercial value, such as a product sold by your company or a competitor, that a customer has purchased.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Asset](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_asset.htm "HTML (New Window)") in the Consumer Goods Cloud Developer Guide, Field Service Developer Guide, Object Reference for the Salesforce Platform, and Transaction Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| Address | Address | address |  |  |  |  |
| AssetLevel | Asset Level | int | 9 |  |  |  |
| AssetProvidedById | Asset Provided By ID | reference |  | 18 |  |  |
| AssetServicedById | Asset Serviced By ID | reference |  | 18 |  |  |
| City | City | string |  | 40 |  |  |
| ConsequenceOfFailure | Consequence Of Failure | picklist |  | 255 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrentAmount | Current Amount | currency |  |  | 18 | 2 |
| CurrentLifecycleEndDate | Current Lifecycle End Date | datetime |  |  |  |  |
| CurrentMrr | Current Monthly Recurring Revenue | currency |  |  | 18 | 2 |
| CurrentQuantity | Current Quantity | double |  |  | 14 | 2 |
| Description | Description | textarea |  | 32000 |  |  |
| DigitalAssetStatus | Digital Asset Status | picklist |  | 255 |  |  |
| ExternalIdentifier | External Id | string |  | 255 |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| HasLifecycleManagement | Lifecycle-managed asset | boolean |  |  |  |  |
| Id | Asset ID | id |  | 18 |  |  |
| InstallDate | Install Date | date |  |  |  |  |
| IsCompetitorProduct | Competitor Asset | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsInternal | Internal Asset | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| LifecycleEndDate | Lifecycle End Date | datetime |  |  |  |  |
| LifecycleStartDate | Lifecycle Start Date | datetime |  |  |  |  |
| LocationId | Location ID | reference |  | 18 |  |  |
| Longitude | Longitude | double |  |  | 18 | 15 |
| ManufactureDate | Manufacture Date | date |  |  |  |  |
| Name | Asset Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentId | Parent Asset ID | reference |  | 18 |  |  |
| PostalCode | Postal Code | string |  | 20 |  |  |
| Price | Price | currency |  |  | 18 | 2 |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductCode | Product Code | string |  | 255 |  |  |
| ProductDescription | Product Description | string |  | 4000 |  |  |
| ProductFamily | Product Family | picklist |  | 255 |  |  |
| PurchaseDate | Purchase Date | date |  |  |  |  |
| Quantity | Quantity | double |  |  | 12 | 2 |
| RootAssetId | Root Asset ID | reference |  | 18 |  |  |
| SerialNumber | Serial Number | string |  | 80 |  |  |
| State | State | string |  | 80 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StatusReason | Status Reason | picklist |  | 255 |  |  |
| StockKeepingUnit | Product SKU | string |  | 180 |  |  |
| Street | Street | textarea |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalLifecycleAmount | Total Lifecycle Amount | currency |  |  | 18 | 2 |
| UsageEndDate | Usage End Date | date |  |  |  |  |
| Uuid | Unique Identifier | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
