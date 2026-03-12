---
title: "ProductWarrantyTerm"
domain: sfFieldRef
topic: productwarrantyterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.984Z
estimatedTokens: 409
keywords: [ProductWarrantyTerm, relationship, product, family, warranty, term, API, version, 50.0, later]
---

# ProductWarrantyTerm

> Defines the relationship between a product or product family and warranty term.
     This object is available in API version 50.0 and later.

# ProductWarrantyTerm

Defines the relationship between a product or product family and warranty term. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProductWarrantyTerm](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productwarrantyterm.htm "HTML (New Window)") in the Automotive Cloud Developer Guide, Field Service Developer Guide, Manufacturing Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CoveredProductFamily | Covered Product Family | picklist |  | 40 |  |  |
| CoveredProductId | Product ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Product Warranty Term ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ProductWarrantyTermNumber | Product Warranty Term Number | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WarrantyTermId | Warranty Term ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
