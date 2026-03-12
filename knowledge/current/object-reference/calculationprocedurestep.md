---
title: "CalculationProcedureStep"
domain: object-reference
topic: calculationprocedurestep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.908Z
estimatedTokens: 1478
keywords: [CalculationProcedureStep, step, Expression, label, API, version, 53.0, later, Calls, Special, Access, Rules]
---

# CalculationProcedureStep

> Defines a step in an Expression Set. The label for this object is Expression
         Set Step. This object is available in API version 53.0 and later.

# CalculationProcedureStep

Defines a step in an Expression Set. The label for this object is Expression Set Step. This object is available in API version 53.0 and later.

## Supported Calls

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object has been deprecated as of API version 55.0. In API version 55.0 and later, use the new Expression Set objects in Business Rules Engine instead.

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Access to Expression Sets requires OmniStudio licenses.

## Fields

| Field | Details |
| --- | --- |
| CalculationMatrixId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Decision Matrix this step calls. Applicable only if the StepType is MatrixLookupor GroupMatrixLookup.This is a relationship field.Relationship NameCalculationMatrixRelationship TypeLookupRefers ToCalculationMatrix |
| CalculationMatrixType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of the Decision Matrix this step calls. Applicable only if this step calls a Decision Matrix. If the StepType is MatrixLookup, the value of this field is Standard. If the StepType is GroupMatrixLookup, the value of this field is Grouped. |
| CalculationProcedure | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Expression Set to which this step belongs. |
| CalculationProcedureVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Expression Set Version to which this step belongs.This is a relationship field.Relationship NameCalculationProcedureVersionRelationship TypeLookupRefers ToCalculationProcedureVersion |
| ConditionsConvertedText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe condition expression converted to postfix notation. Applicable only if the StepType is Condition. |
| ConditionsExpressionText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe condition expression as the user entered it. Applicable only if the StepType is Condition. |
| ConditionsUiFormattedText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe condition expression converted to JSON format for UI display. Applicable only if the StepType is Condition. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA text description of the Expression Set Step. |
| FormulaConvertedText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe formula expression converted to postfix notation. Applicable only if the StepType is Calculation. |
| FormulaExpressionText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe formula expression as the user entered it. Applicable only if the StepType is Calculation. |
| FormulaUiFormattedText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe formula expression converted to JSON format for UI display. Applicable only if the StepType is Calculation. |
| InputVariablesFormatText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA list of the input matrix columns or procedure variables applicable to the step. |
| IsConditionalStep | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies that this step is conditional.The default value is false. |
| IsResultIncluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies that the result of this step is included in the Expression Set output.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe step name. |
| OutputVariablesFormatText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA list of the output matrix columns or procedure variables applicable to the step. Applicable only if the StepType is MatrixLookup, GroupMatrixLookup, or ReferenceProcedure. |
| OutputVariablesMappingText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionMaps Decision Matrix output variables to Expression Set variables. Applicable only if the StepType is MatrixLookupor GroupMatrixLookup. |
| ReferenceProcedureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the child Expression Set this step calls. Applicable only if the StepType is ReferenceProcedure.This is a relationship field.Relationship NameReferenceProcedureRelationship TypeLookupRefers ToCalculationProcedure |
| ReturnMessageValueSet | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA set of messages to return based on the result of a step with a StepType of Condition. |
| Stage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe stage of Expression Set invocation. The Aggregation stage applies only to steps with a StepType of Aggregation.Possible values are:AggregationCalculation |
| StageStepSequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSequence order of the step within the Expression Set. Used only for Expression Sets migrated from a Salesforce Industries package. New Expression Sets use Expression Set Step Relationship objects to order their steps. |
| StepType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of action this step performs.Possible values are:Aggregation—Returns an average, maximum, minimum, or sum of a list of values.Calculation—Performs a mathematical operation, which can include variables and constants.Condition—Defines a condition that determines whether other steps are invoked.GroupMatrixLookup—Calls a Grouped Decision Matrix.MatrixLookup—Calls a Standard Decision Matrix.ReferenceProcedure—Calls a child Expression Set. |
