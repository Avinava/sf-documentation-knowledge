---
title: "AnalyticsVizField"
domain: object-reference
topic: analyticsvizfield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.337Z
estimatedTokens: 674
keywords: [AnalyticsVizField, Tableau, viusalization, API, version, 65.0, later, Calls, Special, Access, Rules]
---

# AnalyticsVizField

> Represents a Tableau Next viusalization field. This object is available in API version 65.0 and later.

# AnalyticsVizField

Represents a Tableau Next viusalization field. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, you must have Tableau Next enabled in your org and a Tableau Next permission set.

## Fields

| Field | Details |
| --- | --- |
| AdHocCalc | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAn ad-hoc calculation for the visualization field. |
| DisplayCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe display category for the visualization field.Possible values are:Continuous—continuousDiscrete—discrete |
| FieldKey | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe key for for the visualization field. |
| Function | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe function for the visualization field.Possible values are:AvgCountCountDDatePartDayDatePartMonthDatePartQuarterDatePartWeekDatePartWeekDayDatePartYearDateTruncDayDateTruncMonthDateTruncQuarterDateTruncWeekDateTruncYearFiscalDatePartMonthFiscalDatePartQuarterFiscalDatePartWeekFiscalDatePartYearFiscalDateTruncMonthFiscalDateTruncQuarterFiscalDateTruncWeekFiscalDateTruncYearMaxMdyMedianMinMyStdevStdevpSumUserAggVarVarp |
| Label | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe label for the visualization field. |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe role for the visualization field.Possible values are:DimensionMeasure |
| SemanticFieldApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API for the field in the semantic model. |
| SemanticObjectApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name for object the field belongs to in the semantic model. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type for the visualization field.Possible values are:FieldMeasureNamesMeasureValues |
| UniqueIndex | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe unique index value for the visualization field.This field is a calculated field. |
| VisualizationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the visualization the field belongs to.This field is a relationship field.Relationship NameVisualizationRelationship TypeMaster-detailRefers ToAnalyticsVisualization (the master object) |
