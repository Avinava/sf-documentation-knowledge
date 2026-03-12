---
title: "OrderAdjustmentGroup"
domain: sfFieldRef
topic: orderadjustmentgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.621Z
estimatedTokens: 430
keywords: [OrderAdjustmentGroup, Group, containing, adjustments, applied, order, API, version, 48.0, later]
---

# OrderAdjustmentGroup

> Group containing a set of adjustments applied to an order. This object is
    available in API version 48.0 and later.

# OrderAdjustmentGroup

Group containing a set of adjustments applied to an order. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderAdjustmentGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderadjustmentgroup.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentSource | Adjustment Source | picklist |  | 255 |  |  |
| AdjustmentType | Adjustment Type | picklist |  | 255 |  |  |
| AdjustmentValue | Adjustment Value | double |  |  | 18 | 0 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| GrandTotalAmount | Total with Tax | currency |  |  | 18 | 2 |
| Id | Order Adjustment Group ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| Priority | Priority | int | 9 |  |  |  |
| RelatedAdjustmentGroupId | Order Adjustment Group ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAmount | Pretax Total | currency |  |  | 18 | 2 |
| TotalTaxAmount | Total Tax | currency |  |  | 18 | 2 |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
