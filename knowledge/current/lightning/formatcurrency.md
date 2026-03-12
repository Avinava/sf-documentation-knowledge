---
title: "formatCurrency()"
domain: lightning
topic: formatcurrency
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.489Z
estimatedTokens: 69
keywords: [formatCurrency, currency, number, Sample, Code]
---

# formatCurrency()

> Returns a currency number based on the default currency
  format.

# formatCurrency()

Returns a currency number based on the default currency format.

## Signature

formatCurrency (number number)

## Parameters

number

Type: number

The currency number to format.

## Returns

Type: number

The formatted currency.

## Sample Code

```

```

## Code Examples

```
var curr = 123.45;
// Returns $123.45
$A.localizationService.formatCurrency(curr);
```
