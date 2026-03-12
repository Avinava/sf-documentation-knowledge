---
title: "ends_with()"
domain: bi-dev-guide-saql
topic: endswith
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.483Z
estimatedTokens: 94
keywords: [ends_with, ends, characters, _with, Usage]
---

# ends_with()

> Returns true if the string ends with the
        specified characters.

# ends\_with()

Returns true if the string ends with the specified characters.

## Syntax

ends\_with(string, suffix)

## Usage

Returns true if ends with suffix, otherwise returns false. String comparison is case-sensitive. If any of the parameters are null, then the function returns null. If suffix is an empty string, then the function returns null.

## Example

```

```

## Code Examples

```
ends_with("FIT", "T") == true
ends_with("FIT", "BIT") == false
```
