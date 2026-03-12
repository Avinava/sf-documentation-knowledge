---
title: "PromotionQualifier"
domain: sfFieldRef
topic: promotionqualifier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.603Z
estimatedTokens: 532
keywords: [PromotionQualifier, product, category, order, want, target, promotion, qualifier, B2B, D2C, store, API, version, 52.0, later]
---

# PromotionQualifier

> Represents the product, product category, or order that you want to target
         with your promotion qualifier in a B2B or D2C store. This object is available in API
      version 52.0 and later.

# PromotionQualifier

Represents the product, product category, or order that you want to target with your promotion qualifier in a B2B or D2C store. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PromotionQualifier](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_promotionqualifier.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApproachingDiscountThreshold | Approaching Discount Threshold | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Promotion Qualifier ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MinimumAmount | Minimum Amount | currency |  |  | 18 | 2 |
| MinimumQuantity | Minimum Quantity | double |  |  | 18 | 4 |
| Name | Promotion Qualifier Name | string |  | 255 |  |  |
| PromotionId | Promotion ID | reference |  | 18 |  |  |
| PromotionTierId | Promotion Tier ID | reference |  | 18 |  |  |
| QualifierId | Qualifier ID | reference |  | 18 |  |  |
| QualifierOperator | Qualifier Operator | picklist |  | 255 |  |  |
| QualifierProductCategoryName | Qualifier Category Name | string |  | 200 |  |  |
| QualifierProductName | Qualifier Product Name | string |  | 255 |  |  |
| QualifierProductSku | Qualifier Product SKU | string |  | 180 |  |  |
| QualifierRuleCriteriaType | Qualifier Rule Criteria Type | picklist |  | 255 |  |  |
| QualifierType | Qualifier Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
