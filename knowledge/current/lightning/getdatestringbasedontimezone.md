---
title: "getDateStringBasedOnTimezone"
domain: lightning
topic: getdatestringbasedontimezone
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.518Z
estimatedTokens: 123
keywords: [getDateStringBasedOnTimezone, date, time, zone, Sample, Code]
---

# getDateStringBasedOnTimezone

> Gets a date string based on a time zone.

# getDateStringBasedOnTimezone

Gets a date string based on a time zone.

## Signature

getDateStringBasedOnTimezone (string timeZone, Date date, function callback)

## Parameters

timezone

Type: String

A time zone ID based on the class, for example, "America/Los\_Angeles".

date

Type: Date

A JavaScript Date object.

callback

Type: function

A function to call after the date string is returned. Access the date string in the first parameter of the callback.

## Sample Code

```

```

## Code Examples

```
var timezone = $A.get("$Locale.timezone");
var date = new Date();
// Returns the date string in the format "2015-10-9"
$A.localizationService.getDateStringBasedOnTimezone(timezone, date, function(today){
    console.log(today);
});
```
