---
title: "Logical Operators"
domain: soql-sosl
topic: logical-operators
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.773Z
estimatedTokens: 274
keywords: [Logical, Operators, expression, clause, SOQL, query, Parentheses, whenever, mix]
---

# Logical Operators

> Logical operators can be used in the field expression of the WHERE clause in a SOQL
		query. These operators are AND, OR, and NOT. Parentheses are required whenever you mix the
		operators.

# Logical Operators

Logical operators can be used in the field expression of the WHERE clause in a SOQL query. These operators are AND, OR, and NOT. Parentheses are required whenever you mix the operators.

The following table lists the logical operator values that are used in [fieldExpression](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_conditionexpression.htm#where_fieldexp) syntax:

| Operator | Syntax | Description |
| --- | --- | --- |
| AND | fieldExpressionX AND fieldExpressionY | true if both fieldExpressionX and fieldExpressionY are true. |
| OR | fieldExpressionX OR fieldExpressionY | true if either fieldExpressionX or fieldExpressionY is true.In a WHERE clause that uses OR, records are returned even if the foreign key value in a record is null.SELECT Id FROM Contact WHERE LastName = 'Young' or Account.Name = 'Quarry' |
| NOT | not fieldExpressionX | true if fieldExpressionX false.There’s also a comparison operator NOT IN, which is different from this logical operator.SELECT Name FROM Account WHERE AnnualRevenue > 0 AND (NOT Type = 'Prospect') |

## Related Topics

- fieldExpression (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_conditionexpression.htm)
