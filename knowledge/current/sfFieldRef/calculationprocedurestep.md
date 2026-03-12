---
title: "CalculationProcedureStep"
domain: sfFieldRef
topic: calculationprocedurestep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.042Z
estimatedTokens: 703
namespace: Namespace
keywords: [CalculationProcedureStep, step, Expression, label, API, version, 53.0, later]
---

# CalculationProcedureStep

> Defines a step in an Expression Set. The label for this object is Expression
         Set Step. This object is available in API version 53.0 and later.

**Namespace:** `Namespace`

# CalculationProcedureStep

Defines a step in an Expression Set. The label for this object is Expression Set Step. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CalculationProcedureStep](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_calculationprocedurestep.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CalculationMatrixId | Decision Matrix ID | reference |  | 18 |  |  |
| CalculationMatrixType | Decision Matrix Type | string |  | 255 |  |  |
| CalculationProcedure | Expression Set | string |  | 255 |  |  |
| CalculationProcedureVersionId | Calculation Procedure Version ID | reference |  | 18 |  |  |
| ConditionsConvertedText | Conditions Converted Text | textarea |  | 131072 |  |  |
| ConditionsExpressionText | Conditions Expression Text | textarea |  | 131072 |  |  |
| ConditionsUiFormattedText | Conditions UI Formatted Text | textarea |  | 131072 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DecisionTableId | Decision Table ID | reference |  | 18 |  |  |
| Description | Description | string |  | 255 |  |  |
| FormulaConvertedText | Formula Converted Text | textarea |  | 131072 |  |  |
| FormulaExpressionText | Formula Expression Text | textarea |  | 131072 |  |  |
| FormulaUiFormattedText | Formula UI Formatted Text | textarea |  | 131072 |  |  |
| Id | Calculation Procedure Step ID | id |  | 18 |  |  |
| InputVariablesFormatText | Input Variables Format Text | textarea |  | 131072 |  |  |
| IsConditionalStep | Conditional Step | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsResultIncluded | Result Included | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Namespace | Namespace | string |  | 255 |  |  |
| OutputVariablesFormatText | Output Variables Format Text | textarea |  | 131072 |  |  |
| OutputVariablesMappingText | Output Variables Mapping Text | textarea |  | 131072 |  |  |
| ReferenceProcedureId | Calculation Procedure ID | reference |  | 18 |  |  |
| ReturnMessageValueSet | Return Message Value Set | textarea |  | 131072 |  |  |
| Stage | Stage | picklist |  | 255 |  |  |
| StageStepSequence | Stage Step Sequence | int | 9 |  |  |  |
| StepType | Step Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
