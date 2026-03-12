---
title: "Logical Operators"
domain: bi-dev-guide-saql
topic: logical-operators
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.671Z
estimatedTokens: 199
keywords: [Logical, Operators, perform, operations]
---

# Logical Operators

> Use logical operators to perform AND, OR, and NOT operations.

# Logical Operators

Use logical operators to perform AND, OR, and NOT operations.

Logical operators can return true, false, or null.

| Operator | Name | Description |
| --- | --- | --- |
| && (and) | Logical AND | See table. |
| \|\| (or) | Logical OR | See table. |
| ! (not) | Logical NOT | See table. |

The following tables show how nulls are handled in logical operations.

| x | y | x && y | x \|\| y |
| --- | --- | --- | --- |
| True | True | True | True |
| True | False | False | True |
| True | Null | Null | True |
| False | True | False | True |
| False | False | False | False |
| False | Null | False | Null |
| Null | True | Null | True |
| Null | False | False | Null |
| Null | Null | Null | Null |

| x | !x |
| --- | --- |
| True | False |
| False | True |
| Null | Null |
