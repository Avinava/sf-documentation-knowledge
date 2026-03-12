---
title: "PricingProcedureOutputMap"
domain: sfFieldRef
topic: pricingprocedureoutputmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.697Z
estimatedTokens: 393
keywords: [PricingProcedureOutputMap, mapping, outputs, pricing, procedures, associated, lookup, tables, record, output, component, Recipe, API, version, 60.0]
---

# PricingProcedureOutputMap

> Represents the mapping of the outputs of the pricing procedures to the
         associated lookup tables. Each record specifies the output mapping of the associated lookup
         table based on the pricing component type specified in the Pricing Recipe Table Mapping
         object. This object is available in API version 60.0 and later.

# PricingProcedureOutputMap

Represents the mapping of the outputs of the pricing procedures to the associated lookup tables. Each record specifies the output mapping of the associated lookup table based on the pricing component type specified in the Pricing Recipe Table Mapping object. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PricingProcedureOutputMap in the Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Pricing Procedure Output Map ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPricingRecipeActive | Is Pricing Recipe Active | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LookupField | Lookup Field | reference |  | 18 |  |  |
| OutputFieldNameId | Output Field Name ID | reference |  | 18 |  |  |
| OutputFieldNameString | Output Field Name String | string |  | 40 |  |  |
| OutputType | Output Type | picklist |  | 255 |  |  |
| PricingComponentType | Pricing Component Type | picklist |  | 255 |  |  |
| PricingRecipeTableMappingId | Pricing Recipe Table Mapping ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
