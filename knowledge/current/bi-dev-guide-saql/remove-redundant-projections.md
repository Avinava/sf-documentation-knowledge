---
title: "Remove Redundant Projections"
domain: bi-dev-guide-saql
topic: remove-redundant-projections
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.713Z
estimatedTokens: 204
keywords: [Remove, Redundant, Projections, improve, memory, usage, performance, costs, unnecessary, queries, load, data, perform, operation, include]
---

# Remove Redundant Projections

> To improve memory usage and performance costs, remove unnecessary projections from your
  queries and load only the data required. If you have to perform an operation, include
  pre-projection statements as needed.

# Remove Redundant Projections

To improve memory usage and performance costs, remove unnecessary projections from your queries and load only the data required. If you have to perform an operation, include pre-projection statements as needed.

Here's an example of a query with an unnecessary projection.

```

```

The first foreach statement projects the Category field, which is already included in the dataset. Since we're not performing any operation on the field, we can remove it.

```

```

Here's an example with an implicit cogroup.

```

```

In this example, the foreach statements that follow loading the “Customer\_Data” and the “Superstore” datasets are unnecessary, since they’re projecting the Customer\_Name fields without any additional action. You can group the fields pre-projection.

```

```

## Code Examples

```
q = load "Superstore";
q = foreach q generate 'Category';
q = group q by 'Category';
q = foreach q generate 'Category', count() as 'count';
```

```
q = load "Superstore";
q = group q by 'Category';
q = foreach q generate 'Category', count() as 'count';
```

```
a = load "Customer_Data";
a = foreach a generate 'Customer_Name';
b = load "Superstore";
b = foreach b generate 'Customer_Name';
a = group a by 'Customer_Name' full, b by 'Customer_Name';
a = foreach a generate coalesce(a.'Customer_Name', b.'Customer_Name') as 'Customer_Name', count('a') as 'Superstore', count('b') as 'Customer_data';
```

```
a = load “Customer_Data”;
b = load “Superstore”;
a = group a by ‘Customer_Name’ full, b by 'Customer_Name';
a = foreach a generate coalesce(a.'Customer_Name', b.'Customer_Name') as 'Customer_Name', count('a') as 'Superstore', count('b') as 'Customer_data';
```
