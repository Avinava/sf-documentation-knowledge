---
title: "CalculationMatrixColumn"
domain: omnistudio
topic: calculationmatrixcolumn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.652Z
estimatedTokens: 510
keywords: [CalculationMatrixColumn, Defines, column, Decision, Matrix., label, Matrix, Column., API, version, 53.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# CalculationMatrixColumn

> Defines a column in a Decision Matrix. The label for this object is Decision
         Matrix Column. This object is available in API version 53.0 and later.

# CalculationMatrixColumn

Defines a column in a Decision Matrix. The label for this object is Decision Matrix Column. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Access to Decision Matrices requires Omnistudio licenses.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the column. |
| CalculationMatrixId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Decision Matrix to which this column belongs.This is a relationship field.Relationship NameCalculationMatrixRelationship TypeLookupRefers ToCalculationMatrix |
| ColumnType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies whether the column matches matrix input or is returned as output.Possible values are:InputOutput |
| DataType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of data in the column.Possible values are:BooleanCurrencyNumberNumberRangePercentTextTextRange |
| DisplaySequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe position of this column in the column order. |
| IsWildcardColumn | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies that this column can contain a wildcard value such as ALL.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe column name. |
| RangeValues | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA list of values that define range boundaries. |
| WildcardColumnValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value that indicates a wildcard, for example ALL. Applicable if IsWildcardColumn is true. |
