---
title: "abs(n)"
domain: bi-dev-guide-sql
topic: absn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.154Z
estimatedTokens: 76
keywords: [abs, absolute, number, numeric, any, real, range, -1.797e308, 1.797e308]
---

# abs(n)

> Returns the absolute number of n as a numeric value.
   n can be any real numeric value in the range of -1.797e308 <=
   n <= 1.797e308.

# abs(n)

Returns the absolute number of n as a numeric value. n can be any real numeric value in the range of -1.797e308 <= n <= 1.797e308.

abs(n) takes the following syntax.

```

```

## Example

This example takes the absolute value of the Profit field.

```

```

| absProfit |
| --- |
| 41.9136 |

## Code Examples

```
SELECT abs(column_name) as AliasName
FROM dataset;
```

```
SELECT abs(Profit) as absProfit FROM Superstore
LIMIT 1;
```
