---
title: "FormulaFunctionAllowedType"
domain: object-reference
topic: formulafunctionallowedtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.774Z
estimatedTokens: 238
keywords: [FormulaFunctionAllowedType, functions, formula, context, API, version, 48.0, later, Calls]
---

# FormulaFunctionAllowedType

> Represents the functions that are supported in the given formula context.
    This object is available in API version 48.0 and later.

# FormulaFunctionAllowedType

Represents the functions that are supported in the given formula context. This object is available in API version 48.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| FunctionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the supported function.This is a relationship field.Relationship NameFunctionRelationship TypeLookupRefers ToFormulaFunction |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe name of the formula type in which the function is supported.Possible values are:FLOWVALIDATIONVISUALFORCE |
