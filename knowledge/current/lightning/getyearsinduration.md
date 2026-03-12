---
title: "getYearsInDuration()"
domain: lightning
topic: getyearsinduration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.555Z
estimatedTokens: 122
keywords: [getYearsInDuration, number, years, duration, Sample, Code]
---

# getYearsInDuration()

> Returns the number of years in a duration.

# getYearsInDuration()

Returns the number of years in a duration.

## Signature

getYearsInDuration(Duration duration)

## Parameters

duration

Type: Duration

The duration object returned by $A.localizationService.duration.

## Returns

Type: number

The number of years in the duration.

## Sample Code

```

```

#### See Also

-   [duration()](atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm "Returns an object representing a length of time.")

## Code Examples

```
var dur = $A.localizationService.duration(24, 'month');
// Returns 2
$A.localizationService.getYearsInDuration(dur);
```

## Related Topics

- duration() (atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm)
