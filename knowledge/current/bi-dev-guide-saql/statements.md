---
title: "Statements"
domain: bi-dev-guide-saql
topic: statements
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.839Z
estimatedTokens: 408
keywords: [Statements, SAQL, query, loads, input, data, operates, outputs, result, made, statement, stream, operation, output]
---

# Statements

> A SAQL query loads input data,
    operates on it, and outputs the result data. A query is made up of statements. Each SAQL
    statement has an input stream, an operation, and an output stream.

# Statements

A SAQL query loads input data, operates on it, and outputs the result data. A query is made up of statements. Each SAQL statement has an input stream, an operation, and an output stream.

A statement is made up of keywords (such as filter, group, and order), identifiers, literals, and special characters. Statements can span multiple lines and must end with a semicolon.

Assign each query line to an identifier called a stream. The only exception is the last line in a query, which doesn't have to be assigned explicitly.

The output stream is on the left side of the \= operator and the input stream is on the right side of the \= operator.

## Example

Each line in this SAQL query is a SAQL statement.

```

```

#### See Also

-   [filter](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_filter.htm "Selects rows from a dataset based on a filter predicate.")

-   [foreach](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_foreach.htm "Applies a set of expressions to every row in a dataset. This action is often referred to as projection.")

-   [limit](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_limit.htm "Limits the number of results that are returned. If you don’t set a limit, queries return a maximum of 10,000 rows.")

-   [offset](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_offset.htm "Use offset to page through the results of your query.")

-   [order](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_order.htm "Sorts in ascending or descending order on one or more fields.")

## Code Examples

```
q = load "Dataset1";
q = group q by all;
q = foreach q generate sum('Amount') as 'sum_Amount';
```

## Related Topics

- filter (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_filter.htm)
- foreach (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_foreach.htm)
- limit (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_limit.htm)
- offset (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_offset.htm)
- order (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_order.htm)
