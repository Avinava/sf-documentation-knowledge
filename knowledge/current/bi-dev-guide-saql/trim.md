---
title: "trim()"
domain: bi-dev-guide-saql
topic: trim
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.518Z
estimatedTokens: 79
keywords: [trim, Removes, substring, beginning, end, Usage]
---

# trim()

> Removes the specified substring from the beginning and the end of a
        string.

# trim()

Removes the specified substring from the beginning and the end of a string.

## Syntax

trim(string,substr)

## Usage

This function removes substr from the beginning and end of string, then returns the result. To remove leading and trailing spaces, do not specify a value for substr.

## Example

```

```

## Code Examples

```
–-  the resulting string in both cases is 'MyString';
q = foreach q generate trim("abcMyStringabc","abc") as 'Trimmed String';
q = foreach q generate trim("     MyString     ") as 'Trimmed String';
```
