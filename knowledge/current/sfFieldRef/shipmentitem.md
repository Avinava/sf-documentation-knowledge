---
title: "ShipmentItem"
domain: sfFieldRef
topic: shipmentitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.957Z
estimatedTokens: 391
keywords: [ShipmentItem, order, item, included, shipment, API, version, 51.0, later]
---

# ShipmentItem

> Represents an order item included in a shipment. This object is available
    in API version 51.0 and later.

# ShipmentItem

Represents an order item included in a shipment. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ShipmentItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_shipmentitem.htm "HTML (New Window)") in the Manufacturing Cloud Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| ExpectedDeliveryDate | Expected Delivery Date | datetime |  |  |  |  |
| Id | Shipment Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| Quantity | Quantity | double |  |  | 18 | 2 |
| ShipmentId | Shipment ID | reference |  | 18 |  |  |
| ShipmentItemNumber | Shipment Item Number | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TrackingNumber | Tracking Number | string |  | 255 |  |  |
| TrackingUrl | Tracking URL | url |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
