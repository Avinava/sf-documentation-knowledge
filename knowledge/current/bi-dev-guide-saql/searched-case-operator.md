---
title: "Searched case
    Operator"
domain: bi-dev-guide-saql
topic: searched-case-operator
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.658Z
estimatedTokens: 712
keywords: [Searched, case, Operator, foreach, statement, assign, different, situations, supports, two, forms, simple, Usage, Handling]
---

# Searched case
    Operator

> Use case in a foreach statement to assign different field values in different situations. case supports two syntax forms: searched case and simple case.
    This section shows searched case.

# Searched case Operator

Use case in a foreach statement to assign different field values in different situations. case supports two syntax forms: searched case and simple case. This section shows searched case.

## Syntax

```

```

case...end opens and closes the case operator.

when...then defines a conditional statement. A case expression can contain one or more conditional statements.

search\_condition can be any scalar expression that returns a boolean value. It can be a complex boolean expression or a nested case, as long as the result is boolean. For a list of supported operators, see [Comparison Operators](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_comparison.htm "Use comparison operators to compare values of the same type. For example, you can compare strings with strings and numbers with numbers.").

result\_expr is any expression that takes a single input value and returns a single output value. Can contain values, identifiers, and scalar functions (including date and math functions). The expression must return the same data type as specified in the search condition.

else default\_expr (optional) is any expression that takes a single input value and returns a single output value. Can contain values, identifiers, and scalar functions (including date and math functions). The expression can return a number, string, or date.

## Usage

Statements are evaluated in the order that they are given. If the condition is primary\_expr == test\_expr, then the corresponding result\_expr is returned. You can specify any number of when/then statements.

You can use else to specify a default expression. For example, if no industry is specified, you can use the string "No Industry Specified". If you don't specify a default statement, then null is returned.

You can use case expressions in foreach statements. You cannot use case in order, group, or filter statements.

## Example

Suppose that you want to see the median deal size for each of your reps. You want to bin their median deal size into the buckets "Small", "Medium", and "Large". Use case to assign values to the median deal size.

```

```

The resulting data shows the median deal size for each rep, along with the appropriate bin label.

![Derived dimension shows time to win](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_caseMedAmount.png&folder=bi_dev_guide_saql)

If you want to group the data by the field assigned by the case statement, add a group by statement to the end of the query. For example, to group the data by the Category field, add the following line to the end of the above example:

```

```

## Handling Null Values

In general, null values can’t be compared. When the search condition evaluates to null, the default\_expr is returned. If no default expression is specified, null is returned.

## Code Examples

```
case 
  when search_condition then result_expr
  [when search_condition2 then result_expr2 ]   
  [else default_expr ]
end
```

```
q = load "data";
q = group q by 'Account_Owner';
q = foreach q generate 'Account_Owner' as 'Account_Owner', median('Amount') as 'Median Amount', (case 
  
  when median('Amount') < 1000000 then "Small"
  when median('Amount') > 1600000 then "Large"
  else "Medium"

end ) as 'Category';
```

```
q = group q by 'Category';
```

## Related Topics

- Comparison Operators (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_comparison.htm)
