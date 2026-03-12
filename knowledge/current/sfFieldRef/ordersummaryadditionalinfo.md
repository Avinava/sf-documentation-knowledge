---
title: "OrderSummaryAdditionalInfo"
domain: sfFieldRef
topic: ordersummaryadditionalinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.059Z
estimatedTokens: 474
keywords: [OrderSummaryAdditionalInfo, Stores, OrderSummary, including, context, around, order, inventory, reservation, origination, Einstein, uses, perform, analysis, stored]
---

# OrderSummaryAdditionalInfo

> Stores information related to OrderSummary including context around the
         order, such as inventory reservation details, order origination, and other values that
         Einstein uses to perform order analysis. Only reservation details can be stored in this
         object.

# OrderSummaryAdditionalInfo

Stores information related to OrderSummary including context around the order, such as inventory reservation details, order origination, and other values that Einstein uses to perform order analysis. Only reservation details can be stored in this object.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderSummaryAdditionalInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_ordersummaryadditionalinfo.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentsVersion | Adjustments Version | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Order Summary Additional Id | id |  | 18 |  |  |
| InventoryReservationExtRef | Inventory Reservation External Reference | string |  | 255 |  |  |
| InventoryReservationIdentifier | Inventory Reservation Identifier | string |  | 255 |  |  |
| InventoryReservationMessage | Inventory Reservation Message | string |  | 255 |  |  |
| InventoryReservationState | Inventory Reservation State | picklist |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| OrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
