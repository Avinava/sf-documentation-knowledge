---
title: "getMinutesInDuration()"
domain: lightning
topic: getminutesinduration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.540Z
estimatedTokens: 124
keywords: [getMinutesInDuration, number, minutes, duration, Sample, Code]
---

# getMinutesInDuration()

> Returns the number of minutes in a duration.

# getMinutesInDuration()

Returns the number of minutes in a duration.

## Signature

getMinutesInDuration(Duration duration)

## Parameters

duration

Type: Duration

The duration object returned by $A.localizationService.duration.

## Returns

Type: number

The number of minutes in the duration.

## Sample Code

```

```

#### See Also

-   [duration()](atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm "Returns an object representing a length of time.")

## Code Examples

```
var dur = $A.localizationService.duration(60, 'second');
// Returns 1, the number of minutes in the given duration
$A.localizationService.getMinutesInDuration(dur);
```

## Related Topics

- duration() (atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm)
