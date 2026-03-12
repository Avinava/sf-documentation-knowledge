---
title: "AttributeAdjustmentCondition"
domain: sfFieldRef
topic: attributeadjustmentcondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.900Z
estimatedTokens: 438
keywords: [AttributeAdjustmentCondition, condition, applied, attribute, determines, price, product, service, sold, API, version, 60.0, later]
---

# AttributeAdjustmentCondition

> Represents the condition applied to an attribute that determines the price of
         a product or service being sold. This object is available in API version 60.0 and
      later.

# AttributeAdjustmentCondition

Represents the condition applied to an attribute that determines the price of a product or service being sold. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AttributeAdjustmentCondition in the Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AttributeBasedAdjRuleId | Attribute Based Adjustment Rule ID | reference |  | 18 |  |  |
| AttributeDefinitionId | Attribute Definition ID | reference |  | 18 |  |  |
| BooleanValue | Boolean Value | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DateTimeValue | Date Time Value | datetime |  |  |  |  |
| DateValue | Date Value | date |  |  |  |  |
| DoubleValue | Double Value | double |  |  | 18 | 5 |
| Id | Attribute Adjustment Condition ID | id |  | 18 |  |  |
| IntegerValue | Integer Value | int | 9 |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Operator | Operator | picklist |  | 255 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| StringValue | String Value | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
