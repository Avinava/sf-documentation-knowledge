---
title: "getDefaultCurrencyFormat()"
domain: lightning
topic: getdefaultcurrencyformat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.523Z
estimatedTokens: 106
keywords: [getDefaultCurrencyFormat, currency, Sample, Code]
---

# getDefaultCurrencyFormat()

> Returns the default currency format.

# getDefaultCurrencyFormat()

Returns the default currency format.

## Signature

getDefaultCurrencyFormat()

## Returns

Type: NumberFormat

The currency format returned by $Locale.currencyFormat.

## Sample Code

```

```

#### See Also

-   [$Locale](atlas.en-us.lightning.meta/lightning/expr_locale_value_provider.htm "The $Locale global value provider returns information about the current user’s preferred locale.")

## Code Examples

```
// Returns $20,000.00
$A.localizationService.getDefaultCurrencyFormat().format(20000);
```

## Related Topics

- $Locale (atlas.en-us.lightning.meta/lightning/expr_locale_value_provider.htm)
