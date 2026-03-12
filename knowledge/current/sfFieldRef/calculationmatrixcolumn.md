---
title: "CalculationMatrixColumn"
domain: sfFieldRef
topic: calculationmatrixcolumn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.939Z
estimatedTokens: 416
namespace: Namespace
keywords: [CalculationMatrixColumn, column, Decision, Matrix, label, API, version, 53.0, later]
---

# CalculationMatrixColumn

> Defines a column in a Decision Matrix. The label for this object is Decision
         Matrix Column. This object is available in API version 53.0 and later.

**Namespace:** `Namespace`

# CalculationMatrixColumn

Defines a column in a Decision Matrix. The label for this object is Decision Matrix Column. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CalculationMatrixColumn](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_calculationmatrixcolumn.htm "HTML (New Window)") in the Lookup Tables Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiName | API Name | string |  | 80 |  |  |
| CalculationMatrixId | Decision Matrix ID | reference |  | 18 |  |  |
| ColumnType | Column Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Data Type | picklist |  | 255 |  |  |
| DisplaySequence | Display Sequence | int | 9 |  |  |  |
| Id | Decision Matrix Column ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsWildcardColumn | Wildcard Column | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Namespace | Namespace | string |  | 255 |  |  |
| RangeValues | Range Values | textarea |  | 32768 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WildcardColumnValue | Wildcard Column Value | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
