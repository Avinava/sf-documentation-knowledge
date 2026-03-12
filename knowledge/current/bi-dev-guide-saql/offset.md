---
title: "offset"
domain: bi-dev-guide-saql
topic: offset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.809Z
estimatedTokens: 249
keywords: [offset, results, query, Usage, Rows, 51–101]
---

# offset

> Use offset to page through the results of your
  query.

# offset

Use offset to page through the results of your query.

## Syntax

```

```

## Usage

Skips over the specified number of rows when returning the results of a query. You typically use offset to paginate the query results.

When using offset in your SAQL statements, be aware of these rules:

-   The order of filter and order can be swapped because it doesn't change the results
-   offset must be after order
-   offset must be before limit
-   There can be no more than one offset statement after a foreach statement

## Example - Return Rows 51–101

This example loads the opportunity dataset, sorts the rows in alphabetical order by account owner, and returns rows 51–101:

```

```

#### See Also

-   [Statements](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statements.htm "A SAQL query loads input data, operates on it, and outputs the result data. A query is made up of statements. Each SAQL statement has an input stream, an operation, and an output stream.")

## Code Examples

```
result = offset rows number;
```

```
q = load "DTC_Opportunity";
q = order q by 'Account_Owner';
q = foreach q generate 'Account_Owner' as 'Account_Owner', 'Account_Type' as 'Account_Type', 'Amount' as 'Amount';
q = offset q 50;
q = limit q 50;
```

## Related Topics

- Statements (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statements.htm)
