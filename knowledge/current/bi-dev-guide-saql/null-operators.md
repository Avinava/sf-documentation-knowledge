---
title: "Null Operators"
domain: bi-dev-guide-saql
topic: null-operators
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.677Z
estimatedTokens: 489
keywords: [Operators, check, whether, Replace, case]
---

# Null Operators

> Use is null and is not
   null to check whether a value is or is not null. is
   null returns True when a value is null. is not null returns True when a
  value is not null.

# Null Operators

Use is null and is not null to check whether a value is or is not null. is null returns True when a value is null. is not null returns True when a value is not null.

This example returns rows that contain Sub\_Category fields that are not null and the counts of rows that contain each field.

```

```

| Sub-Category | Count of Rows |
| --- | --- |
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

## Replace Null Values with case

Use case to replace null values with a value of your choice. This example labels the null Sub-Category field "Empty."

```

```

| Sub-Category | Count of Rows |
| --- | --- |
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
| Empty | 4 |

#### See Also

-   [filter](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_filter.htm "Selects rows from a dataset based on a filter predicate.")

-   [group-by rollup](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby_rollup.htm "rollup is a subclause of group-by that creates and displays aggregations of grouped data. The output of rollup is based on column order in your query.")

-   [group-by](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby.htm "Organizes the rows returned from a query into groups. Within each group, you can apply an aggregate function, such as count() or sum() to get the number of items or sum, respectively.")

## Code Examples

```
q = load "Superstore";
q = filter q by 'Sub_Category' is not null;
q = group q by 'Sub_Category';
q = foreach q generate 'Sub_Category' as 'Sub_Category', count() as 'count';
q = limit q 2000;
```

```
q = load "Superstore";
q = group q by 'Sub_Category';
q = foreach q generate case when 'Sub_Category' is null then "Empty" else 'Sub_Category' end as 'Sub_Category', count() as 'count';
q = limit q 2000;
```

## Related Topics

- filter (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_filter.htm)
- group-by rollup (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby_rollup.htm)
- group-by (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby.htm)
