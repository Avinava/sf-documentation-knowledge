---
title: "WasteFootprintItem"
domain: sfFieldRef
topic: wastefootprintitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.068Z
estimatedTokens: 372
keywords: [WasteFootprintItem, volume, waste, disposal, aggregated, generated, either, part, operations, end-, of-, life, product]
---

# WasteFootprintItem

> Represents the volume by waste type and disposal type of aggregated waste
         generated either as part of operations or during the end- of- life of a product.

# WasteFootprintItem

Represents the volume by waste type and disposal type of aggregated waste generated either as part of operations or during the end- of- life of a product.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see WasteFootprintItem in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DisposalType | Disposal Type | picklist |  | 40 |  |  |
| DisposedWasteQuantityPct | Disposed Waste Quantity Percentage | percent |  |  | 18 | 2 |
| DisposedWasteQuantityinTonnes | Disposed Waste Quantity in Tonnes | double |  |  | 18 | 5 |
| Id | Waste Footprint Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParentWasteFootprintId | Waste Footprint ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WasteType | Waste Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
