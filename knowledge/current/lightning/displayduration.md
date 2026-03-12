---
title: "displayDuration()"
domain: lightning
topic: displayduration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.464Z
estimatedTokens: 145
keywords: [displayDuration, Displays, length, time, Sample, Code]
---

# displayDuration()

> Displays a length of time.

# displayDuration()

Displays a length of time.

## Signature

displayDuration (Duration duration, boolean withSuffix)

## Parameters

duration

Type: Duration

The duration object returned by $A.localizationService.duration.

withSuffix

Type: boolean

If true, returns value with a suffix matching the unit of the duration parameter.

## Returns

Type: String

The length of time.

## Sample Code

```

```

#### See Also

-   [duration()](atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm "Returns an object representing a length of time.")

## Code Examples

```
var dur = $A.localizationService.duration(1, 'day');
// Returns "a day"
var length = $A.localizationService.displayDuration(dur);
```

## Related Topics

- duration() (atlas.en-us.lightning.meta/lightning/ref_jsapi_AuraLocalizationService_duration.htm)
