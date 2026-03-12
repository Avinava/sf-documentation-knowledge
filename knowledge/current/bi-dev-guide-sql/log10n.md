---
title: "log10(n)"
domain: bi-dev-guide-sql
topic: log10n
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.195Z
estimatedTokens: 78
keywords: [log10, base, logarithm, number, any, positive, non-zero, numeric, range, 1.797e308]
---

# log10(n)

> Returns the base 10 logarithm of a number n. The value
   n can be any positive, non-zero numeric value in the range 0 <
   n <= 1.797e308.

# log10(n)

Returns the base 10 logarithm of a number n. The value n can be any positive, non-zero numeric value in the range 0 < n <= 1.797e308.

log10(n) takes the following syntax.

```

```

## Example

This example returns the base 10 logarithm for the number 5.

```

```

| logExample |
| --- |
| 0.698 |

## Code Examples

```
SELECT log10(numeric_value) as AliasName
FROM dataset;
```

```
SELECT log10(5) as logExample FROM Superstore
LIMIT 1;
```
