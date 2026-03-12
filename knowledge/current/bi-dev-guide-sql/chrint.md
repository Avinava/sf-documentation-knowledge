---
title: "chr(int)"
domain: bi-dev-guide-sql
topic: chrint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.258Z
estimatedTokens: 46
keywords: [chr, int, UTF-8, character]
---

# chr(int)

> Returns the UTF-8 character for integer n. Returns
   null if n is null.

# chr(int)

Returns the UTF-8 character for integer n. Returns null if n is null.

## Example

This example returns the character value of 67.

```

```

| charValue |
| --- |
| C |

## Code Examples

```
SELECT CHR(67) as "charValue"
FROM "Superstore"
LIMIT 1;
```
