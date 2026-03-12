---
title: "Arithmetic Operators"
domain: bi-dev-guide-saql
topic: arithmetic-operators
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.648Z
estimatedTokens: 113
keywords: [Arithmetic, Operators, perform, addition, subtraction, multiplication, division, modulo, operations]
---

# Arithmetic Operators

> Use arithmetic operators to perform addition, subtraction, multiplication, division, and
  modulo operations.

# Arithmetic Operators

Use arithmetic operators to perform addition, subtraction, multiplication, division, and modulo operations.

| Operator | Description |
| --- | --- |
| + | Plus |
| - | Minus |
| * | Multiplication |
| / | Division |
| % | Modulo |

## Example

You want to charge each of your accounts 5% of their opportunities as a fee. Create a query that multiplies the Amount field by .05. This query will resemble the following:

```

```

## Code Examples

```
q = load "opportunity";
q = group q by 'Account.Name';
q = foreach q generate 'Account.Name' as 'Account.Name', sum('Amount') * 0.05 as 'Fee';
q = order q by 'Fee' desc;
q = limit q 2000;
```
