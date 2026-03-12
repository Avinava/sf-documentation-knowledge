---
title: "replace()"
domain: bi-dev-guide-saql
topic: replace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.507Z
estimatedTokens: 98
keywords: [replace, Replaces, substring, characters, Usage]
---

# replace()

> Replaces a substring with the specified characters.

# replace()

Replaces a substring with the specified characters.

## Syntax

replace(string, searchStr, replaceStr)

## Usage

This function replaces searchStr with replaceStr, then returns the modified string. If any of the parameters are null, then the function returns null. If searchStr is an empty string, the function returns null. This function is case-sensitive.

## Example

```

```

## Code Examples

```
replace("Watson, come quickly.", "quickly", "slowly") == "Watson, come slowly."
replace("Watson, come quickly.", "o", "a") == "Watsan, came quickly."
replace("Watson, come quickly.", "", "Mr.") == null
```
