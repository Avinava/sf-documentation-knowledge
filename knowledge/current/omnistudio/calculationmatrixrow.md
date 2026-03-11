---
title: "CalculationMatrixRow"
domain: omnistudio
topic: calculationmatrixrow
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.749Z
keywords: [CalculationMatrixRow, Supported, Calls, Special, Access, Rules, Fields]
---

# CalculationMatrixRow

# CalculationMatrixRow

Defines a row in a Decision Matrix. The label for this object is Decision Matrix Row. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Access to Decision Matrices requires Omnistudio licenses.

## Fields

| Field | Details |
| --- | --- |
| CalculationMatrixVersionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the Decision Matrix Version to which this row belongs.This is a relationship field.Relationship NameCalculationMatrixVersionRelationship TypeLookupRefers ToCalculationMatrixVersion |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date on which this row version is active. Applicable if IsVersionEnabled is true. |
| InputData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe input columns and associated values for this row of the matrix. |
| IsVersionEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether the associated matrix version is active. Derived from the associated Decision Matrix Version (CalculationMatrixVersion object).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe row name. |
| OutputData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe output columns and associated values for this row of the matrix. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe first date on which this row version is active. Applicable if IsVersionEnabled is true. |