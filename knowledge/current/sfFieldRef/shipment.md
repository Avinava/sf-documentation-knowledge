---
title: "Shipment"
domain: sfFieldRef
topic: shipment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.937Z
estimatedTokens: 834
keywords: [Shipment, transport, inventory, service, order, items, Management]
---

# Shipment

> Represents the transport of inventory in field service or a shipment
			of order items in Order Management.

# Shipment

Represents the transport of inventory in field service or a shipment of order items in Order Management.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Shipment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_shipment.htm "HTML (New Window)") in the Field Service Developer Guide, Manufacturing Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualDeliveryDate | Actual Delivery Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DeliveredToId | Delivered To ID | reference |  | 18 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DestinationLocationId | Destination Location ID | reference |  | 18 |  |  |
| ExpectedDeliveryDate | Expected Delivery Date | datetime |  |  |  |  |
| Id | Shipment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Provider | Shipping Provider | picklist |  | 40 |  |  |
| ReturnOrderId | Return Order ID | reference |  | 18 |  |  |
| ShipFromAddress | Ship From Address | address |  |  |  |  |
| ShipFromCity | Ship From City | string |  | 40 |  |  |
| ShipFromCountry | Ship From Country | string |  | 80 |  |  |
| ShipFromGeocodeAccuracy | Ship From Geocode Accuracy | picklist |  | 40 |  |  |
| ShipFromLatitude | Ship From Latitude | double |  |  | 18 | 15 |
| ShipFromLongitude | Ship From Longitude | double |  |  | 18 | 15 |
| ShipFromPostalCode | Ship From Zip/Postal Code | string |  | 20 |  |  |
| ShipFromState | Ship From State/Province | string |  | 80 |  |  |
| ShipFromStreet | Ship From Street | textarea |  | 255 |  |  |
| ShipToAddress | Ship To Address | address |  |  |  |  |
| ShipToCity | Ship To City | string |  | 40 |  |  |
| ShipToCountry | Ship To Country | string |  | 80 |  |  |
| ShipToGeocodeAccuracy | Ship To Geocode Accuracy | picklist |  | 40 |  |  |
| ShipToLatitude | Ship To Latitude | double |  |  | 18 | 15 |
| ShipToLongitude | Ship To Longitude | double |  |  | 18 | 15 |
| ShipToName | Ship To Name | string |  | 255 |  |  |
| ShipToPostalCode | Ship To Zip/Postal Code | string |  | 20 |  |  |
| ShipToState | Ship To State/Province | string |  | 80 |  |  |
| ShipToStreet | Ship To Street | textarea |  | 255 |  |  |
| ShipmentNumber | Shipment Number | string |  | 255 |  |  |
| SourceLocationId | Source Location ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalItemsQuantity | Total Items Quantity | double |  |  | 18 | 2 |
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
