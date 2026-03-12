---
title: "displayDurationInMonths()"
domain: lightning
topic: displaydurationinmonths
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.478Z
estimatedTokens: 121
keywords: [displayDurationInMonths, Displays, length, time, months, Sample, Code]
---

# displayDurationInMonths()

> Displays a length of time in months.

# displayDurationInMonths()

Displays a length of time in months.

## Signature

displayDurationInMonths (Duration duration)

## Parameters

duration

Type: Duration

The duration object returned by $A.localizationService.duration.

## Returns

Type: number

The length of time in months.

## Sample Code

```

```

#### See Also

-   [duration()](atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm "Returns an object representing a length of time.")

## Code Examples

```
var dur = $A.localizationService.duration(60, 'day');
// Returns 1.971293
var length = $A.localizationService.displayDurationInMonths(dur);
```

## Related Topics

- duration() (atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm)
