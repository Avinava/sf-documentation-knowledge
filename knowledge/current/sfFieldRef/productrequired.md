---
title: "ProductRequired"
domain: sfFieldRef
topic: productrequired
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.786Z
estimatedTokens: 431
keywords: [ProductRequired, product, needed, work, order, line, item, service]
---

# ProductRequired

> Represents a product that is needed to complete a work order or work
			order line item in field service.

# ProductRequired

Represents a product that is needed to complete a work order or work order line item in field service.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProductRequired](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productrequired.htm "HTML (New Window)") in the Field Service Developer Guide, Manufacturing Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Product Required ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ParentRecordId | Parent Record ID | reference |  | 18 |  |  |
| ParentRecordType | Parent Record Type | string |  | 50 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductName | Product Name | string |  | 255 |  |  |
| ProductRequiredNumber | Product Required Number | string |  | 255 |  |  |
| QuantityRequired | Quantity Required | double |  |  | 18 | 2 |
| QuantityUnitOfMeasure | Quantity Unit Of Measure | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
