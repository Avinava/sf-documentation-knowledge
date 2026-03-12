---
title: "ProductItem"
domain: sfFieldRef
topic: productitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.534Z
estimatedTokens: 465
keywords: [ProductItem, stock, particular, product, location, service, bolts, stored, main, warehouse]
---

# ProductItem

> Represents the stock of a particular product at a particular location
			in field service, such as all bolts stored in your main warehouse.

# ProductItem

Represents the stock of a particular product at a particular location in field service, such as all bolts stored in your main warehouse.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProductItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productitem.htm "HTML (New Window)") in the Field Service Developer Guide, Life Sciences Cloud Developer Guide, Manufacturing Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Product Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsProduct2Serialized | Serialized | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocationId | Location ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductItemNumber | Product Item Number | string |  | 255 |  |  |
| ProductName | Product Name | string |  | 255 |  |  |
| QuantityOnHand | Quantity On Hand | double |  |  | 18 | 2 |
| QuantityUnitOfMeasure | Quantity Unit Of Measure | picklist |  | 40 |  |  |
| SerialNumber | Serial Number | string |  | 80 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
