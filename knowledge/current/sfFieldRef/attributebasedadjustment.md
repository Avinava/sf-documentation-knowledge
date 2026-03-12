---
title: "AttributeBasedAdjustment"
domain: sfFieldRef
topic: attributebasedadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.949Z
estimatedTokens: 571
keywords: [AttributeBasedAdjustment, association, product, selling, model, price, adjustment, service, sold, attributes, stores, define, discounts, applied, along]
---

# AttributeBasedAdjustment

> Represents the association between the product selling model and the price
         adjustment for product or service being sold based on its attributes. This object stores
         information about the attributes that define the price of the product or service, the
         discounts applied, along with its value for a given date range. This object is
      available in API version 60.0 and later.

# AttributeBasedAdjustment

Represents the association between the product selling model and the price adjustment for product or service being sold based on its attributes. This object stores information about the attributes that define the price of the product or service, the discounts applied, along with its value for a given date range. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AttributeBasedAdjustment in the Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentType | Adjustment Type | picklist |  | 255 |  |  |
| AdjustmentValue | Adjustment Value | double |  |  | 18 | 6 |
| AttributeAdjConditionsHash | Attribute Adj Conditions Hash | string |  | 255 |  |  |
| AttributeBasedAdjRuleId | Attribute Based Adjustment Rule ID | reference |  | 18 |  |  |
| AttributeCount | Attributes | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| Id | Attribute Based Adjustment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PriceAdjustmentScheduleId | Price Adjustment Schedule ID | reference |  | 18 |  |  |
| PricingTerm | Pricing Term | int | 9 |  |  |  |
| PricingTermUnit | Pricing Term Unit | picklist |  | 255 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| ProductSellingModelId | Product Selling Model ID | reference |  | 18 |  |  |
| ScheduleType | Schedule Type | picklist |  | 255 |  |  |
| SellingModelType | Selling Model Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
