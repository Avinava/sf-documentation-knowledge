---
title: "displayDurationInHours()"
domain: lightning
topic: displaydurationinhours
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.469Z
estimatedTokens: 120
keywords: [displayDurationInHours, Displays, length, time, hours, Sample, Code]
---

# displayDurationInHours()

> Displays a length of time in hours.

# displayDurationInHours()

Displays a length of time in hours.

## Signature

displayDurationInHours (Duration duration)

## Parameters

duration

Type: Duration

The duration object returned by $A.localizationService.duration.

## Returns

Type: number

The length of time in hours.

## Sample Code

```

```

#### See Also

-   [duration()](atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm "Returns an object representing a length of time.")

## Code Examples

```
var dur = $A.localizationService.duration(2, 'day');
// Returns 48
var length = $A.localizationService.displayDurationInHours(dur);
```

## Related Topics

- duration() (atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm)
