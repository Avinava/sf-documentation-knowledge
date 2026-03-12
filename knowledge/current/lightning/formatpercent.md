---
title: "formatPercent()"
domain: lightning
topic: formatpercent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.508Z
estimatedTokens: 70
keywords: [formatPercent, formatted, percentage, number, Sample, Code]
---

# formatPercent()

> Returns a formatted percentage number based on the default percentage
   format.

# formatPercent()

Returns a formatted percentage number based on the default percentage format.

## Signature

formatPercent (number number)

## Parameters

number

Type: number

The number to format.

## Returns

Type: number

The formatted percentage.

## Sample Code

```

```

## Code Examples

```
var num = 0.54;
// Returns 54%
var formatted = $A.localizationService.formatPercent(num);
```
