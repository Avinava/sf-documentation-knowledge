---
title: "pi()"
domain: bi-dev-guide-sql
topic: pi
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:15.283Z
estimatedTokens: 39
keywords: [constant, π=3.14159]
---

# pi()

> Returns the value of constant π, where π=3.14159.

# pi()

Returns the value of constant π, where π=3.14159.

PI() takes the following syntax.

```

```

## Example

```

```

| piValue |
| --- |
| 3.14159 |

## Code Examples

```
SELECT PI() as Alias
FROM dataset;
```

```
SELECT PI() as piValue
FROM "Opportunity"
LIMIT 1;
```
