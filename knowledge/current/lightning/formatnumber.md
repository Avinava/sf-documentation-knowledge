---
title: "formatNumber()"
domain: lightning
topic: formatnumber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.505Z
estimatedTokens: 64
keywords: [formatNumber, formatted, number, Sample, Code]
---

# formatNumber()

> Returns a formatted number with the default number
  format.

# formatNumber()

Returns a formatted number with the default number format.

## Signature

formatNumber (number number)

## Parameters

number

Type: number

The number to format.

## Returns

Type: number

The formatted number.

## Sample Code

```

```

## Code Examples

```
var num = 10000;
// Returns 10,000
var formatted = $A.localizationService.formatNumber(num);
```
