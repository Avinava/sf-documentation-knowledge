---
title: "FuelTypeSustnUom"
domain: sfFieldRef
topic: fueltypesustnuom
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.726Z
estimatedTokens: 309
namespace: NamespacePrefix
keywords: [FuelTypeSustnUom, mapping, additional, fuel, their, corresponding, unit, measure, defined, customer]
---

# FuelTypeSustnUom

> Represents a mapping between the additional fuel types and their
         corresponding unit of measure values defined by a customer.

**Namespace:** `NamespacePrefix`

# FuelTypeSustnUom

Represents a mapping between the additional fuel types and their corresponding unit of measure values defined by a customer.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FuelTypeSustnUom in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| FuelType | Fuel Type ID | picklist |  | 255 |  |  |
| Id | Fuel Type Sustainability Unit of Measure ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitOfMeasure | Sustainability Unit of Measure ID | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
