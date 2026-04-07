---
title: "ascii(char)"
domain: bi-dev-guide-sql
topic: asciichar
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:01.986Z
estimatedTokens: 52
keywords: [ascii, char, UTF-8, numeric, character]
---

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
