---
title: "FormulaFunctionAllowedType"
domain: tooling-api
topic: formulafunctionallowedtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.783Z
estimatedTokens: 250
keywords: [FormulaFunctionAllowedType, Represents, functions, supported, given, formula, context., API, version, 48.0, later., Supported, SOAP, Calls, REST, HTTP, Special, Access, Rules, Fields]
---

# FormulaFunctionAllowedType

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
