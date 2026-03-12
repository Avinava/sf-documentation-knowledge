---
title: "InventoryItemReservation"
domain: sfFieldRef
topic: inventoryitemreservation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.779Z
estimatedTokens: 456
keywords: [InventoryItemReservation, store, inventory, item, reservation, specific, product, location, API, version, 60.0, later]
---

# InventoryItemReservation

> Used to store inventory item reservation information for a specific
         product and location. This object is available in API version 60.0 and later.

# InventoryItemReservation

Used to store inventory item reservation information for a specific product and location. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [InventoryItemReservation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_inventoryitemreservation.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorCode | Error Code | string |  | 255 |  |  |
| ErrorMessage | Error Message | textarea |  | 2000 |  |  |
| Id | Inventory Item Reservation ID | id |  | 18 |  |  |
| InventoryItemReservationName | Inventory Item Reservation Number | string |  | 255 |  |  |
| InventoryReservationId | Inventory Reservation ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| ItemReservationSourceId | Item Reservation Source ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| Quantity | Quantity | double |  |  | 18 | 0 |
| ReservedAtLocationId | Reserved At Location ID | reference |  | 18 |  |  |
| StockKeepingUnit | Stock Keeping Unit | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
