---
title: "order"
domain: bi-dev-guide-saql
topic: order
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.813Z
estimatedTokens: 472
keywords: [order, Sorts, ascending, descending, Usage]
---

# order

> Sorts in ascending or descending order on one or more fields.

# order

Sorts in ascending or descending order on one or more fields.

## Syntax

```

```

asc or desc specifies whether the results are ordered in ascending (asc) or descending (desc) order. The default order is ascending.

## Usage

Use order to sort the results in a data stream for display. You can use order with ungrouped data. You can also use order to sort grouped data by an aggregated value.

Do not use order to specify the order that another SAQL statement or function will process records in. For example, do not use order before timeseries to change the order of processing. Instead, use timeseries parameters.

By default, nulls are sorted last when sorting in ascending order and first when sorting in descending order. You can change the ordering of nulls using nulls \[first | last\].

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

Applying labels to dimension values in the XMD changes the displayed values, but doesn’t change the sort order.

## Example

q = order q by 'count' desc;

## Example

To order a stream by multiple fields, use this syntax:

```

```

## Example

You can order a cogrouped stream before a foreach statement:

```

```

## Example

By default, nulls are sorted first when sorting in descending order. To change the null sort order to last, use this syntax:

```

```

## Example

You can’t reference a preprojection ID in a postprojection order operation. (Projection is another term for a foreach operation.) This code throws an error:

```

```

This code is valid:

```

```

#### See Also

-   [Statements](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statements.htm "A SAQL query loads input data, operates on it, and outputs the result data. A query is made up of statements. Each SAQL statement has an input stream, an operation, and an output stream.")

## Code Examples

```
result = order rows by field [ asc | desc ];
result = order rows by (field [ asc | desc ], field [ asc | desc ]);
result = order rows by field [ asc | desc ] nulls [first | last];
```

```
a = load "0Fbxx000000002qCAA/0Fcxx000000002WCAQ";
b = group a by (year, month);
c = foreach b generate year as year, month as month;
d = order c by (year desc, month desc);
```

```
a = load "0Fbxx000000002qCAA/0Fcxx000000002WCAQ"; 
b = load "0Fayy000000002qCAA/0Fbyy000000002WCAQ"; 
c = cogroup a by year, b by year; 
c = order c by a.airlineName; 
c = foreach c generate year as year;
```

```
q = order q by last_shipping_cost desc nulls last;
```

```
q = load "0Fbxx000000002qCAA/0Fcxx000000002WCAQ";
q = group q by 'FirstName';
q = foreach q generate sum('mea_mm10M') as 'sum_mm10M';
q = order q by 'FirstName' desc;
```

## Related Topics

- Statements (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statements.htm)
