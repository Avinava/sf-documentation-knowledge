---
title: "displayDurationInSeconds()"
domain: lightning
topic: displaydurationinseconds
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.480Z
estimatedTokens: 122
keywords: [displayDurationInSeconds, Displays, length, time, seconds, Sample, Code]
---

# displayDurationInSeconds()

> Displays a length of time in seconds.

# displayDurationInSeconds()

Displays a length of time in seconds.

## Signature

displayDurationInSeconds (Duration duration)

## Parameters

duration

Type: Duration

The duration object returned by $A.localizationService.duration.

## Returns

Type: number

The length of time in seconds.

## Sample Code

```

```

#### See Also

-   [duration()](atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm "Returns an object representing a length of time.")

## Code Examples

```
var dur = $A.localizationService.duration(60, 'minutes');
// Returns 3600
var length = $A.localizationService.displayDurationInSeconds(dur);
```

## Related Topics

- duration() (atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm)
