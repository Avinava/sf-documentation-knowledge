---
title: "MLFilter"
domain: tooling-api
topic: mlfilter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.098Z
estimatedTokens: 870
keywords: [MLFilter, Represents, data, filter, based, comparison, machine, learning, application., there’s, left-hand, element, operator, right-hand, element., API, version, 50.0, later., Supported]
---

# MLFilter

> Represents a data filter based on a data comparison in a machine
            learning (ML) application. For each comparison, there’s a left-hand element, an
            operator, and a right-hand element. Available in API version 50.0 and
        later.

# MLFilter

Represents a data filter based on a data comparison in a machine learning (ML) application. For each comparison, there’s a left-hand element, an operator, and a right-hand element. Available in API version 50.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| FilterName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the filter. |
| LhFilterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the left-hand filter condition.This is a relationship field.Relationship NameLhFilterRelationship TypeLookupRefers ToMLFilter |
| LhPredictionField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLeft-hand prediction field. |
| LhType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the value type if a left-hand value is specified. Valid values are:BooleanComparisonCurrencyDateDateTime—DatetimeNumberStringSupplierVarchar |
| LhUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the unit if a left-hand filter is specified. Valid values are:DaysHoursMillisecondsMinutesMonthsSecondsWeeksYears |
| LhValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe left-hand value. |
| Operation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies how to filter the data. Valid values are:AddAndBetweenConcatContainsDivideDoesNotContainEndsWithEqualsGreaterThanGreaterThanOrEqualInIsNotNullIsNullLessThanLessThanOrEqualMultiplyNotNotEqualsOrStartsWithSubtract |
| ParentDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the MLRecommendationDefinition, MLPredictionDefinition, or MLDataDefinition that this MLFilter belongs to.This is a polymorphic relationship field.Relationship NameParentDefinitionRelationship TypeLookupRefers ToMLDataDefinition, MLPredictionDefinition, MLRecommendationDefinition |
| RhFilterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the right-hand filter condition.This is a relationship field.Relationship NameRhFilterRelationship TypeLookupRefers ToMLFilter |
| RhPredictionField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRight-hand prediction field. |
| RhType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the value type if a right-hand value is specified. Valid values are:BooleanComparisonCurrencyDateDateTime—DatetimeNumberStringSupplierVarchar |
| RhUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the unit if a right-hand filter is specified. Valid values are:DaysHoursMillisecondsMinutesMonthsSecondsWeeksYears |
| RhValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe right-hand value. |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the order of operations for evaluating the expressions. For example, if you have two conditions, this field specifies which condition is evaluated first. |
