---
title: "Create a Derived Dimension"
domain: bi-dev-guide-saql
topic: create-a-derived-dimension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.270Z
estimatedTokens: 204
keywords: [Derived, Dimension, Perform, manipulations, dimensions, new, City, State]
---

# Create a Derived Dimension

> Perform string manipulations on existing dimensions to create a new, or derived,
            dimension.

# Create a Derived Dimension

Perform string manipulations on existing dimensions to create a new, or derived, dimension.

CRM Analytics creates derived dimensions at run time.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

You can also create a derived dimension in a dataflow rather than at runtime.

## Example - Create a Field with City and State

Suppose that you have an Opportunities dataset with a City and a State field. You want to create a single field containing both city and state. Use SAQL to create a derived dimension.

```

```

The resulting table contains city and state in the same field.

![Derived dimension shows time to win](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_derived_dimension.png&folder=bi_dev_guide_saql)

## Code Examples

```
q = load "Ops";
q = foreach q generate 'Account' as 'Account', 'Amount' as 'Amount', 'City' + "-" + 'State' as 'City - State';
```
