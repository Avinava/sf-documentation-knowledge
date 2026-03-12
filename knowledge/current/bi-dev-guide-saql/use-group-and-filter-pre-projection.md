---
title: "Use Group and Filter Pre-projection"
domain: bi-dev-guide-saql
topic: use-group-and-filter-pre-projection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.696Z
estimatedTokens: 501
keywords: [Group, Filter, Pre-projection, Improve, query, performance, moving, operations, simple, foreach, statement, projected, as-is, doesn't, additional]
---

# Use Group and Filter Pre-projection

> Improve query performance by moving group and filter operations on simple fields
      before the foreach statement. A simple field is projected
      as-is and doesn't have additional expressions.

# Use Group and Filter Pre-projection

Improve query performance by moving group and filter operations on simple fields before the foreach statement. A simple field is projected as-is and doesn't have additional expressions.

Projection refers to the subset of columns that your query returns. In SAQL, projection occurs in the foreach statement, where the query performs an operation on each row in the dataset.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

SAQL supports only pre-projection filters that follow this format: fieldName operatorName constant. For example, you can include q = filter q by Category;, but not q = filter q by Discount > 1;. The same applies to grouping. For example, you can include q = group q by Category;, but not q = group q by Discount > 1;.

## Example: Filter

In this query, the filter statement occurs post-projection.

```

```

Here, we move the filter to pre-projection. Because the Category field occurs before the foreach statement, it doesn't have an alias.

```

```

## Example: Group

In this example, the query first creates two new fields: Detailed\_Category, a combination of the Category and Sub\_Category fields, and Adjusted\_Discount. After grouping the results by Detailed\_Category, the second foreach statement takes the average of Adjusted\_Discount for each Detailed\_Category.

```

```

Instead of using two foreach statements, group by Sub\_Category pre-projection, and add its alias in the foreach statement.

```

```

#### See Also

-   [group-by](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby.htm "Organizes the rows returned from a query into groups. Within each group, you can apply an aggregate function, such as count() or sum() to get the number of items or sum, respectively.")

-   [filter](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_filter.htm "Selects rows from a dataset based on a filter predicate.")

## Code Examples

```
q = load "Superstore";
q = foreach q generate 'Category' as 'Store_Category', 'Sub_Category' as 'Store_Sub_Category';
q = filter q by 'Store_Category'=="Furniture";
```

```
q = load "Superstore";
q = filter q by 'Category'=="Furniture";
q = foreach q generate 'Category' as 'Store_Category', 'Sub_Category' as 'Store_Sub_Category';
```

```
q = load "Superstore";
q = foreach q generate 'Category'+ "-" + 'Sub_Category' as 'Detailed_Category', 2*'Discount' as 'Adjusted_Discount';
q = group q by 'Detailed_Category';
q = foreach q generate 'Detailed_Category', avg('Adjusted_Discount') as  'Avg_Adjusted_Discount';
```

```
q = load "Superstore";
q = group q by ('Category', 'Sub_Category');
q = foreach q generate 'Category'+ "-" + 'Sub_Category' as 'Detailed_Category', 2*avg('Discount') as  'Avg_Adjusted_Discount';
```

## Related Topics

- group-by (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby.htm)
- filter (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_filter.htm)
