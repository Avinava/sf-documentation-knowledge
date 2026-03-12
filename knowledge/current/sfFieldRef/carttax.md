---
title: "CartTax"
domain: sfFieldRef
topic: carttax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.594Z
estimatedTokens: 406
keywords: [CartTax, taxes, line, item, WebCart, that’s, active, store, built, B2B, Commerce, D2C, API, version, 49.0]
---

# CartTax

> Represents taxes for a line item in a WebCart
         that’s active in a store built with B2B Commerce or D2C Commerce. This object is
      available in API version 49.0 and later.

# CartTax

Represents taxes for a line item in a WebCart that’s active in a store built with B2B Commerce or D2C Commerce. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CartTax](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_carttax.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentTargetType | Target Type for the Adjustment | picklist |  | 255 |  |  |
| Amount | Amount | currency |  |  | 18 | 2 |
| CartId | Cart ID | reference |  | 18 |  |  |
| CartItemId | Cart Item ID | reference |  | 18 |  |  |
| CartItemPriceAdjustmentId | Cart Item Price Adjustment ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| Id | Cart Tax ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Cart Tax Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxCalculationDate | Tax Calculation Date | date |  |  |  |  |
| TaxRate | Tax Rate | percent |  |  | 5 | 2 |
| TaxType | Tax Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
