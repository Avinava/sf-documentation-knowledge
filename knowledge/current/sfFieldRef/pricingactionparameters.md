---
title: "PricingActionParameters"
domain: sfFieldRef
topic: pricingactionparameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:08.630Z
estimatedTokens: 366
namespace: NamespacePrefix
keywords: [PricingActionParameters, pricing, action, associated, context, definition, procedure, API, version, 60.0, later]
---

# PricingActionParameters

> Represents a pricing action associated to a context definition and a pricing
         procedure. This object is available in API version 60.0 and later.

**Namespace:** `NamespacePrefix`

# PricingActionParameters

Represents a pricing action associated to a context definition and a pricing procedure. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PricingActionParameters in the Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContextDefinition | Context Definition | string |  | 255 |  |  |
| ContextMapping | Context Mapping | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| Id | Pricing Action Parameter ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| ObjectName | Object Name | picklist |  | 255 |  |  |
| PricingProcedure | Pricing Procedure | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
