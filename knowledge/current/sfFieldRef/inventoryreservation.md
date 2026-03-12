---
title: "InventoryReservation"
domain: sfFieldRef
topic: inventoryreservation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.787Z
estimatedTokens: 472
keywords: [InventoryReservation, Stores, status, cart, inventory, reservations, B2B, D2C, Commerce, API, version, 60.0, later]
---

# InventoryReservation

> Stores information about the status of cart inventory reservations in
         B2B and D2C Commerce. This object is available in API version 60.0 and later.

# InventoryReservation

Stores information about the status of cart inventory reservations in B2B and D2C Commerce. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [InventoryReservation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_inventoryreservation.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorCode | Error Code | string |  | 255 |  |  |
| ErrorMessage | Error Message | textarea |  | 2000 |  |  |
| Id | Inventory Reservation ID | id |  | 18 |  |  |
| InventoryReservationName | Inventory Reservation Number | string |  | 255 |  |  |
| IsAsyncOperationInProgress | Async Operation in Progress | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSuccess | Latest Operation Succeeded | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReservationDate | Reservation Date | datetime |  |  |  |  |
| ReservationDurationInSeconds | Reservation Duration in Seconds | int | 9 |  |  |  |
| ReservationIdentifier | Reservation Identifier | string |  | 255 |  |  |
| ReservationSourceId | Reservation Source ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
