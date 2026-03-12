---
title: "ProductRelatedMaterial"
domain: sfFieldRef
topic: productrelatedmaterial
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.690Z
estimatedTokens: 464
keywords: [ProductRelatedMaterial, components, product]
---

# ProductRelatedMaterial

> Represents information about the components of a product.

# ProductRelatedMaterial

Represents information about the components of a product.

For more information, see ProductRelatedMaterial in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| EffectiveEndDate | Effective End Date | date |  |  |  |  |
| EffectiveStartDate | Effective Start Date | date |  |  |  |  |
| Id | Product Related Material ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeadTime | Lead Time | double |  |  | 18 | 2 |
| LeadTimeUomId | Unit of Measure ID | reference |  | 18 |  |  |
| ManufacturingProgramId | Manufacturing Program ID | reference |  | 18 |  |  |
| MinimumEligibleQuantity | Minimum Eligible Quantity | double |  |  | 18 | 2 |
| MinimumEligibleQuantityUomId | Unit of Measure ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProductComponentId | Product ID | reference |  | 18 |  |  |
| ProductCpntPricebookId | Price Book ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| QuantityPerProductUnit | Quantity Per Product Unit | double |  |  | 18 | 2 |
| QuantityUomId | Unit of Measure ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageCategory | Usage Category | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
