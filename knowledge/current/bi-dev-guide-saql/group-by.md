---
title: "group-by"
domain: bi-dev-guide-saql
topic: group-by
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.775Z
estimatedTokens: 806
keywords: [group-by, Organizes, rows, query, groups, group, apply, aggregate, function, count, sum, number, items, respectively]
---

# group-by

> Organizes the rows returned from a query into groups. Within each group, you can apply
    an aggregate function, such as count() or sum() to get the number of items or sum,
    respectively.

# group-by

Organizes the rows returned from a query into groups. Within each group, you can apply an aggregate function, such as count() or sum() to get the number of items or sum, respectively.

## Syntax

group-by takes this syntax.

```

```

data\_stream

Data input to group.

fields

Fields by which data is grouped.

## Group-by One Field

In this example, the query counts the number of rows for each Category field and groups the counts by category.

```

```

| Category | Count of Rows |
| --- | --- |
| Furniture | 2,121 |
| Office Supplies | 6,026 |
| Technology | 1,847 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

cogroup and group-by are interchangeable. For clarity, we use group-by for statements that involve one data stream and cogroup for statements that involve two or more data streams.

## Group-by with Null Values

To return grouped null values in your queries, you must select the preference to include null values in Setup. Otherwise, queries ignore null values.

1.  In Setup, enter Analytics in the Quick Find box.
2.  Select **Settings** from the list of Analytics options.
3.  In **Settings**, click the checkbox for **Include null values in Analytics queries**.

![Null handling preference in Setup](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_null_handling.png&folder=bi_dev_guide_saql)

Here’s an example of a query that returns null values. It orders the results by the Sub\_Category field and specifies that the results display in ascending order, with nulls first.

```

```

| Sub-Category | Count of Rows |
| --- | --- |
| - | 4 |
| Accessories | 775 |
| Appliances | 466 |
| Art | 796 |
| Binders | 1,523 |
| Bookcases | 228 |
| Chairs | 617 |
| Copiers | 68 |
| Envelopes | 254 |
| Fasteners | 217 |
| Furnishings | 957 |
| Labels | 364 |
| Machines | 115 |
| Paper | 1,370 |
| Phones | 889 |
| Storage | 846 |
| Supplies | 190 |
| Tables | 319 |

## Group-by all

In this example, the query counts all of the rows and returns the number of different industries that you have opportunities with.

```

```

| # | Unique of Industry |
| --- | --- |
| 1 | 20 |

#### See Also

-   [Aggregate Functions](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_aggregate.htm "Aggregate functions perform computations across all values of a grouped field.")

-   [Null Operators](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_null.htm "Use is null and is not null to check whether a value is or is not null. is null returns True when a value is null. is not null returns True when a value is not null.")

-   [cogroup](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_cogroup.htm "Use cogroup to combine data from two or more data streams into a single data stream. The data streams must have at least one common field.")

-   [Use Group and Filter Pre-projection](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_group_filter.htm "Improve query performance by moving group and filter operations on simple fields before the foreach statement. A simple field is projected as-is and doesn't have additional expressions.")

## Code Examples

```
group data_stream by fields;
```

```
q = load "Superstore";
q = group q by 'Category';
q = foreach q generate 'Category' as 'Category', count() as 'count';
q = limit q 2000;
```

```
q = load "Superstore";
q = group q by 'Sub_Category';
q = foreach q generate 'Sub_Category' as 'Sub_Category', count() as 'count';
q = order q by 'Sub_Category' asc nulls first;
q = limit q 2000;
```

```
q = load "DTC_Opportunity_SAMPLE";
q = group q by all;
q = foreach q generate unique('Industry') as 'unique_Industry';
```

## Related Topics

- Aggregate Functions (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_aggregate.htm)
- Null Operators (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_null.htm)
- cogroup (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_cogroup.htm)
- Use Group and Filter Pre-projection (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_group_filter.htm)
