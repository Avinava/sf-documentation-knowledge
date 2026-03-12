---
title: "CartItem"
domain: sfFieldRef
topic: cartitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:52.578Z
estimatedTokens: 1101
keywords: [CartItem, item, WebCart, that’s, active, store, built, B2B, D2C, Commerce, Cart, Product, Charge, API, version]
---

# CartItem

> Represents an item in a WebCart that’s active in
			a store built with B2B or D2C Commerce. Cart item can be of type Product or Charge. This object is available in API version 49.0 and
		later.

# CartItem

Represents an item in a WebCart that’s active in a store built with B2B or D2C Commerce. Cart item can be of type Product or Charge. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CartItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_cartitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentAmount | Adjustment Amount quantity based | currency |  |  | 18 | 2 |
| AdjustmentTaxAmount | Adjustment Tax Amount | currency |  |  | 18 | 2 |
| CartDeliveryGroupId | Cart Delivery Group ID | reference |  | 18 |  |  |
| CartId | Cart ID | reference |  | 18 |  |  |
| ChildProductCount | Child Product Count | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DistributedAdjustmentAmount | Distributed Promotions Total | currency |  |  | 18 | 2 |
| DistributedAdjustmentTaxAmount | Distributed Promotions Tax Adjustment | currency |  |  | 18 | 2 |
| GrossAdjustmentAmount | Gross Adjustment Amount quantity based | currency |  |  | 18 | 2 |
| GrossUnitPrice | Gross Unit Price | currency |  |  | 18 | 2 |
| Id | Cart Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsShippingChargeNotApplicable | Is Shipping Charge Not Applicable | boolean |  |  |  |  |
| ItemizedAdjustmentAmount | Item Promotions Total | currency |  |  | 18 | 2 |
| ItemizedAdjustmentTaxAmount | Item Promotions Tax Adjustment | currency |  |  | 18 | 2 |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ListPrice | List Price | currency |  |  | 18 | 2 |
| Name | Cart Item Name | string |  | 255 |  |  |
| NetAdjustmentAmount | Net Adjustment Amount quantity based | currency |  |  | 18 | 2 |
| NetUnitPrice | Net Unit Price | currency |  |  | 18 | 2 |
| ParentCartItemId | Cart Item ID | reference |  | 18 |  |  |
| PerUnitWeight | Weight of single cart item | double |  |  | 18 | 2 |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductClass | Product Class | picklist |  | 255 |  |  |
| ProductValidationKey | Product Validation Key hash | string |  | 255 |  |  |
| Quantity | Quantity | double |  |  | 18 | 0 |
| SalesPrice | Sales Price | currency |  |  | 18 | 2 |
| Sku | SKU | string |  | 255 |  |  |
| StockCheckMethod | Stock Check Method | picklist |  | 255 |  |  |
| SubType | SubType | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAdjustmentAmount | All Adjustments Total | currency |  |  | 18 | 2 |
| TotalAmount | Total Amount | currency |  |  | 18 | 2 |
| TotalLineAmount | Total Line Amount | currency |  |  | 18 | 2 |
| TotalLineGrossAmount | Total Line Gross Amount | currency |  |  | 18 | 2 |
| TotalLineNetAmount | Total Line Net Amount | currency |  |  | 18 | 2 |
| TotalLineTaxAmount | Total Line Tax Amount | currency |  |  | 18 | 2 |
| TotalListPrice | Total List Price | currency |  |  | 18 | 2 |
| TotalPrice | Total Price | currency |  |  | 18 | 2 |
| TotalPriceAfterAllAdjustments | Total Adjusted Price | currency |  |  | 18 | 2 |
| TotalPriceTaxAmount | Total Price Tax Amount | currency |  |  | 18 | 2 |
| TotalPromoAdjustmentAmount | Item Promotions Plus Distributed Promotions Total | currency |  |  | 18 | 2 |
| TotalPromoAdjustmentTaxAmount | Item Promotions Tax Adjustment Plus Distributed Tax Adjustment | currency |  |  | 18 | 2 |
| TotalTaxAmount | Total Tax Amount | currency |  |  | 18 | 2 |
| TotalWeight | Total Weight of cart item | double |  |  | 18 | 2 |
| Type | Type | picklist |  | 255 |  |  |
| UnitAdjustedPrice | Unit Adjusted Price | currency |  |  | 18 | 2 |
| UnitAdjustedPriceWithItemAdj | Unit price that includes both tier and item level discounts for this cart item | currency |  |  | 18 | 2 |
| UnitAdjustmentAmount | Unit Adjustment Amount | currency |  |  | 18 | 2 |
| UnitItemAdjustmentAmount | Item level discount on a unit level for this cart item | currency |  |  | 18 | 2 |
| WeightUnit | Weight Unit | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
