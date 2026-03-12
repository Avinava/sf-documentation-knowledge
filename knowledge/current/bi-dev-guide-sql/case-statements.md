---
title: "CASE Statements"
domain: bi-dev-guide-sql
topic: case-statements
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.995Z
estimatedTokens: 262
keywords: [CASE, Statements, express, logic, statement, always, pair, CRM, Analytics, supports, simple, searched, forms, expressions, SELECT]
---

# CASE Statements

> Use case statements to express if/then logic. A case statement always has a pair of
   WHERE and THEN
  statements. CRM Analytics supports the simple and searched forms of case expressions in a SELECT statement. Case statements have two formats: simple and
  searched.

# CASE Statements

Use case statements to express if/then logic. A case statement always has a pair of WHERE and THEN statements. CRM Analytics supports the simple and searched forms of case expressions in a SELECT statement. Case statements have two formats: simple and searched.

## Simple Form

A simple statement compares a case expression against a set of expressions. The result is the matched expression.

```

```

Here are the results.

| Category | Availability |
| --- | --- |
| Furniture | Available |
| Office Supplies | Unavailable |
| Technology | Unknown |

## Searched Form

The searched form evaluates to a result. A searched statement compares an expression against a series of boolean expressions. If it matches a boolean expression, the result is the corresponding THEN clause. If the expression does not return true for any of the boolean expressions, then the result is the corresponding ELSE clause.

```

```

| Region | ProfitLoss |
| --- | --- |
| Central | Profit |
| East | Profit |
| South | Profit |
| West | Profit |

## Code Examples

```
SELECT Category, CASE Category
WHEN 'Furniture' THEN 'Available'
WHEN 'Office Supplies' THEN 'Unavailable'
ELSE 'Unknown' END AS Availability
FROM "Superstore"
GROUP BY Category;
```

```
SELECT Region, CASE
WHEN sum(Profit) <= -500000 THEN 'Huge Loss'
WHEN sum(Profit) <= 0 THEN 'Loss'
WHEN sum(Profit) > 500000 THEN 'Huge Profit'
ELSE 'Profit' END AS ProfitLoss
FROM "Superstore"
GROUP BY Region;
```
