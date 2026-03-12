---
title: "getMonthsInDuration()"
domain: lightning
topic: getmonthsinduration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.544Z
estimatedTokens: 123
keywords: [getMonthsInDuration, number, months, duration, Sample, Code]
---

# getMonthsInDuration()

> Returns the number of months in a duration.

# getMonthsInDuration()

Returns the number of months in a duration.

## Signature

getMonthsInDuration(Duration duration)

## Parameters

duration

Type: Duration

The duration object returned by $A.localizationService.duration.

## Returns

Type: number

The number of months in the duration.

## Sample Code

```

```

#### See Also

-   [duration()](atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm "Returns an object representing a length of time.")

## Code Examples

```
var dur = $A.localizationService.duration(70, 'day');
// Returns 2, the number of months in the given duration
$A.localizationService.getMonthsInDuration(dur);
```

## Related Topics

- duration() (atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm)
