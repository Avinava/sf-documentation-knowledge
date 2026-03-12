---
title: "ProductTransfer"
domain: sfFieldRef
topic: producttransfer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.895Z
estimatedTokens: 746
keywords: [ProductTransfer, transfer, inventory, locations, service]
---

# ProductTransfer

> Represents the transfer of inventory between locations in field
			service.

# ProductTransfer

Represents the transfer of inventory between locations in field service.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProductTransfer](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_producttransfer.htm "HTML (New Window)") in the Field Service Developer Guide, Life Sciences Cloud Developer Guide, Manufacturing Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DestinationLocationId | Destination Location ID | reference |  | 18 |  |  |
| ExpectedPickupDate | Expected Pickup Date | datetime |  |  |  |  |
| Id | Product Transfer ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsProduct2Serialized | Serialized | boolean |  |  |  |  |
| IsReceived | Received | boolean |  |  |  |  |
| IsSent | Sent | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| Product2TransferRecordMode | Transfer Record Mode | picklist |  | 255 |  |  |
| ProductRequestId | Product Request ID | reference |  | 18 |  |  |
| ProductRequestLineItemId | Product Request Line Item ID | reference |  | 18 |  |  |
| ProductTransferNumber | Product Transfer Number | string |  | 255 |  |  |
| QuantityReceived | Quantity Received | double |  |  | 18 | 2 |
| QuantitySent | Quantity Sent | double |  |  | 18 | 2 |
| QuantityUnitOfMeasure | Quantity Unit Of Measure | picklist |  | 40 |  |  |
| ReceivedById | Received by ID | reference |  | 18 |  |  |
| ReturnOrderId | Return Order ID | reference |  | 18 |  |  |
| ReturnOrderLineItemId | Return Order Line Item ID | reference |  | 18 |  |  |
| ShipmentExpectedDeliveryDate | Shipment Expected Delivery Date | datetime |  |  |  |  |
| ShipmentId | Shipment ID | reference |  | 18 |  |  |
| ShipmentStatus | Shipment Status | picklist |  | 40 |  |  |
| ShipmentTrackingNumber | Shipment Tracking Number | string |  | 255 |  |  |
| ShipmentTrackingUrl | Shipment Tracking URL | url |  | 255 |  |  |
| SourceLocationId | Source Location ID | reference |  | 18 |  |  |
| SourceProductItemId | Source Product Item ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
