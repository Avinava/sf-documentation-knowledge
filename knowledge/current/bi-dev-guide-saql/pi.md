---
title: "pi()"
domain: bi-dev-guide-saql
topic: pi
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:00.693Z
estimatedTokens: 32
keywords: [π=3.14139265, function, foreach, statement]
---

> Returns the value of π, where π=3.14139265. This function can only be used in a foreach statement.

# pi()

Returns the value of π, where π=3.14139265. This function can only be used in a foreach statement.

## Example

```

```

## Code Examples

```
q = foreach q generate pi() as pi;
```
