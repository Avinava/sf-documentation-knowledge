---
title: "foreach"
domain: bi-dev-guide-saql
topic: foreach
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.768Z
estimatedTokens: 619
keywords: [foreach, expressions, every, row, dataset, action, often, referred, projection, Ungrouped, Data, Grouped, case, Expression, Projected]
---

# foreach

> Applies a set of expressions to every row in a dataset. This action is often referred to as
   projection.

# foreach

Applies a set of expressions to every row in a dataset. This action is often referred to as *projection*.

## Syntax

```

```

The output column names are specified with the as keyword. The output data is ungrouped.

## Using foreach with Ungrouped Data

When used with ungrouped data, the foreach statement maps the input rows to output rows. The number of rows remains the same.

## Example

a2 = foreach a1 generate carrier as carrier, miles as miles;

## Using foreach with Grouped Data

When used with grouped data, the foreach statement behaves differently than it does with ungrouped data.

Fields can be directly accessed only when the value is the same for all group members. For example, the fields that were used as the grouping keys have the same value for all group members. Otherwise, use aggregate functions to access the members of a group. The type of the column determines which aggregate functions you can use. For example, if the column type is numeric, you can use the sum() function.

## Example

z = foreach y generate day as day, unique(origin) as uorg, count() as n;

## Using foreach with a case Expression

To create logic in a foreach statement that chooses between conditional statements, use a case expression.

## Projected Field Names

Each field name in a projection must be unique and not have the name 'none'. Invalid field names throw an error.

For example, the last line in this query is invalid because the same name is used for multiple projected fields:

```

```

The following query is also invalid because the projected field name can't be 'none'.

```

```

## Examples

For examples of projections, see [Calculate Grand Totals and Subtotals with the rollup Modifier and grouping() Function](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_rollup_grouping.htm "Calculate subtotals of grouped data in your SAQL query using the rollup modifier on the group by statement, then work with subtotaled data using grouping(). For example, to see the subtotaled value of opportunities by type and lead source, roll up the type and lead source groups. Then, label the subtotals with the grouping function.").

#### See Also

-   [Statements](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statements.htm "A SAQL query loads input data, operates on it, and outputs the result data. A query is made up of statements. Each SAQL statement has an input stream, an operation, and an output stream.")

## Code Examples

```
q = foreach q generate expression as alias[, expression as alias ...];
```

```
l = load "0Fabb000000002qCAA/0Fabb000000002WCAQ";
r = load "0Fcyy000000002qCAA/0Fcyy000000002WCAQ";
l = foreach l generate 'value'/'divisor' as 'value' , category as category;
r = foreach r generate 'value'/'divisor' as 'value' , category as category;
cg = cogroup l by category right, r by category;
cg = foreach cg generate r.category as 'category', sum(r.value) as sumrval, sum(l.value) as sumrval;
```

```
q = load "Products";
q = group q by all;
q = foreach q generate count() as 'none';
q = limit q 2000;
```

## Related Topics

- Calculate Grand Totals and Subtotals with the rollup Modifier and grouping() Function (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_rollup_grouping.htm)
- Statements (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statements.htm)
