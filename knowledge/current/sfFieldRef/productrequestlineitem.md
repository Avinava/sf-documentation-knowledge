---
title: "ProductRequestLineItem"
domain: sfFieldRef
topic: productrequestlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.764Z
estimatedTokens: 719
keywords: [ProductRequestLineItem, part, service, Product, line, items, components, requests]
---

# ProductRequestLineItem

> Represents a request for a part in field service. Product request
			line items are components of product requests.

# ProductRequestLineItem

Represents a request for a part in field service. Product request line items are components of product requests.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProductRequestLineItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productrequestlineitem.htm "HTML (New Window)") in the Field Service Developer Guide, Life Sciences Cloud Developer Guide, Manufacturing Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CareProgramEnrolleeId | Care Program Enrollee ID | reference |  | 18 |  |  |
| CaseId | Case ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DestinationLocationId | Destination Location ID | reference |  | 18 |  |  |
| Id | Product Request Line Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| NeedByDate | Need By Date | datetime |  |  |  |  |
| ParentId | Product Request ID | reference |  | 18 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductRequestLineItemNumber | Product Request Line Item Number | string |  | 255 |  |  |
| QuantityRequested | Quantity Requested | double |  |  | 18 | 2 |
| QuantityUnitOfMeasure | Quantity Unit Of Measure | picklist |  | 40 |  |  |
| ShipToAddress | Ship To Address | address |  |  |  |  |
| ShipToCity | City | string |  | 40 |  |  |
| ShipToCountry | Country | string |  | 80 |  |  |
| ShipToGeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| ShipToLatitude | Latitude | double |  |  | 18 | 15 |
| ShipToLongitude | Longitude | double |  |  | 18 | 15 |
| ShipToPostalCode | Zip/Postal Code | string |  | 20 |  |  |
| ShipToState | State/Province | string |  | 80 |  |  |
| ShipToStreet | Address | textarea |  | 255 |  |  |
| ShipmentType | Shipment Type | picklist |  | 40 |  |  |
| SourceLocationId | Source Location ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WorkOrderId | Work Order ID | reference |  | 18 |  |  |
| WorkOrderLineItemId | Work Order Line Item ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
