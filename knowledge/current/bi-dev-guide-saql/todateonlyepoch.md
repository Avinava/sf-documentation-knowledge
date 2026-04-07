---
title: "toDateOnly(epoch)"
domain: bi-dev-guide-saql
topic: todateonlyepoch
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:14.301Z
estimatedTokens: 17
keywords: [toDateOnly, epoch, Converts, DateOnly]
---

# toDateOnly(epoch)

> Converts an epoch to a DateOnly type.

# toDateOnly(epoch)

Converts an epoch to a DateOnly type.

```

```

## Code Examples

```
q = foreach q generate toDateOnly(epoch) as "DateTime";
```
