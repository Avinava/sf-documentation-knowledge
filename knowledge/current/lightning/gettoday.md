---
title: "getToday"
domain: lightning
topic: gettoday
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.552Z
estimatedTokens: 95
keywords: [getToday, today’s, date, time, zone, Sample, Code]
---

# getToday

> Gets today’s date based on a time zone.

# getToday

Gets today’s date based on a time zone.

## Signature

getToday(string timezone, function callback)

## Parameters

timezone

Type: String

A time zone ID based on the class, for example, "America/Los\_Angeles".

callback

Type: function

A function to call after the date is returned. Access the date in the first parameter of the callback.

## Sample Code

```

```

## Code Examples

```
var timezone = $A.get("$Locale.timezone");
// Returns the date string in the format "2015-11-25"
$A.localizationService.getToday(timezone, function(today){
    console.log(today);
});
```
