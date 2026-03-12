---
title: "limit"
domain: bi-dev-guide-saql
topic: limit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.802Z
estimatedTokens: 377
keywords: [limit, Limits, number, results, don’t, queries, maximum, rows, Usage]
---

# limit

> Limits the number of results that are returned. If you don’t set a limit, queries return
  a maximum of 10,000 rows.

# limit

Limits the number of results that are returned. If you don’t set a limit, queries return a maximum of 10,000 rows.

## Syntax

```

```

## Usage

Use this statement only on data that has been ordered with the order statement. The results of a limit operation aren’t automatically ordered, and their order can change each time that statement is called.

You can use the limit statement with ungrouped data.

You can use the limit statement to limit grouped data by an aggregated value. For example, to find the top 10 regions by revenue: group by region, call sum(revenue) to aggregate the data, order by sum(revenue) in descending order, and limit the number of results to the first 10.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

The limit statement isn’t a top() or sample() function.

## Example

This example limits the number of returned results to 10:

```

```

The expression can’t contain any columns from the input. For example, this query is not valid:

```

```

#### See Also

-   [Statements](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statements.htm "A SAQL query loads input data, operates on it, and outputs the result data. A query is made up of statements. Each SAQL statement has an input stream, an operation, and an output stream.")

-   [order](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_order.htm "Sorts in ascending or descending order on one or more fields.")

## Code Examples

```
result = limit rows number;
```

```
b = limit a 10;
```

```
b = limit OrderDate 10;
```

## Related Topics

- Statements (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statements.htm)
- order (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_order.htm)
