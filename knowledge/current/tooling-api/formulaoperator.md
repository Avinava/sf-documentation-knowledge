---
title: "FormulaOperator"
domain: tooling-api
topic: formulaoperator
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.071Z
keywords: [FormulaOperator, Note, Supported, SOAP, Calls, REST, HTTP, Methods, Fields, Query, Examples]
---

# FormulaOperator

# FormulaOperator

Represents an operator used when building a formula, including examples and uses. This object is available in Tooling API version 39.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

In API version 45.0 and later, only users with the “ViewSetup and Configuration” permission can access FormulaOperator.

## Supported SOAP Calls

query()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe formula operator label that appears in the user interface. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the formula operator. |
| Value | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe value of the formula operator. |

## Query Examples

To get all formula operators available in FormulaOperator:

```

```

To get formula operators by ID:

```

```