---
title: "getDefaultNumberFormat()"
domain: lightning
topic: getdefaultnumberformat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:38:05.127Z
estimatedTokens: 105
keywords: [getDefaultNumberFormat, NumberFormat, Sample, Code]
---

> Returns the default NumberFormat object.

# getDefaultNumberFormat()

Returns the default NumberFormat object.

## Signature

getDefaultNumberFormat()

## Returns

Type: NumberFormat

The number format returned by $Locale.numberFormat.

## Sample Code

```

```

#### See Also

-   [$Locale](atlas.en-us.lightning.meta/lightning/expr_locale_value_provider.htm "The $Locale global value provider returns information about the current user’s preferred locale.")

## Code Examples

```
// Returns 20,000.123
$A.localizationService.getDefaultNumberFormat().format(20000.123);
```

## Related Topics

- $Locale (atlas.en-us.lightning.meta/lightning/expr_locale_value_provider.htm)
