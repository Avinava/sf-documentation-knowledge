---
title: "PricingRecipeTableMapping"
domain: sfFieldRef
topic: pricingrecipetablemapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.733Z
estimatedTokens: 312
keywords: [PricingRecipeTableMapping, mapping, pricing, components, lookup, chosen, recipe, API, version, 60.0, later]
---

# PricingRecipeTableMapping

> Represents the mapping of pricing components of a lookup table with the
         chosen pricing recipe. This object is available in API version 60.0 and later.

# PricingRecipeTableMapping

Represents the mapping of pricing components of a lookup table with the chosen pricing recipe. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PricingRecipeTableMapping in the Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FileBasedDecisionTableName | File Based Decision Table Name | string |  | 255 |  |  |
| Id | Pricing Recipe Table Mapping ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsInternal | Is Internal | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LookupTableId | Lookup Table ID | reference |  | 18 |  |  |
| PricingComponentType | Pricing Component Type | picklist |  | 255 |  |  |
| PricingRecipeId | Pricing Recipe ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
