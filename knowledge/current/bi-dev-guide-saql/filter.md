---
title: "filter"
domain: bi-dev-guide-saql
topic: filter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.764Z
estimatedTokens: 690
keywords: [filter, Selects, rows, dataset, predicate, Usage]
---

# filter

> Selects rows from a dataset based
  on a filter predicate.

# filter

Selects rows from a dataset based on a filter predicate.

## Syntax

```

```

## Usage

A predicate is a Boolean expression that uses comparison or logical operators. The predicate is evaluated for every row. If the predicate is true, the row is included in the result. Comparisons on dimensions are lexicographic, and comparisons on measures are numerical.

When a filter is applied to grouped data, the filter is applied to the rows in the group. If all member rows are filtered out, groups are eliminated. You can run a filter statement before or after group to filter out members of the groups.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

With results binding, an error may occur if the results from a previous query exceed the values supported by SAQL. For example, if something like filter q by dim1 in {{results(Query\_1)}}; produces a filter tree with a depth greater than 10,000 values, SAQL will fail with an error.

## Example

The following example returns only rows where the origin is ORD, LAX, or LGA:

```

```

## Example

The following example returns only rows where the destination is LAX or the number of miles is greater than 1,500:

```

```

## Example

When in operates on an empty array in a filter operation, everything is filtered and the results are empty. The second statement filters everything and returns empty results:

```

```

#### See Also

-   [Comparison Operators](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_comparison.htm "Use comparison operators to compare values of the same type. For example, you can compare strings with strings and numbers with numbers.")

-   [Logical Operators](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_logical.htm "Use logical operators to perform AND, OR, and NOT operations.")

-   [Statements](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statements.htm "A SAQL query loads input data, operates on it, and outputs the result data. A query is made up of statements. Each SAQL statement has an input stream, an operation, and an output stream.")

-   [Null Operators](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_null.htm "Use is null and is not null to check whether a value is or is not null. is null returns True when a value is null. is not null returns True when a value is not null.")

-   [Use Group and Filter Pre-projection](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_group_filter.htm "Improve query performance by moving group and filter operations on simple fields before the foreach statement. A simple field is projected as-is and doesn't have additional expressions.")

## Code Examples

```
result = filter rows by predicate;
```

```
a1 = filter a by origin in ["ORD", "LAX", "LGA"];
```

```
y = filter x by dest == "LAX" || miles > 1500;
```

```
a = load "0Fbxx000000002qCAA/0Fcxx000000002WCAQ";
a = filter a by Year in [];
c = group a by ('Year', 'Name');
d = foreach c generate 'Name' as 'group::AName', 'Year' as 'group::Year', sum(accounts::Revenue) as 'sRev';
```

## Related Topics

- Comparison Operators (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_comparison.htm)
- Logical Operators (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_logical.htm)
- Statements (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statements.htm)
- Null Operators (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_null.htm)
- Use Group and Filter Pre-projection (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_group_filter.htm)
