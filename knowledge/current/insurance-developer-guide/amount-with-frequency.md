---
title: "Amount with Frequency"
domain: insurance-developer-guide
topic: amount-with-frequency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.352Z
estimatedTokens: 142
keywords: [Amount, Frequency, Output, representation]
---

# Amount with Frequency

> Output representation of the amount details with frequency.

# Amount with Frequency

Output representation of the amount details with frequency.

JSON example

This example shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| annually | Double | Expected revenue amount that’s calculated annually. | Small, 63.0 | 63.0 |
| monthly | Double | Expected revenue amount that’s calculated monthly. | Small, 63.0 | 63.0 |
| quarterly | Double | Expected revenue amount that’s calculated quarterly. | Small, 63.0 | 63.0 |

## Code Examples

```
"amountWithFrequency": {
  "annually": 1000.3,
  "monthly": 100.03,
  "quarterly": 300.09
}
```
