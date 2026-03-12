---
title: "Refund"
domain: insurance-developer-guide
topic: refund
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.771Z
estimatedTokens: 109
keywords: [Refund, Output, representation]
---

# Refund

> Output representation of refund details.

# Refund

Output representation of refund details.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fee | Double | Refund fee amount after cancellation. | Small, 63.0 | 63.0 |
| premium | Double | Refund premium amount after cancellation. | Small, 63.0 | 63.0 |
| tax | Double | Refund tax amount after cancellation. | Small, 63.0 | 63.0 |

## Code Examples

```
refund": {
    "fee": 15.71,
    "premium": 31.42,
    "tax": 15.71
  }
```
