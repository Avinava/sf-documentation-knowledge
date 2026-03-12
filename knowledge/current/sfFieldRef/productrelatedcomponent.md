---
title: "ProductRelatedComponent"
domain: sfFieldRef
topic: productrelatedcomponent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:09.681Z
estimatedTokens: 630
keywords: [ProductRelatedComponent, product, included, bundle, add-on, API, version, 57.0, later]
---

# ProductRelatedComponent

> Represents a product that is included in a product bundle, a set, or
			a product and an add-on. This object is available in API version 57.0 and
		later.

# ProductRelatedComponent

Represents a product that is included in a product bundle, a set, or a product and an add-on. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProductRelatedComponent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productrelatedcomponent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ChildProductClassificationId | Product Classification ID | reference |  | 18 |  |  |
| ChildProductId | Product ID | reference |  | 18 |  |  |
| ChildProductRole | Child Product Role | picklist |  | 255 |  |  |
| ChildSellingModelId | Product Selling Model ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DoesBundlePriceIncludeChild | Price includes component | boolean |  |  |  |  |
| Id | Product Related Component ID | id |  | 18 |  |  |
| IsComponentRequired | Require this component | boolean |  |  |  |  |
| IsDefaultComponent | Include component by default | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsQuantityEditable | Allow quantity changes | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaxQuantity | Max Quantity | double |  |  | 18 | 2 |
| MinQuantity | Min Quantity | double |  |  | 18 | 2 |
| Name | Product Related Component Name | string |  | 255 |  |  |
| ParentProductId | Product ID | reference |  | 18 |  |  |
| ParentProductRole | Parent Product Role | picklist |  | 255 |  |  |
| ParentSellingModelId | Product Selling Model ID | reference |  | 18 |  |  |
| ProductComponentGroupId | Product Component Group ID | reference |  | 18 |  |  |
| ProductRelationshipTypeId | Product Relationship Type ID | reference |  | 18 |  |  |
| Quantity | Quantity | double |  |  | 18 | 2 |
| QuantityScaleMethod | Quantity Scaling Method | picklist |  | 255 |  |  |
| Sequence | Sequence | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
