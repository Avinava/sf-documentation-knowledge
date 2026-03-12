---
title: "SupplierProduct"
domain: sfFieldRef
topic: supplierproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.711Z
estimatedTokens: 397
keywords: [SupplierProduct, that's, track, products, purchased, supplier]
---

# SupplierProduct

> Represents information that's used to track the products that are purchased
         from a supplier.

# SupplierProduct

Represents information that's used to track the products that are purchased from a supplier.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SupplierProduct in the Manufacturing Cloud Developer Guide and Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AttributeEndDate | Attribute End Date | date |  |  |  |  |
| AttributeStartDate | Attribute Start Date | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefaultProductEmssnFctrId | Product Emissions Factor ID | reference |  | 18 |  |  |
| Id | Supplier Product ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| SourcingAllocPercentage | Sourcing Allocation Percentage | percent |  |  | 3 | 0 |
| SupplierId | Supplier ID | reference |  | 18 |  |  |
| SupplierRank | Supplier Rank | double |  |  | 18 | 0 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
