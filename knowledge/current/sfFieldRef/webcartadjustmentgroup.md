---
title: "WebCartAdjustmentGroup"
domain: sfFieldRef
topic: webcartadjustmentgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.120Z
estimatedTokens: 468
keywords: [WebCartAdjustmentGroup, Group, price, adjustments, cart, API, version, 52.0, later]
---

# WebCartAdjustmentGroup

> Group of price adjustments for a cart. This object is available in API
  version 52.0 and later.

# WebCartAdjustmentGroup

Group of price adjustments for a cart. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WebCartAdjustmentGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_webcartadjustmentgroup.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentBasisReferenceId | Coupon ID | reference |  | 18 |  |  |
| AdjustmentSource | Adjustment Source | picklist |  | 255 |  |  |
| AdjustmentTargetType | Target Type for the Adjustment | picklist |  | 255 |  |  |
| AdjustmentType | Adjustment Type | picklist |  | 255 |  |  |
| AdjustmentValue | Adjustment Value | double |  |  | 18 | 2 |
| CartId | Cart ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Id | Cart Adjustment Group ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Cart Adjustment Group Name | string |  | 255 |  |  |
| PriceAdjustmentCauseId | Promotion ID | reference |  | 18 |  |  |
| Priority | Priority Order for Adjustments | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxAmount | Tax Amount | currency |  |  | 18 | 2 |
| TotalAmount | Total Adjustment Amount | currency |  |  | 18 | 2 |
| TotalAmountWithTax | Total Adjustment Amount With Tax | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
