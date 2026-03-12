---
title: "SustainabilityUom"
domain: sfFieldRef
topic: sustainabilityuom
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.919Z
estimatedTokens: 351
namespace: NamespacePrefix
keywords: [SustainabilityUom, additional, unit, measure, defined, customer]
---

# SustainabilityUom

> Represents information about the additional unit of measure values defined by
         a customer.

**Namespace:** `NamespacePrefix`

# SustainabilityUom

Represents information about the additional unit of measure values defined by a customer.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SustainabilityUom in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| Id | Sustainability Unit of Measure ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsProductUom | Product Unit of Measure | boolean |  |  |  |  |
| IsStationaryAssetUom | Stationary Asset Unit of Measure | boolean |  |  |  |  |
| IsVehicleAssetUom | Vehicle Asset Unit of Measure | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Unit of Measure Name | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitType | Unit Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
