---
title: "SustnUomConversion"
domain: sfFieldRef
topic: sustnuomconversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.925Z
estimatedTokens: 353
namespace: NamespacePrefix
keywords: [SustnUomConversion, unit, measure, conversion, additional, fuel, defined, customer]
---

# SustnUomConversion

> Represents information about the unit of measure conversion for the
         additional fuel types defined by a customer.

**Namespace:** `NamespacePrefix`

# SustnUomConversion

Represents information about the unit of measure conversion for the additional fuel types defined by a customer.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SustnUomConversion in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ConversionFactor | Conversion Factor | double |  |  | 18 | 7 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| FuelType | Fuel Type ID | picklist |  | 255 |  |  |
| Id | Sustainability Unit of Measure Conversion ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SourceUom | Sustainability Unit of Measure ID | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetUom | Sustainability Unit of Measure ID | picklist |  | 255 |  |  |
| UomsKey | Uoms Key | string |  | 256 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
