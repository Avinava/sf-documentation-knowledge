---
title: "CalculationProcedureVariable"
domain: sfFieldRef
topic: calculationprocedurevariable
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.062Z
estimatedTokens: 444
namespace: Namespace
keywords: [CalculationProcedureVariable, variable, Expression, label, API, version, 53.0, later]
---

# CalculationProcedureVariable

> Defines a variable in an Expression Set. The label for this object is
         Expression Set Variable. This object is available in API version 53.0 and later.

**Namespace:** `Namespace`

# CalculationProcedureVariable

Defines a variable in an Expression Set. The label for this object is Expression Set Variable. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CalculationProcedureVariable](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_calculationprocedurevariable.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiName | API Name | string |  | 255 |  |  |
| CalculationMatrixName | Decision Matrix Name | string |  | 255 |  |  |
| CalculationProcedureVersionId | Calculation Procedure Version ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Data Type | picklist |  | 255 |  |  |
| DefaultValue | Default Value | string |  | 255 |  |  |
| DisplayName | Display Name | string |  | 255 |  |  |
| Id | Calculation Procedure Variable ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEditable | Editable | boolean |  |  |  |  |
| IsUserDefined | User Defined | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Namespace | Namespace | string |  | 255 |  |  |
| Precision | Precision | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UiDisplayOrder | UI Display Order | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
