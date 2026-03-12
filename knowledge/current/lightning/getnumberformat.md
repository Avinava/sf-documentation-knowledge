---
title: "getNumberFormat()"
domain: lightning
topic: getnumberformat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.546Z
estimatedTokens: 118
keywords: [getNumberFormat, NumberFormat, Sample, Code]
---

# getNumberFormat()

> Returns a NumberFormat
   object.

# getNumberFormat()

Returns a NumberFormat object.

## Signature

getNumberFormat(string format, string symbols)

## Parameters

format

Type: string

The number format. For example, format=".00" displays the number followed by two decimal places.

symbols

Type: string

An optional map of localized symbols. Otherwise, the current locale’s symbols are used.

## Returns

Type: NumberFormat

The number format returned by $Locale.numberFormat.

## Sample Code

```

```

## Code Examples

```
var f = $A.get("$Locale.numberFormat");
var num = 10000
var nf = $A.localizationService.getNumberFormat(f);
var formatted = nf.format(num);
// Returns 10,000
var formatted = $A.localizationService.formatNumber(num);
```
