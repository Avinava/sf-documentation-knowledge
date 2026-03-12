---
title: "abs(n)"
domain: bi-dev-guide-saql
topic: absn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.428Z
estimatedTokens: 53
keywords: [abs, absolute, number, numeric, any, real, range, -1e308, 1e308, function, foreach, statement]
---

# abs(n)

> Returns the absolute number of n as a numeric value.
         n can be any real numeric value in the range of -1e308 <=
         n <= 1e308. This function can only be used in a foreach statement.

# abs(n)

Returns the absolute number of n as a numeric value. n can be any real numeric value in the range of -1e308 <= n <= 1e308. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate abs(pct_change) as pct_magnitude;
```
