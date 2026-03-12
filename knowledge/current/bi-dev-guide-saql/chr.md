---
title: "chr()"
domain: bi-dev-guide-saql
topic: chr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.481Z
estimatedTokens: 33
keywords: [chr, UTF-8, character, Usage]
---

# chr()

> Returns the UTF-8 character of integer n.

# chr()

Returns the UTF-8 character of integer n.

## Syntax

chr(n)

## Usage

Returns null if n is null.

## Example

```

```

## Code Examples

```
q = foreach q generate chr(97) as char_value;
- -char_value == a
```
