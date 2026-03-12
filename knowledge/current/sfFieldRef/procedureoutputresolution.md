---
title: "ProcedureOutputResolution"
domain: sfFieldRef
topic: procedureoutputresolution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.899Z
estimatedTokens: 348
namespace: NamespacePrefix
keywords: [ProcedureOutputResolution, pricing, resolution, element, determined, strategy, formula, API, version, 63.0, later]
---

# ProcedureOutputResolution

> Represents the pricing resolution for an pricing element determined using
         strategy name and formula. This object is available in API version 63.0 and later.

**Namespace:** `NamespacePrefix`

# ProcedureOutputResolution

Represents the pricing resolution for an pricing element determined using strategy name and formula. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ProcedureOutputResolution in the Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BusinessVertical | Business Vertical | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Formula | Formula | string |  | 255 |  |  |
| Id | Procedure Output Resolution ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsInternal | Internal | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| PricingElement | Pricing Element | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
