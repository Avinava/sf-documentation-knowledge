---
title: "getDaysInDuration()"
domain: lightning
topic: getdaysinduration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.521Z
estimatedTokens: 121
keywords: [getDaysInDuration, number, days, duration, Sample, Code]
---

# getDaysInDuration()

> Returns the number of days in a duration.

# getDaysInDuration()

Returns the number of days in a duration.

## Signature

getDaysInDuration(Duration duration)

## Parameters

duration

Type: Duration

The duration object returned by $A.localizationService.duration.

## Returns

Type: number

The number of days in the duration.

## Sample Code

```

```

#### See Also

-   [duration()](atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm "Returns an object representing a length of time.")

## Code Examples

```
var dur = $A.localizationService.duration(48, 'hour');
// Returns 2, the number of days for the given duration
$A.localizationService.getDaysInDuration(dur);
```

## Related Topics

- duration() (atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm)
