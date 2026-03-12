---
title: "PromotionTarget"
domain: sfFieldRef
topic: promotiontarget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.687Z
estimatedTokens: 552
keywords: [PromotionTarget, product, category, order, want, target, promotion, B2B, Store, D2C, API, version, 52.0, later]
---

# PromotionTarget

> Represents the product, product category, or order that you want to target
			with your promotion in a B2B Store or D2C store. This object is available in API
		version 52.0 and later.

# PromotionTarget

Represents the product, product category, or order that you want to target with your promotion in a B2B Store or D2C store. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PromotionTarget](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_promotiontarget.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentAmount | Adjustment Amount | currency |  |  | 18 | 2 |
| AdjustmentPercent | Adjustment Percent | percent |  |  | 5 | 2 |
| AdjustmentType | Adjustment Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Promotion Target ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Promotion Target Name | string |  | 255 |  |  |
| PromotionId | Promotion ID | reference |  | 18 |  |  |
| PromotionTierId | Promotion Tier ID | reference |  | 18 |  |  |
| RestrictionQuantity | Quantity Limit | double |  |  | 18 | 0 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetId | Target ID | reference |  | 18 |  |  |
| TargetOperator | Target Operator | picklist |  | 255 |  |  |
| TargetProductCategoryName | Target Category Name | string |  | 200 |  |  |
| TargetProductName | Target Product Name | string |  | 255 |  |  |
| TargetProductSku | Target Product SKU | string |  | 180 |  |  |
| TargetRuleCriteriaType | Target Rule Criteria Type | picklist |  | 255 |  |  |
| TargetStandardShippingRateName | Target Standard Shipping Rate Name | string |  | 180 |  |  |
| TargetType | Target Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
