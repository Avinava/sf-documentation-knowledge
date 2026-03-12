---
title: "displayDurationInDays()"
domain: lightning
topic: displaydurationindays
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.467Z
estimatedTokens: 119
keywords: [displayDurationInDays, Displays, length, time, days, Sample, Code]
---

# displayDurationInDays()

> Displays a length of time in days.

# displayDurationInDays()

Displays a length of time in days.

## Signature

displayDurationInDays (Duration duration)

## Parameters

duration

Type: Duration

The duration object returned by $A.localizationService.duration.

## Returns

Type: number

The length of time in days.

## Sample Code

```

```

#### See Also

-   [duration()](atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm "Returns an object representing a length of time.")

## Code Examples

```
var dur = $A.localizationService.duration(24, 'hour');
// Returns 1
var length = $A.localizationService.displayDurationInDays(dur);
```

## Related Topics

- duration() (atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm)
