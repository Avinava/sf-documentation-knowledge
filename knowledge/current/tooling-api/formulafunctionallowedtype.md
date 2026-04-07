---
title: "FormulaFunctionAllowedType"
domain: tooling-api
topic: formulafunctionallowedtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:36:33.172Z
estimatedTokens: 250
keywords: [FormulaFunctionAllowedType, functions, formula, context, API, 48.0, SOAP, REST, HTTP]
---

> Represents the functions that are supported in the given
        formula context. Available in API version 48.0 and later.

# FormulaFunctionAllowedType

Represents the functions that are supported in the given formula context. Available in API version 48.0 and later.

## Supported SOAP Calls

describeSObjects(), query()

## Supported REST HTTP Methods

GET

## Special Access Rules

Only users with the ViewSetup and Configuration permission can access FormulaFunctionAllowedType.

## Fields

| Field | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| FunctionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the supported function. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe name of the formula type in which the function is supported.Possible values are:FLOWVALIDATIONVISUALFORCE |
