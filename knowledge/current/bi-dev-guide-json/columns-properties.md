---
title: "columns Properties"
domain: bi-dev-guide-json
topic: columns-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.264Z
estimatedTokens: 74
keywords: [columns, add, column, step, query, source, Compact, form, 2.0, Aggregate, measure, defined, Non-aggregate, Formula]
---

# columns Properties

> Use the columns property to add a column to a
        step query source in Compact form 2.0.

# columns Properties

Use the columns property to add a column to a step query source in Compact form 2.0.

## Aggregate measure column defined in Compact form 2.0

```

```

## Non-aggregate columns defined in Compact form 2.0

```

```

## Formula column defined in Compact form 2.0

```

```

## Code Examples

```
"columns": [
    {
        "field": [
            "sum",
            "Amount"
        ]
    }
]
```

```
"columns": [
    {
        "field": "Customer_Name",
        "name": "Customer_Name"
    },
    {
        "field": "Product_Name",
        "name": "Product_Name"
    },
    {
        "field": "Profit",
        "name": "Profit"
    }
]
```

```
"columns": [
    {
        "formula": "A*2",
        "name": "B"
    }
]
```
