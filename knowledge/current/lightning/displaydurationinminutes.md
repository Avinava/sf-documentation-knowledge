---
title: "displayDurationInMinutes()"
domain: lightning
topic: displaydurationinminutes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.475Z
estimatedTokens: 122
keywords: [displayDurationInMinutes, Displays, length, time, minutes, Sample, Code]
---

# displayDurationInMinutes()

> Displays a length of time in minutes.

# displayDurationInMinutes()

Displays a length of time in minutes.

## Signature

displayDurationInMinutes (Duration duration)

## Parameters

duration

Type: Duration

The duration object returned by $A.localizationService.duration.

## Returns

Type: number

The length of time in minutes.

## Sample Code

```

```

#### See Also

-   [duration()](atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm "Returns an object representing a length of time.")

## Code Examples

```
var dur = $A.localizationService.duration(1, 'hour');
// Returns 60
var length = $A.localizationService.displayDurationInMinutes(dur);
```

## Related Topics

- duration() (atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm)
