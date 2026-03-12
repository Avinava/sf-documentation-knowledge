---
title: "getHoursInDuration()"
domain: lightning
topic: gethoursinduration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.532Z
estimatedTokens: 120
keywords: [getHoursInDuration, length, time, hours, Sample, Code]
---

# getHoursInDuration()

> Returns a length of time in hours.

# getHoursInDuration()

Returns a length of time in hours.

## Signature

getHoursInDuration(Duration duration)

## Parameters

duration

Type: Duration

The duration object returned by $A.localizationService.duration.

## Returns

Type: number

The number of hours in the duration.

## Sample Code

```

```

#### See Also

-   [duration()](atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm "Returns an object representing a length of time.")

## Code Examples

```
var dur = $A.localizationService.duration(60, 'minute');
// Returns 1, the number of hours in the given duration
$A.localizationService.getHoursInDuration(dur);
```

## Related Topics

- duration() (atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm)
