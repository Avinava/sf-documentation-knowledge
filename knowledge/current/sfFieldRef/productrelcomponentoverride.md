---
title: "ProductRelComponentOverride"
domain: sfFieldRef
topic: productrelcomponentoverride
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:09.656Z
estimatedTokens: 464
keywords: [ProductRelComponentOverride, cardinality, overrides, product, components, bundle, API, version, 60.0, later]
---

# ProductRelComponentOverride

> Represents the cardinality overrides for product components in a bundle.
      This object is available in API version 60.0 and later.

# ProductRelComponentOverride

Represents the cardinality overrides for product components in a bundle. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ProductRelComponentOverride in the Product Catalog Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DoesBundlePriceIncludeChild | Price includes component | boolean |  |  |  |  |
| Id | Product Related Component Override ID | id |  | 18 |  |  |
| IsComponentRequired | Require this component | boolean |  |  |  |  |
| IsDefaultComponent | Include component by default | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsExcluded | Exclude | boolean |  |  |  |  |
| IsQuantityEditable | Allow quantity changes | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaxQuantity | Max Quantity | double |  |  | 18 | 2 |
| MinQuantity | Min Quantity | double |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| OverrideContextId | Override Context ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProductRelatedComponentId | Product Related Component ID | reference |  | 18 |  |  |
| Quantity | Quantity | double |  |  | 18 | 2 |
| QuantityScaleMethod | Quantity Scaling Method | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
