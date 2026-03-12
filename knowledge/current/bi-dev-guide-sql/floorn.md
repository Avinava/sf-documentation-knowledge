---
title: "floor(n)"
domain: bi-dev-guide-sql
topic: floorn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.178Z
estimatedTokens: 124
keywords: [floor, nearest, equal, lesser, any, real, numeric, range, -1.797e308<=, 1.797e308]
---

# floor(n)

> Returns the nearest integer of equal or lesser value to n. n can be any real numeric
  value in the range of -1.797e308<= n <= 1.797e308.

# floor(n)

Returns the nearest integer of equal or lesser value to n. n can be any real numeric value in the range of -1.797e308<= n <= 1.797e308.

floor(n) takes the following syntax.

```

```

## Example

This example returns values in the Discount field rounded down to the nearest integer. In the first three rows, the Discount value is 0. The fourth and fifth values are 0.45 and 0.2, respectively, which are rounded to 0.

```

```

| floorDiscount |
| --- |
| 0 |
| 0 |
| 0 |
| 0 |
| 0 |

## Code Examples

```
SELECT floor(column_name) as AliasName
FROM dataset;
```

```
SELECT floor(Discount) as floorDiscount
FROM Superstore
LIMIT 5;
```
