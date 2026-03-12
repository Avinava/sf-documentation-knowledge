---
title: "len()"
domain: bi-dev-guide-saql
topic: len
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.488Z
estimatedTokens: 57
keywords: [len, number, characters, Usage]
---

# len()

> Returns the number of characters in the string.

# len()

Returns the number of characters in the string.

## Syntax

len(string)

## Usage

Leading and trailing whitespace characters are included in the length returned. Returns null if string is null.

## Example

```

```

## Code Examples

```
len("starfox") == 7
len(" rocket ") == 8
len("謝") == 1
len("") == 0
```
