---
title: "ascii(char)"
domain: bi-dev-guide-sql
topic: asciichar
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.253Z
estimatedTokens: 52
keywords: [ascii, char, UTF-8, numeric, character]
---

# ascii(char)

> Returns UTF-8 numeric value of the specified character. Returns null if n is
   null.

# ascii(char)

Returns UTF-8 numeric value of the specified character. Returns null if n is null.

## Example

This example returns the ASCII value for the letter “a.”

```

```

| asciiValue |
| --- |
| 67 |

## Code Examples

```
SELECT ASCII('C') as "asciiValue"
FROM "Superstore"
LIMIT 1;
```
