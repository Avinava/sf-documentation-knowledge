---
title: "ProductClassificationAttr"
domain: sfFieldRef
topic: productclassificationattr
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:09.287Z
estimatedTokens: 630
keywords: [ProductClassificationAttr, relationship, product, classification, attributes, configuration, products, API, version, 60.0, later]
---

# ProductClassificationAttr

> Represents the relationship between a product classification and its
         attributes. This is the default configuration for products based on the product
         classification. This object is available in API version 60.0 and later.

# ProductClassificationAttr

Represents the relationship between a product classification and its attributes. This is the default configuration for products based on the product classification. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ProductClassificationAttr in the Product Catalog Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AttributeCategoryId | Attribute Category ID | reference |  | 18 |  |  |
| AttributeDefinitionId | Attribute Definition ID | reference |  | 18 |  |  |
| AttributeNameOverride | Attribute Name Override | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefaultValue | Default Value | string |  | 255 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DisplayType | Display Type | picklist |  | 255 |  |  |
| HelpText | Help Text | textarea |  | 32000 |  |  |
| Id | Product Classification Attribute ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsHidden | Is Hidden | boolean |  |  |  |  |
| IsPriceImpacting | Is Price Impacting | boolean |  |  |  |  |
| IsReadOnly | Is Read Only | boolean |  |  |  |  |
| IsRequired | Is Required | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaximumCharacterCount | Maximum Character Count | int | 9 |  |  |  |
| MaximumValue | Maximum Value | string |  | 255 |  |  |
| MinimumCharacterCount | Minimum Character Count | int | 9 |  |  |  |
| MinimumValue | Minimum Value | string |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| OverriddenInheritedAttributeId | Product Classification Attribute ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProductClassificationId | Product Classification ID | reference |  | 18 |  |  |
| Sequence | Sequence | int | 9 |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StepValue | Step Value | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ValueDescription | Value Description | textarea |  | 32000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
