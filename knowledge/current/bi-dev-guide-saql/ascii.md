---
title: "ascii()"
domain: bi-dev-guide-saql
topic: ascii
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.478Z
estimatedTokens: 45
keywords: [ascii, UTF-8, code, character, Usage]
---

# ascii()

> Returns the UTF-8 code value of a character n.

# ascii()

Returns the UTF-8 code value of a character n.

## Syntax

ascii(n)

## Usage

Returns null if n is null. The null character (0) is not allowed.

## Example

```

```

## Code Examples

```
q = foreach q generate ascii("a") as int_value;
- -int_value == 97
```
