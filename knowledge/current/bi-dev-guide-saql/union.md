---
title: "union"
domain: bi-dev-guide-saql
topic: union
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:06.836Z
estimatedTokens: 780
keywords: [union, Combines, multiple, result, structure, different, dataset, Considerations]
---

# union

> Combines multiple result sets into one result set. The result sets must have the same
  field names and structure. You can use a different dataset to create each result set, or you can
  use the same dataset.

# union

Combines multiple result sets into one result set. The result sets must have the same field names and structure. You can use a different dataset to create each result set, or you can use the same dataset.

## Syntax

```

```

## Example

```

```

## Example

You want to see how each rep compares to the average for deals won. You can make this comparison by appending these two result sets together:Then use union to append the two result sets.

-   Total amount of opportunities won for each rep
-   Average amount of opportunities won for all reps

First, show the total amount of won opportunities for each rep.

```

```

The resulting graph shows the sum of amount for each rep.

![Diagram showing the sum of amounts for each rep.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_union_ex_1.png&folder=bi_dev_guide_saql)

Next, calculate the average of the sum of the amounts for each rep using the average function.

```

```

Because the two data streams have the same field names and structure, you can use union to combine them.

```

```

The resulting graph contains the sum of amounts by each rep together with the average amount per rep.

![Diagram showing the sum of amounts for each rep, plus the average amount.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_union_ex_2.png&folder=bi_dev_guide_saql)

Combine the SAQL fragments to get the complete SAQL statement.

```

```

## Considerations

Using a union statement and a join statement in the same query has strict enforcements. When a semi or anti join statement is present, the union statement returns an error if there are:

-   mismatched number of columns
-   mismatched data types

The errors appear as "Different number of fields found across union streams" or "Different types found for field 1: 'fieldName' in different union inputs."

There's also strict checking on the name of the columns. Using this SAQL example with a semi join statement and a union statement:

```

```

When the join is present, strict name checking only allows for one ‘Amount’ column name, which comes from the first stream, q1. The ‘Amount\_total’ summary column name from the second stream, q2, isn’t honored and only the normal 'Amount' column name is in the union results. If the join statement is removed, both the normal ‘Amount’ and the summary ‘Amount\_total’ column names are in the union results.

#### See Also

-   [cogroup](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_cogroup.htm "Use cogroup to combine data from two or more data streams into a single data stream. The data streams must have at least one common field.")

-   [join semi and anti](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_join_semi_anti.htm "Use the join statement with the join_type to create semi-join or anti-join results.")

-   [Append Datasets using union](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_union.htm "You can append data from two or more data streams into a single data stream using union. The data streams must have the same field names and structure.")

## Code Examples

```
result = union resultSetA, resultSetB [, resultSetC ...];
```

```
q = union q1, q2, q3;
```

```
opt = load "DTC_Opportunity_SAMPLE";
opt = filter opt by 'Won' == "true";

-- group by owner
rep = group opt by 'Account_Owner';

-- project the sum of amount for each rep
rep = foreach rep generate 'Account_Owner' as 'Account_Owner', sum('Amount') as 'sum_Amount';

rep = order rep by 'sum_Amount' desc;
```

```
-- grouping rep by all returns all the data in a single row.
avg_rep = group rep by all;

-- Calculate the average of the Sum of Amount column. 
-- Use the text ‘Average Deal Size’ in the ‘Account Owner’ column
avg_rep = foreach avg_rep generate "Average deal size" as 'Account_Owner', avg('sum_Amount') as 'sum_Amount';
```

```
q = union rep, avg_rep;
```

## Related Topics

- cogroup (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_cogroup.htm)
- join semi and anti (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_join_semi_anti.htm)
- Append Datasets using union (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_union.htm)
