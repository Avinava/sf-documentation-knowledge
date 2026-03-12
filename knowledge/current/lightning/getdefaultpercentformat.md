---
title: "getDefaultPercentFormat()"
domain: lightning
topic: getdefaultpercentformat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.530Z
estimatedTokens: 106
keywords: [getDefaultPercentFormat, percentage, Sample, Code]
---

# getDefaultPercentFormat()

> Returns the default percentage format.

# getDefaultPercentFormat()

Returns the default percentage format.

## Signature

getDefaultPercentFormat()

## Returns

Type: NumberFormat

The percentage format returned by $Locale.percentFormat.

## Sample Code

```

```

#### See Also

-   [$Locale](atlas.en-us.lightning.meta/lightning/expr_locale_value_provider.htm "The $Locale global value provider returns information about the current user’s preferred locale.")

## Code Examples

```
// Returns 20%
$A.localizationService.getDefaultPercentFormat().format(0.20);
```

## Related Topics

- $Locale (atlas.en-us.lightning.meta/lightning/expr_locale_value_provider.htm)
