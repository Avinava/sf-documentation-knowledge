---
title: "FormulaFunction"
domain: object-reference
topic: formulafunction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.770Z
estimatedTokens: 606
keywords: [FormulaFunction, function, building, formula, including, examples, uses, API, version, 47.0, later, Calls, Usage]
---

# FormulaFunction

> Represents a function used when building a formula, including examples and
			uses. This object is available in API version 47.0 and later.

# FormulaFunction

Represents a function used when building a formula, including examples and uses. This object is available in API version 47.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| CategoryId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the FormulaFunctionCategory.This is a relationship field.Relationship NameCategoryRelationship TypeLookupRefers ToFormulaFunctionCategory |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescription of the formula function. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| ExampleString | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescribes the function and what arguments you can use with it. |
| IsAllowedInEntityContext | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether you can use the formula function on an Entity (true) or not (false). For example, you cannot use the PRIORVALUE function in a custom Account formula field. The default value is false. This field is removed in API version 48.0 and later. Use the FormulaFunctionAllowedType object instead. |
| IsAllowedInFlowContext | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the formula function is allowed in a Flow (true) or not (false). The default value is false. This field is removed in API version 48.0 and later. Use the FormulaFunctionAllowedType object instead. |
| IsAllowedInVisualforceContext | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the formula function is allowed in Visualforce (true) or not (false). The default value is false. This field is removed in API version 48.0 and later. Use the FormulaFunctionAllowedType object instead. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe formula function label that appears in the user interface. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the formula function. |

## Usage

Query FormulaFunction to search for available formula functions, such as AND(), ISBLANK(), MAX(), MIN(), and others.

## Related Topics

- FormulaFunctionAllowedType (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_formulafunctionallowedtype.htm)
