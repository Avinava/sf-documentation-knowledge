---
title: "RateCardEntry"
domain: sfFieldRef
topic: ratecardentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.355Z
estimatedTokens: 545
keywords: [RateCardEntry, rule, determines, charge, rate, product's, resource, entry, linked, card, exclusively, activation, deactivation, controlled, assigning]
---

# RateCardEntry

> Represents a rule that determines the charge rate for using a
         product's resource. Each entry is linked to one rate card exclusively, and its activation
         or deactivation can be controlled by assigning effective dates. This object is
      available in API version 62.0 and later.

# RateCardEntry

Represents a rule that determines the charge rate for using a product's resource. Each entry is linked to one rate card exclusively, and its activation or deactivation can be controlled by assigning effective dates. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see RateCardEntry in the Rate Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefaultUnitOfMeasureClassId | Unit of Measure Class ID | reference |  | 18 |  |  |
| DefaultUnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| Id | Rate Card Entry ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| ProductSellingModelId | Product Selling Model ID | reference |  | 18 |  |  |
| Rate | Rate | double |  |  | 18 | 6 |
| RateCardId | Rate Card ID | reference |  | 18 |  |  |
| RateCardType | Rate Card Type | picklist |  | 255 |  |  |
| RateNegotiation | Rate Negotiation | picklist |  | 255 |  |  |
| RateUnitOfMeasureClassId | Unit of Measure Class ID | reference |  | 18 |  |  |
| RateUnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |
| RateUnitOfMeasureName | Rate Unit Of Measure Name | string |  | 40 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageProductId | Product ID | reference |  | 18 |  |  |
| UsageResourceId | Usage Resource ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
