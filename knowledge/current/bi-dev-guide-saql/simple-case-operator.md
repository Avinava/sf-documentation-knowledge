---
title: "Simple case Operator"
domain: bi-dev-guide-saql
topic: simple-case-operator
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.653Z
estimatedTokens: 707
keywords: [Simple, case, Operator, foreach, statement, assign, different, situations, supports, two, forms, searched, explains, Usage, Handling]
---

# Simple case Operator

> Use case in a foreach statement to assign different field values in different situations. case supports two syntax forms: searched case and simple case.
    This section explains simple case.

# Simple case Operator

Use case in a foreach statement to assign different field values in different situations. case supports two syntax forms: searched case and simple case. This section explains simple case.

## Syntax

```

```

case...end opens and closes the case operator.

primary\_expr is any expression that takes a single input value and returns a single output value. May contain values, identifiers, and scalar functions (including date and math functions). The expression can return a number, string, or date.

when...then defines a conditional statement. A case expression can contain one or more conditional statements.

test\_expr is any expression that takes a single input value and returns a single output value. May contain values, identifiers, and scalar functions (including date and math functions). The expression must return the same data type as primary\_expr.

result\_expr is any expression that takes a single input value and returns a single output value. May contain values, identifiers, and scalar functions (including date and math functions). The expression must return the same data type as primary\_expr.

else default\_expr (optional) is any expression that takes a single input value and returns a single output value. May contain values, identifiers, and scalar functions (including date and math functions). The expression can return a number, string, or date.

## Usage

Statements are evaluated in the order that they are given. If test\_expr returns true, the corresponding result\_expr is returned. You can specify any number of when/then statements.

You can use else to specify a default expression. For example, if no industry is specified then use the string "No Industry Specified". If you don't specify a default statement then null is returned.

You can use case expressions in foreach statements. You cannot use case in order, group, or filter statements.

## Example

Suppose that you want to create a dimension that displays the meaning of industry codes. Use case to parse the Industry\_Code field and specify the corresponding string.

```

```

The resulting data displays the meaning of industry codes:

![Derived dimension shows time to win](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_caseIndustry.png&folder=bi_dev_guide_saql)

## Handling Null Values

In general, null values can’t be compared. When primary\_expr or test\_expr evaluates to null, the default\_expr is returned. If no default expression is specified, null is returned.

#### See Also

-   [Speed Up Queries with Dataflow Transformations](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_dataflow_transformations.htm "To speed up your queries and reduce the number of network round trips, perform data transformations in the ELT process instead of in the query.")

## Code Examples

```
case 
  primary_expr 
  when test_expr then result_expr
  [when test_expr2 then result_expr2 ]   
  [else default_expr ]
end
```

```
q = foreach q generate Amount as 'Amount', 'Industry_Code' as 'Industry_Code', (case 'Industry_Code'
      when 541611 then "Consulting services"     
      when 541800 then "Advertising" 
      when 561400 then "Support services" 
      else "Unspecified"
end) as 'Industry';
```

## Related Topics

- Speed Up Queries with Dataflow Transformations (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_dataflow_transformations.htm)
