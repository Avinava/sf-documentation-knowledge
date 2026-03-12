---
title: "FormulaFunctionCategory"
domain: object-reference
topic: formulafunctioncategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.778Z
estimatedTokens: 231
keywords: [FormulaFunctionCategory, category, formula, belongs, building, API, version, 47.0, later, Calls, Usage]
---

# FormulaFunctionCategory

> Represents the category to which a formula belongs when building a formula.
       This object is available in API version 47.0 and later.

# FormulaFunctionCategory

Represents the category to which a formula belongs when building a formula. This object is available in API version 47.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLabel of the FormulaFunctionCategory that appears in the user interface. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the FormulaFunctionCategory. |

## Usage

Query FormulaFunctionCategory to search for categories of available formula functions, such as Math, Logical, Date and Time, and others.
