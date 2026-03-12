---
title: "unique()"
domain: bi-dev-guide-saql
topic: unique
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.352Z
estimatedTokens: 49
keywords: [unique, count, Number, Industries]
---

# unique()

> Returns the count of unique values.

# unique()

Returns the count of unique values.

## Example - Count the Number of Industries

Use unique() to count the number of different industries that you have opportunities with.

```

```

## Code Examples

```
q = load "DTC_Opportunity_SAMPLE";
q = group q by all;
q = foreach q generate unique('Industry') as 'unique_Industry';
```
