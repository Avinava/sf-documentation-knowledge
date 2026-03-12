---
title: "join semi and anti"
domain: bi-dev-guide-saql
topic: join-semi-and-anti
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:06.799Z
estimatedTokens: 1408
keywords: [join, semi, anti, statement, join_type, semi-join, anti-join, results, Usage, Multiway, Cases, Handling, Considerations]
---

# join semi and anti

> Use the join statement with the join_type to create semi-join or anti-join
  results.

# join semi and anti

Use the join statement with the join\_type to create semi-join or anti-join results.

## Usage

A semi-join returns the rows from one data stream if one or more matching rows are found in the second data stream. Each matched row is returned one time. The row data types must match for the specified data streams.

An anti-join returns the rows in the first data stream that don’t match any rows in the second data stream.

## Syntax

```

```

| Name | Description |
| --- | --- |
| alias1 | Required. The data stream to report semi-join or anti-join results for. |
| alias2 | Required. The data stream to look for matches or no matches in. |
| field1 | Required. The field name as it appears in the data stream. The field data type must be the same in alias1 and alias2 to match. Multi-value fields aren’t allowed. At least 1 field is requires, with a maximum of 5 fields allowed. Duplicate field names aren’t allowed in either data stream. |
| join_type | Required. The type of join to run. Valid values are semi and anti. |

The result stream contains the matched or unmatched rows from the alias1 data stream only. For a semi-join, a row from alias1 is only present if it satisfies the join criteria. The syntax supports equijoin (equality) criteria only. There isn't a guarantee that the rows in the result stream are in the same order as in alias1.

The parenthesis used to specify the fields are optional if there’s only 1 field.

The input data stream aliases must be unique. These streams can't be unprojected group or cogroup results, either directly or indirectly. The group or cogroup statement is made after the join statement.

Performance Considerations

-   The join performance is directly proportional to the amount of data returned by the second dataset. We recommend running any filters on the second dataset before running the join.
-   Run the join before running any projections on the query results. For example, if you have a foreach statement in your query, like q = foreach q generate count(q1) as 'A';, run it after the join statement.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

The join alias field must be a dimension or a date. If you use a measure field as an alias, the query returns an error stating Error in join: non-dimension field: {field1} is not allowed in pre-projection alias: {alias1} at join keys list position: 1. This restriction is only for pre-projection alias. All data types are allowed in the post-projection alias.

For example, to use a measure in a join, project the measure field first. This query joins Number\_of\_Employees, a measure, by projecting it before running the join.

```

```

## Semi-Join Syntax

```

```

## Anti-Join Syntax

```

```

## Multiway Semi-Join Syntax

join statements can be combined to form a multiway semi-join. A maximum of 3 join statements are allowed in a query. These statements combine into a conjunctive predicate.

```

```

## join Use Cases

Use a join statement to query for accounts with at least 1 opportunity

```

```

Use a join statement to query for accounts with opportunity amount more than 10K.

```

```

Use a join statement to query for accounts with more than 10 opportunities.

```

```

Use a join statement to query for accounts with no opportunities.

```

```

Use a join statement to query for accounts with opportunities, but no orders.

```

```

## Null Handling

Running the join query with null fields is a special case. For the SAQL anti-join statement, null isn't equal to null, which differs from the cogroup statement. The behavior of the statement is the same as NOT EXISTS in SQL.

In this example, imagine you’re joining the accounts and the opportunities data streams, which contain these rows:

| accounts |  | opportunities |  |
| --- | --- | --- | --- |
| id |  | account_id |  |
|  | 1 |  | 1 |
|  | 2 |  | NULL |
|  | NULL |  |  |

For SAQL, this statement:

```

```

has the same behavior as this SQL statement:

```

```

The SAQL anti-join query returns two rows:

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

-   [union](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_union.htm "Combines multiple result sets into one result set. The result sets must have the same field names and structure. You can use a different dataset to create each result set, or you can use the same dataset.")

## Code Examples

```
results = join alias1 by (field1, ... fieldK) join_type, alias2 by (field1, ... fieldK)
```

```
c = load "cases";
a = load "accounts";
a = join a by Name semi, c by Name;
a = foreach a generate ID, Industry, Name, Year, Number_of_Employees;
a = order a by (ID);
```

```
a = join a by (id) semi, b by (id);
```

```
a = join a by (id) anti, b by (id);
```

```
a = join a by (id) semi, b by (id);
a = join a by (id) anti, c by (id);
```

## Related Topics

- cogroup (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_cogroup.htm)
- union (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_union.htm)
