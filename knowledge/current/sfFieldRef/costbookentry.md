---
title: "CostBookEntry"
domain: sfFieldRef
topic: costbookentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.619Z
estimatedTokens: 372
keywords: [CostBookEntry, total, cost, product, service, that’s, determined, various, factors, affect, product's, price, manufactured, weight, raw]
---

# CostBookEntry

> Represents the total cost of a product or service that’s determined
         based on various factors that affect a product's price. For example, when a product is
         manufactured, the weight of the raw material can be a cost factor based on the amount of
         material required and its shipping cost. This object is available in API version 61.0
      and later.

# CostBookEntry

Represents the total cost of a product or service that’s determined based on various factors that affect a product's price. For example, when a product is manufactured, the weight of the raw material can be a cost factor based on the amount of material required and its shipping cost. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CostBookEntry in the Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Cost | Cost | currency |  |  | 18 | 2 |
| CostBookId | CostBook ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| Id | CostBookEntry ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
