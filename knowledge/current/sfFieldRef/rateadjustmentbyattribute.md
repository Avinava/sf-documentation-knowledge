---
title: "RateAdjustmentByAttribute"
domain: sfFieldRef
topic: rateadjustmentbyattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.307Z
estimatedTokens: 589
keywords: [RateAdjustmentByAttribute, adjustments, determine, rate, resource, rate-impacting, attributes, linked, usage, product, record, Rates, influenced, conditions, Attribute]
---

# RateAdjustmentByAttribute

> Represents the adjustments that determine the rate of a resource based on its
         rate-impacting attributes. These attributes are linked to the usage product record. Rates
         are then influenced by conditions specified in the Attribute Based Adjustment Condition
         object. Finally, the charge rate is determined by using the Attribute Based Adjustment Rule
         object. This object is available in API version 62.0 and later.

# RateAdjustmentByAttribute

Represents the adjustments that determine the rate of a resource based on its rate-impacting attributes. These attributes are linked to the usage product record. Rates are then influenced by conditions specified in the Attribute Based Adjustment Condition object. Finally, the charge rate is determined by using the Attribute Based Adjustment Rule object. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see RateAdjustmentByAttribute in the Rate Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentType | Adjustment Type | picklist |  | 255 |  |  |
| AdjustmentValue | Adjustment Value | double |  |  | 18 | 6 |
| AttributeAdjConditionsHash | Attribute Adjustment Conditions Hash | string |  | 255 |  |  |
| AttributeBasedAdjRuleId | Attribute Based Adjustment Rule ID | reference |  | 18 |  |  |
| AttributeCount | Attribute Count | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| Id | Rate Adjustment By Attribute ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| ProductSellingModelId | Product Selling Model ID | reference |  | 18 |  |  |
| RateCardEntryId | Rate Card Entry ID | reference |  | 18 |  |  |
| RateCardEntryStatus | Rate Card Entry Status | picklist |  | 255 |  |  |
| RateCardId | Rate Card ID | reference |  | 18 |  |  |
| RateUnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |
| RateUnitOfMeasureName | Rate Unit Of Measure Name | string |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageResourceId | Usage Resource ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
