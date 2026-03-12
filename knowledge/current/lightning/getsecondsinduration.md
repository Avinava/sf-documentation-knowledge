---
title: "getSecondsInDuration()"
domain: lightning
topic: getsecondsinduration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.549Z
estimatedTokens: 124
keywords: [getSecondsInDuration, number, seconds, duration, Sample, Code]
---

# getSecondsInDuration()

> Returns the number of seconds in a duration.

# getSecondsInDuration()

Returns the number of seconds in a duration.

## Signature

getSecondsInDuration(Duration duration)

## Parameters

duration

Type: Duration

The duration object returned by $A.localizationService.duration.

## Returns

Type: number

The number of seconds in the duration.

## Sample Code

```

```

#### See Also

-   [duration()](atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm "Returns an object representing a length of time.")

## Code Examples

```
var dur = $A.localizationService.duration(3000, 'millisecond');
// Returns 3
$A.localizationService.getSecondsInDuration(dur);
```

## Related Topics

- duration() (atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm)
