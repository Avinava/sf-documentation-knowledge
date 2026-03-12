---
title: "UTCToWallTime()"
domain: lightning
topic: utctowalltime
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.454Z
estimatedTokens: 119
keywords: [UTCToWallTime, Converts, datetime, UTC, timezone, Sample, Code]
---

# UTCToWallTime()

> Converts a datetime from UTC to a specified timezone.

# UTCToWallTime()

Converts a datetime from UTC to a specified timezone.

## Signature

UTCToWallTime (Date date, String timezone, function callback)

## Parameters

date

Type: Date

A JavaScript Date object.

timezone

Type: String

A time zone ID based on the class, for example, "America/Los\_Angeles".

callback

Type: function

A function to call after the conversion is done. Access the converted value in the first parameter of the callback.

## Sample Code

```

```

## Code Examples

```
var format = $A.get("$Locale.timeFormat");
format = format.replace(":ss", "");
var langLocale = $A.get("$Locale.langLocale");
var timezone = $A.get("$Locale.timezone");
var date = new Date();
$A.localizationService.UTCToWallTime(date, timezone, function(walltime) {
    // Returns the local time without the seconds, for example, 9:00 PM
    displayValue = $A.localizationService.formatDateTimeUTC(walltime, format, langLocale);
})
```
