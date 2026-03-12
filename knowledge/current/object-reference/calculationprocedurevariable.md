---
title: "CalculationProcedureVariable"
domain: object-reference
topic: calculationprocedurevariable
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.917Z
estimatedTokens: 684
keywords: [CalculationProcedureVariable, variable, Expression, label, API, version, 53.0, later, Calls, Special, Access, Rules]
---

# CalculationProcedureVariable

> Defines a variable in an Expression Set. The label for this object is
         Expression Set Variable. This object is available in API version 53.0 and later.

# CalculationProcedureVariable

Defines a variable in an Expression Set. The label for this object is Expression Set Variable. This object is available in API version 53.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object has been deprecated as of API version 55.0. In API version 55.0 and later, use the new Expression Set objects in Business Rules Engine instead.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Access to Expression Sets requires OmniStudio licenses.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of this variable. |
| CalculationMatrixName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the Decision Matrix to which this variable belongs. Applicable only if this variable references a Decision Matrix column. |
| CalculationProcedureVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Expression Set Version to which this variable belongs.This is a relationship field.Relationship NameCalculationProcedureVersionRelationship TypeLookupRefers ToCalculationProcedureVersion |
| DataType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe data type of this variable.Possible values are:BooleanCurrencyDateNumberPercentText |
| DefaultValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default value of this variable. |
| DisplayName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user-readable name of this variable. |
| IsEditable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, specifies that a variable is NOT auto-imported from a step that calls a Decision Matrix or a child Expression Set.The default value is false. |
| IsUserDefined | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether a variable is defined by the user.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this variable. |
| Precision | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of decimal places. Applicable if the DataType is Currency, Number, or Percent. |
| UiDisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe display order of the variable in the UI. |
