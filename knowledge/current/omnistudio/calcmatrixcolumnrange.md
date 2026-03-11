---
title: "CalcMatrixColumnRange"
domain: omnistudio
topic: calcmatrixcolumnrange
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.734Z
keywords: [CalcMatrixColumnRange, Supported, Calls, Fields]
---

# CalcMatrixColumnRange

# CalcMatrixColumnRange

Represents information about a value in a decision matrix column when the column is of the type number range or text range. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CalculationMatrixColumnId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the decision matrix column associated with the column range value.This field is a relationship field.Relationship NameCalculationMatrixColumnRelationship TypeLookupRefers ToCalculationMatrixColumn |
| CalculationMatrixVersionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe decision matrix version ID asociated with the column range value.This field is a relationship field.Relationship NameCalculationMatrixVersionRelationship TypeLookupRefers ToCalculationMatrixVersion |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the decision matrix column. |
| Occurrence | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of times a range value is used in a decision matrix version. |
| RangeStartValue | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe value that defines the start of a range. |